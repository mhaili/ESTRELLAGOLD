<template>
  <section id="gallery" class="gallery-section">
    <!-- Background avec pattern -->
    <div class="pattern-background"></div>
    
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Notre Histoire</span>
        <h2 class="section-title">Estrella Gold - Café d'Exception</h2>
        <div class="section-content">
          <p class="estrella-description">
            Depuis notre ouverture au cœur d'El Manar, Marrakech, <strong>Estrella Gold</strong> s'est imposé comme une référence 
            dans l'art du café. Nous vous accueillons dans un cadre moderne et chaleureux, 
            où chaque tasse raconte une histoire de passion et d'excellence.
          </p>
          <p class="estrella-description">
            Notre équipe dévouée vous propose une expérience unique, alliant tradition marocaine et modernité, 
            dans un environnement soigneusement pensé pour votre confort et votre plaisir.
          </p>
        </div>
      </div>

      <!-- Carrousel d'images -->
      <div class="carousel-container">
        <div class="carousel-wrapper">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div 
              v-for="(image, index) in galleryImages" 
              :key="index"
              class="carousel-slide"
            >
              <div class="slide-image">
                <img :src="image.url" :alt="image.alt" loading="lazy">
                <div class="slide-overlay">
                  <h3>{{ image.title }}</h3>
                  <p>{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation du carrousel -->
        <button class="carousel-nav carousel-prev" @click="previousSlide" :disabled="currentSlide === 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button class="carousel-nav carousel-next" @click="nextSlide" :disabled="currentSlide === galleryImages.length - 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <!-- Indicateurs -->
        <div class="carousel-indicators">
          <button 
            v-for="(image, index) in galleryImages" 
            :key="index"
            :class="['indicator', { active: currentSlide === index }]"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentSlide = ref(0)

// Toutes les images du café Estrella Gold
const galleryImages = ref([
  {
    url: new URL('../assets/images/acceuil-estrella-medium.webp', import.meta.url).href,
    alt: 'Accueil Estrella Gold',
    title: 'Espace d\'Accueil',
    description: 'Un accueil chaleureux dans notre espace moderne'
  },
  {
    url: new URL('../assets/images/interior-estrella-medium.webp', import.meta.url).href,
    alt: 'Intérieur Estrella Gold',
    title: 'Ambiance Intérieure',
    description: 'Design moderne et atmosphère cosy'
  },
  {
    url: new URL('../assets/images/interior-estrella-3-medium.webp', import.meta.url).href,
    alt: 'Intérieur Estrella Gold 2',
    title: 'Espace Détente',
    description: 'Confort et élégance pour vos moments de pause'
  },
  {
    url: new URL('../assets/images/deventure-estrella-medium.webp', import.meta.url).href,
    alt: 'Devanture Estrella Gold',
    title: 'Notre Façade',
    description: 'Estrella Gold dans le quartier El Manar'
  },
  {
    url: new URL('../assets/images/deventure-2-estrella-medium.webp', import.meta.url).href,
    alt: 'Devanture Estrella Gold 2',
    title: 'Vue Extérieure',
    description: 'Un café qui se remarque à Marrakech'
  },
  {
    url: new URL('../assets/images/exterior-estrella-medium.webp', import.meta.url).href,
    alt: 'Extérieur Estrella Gold',
    title: 'Terrasse',
    description: 'Profitez du climat marocain sur notre terrasse'
  },
  {
    url: new URL('../assets/images/garden-estrella-medium.webp', import.meta.url).href,
    alt: 'Jardin Estrella Gold',
    title: 'Espace Vert',
    description: 'Un coin de verdure pour votre tranquillité'
  },
  {
    url: new URL('../assets/images/garden-2-estrella-medium.webp', import.meta.url).href,
    alt: 'Jardin Estrella Gold 2',
    title: 'Jardin Privé',
    description: 'Nature et café dans un cadre unique'
  }
])

// Navigation du carrousel
const nextSlide = () => {
  if (currentSlide.value < galleryImages.value.length - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-play
let autoPlayInterval = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (currentSlide.value < galleryImages.value.length - 1) {
      nextSlide()
    } else {
      currentSlide.value = 0
    }
  }, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.gallery-section {
  position: relative;
  padding: 6rem 0;
  background: var(--light-bg);
  overflow: hidden;
}

/* Pattern background - removed as image no longer exists */
.pattern-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.02) 25%, transparent 25%), 
              linear-gradient(-45deg, rgba(212, 175, 55, 0.02) 25%, transparent 25%);
  background-size: 40px 40px;
  opacity: 0.5;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  background: rgba(255, 140, 66, 0.1);
  color: var(--primary-color);
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 2rem;
}

.section-content {
  max-width: 800px;
  margin: 0 auto;
}

.estrella-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray);
  margin-bottom: 1.5rem;
  text-align: left;
}

.estrella-description strong {
  color: var(--primary-color);
  font-weight: 700;
}

/* Carrousel */
.carousel-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 3rem 2rem 2rem;
  text-align: center;
}

.slide-overlay h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--gold);
}

.slide-overlay p {
  font-size: 1rem;
  opacity: 0.9;
}

/* Navigation */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
}

.carousel-nav:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-nav:disabled:hover {
  transform: translateY(-50%);
}

.carousel-prev {
  left: 20px;
}

.carousel-next {
  right: 20px;
}

.carousel-nav svg {
  color: var(--primary-color);
}

/* Indicateurs */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--gold);
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
  
  .carousel-wrapper {
    height: 350px;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-prev {
    left: 10px;
  }
  
  .carousel-next {
    right: 10px;
  }
  
  .slide-overlay {
    padding: 2rem 1rem 1rem;
  }
  
  .slide-overlay h3 {
    font-size: 1.2rem;
  }
  
  .slide-overlay p {
    font-size: 0.9rem;
  }
  
  .estrella-description {
    text-align: center;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .gallery-section {
    padding: 4rem 0;
  }
  
  .carousel-wrapper {
    height: 280px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>