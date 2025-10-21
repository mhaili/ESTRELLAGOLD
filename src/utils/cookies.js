// Utility functions pour gérer les cookies spécifiques à Estrella Gold

// Fonction pour définir un cookie
export function setCookie(name, value, days = 30) {
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

// Fonction pour lire un cookie
export function getCookie(name) {
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// Fonction pour supprimer un cookie
export function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

// Cookies spécifiques pour Estrella Gold
export const EstrellaCookies = {
  
  // Préférences d'affichage
  setViewPreference(preference) {
    setCookie('estrella_view_pref', preference, 90) // 3 mois
  },
  
  getViewPreference() {
    return getCookie('estrella_view_pref') || 'default'
  },
  
  // Dernière visite
  setLastVisit() {
    setCookie('estrella_last_visit', new Date().toISOString(), 365) // 1 an
  },
  
  getLastVisit() {
    const lastVisit = getCookie('estrella_last_visit')
    return lastVisit ? new Date(lastVisit) : null
  },
  
  // Nombre de visites
  incrementVisitCount() {
    const currentCount = parseInt(getCookie('estrella_visit_count') || '0')
    setCookie('estrella_visit_count', (currentCount + 1).toString(), 365)
    return currentCount + 1
  },
  
  getVisitCount() {
    return parseInt(getCookie('estrella_visit_count') || '0')
  },
  
  // Page préférée (la plus visitée)
  trackPageVisit(pageName) {
    const visits = JSON.parse(getCookie('estrella_page_visits') || '{}')
    visits[pageName] = (visits[pageName] || 0) + 1
    setCookie('estrella_page_visits', JSON.stringify(visits), 90)
  },
  
  getFavoritePages() {
    const visits = JSON.parse(getCookie('estrella_page_visits') || '{}')
    return Object.entries(visits)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([page, count]) => ({ page, count }))
  },
  
  // Menu préféré 
  setFavoriteMenuSection(section) {
    setCookie('estrella_fav_menu', section, 90)
  },
  
  getFavoriteMenuSection() {
    return getCookie('estrella_fav_menu')
  },
  
  // Heure de visite préférée
  trackVisitTime() {
    const hour = new Date().getHours()
    const visits = JSON.parse(getCookie('estrella_visit_hours') || '{}')
    visits[hour] = (visits[hour] || 0) + 1
    setCookie('estrella_visit_hours', JSON.stringify(visits), 90)
  },
  
  getPreferredVisitTime() {
    const visits = JSON.parse(getCookie('estrella_visit_hours') || '{}')
    const maxHour = Object.entries(visits)
      .reduce((max, [hour, count]) => count > (visits[max] || 0) ? hour : max, '12')
    
    if (parseInt(maxHour) < 12) return 'Matin'
    else if (parseInt(maxHour) < 17) return 'Après-midi'
    else return 'Soir'
  },
  
  // Message de bienvenue personnalisé
  shouldShowWelcomeMessage() {
    const visitCount = this.getVisitCount()
    const lastWelcome = getCookie('estrella_last_welcome')
    const today = new Date().toDateString()
    
    // Première visite
    if (visitCount === 1) return { type: 'first', message: 'Bienvenue chez Estrella Gold ! 🌟' }
    
    // Visiteur régulier (plus de 5 visites)
    if (visitCount > 5 && lastWelcome !== today) {
      setCookie('estrella_last_welcome', today, 1)
      return { type: 'regular', message: `Content de vous revoir ! C'est votre ${visitCount}ème visite 😊` }
    }
    
    return null
  },
  
  // Recommandations basées sur l'heure
  getTimeBasedRecommendation() {
    const hour = new Date().getHours()
    
    if (hour >= 6 && hour < 11) {
      return {
        period: 'Petit-déjeuner',
        recommendation: 'Découvrez nos délicieux ftours marocains !',
        items: ['Ftour Continental', 'Ftour Fassi', 'Café Latte']
      }
    } else if (hour >= 11 && hour < 15) {
      return {
        period: 'Déjeuner',
        recommendation: 'Parfait pour une pause déjeuner !',
        items: ['Smoothies', 'Jus d\'orange frais', 'Café Allongé']
      }
    } else if (hour >= 15 && hour < 18) {
      return {
        period: 'Goûter',
        recommendation: 'L\'heure du goûter !',
        items: ['Cheesecake maison', 'Tiramisu', 'Cappuccino']
      }
    } else {
      return {
        period: 'Soirée',
        recommendation: 'Détendez-vous en soirée !',
        items: ['Thé à la menthe', 'Chocolat chaud', 'Milkshake']
      }
    }
  }
}

// Initialisation automatique
export function initEstrellaCookies() {
  // Incrémenter le compteur de visites
  EstrellaCookies.incrementVisitCount()
  
  // Mettre à jour la dernière visite
  EstrellaCookies.setLastVisit()
  
  // Tracker l'heure de visite
  EstrellaCookies.trackVisitTime()
  
  // Afficher un message de bienvenue si nécessaire
  const welcomeMessage = EstrellaCookies.shouldShowWelcomeMessage()
  if (welcomeMessage) {
    console.log('🌟 Estrella Gold:', welcomeMessage.message)
    
    // Vous pouvez afficher une notification toast ici
    showWelcomeToast(welcomeMessage)
  }
}

// Fonction pour afficher un toast de bienvenue
function showWelcomeToast(welcome) {
  // Créer un toast personnalisé
  const toast = document.createElement('div')
  toast.className = 'estrella-welcome-toast'
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">☕</div>
      <div class="toast-message">${welcome.message}</div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `
  
  // Styles inline pour le toast
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #DD9933, #B8791F);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 10000;
    max-width: 350px;
    animation: slideInRight 0.5s ease;
  `
  
  // Ajouter les styles d'animation
  if (!document.getElementById('estrella-toast-styles')) {
    const styles = document.createElement('style')
    styles.id = 'estrella-toast-styles'
    styles.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .toast-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .toast-icon {
        font-size: 1.5rem;
      }
      .toast-message {
        flex: 1;
        font-weight: 600;
      }
      .toast-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .toast-close:hover {
        background: rgba(255,255,255,0.2);
      }
    `
    document.head.appendChild(styles)
  }
  
  document.body.appendChild(toast)
  
  // Auto-supprimer après 5 secondes
  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove()
    }
  }, 5000)
}