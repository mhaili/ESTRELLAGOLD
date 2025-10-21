<template>
  <section id="home" class="hero-section">
    <!-- Hero Background avec vidéo et fallback image -->
    <div class="hero-background">
      <!-- Vidéo principale -->
      <video 
        autoplay 
        muted 
        loop 
        playsinline
        class="hero-video"
        @error="handleVideoError"
        ref="heroVideo"
      >
        <source :src="videoUrl" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
      <!-- Image de fallback si la vidéo ne se charge pas -->
      <div class="hero-fallback-image" :class="{ 'active': videoError }"></div>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <!-- Titre principal -->
        <h1 class="hero-title">Votre Café d'Exception à Marrakech</h1>
        <p class="hero-subtitle">
          Découvrez l'art du café dans un cadre moderne et chaleureux au cœur d'El Manar.<br>
          Une expérience unique vous attend chez <strong>Estrella Gold</strong>.
        </p>
        
        <!-- CTA Button -->
        <div class="hero-buttons">
          <a href="#menu" class="btn btn-primary">
            Découvrir Notre Carte
          </a>
        </div>

        <!-- Informations pratiques -->
        <div class="hero-info">
          <div class="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Ouvert 7j/7 • 8h - 23h</span>
          </div>
          <div class="info-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Lot Charaf N362, El Manar, Marrakech</span>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup>
import { ref } from 'vue'

// Import de la vidéo
const videoUrl = new URL('../assets/videos/video-estrella.mp4', import.meta.url).href

// Gestion de l'erreur vidéo
const videoError = ref(false)
const heroVideo = ref(null)

const handleVideoError = () => {
  videoError.value = true
  console.log('Erreur de chargement vidéo, utilisation du fallback image')
}
</script>

<style scoped>

/* Variables couleurs Estrella Gold */
:root {
  --estrella-orange: #FF8C42;
  --estrella-gold: #D4AF37;
  --estrella-dark: #2A1810;
  --estrella-light: #FFF5E6;
  --estrella-brown: #8B4513;
}

/* === HERO SECTION === */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  z-index: 1;
}

/* Image de fallback si la vidéo ne se charge pas */
.hero-fallback-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), 
              url('../assets/images/acceuil-estrella-medium.webp');
  background-size: cover;
  background-position: center;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.hero-fallback-image.active {
  opacity: 1;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    rgba(42, 24, 16, 0.7) 0%, 
    rgba(255, 140, 66, 0.3) 50%,
    rgba(42, 24, 16, 0.7) 100%
  );
  z-index: 2;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
}

/* Logo supprimé de la hero section */

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  animation: fadeInUp 1s ease-out 0.6s backwards;
}

.hero-subtitle strong {
  color: var(--estrella-gold);
  font-weight: 600;
}

.hero-buttons {
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.9s backwards;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(135deg, var(--estrella-orange), var(--estrella-gold));
  color: white;
  box-shadow: 0 4px 20px rgba(255, 140, 66, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 140, 66, 0.5);
}

.hero-info {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  animation: fadeIn 1s ease-out 1.2s backwards;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.info-item svg {
  color: var(--estrella-gold);
  flex-shrink: 0;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 968px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .brand-name, .brand-gold {
    font-size: 2rem;
  }
  
  .hero-logo {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 90vh;
    padding-top: 100px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .brand-name, .brand-gold {
    font-size: 1.6rem;
  }
  
  .hero-logo {
    width: 50px;
    height: 50px;
  }
  
  .hero-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .info-item {
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-content {
    padding: 1rem;
  }
}



</style>
