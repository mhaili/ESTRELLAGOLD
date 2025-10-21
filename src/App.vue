<template>
  <div id="app">
    <router-view />
    <CookieConsent />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CookieConsent from './components/CookieConsent.vue'
import { initEstrellaCookies } from './utils/cookies.js'

// Initialiser les cookies Estrella Gold
onMounted(() => {
  initEstrellaCookies()
})
</script>

<style>
/* Import design system */
@import './assets/css/design-system.css';

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

#app {
  min-height: 100vh;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

/* Selection */
::selection {
  background: var(--primary-color);
  color: white;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}

/* Loading Animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.loading {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>
