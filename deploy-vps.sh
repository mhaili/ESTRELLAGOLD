# Script de déploiement pour VPS

#!/bin/bash

# Variables
DOMAIN="51.91.76.228"
PROJECT_DIR="/var/www/estrellagold"
GITHUB_REPO="https://github.com/mhaili/ESTRELLAGOLD.git"

echo "Déploiement d'Estrella Gold sur VPS..."

# Installer les dépendances si pas déjà fait
if ! command -v node &> /dev/null; then
    echo "Installation de Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

if ! command -v nginx &> /dev/null; then
    echo "Installation de Nginx..."
    sudo apt update
    sudo apt install -y nginx
fi

# Créer le répertoire du projet
sudo mkdir -p $PROJECT_DIR
sudo chown $USER:$USER $PROJECT_DIR

# Cloner ou mettre à jour le repo
if [ -d "$PROJECT_DIR/.git" ]; then
    echo "Mise à jour du code..."
    cd $PROJECT_DIR
    git pull origin main
else
    echo "Clonage du repository..."
    git clone $GITHUB_REPO $PROJECT_DIR
    cd $PROJECT_DIR
fi

# Installer les dépendances et builder
echo "Installation des dépendances..."
npm install

echo "Build de production..."
npm run build

# Configuration Nginx
sudo tee /etc/nginx/sites-available/estrellagold > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    
    root $PROJECT_DIR/dist;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
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
    }
}
EOF

# Activer le site
sudo ln -sf /etc/nginx/sites-available/estrellagold /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Tester la configuration Nginx
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Configurer le firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

echo "Déploiement terminé !"
echo "Votre site est accessible sur : http://$DOMAIN"
echo ""
echo "Commandes utiles :"
echo "  - Redéployer : cd $PROJECT_DIR && git pull && npm run build && sudo systemctl reload nginx"
echo "  - Logs Nginx : sudo tail -f /var/log/nginx/error.log"
echo "  - Status Nginx : sudo systemctl status nginx"