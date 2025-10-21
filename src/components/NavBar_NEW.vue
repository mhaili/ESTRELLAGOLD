<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-wrapper">
        <!-- Logo à gauche -->
        <div class="nav-brand">
          <a href="#home" class="brand-link">
            <img :src="logoUrl" alt="Estrella Gold" class="brand-logo">
          </a>
        </div>

        <!-- Navigation au centre -->
        <div class="nav-menu" :class="{ 'active': mobileMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" @click="closeMobileMenu" class="nav-link">ACCUEIL</a>
            </li>
            <li class="nav-item">
              <a href="#about" @click="closeMobileMenu" class="nav-link">À PROPOS</a>
            </li>
            <li class="nav-item">
              <a href="#menu" @click="closeMobileMenu" class="nav-link">MENU</a>
            </li>
            <li class="nav-item">
              <a href="#gallery" @click="closeMobileMenu" class="nav-link">GALERIE</a>
            </li>
            <li class="nav-item">
              <a href="#reviews" @click="closeMobileMenu" class="nav-link">AVIS</a>
            </li>
            <li class="nav-item">
              <a href="#contact" @click="closeMobileMenu" class="nav-link">CONTACT</a>
            </li>
          </ul>
        </div>

        <!-- Bouton d'action à droite -->
        <div class="nav-actions">
          <a href="tel:+212718853356" class="action-btn">
            <svg class="phone-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            APPELER
          </a>
        </div>

        <!-- Bouton menu mobile -->
        <button class="mobile-toggle" :class="{ 'active': mobileMenuOpen }" @click="toggleMobileMenu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const logoUrl = new URL('../assets/images/logo.png', import.meta.url).href

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(42, 28, 20, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(42, 28, 20, 0.98);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  border-bottom-color: rgba(212, 175, 55, 0.2);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

/* === LOGO/BRAND === */
.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.brand-link:hover {
  transform: scale(1.02);
}

.brand-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-link:hover .brand-logo {
  transform: scale(1.05);
}

/* === NAVIGATION MENU === */
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #FF8C42, #D4AF37);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* === ACTION BUTTON === */
.nav-actions {
  flex-shrink: 0;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #FF8C42, #D4AF37);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 140, 66, 0.4);
}

.phone-icon {
  color: currentColor;
}

/* === MOBILE MENU === */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-toggle.active .hamburger-line:first-child {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active .hamburger-line:last-child {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  .nav-list {
    gap: 2rem;
  }
  
  .nav-link {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
  
  .nav-wrapper {
    height: 70px;
  }
  
  .brand-logo {
    width: 75px;
    height: 75px;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(42, 28, 20, 0.98);
    backdrop-filter: blur(20px);
    transition: all 0.3s ease;
    justify-content: flex-start;
    padding-top: 2rem;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-list {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 0 2rem;
  }
  
  .nav-item {
    width: 100%;
  }
  
  .nav-link {
    display: block;
    font-size: 1.1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-actions {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .nav-wrapper {
    height: 60px;
  }
  
  .brand-logo {
    width: 65px;
    height: 65px;
  }
}
</style>