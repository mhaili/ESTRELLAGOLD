#!/bin/bash

# Script de configuration automatique pour VPS OVH
# Installation complète pour héberger Estrella Gold

echo "Configuration du VPS pour Estrella Gold..."
echo "================================================"

# Variables
DOMAIN="51.91.76.228"
PROJECT_DIR="/var/www/estrellagold"
GITHUB_REPO="https://github.com/mhaili/ESTRELLAGOLD.git"
USER=$(whoami)

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier si on est root ou si on a sudo
if [ "$EUID" -eq 0 ]; then
    SUDO=""
else
    SUDO="sudo"
fi

# 1. Mise à jour du système
print_status "Mise à jour du système..."
$SUDO apt update && $SUDO apt upgrade -y

# 2. Installation des outils de base
print_status "Installation des outils de base..."
$SUDO apt install -y curl wget git unzip software-properties-common

# 3. Installation de Node.js 20
print_status "Installation de Node.js 20..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | $SUDO -E bash -
    $SUDO apt-get install -y nodejs
    print_success "Node.js installé : $(node --version)"
else
    print_success "Node.js déjà installé : $(node --version)"
fi

# 4. Installation de Nginx
print_status "Installation de Nginx..."
if ! command -v nginx &> /dev/null; then
    $SUDO apt install -y nginx
    $SUDO systemctl enable nginx
    print_success "Nginx installé"
else
    print_success "Nginx déjà installé"
fi

# 5. Configuration du firewall
print_status "Configuration du firewall..."
$SUDO ufw allow OpenSSH
$SUDO ufw allow 'Nginx Full'
$SUDO ufw --force enable

# 6. Création du répertoire du projet
print_status "Configuration du répertoire projet..."
$SUDO mkdir -p $PROJECT_DIR
$SUDO chown $USER:$USER $PROJECT_DIR

# 7. Clonage du repository
print_status "Clonage du repository GitHub..."
if [ -d "$PROJECT_DIR/.git" ]; then
    print_warning "Repository déjà cloné, mise à jour..."
    cd $PROJECT_DIR
    git pull origin main
else
    git clone $GITHUB_REPO $PROJECT_DIR
    cd $PROJECT_DIR
fi

# 8. Installation des dépendances et build
print_status "Installation des dépendances..."
npm install

print_status "Build de production..."
npm run build

# 9. Configuration Nginx
print_status "Configuration de Nginx..."
$SUDO tee /etc/nginx/sites-available/estrellagold > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN;
    
    root $PROJECT_DIR/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        image/svg+xml;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Cache HTML with shorter expiry
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public";
    }
    
    # Handle Vue.js routes (SPA)
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Security: deny access to sensitive files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    location ~ /\.git {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Handle API requests (si vous en ajoutez plus tard)
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# 10. Activation du site
print_status "Activation du site Nginx..."
$SUDO ln -sf /etc/nginx/sites-available/estrellagold /etc/nginx/sites-enabled/
$SUDO rm -f /etc/nginx/sites-enabled/default

# 11. Test de la configuration Nginx
print_status "Test de la configuration Nginx..."
if $SUDO nginx -t; then
    print_success "Configuration Nginx valide"
    $SUDO systemctl restart nginx
else
    print_error "Erreur dans la configuration Nginx"
    exit 1
fi

# 12. Installation de Certbot pour SSL
print_status "Installation de Certbot pour SSL..."
$SUDO apt install -y certbot python3-certbot-nginx

# 13. Création d'un script de redéploiement
print_status "Création du script de redéploiement..."
cat > $PROJECT_DIR/redeploy.sh << 'EOF'
#!/bin/bash
cd /var/www/estrellagold
echo "🔄 Redéploiement d'Estrella Gold..."
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "✅ Redéploiement terminé !"
EOF

chmod +x $PROJECT_DIR/redeploy.sh

# 14. Configuration des logs
print_status "Configuration des logs..."
$SUDO mkdir -p /var/log/estrellagold
$SUDO chown www-data:www-data /var/log/estrellagold

# 15. Informations finales
echo ""
echo "🎉 CONFIGURATION TERMINÉE !"
echo "=========================="
echo ""
print_success "Votre site Estrella Gold est maintenant en ligne !"
echo ""
echo "🌐 URL : http://$DOMAIN"
echo "📁 Répertoire : $PROJECT_DIR"
echo "🔄 Redéployer : cd $PROJECT_DIR && ./redeploy.sh"
echo ""
echo "📋 Commandes utiles :"
echo "  - Status Nginx : sudo systemctl status nginx"
echo "  - Logs Nginx : sudo tail -f /var/log/nginx/error.log"
echo "  - Logs site : sudo tail -f /var/log/nginx/access.log"
echo "  - Redémarrer Nginx : sudo systemctl restart nginx"
echo ""
echo "🔒 Pour activer SSL (HTTPS) :"
echo "  sudo certbot --nginx -d $DOMAIN"
echo ""
print_warning "N'oubliez pas de configurer SSL une fois que vous aurez un nom de domaine !"