<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <div class="cookie-text">
        <h4>Cookies et Analytics</h4>
        <p>
          Ce site utilise des cookies d'analyse (Google Analytics) pour comprendre 
          comment vous utilisez notre site et l'améliorer. Aucune donnée personnelle n'est collectée.
        </p>
      </div>
      <div class="cookie-actions">
        <button @click="acceptAnalytics" class="btn-accept">
          Accepter Analytics
        </button>
        <button @click="rejectAnalytics" class="btn-reject">
          Refuser
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showBanner = ref(false)
const analyticsAccepted = ref(false)

// Vérifier si l'utilisateur a déjà fait son choix
onMounted(() => {
  const consent = localStorage.getItem('analytics-consent')
  if (!consent) {
    showBanner.value = true
  } else {
    const accepted = JSON.parse(consent)
    analyticsAccepted.value = accepted
    if (accepted) {
      initGoogleAnalytics()
    }
  }
})

// Accepter Google Analytics
const acceptAnalytics = () => {
  analyticsAccepted.value = true
  localStorage.setItem('analytics-consent', 'true')
  localStorage.setItem('analytics-consent-date', new Date().toISOString())
  initGoogleAnalytics()
  showBanner.value = false
}

// Refuser Google Analytics
const rejectAnalytics = () => {
  analyticsAccepted.value = false
  localStorage.setItem('analytics-consent', 'false')
  localStorage.setItem('analytics-consent-date', new Date().toISOString())
  showBanner.value = false
}

// Initialiser Google Analytics (remplacez par votre vrai ID quand vous en aurez un)
const initGoogleAnalytics = () => {
  // Pour l'instant, juste un exemple. Quand vous aurez un ID Google Analytics :
  // const GA_ID = 'G-VOTRE-ID-ANALYTICS'
  
  console.log('Google Analytics initialisé (mode démo)')
  
  // Exemple avec un vrai ID Google Analytics :
  /*
  const GA_ID = 'G-VOTRE-ID-ANALYTICS'
  
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script1)
  
  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', {
      anonymize_ip: true,
      cookie_expires: 63072000
    });
  `
  document.head.appendChild(script2)
  */
}

// Exposer une fonction globale pour gérer les cookies
window.manageCookies = () => {
  showBanner.value = true
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  border-top: 3px solid var(--primary-color);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.cookie-text h4 {
  margin: 0 0 0.5rem 0;
  color: var(--dark);
  font-size: 1.1rem;
}

.cookie-text p {
  margin: 0;
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.5;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.cookie-actions button {
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-accept {
  background: var(--primary-color);
  color: white;
}

.btn-accept:hover {
  background: var(--primary-dark);
}

.btn-preferences {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-preferences:hover {
  background: var(--primary-color);
  color: white;
}

.btn-reject {
  background: #f5f5f5;
  color: var(--text-color);
}

.btn-reject:hover {
  background: #e0e0e0;
}

/* Modal des préférences */
.cookie-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.cookie-modal {
  background: white;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: var(--dark);
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 1.5rem;
}

.cookie-category {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.cookie-category:last-child {
  border-bottom: none;
}

.cookie-category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.cookie-category h4 {
  margin: 0;
  color: var(--dark);
  font-size: 1rem;
}

.required {
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.cookie-category p {
  margin: 0;
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Toggle Switch */
.toggle {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.modal-actions {
  padding: 1.5rem;
  border-top: 1px solid #eee;
  text-align: right;
}

.btn-save {
  background: var(--primary-color);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-save:hover {
  background: var(--primary-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .cookie-actions {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .cookie-modal-overlay {
    padding: 1rem;
  }
  
  .cookie-category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>