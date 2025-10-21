<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Notre Histoire</span>
        <h2 class="section-title">Bienvenue à Estrella Gold</h2>
        <p class="section-subtitle">
          Un café moderne au cœur de Marrakech, où tradition et excellence se rencontrent.<br>
          Découvrez un espace unique alliant confort, qualité et authenticité.
        </p>
      </div>

      <div class="about-content">
        <!-- Colonne gauche - Features -->
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="feature-icon">
              <svg :width="feature.iconSize" :height="feature.iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="feature.iconPath"></path>
              </svg>
            </div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Colonne droite - Images -->
        <div class="images-grid">
          <div class="image-card main-image">
            <img :src="interiorImage" alt="Intérieur Estrella Gold" loading="lazy">
            <div class="image-overlay">
              <span class="image-label">Notre Espace Intérieur</span>
            </div>
          </div>
          <div class="image-card">
            <img :src="gardenImage" alt="Jardin Estrella Gold" loading="lazy">
            <div class="image-overlay">
              <span class="image-label">Notre Jardin</span>
            </div>
          </div>
          <div class="image-card">
            <img :src="exteriorImage" alt="Devanture Estrella Gold" loading="lazy">
            <div class="image-overlay">
              <span class="image-label">Notre Devanture</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="stat-content">
            <h4>Ouvert 7j/7</h4>
            <p>De 8h à 23h</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="stat-content">
            <h4>El Manar</h4>
            <p>Lot Charaf N362, Marrakech</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div class="stat-content">
            <h4>4.1/5 sur Google</h4>
            <p>Excellence reconnue</p>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="stat-content">
            <h4>Service Chaleureux</h4>
            <p>Équipe professionnelle</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const interiorImage = new URL('../assets/images/interior-estrella-medium.webp', import.meta.url).href
const gardenImage = new URL('../assets/images/garden-estrella-medium.webp', import.meta.url).href
const exteriorImage = new URL('../assets/images/deventure-estrella-medium.webp', import.meta.url).href

const features = ref([
  {
    id: 1,
    iconSize: 40,
    iconPath: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3',
    title: 'Café d\'Excellence',
    description: 'Des cafés soigneusement sélectionnés et préparés par nos baristas passionnés pour une expérience gustative unique.'
  },
  {
    id: 2,
    iconSize: 40,
    iconPath: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    title: 'Ambiance Moderne',
    description: 'Un espace contemporain et chaleureux, parfait pour se détendre, travailler ou rencontrer des amis dans un cadre unique.'
  },
  {
    id: 3,
    iconSize: 40,
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'Variété de Produits',
    description: 'Une large sélection de boissons chaudes et froides, pâtisseries maison et snacks de qualité pour tous les goûts.'
  },
  {
    id: 4,
    iconSize: 40,
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Qualité Garantie',
    description: 'Nous sélectionnons rigoureusement nos produits pour vous offrir une qualité irréprochable à chaque visite.'
  }
])
</script>

<style scoped>
.about-section {
  padding: 6rem 0;
  background: linear-gradient(to bottom, #FAFAFA, #ffffff);
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-badge {
  display: inline-block;
  background: rgba(255, 140, 66, 0.1);
  color: var(--primary-color);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 5rem;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.feature-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon svg {
  color: white;
}

.feature-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: var(--gray);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Images Grid */
.images-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  height: fit-content;
}

.image-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

.main-image {
  grid-column: 1 / -1;
  height: 300px;
}

.image-card:not(.main-image) {
  height: 200px;
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-card:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-label {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}

.stat-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: rgba(255, 140, 66, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon svg {
  color: var(--primary-color);
}

.stat-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.25rem;
}

.stat-content p {
  color: var(--gray);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .images-grid {
    order: -1;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .about-content {
    margin-bottom: 3rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .images-grid {
    grid-template-columns: 1fr;
  }

  .main-image {
    grid-column: 1;
  }
}
</style>
