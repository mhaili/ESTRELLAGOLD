<template>
  <section id="reviews" class="reviews-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Témoignages</span>
        <h2 class="section-title">Ce que disent nos clients</h2>
        <p class="section-subtitle">
          Découvrez les avis de nos clients fidèles qui reviennent<br>
          pour l'ambiance, le café et le service d'Estrella Gold.
        </p>
      </div>

      <!-- Google Rating -->
      <div class="google-rating">
        <div class="rating-card">
          <svg class="google-logo" width="92" height="30" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
            <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
            <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
            <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c9.66 0 16.7 3.85 21.09 8.4l-6.05 6.05c-3.85-3.85-9.05-6.72-15.04-6.72-12.36 0-22.1 10.01-22.1 22.5s9.74 22.5 22.1 22.5c8.08 0 12.68-3.19 15.63-6.14 2.52-2.52 4.17-6.14 4.84-11.09h-20.47z"/>
          </svg>
          <div class="rating-stars">
            <div class="stars">
              <svg v-for="n in 4" :key="n" width="28" height="28" viewBox="0 0 24 24" fill="#FFB800" stroke="#FFB800">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFB800" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span class="rating-score">4.1 / 5</span>
          </div>
          <p class="rating-count">Basé sur plus de 50 avis Google</p>
        </div>
      </div>

      <!-- Reviews Grid -->
      <div class="reviews-grid">
        <div 
          v-for="review in reviews" 
          :key="review.id"
          class="review-card"
        >
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h4 class="reviewer-name">{{ review.name }}</h4>
                <p class="review-date">{{ review.date }}</p>
              </div>
            </div>
            <div class="review-stars">
              <svg 
                v-for="n in 5" 
                :key="n" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                :fill="n <= review.rating ? '#FFB800' : 'none'" 
                :stroke="n <= review.rating ? '#FFB800' : '#ddd'"
                stroke-width="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-footer">
            <span class="review-source">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Google
            </span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="reviews-cta">
        <h3>Partagez votre expérience</h3>
        <p>Votre avis compte pour nous et aide d'autres clients à nous découvrir</p>
        <a href="https://www.google.com/search?q=estrella+gold+marrakech" target="_blank" class="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Laisser un avis
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const reviews = ref([
  {
    id: 1,
    name: 'Mohammed Alami',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: 'Excellent café ! L\'ambiance est très agréable, le personnel est accueillant et professionnel. Le café est délicieux et les prix sont très raisonnables. Je recommande vivement !',
    source: 'google'
  },
  {
    id: 2,
    name: 'Sarah Benjelloun',
    date: 'Il y a 1 mois',
    rating: 5,
    text: 'Un endroit parfait pour travailler ou se détendre. Le wifi est rapide, l\'espace est moderne et confortable. Leur cappuccino est le meilleur de Marrakech !',
    source: 'google'
  },
  {
    id: 3,
    name: 'Karim El Idrissi',
    date: 'Il y a 1 mois',
    rating: 4,
    text: 'Très bon café avec un jardin magnifique. Le service est rapide et courtois. Seul petit bémol, il peut y avoir beaucoup de monde le weekend.',
    source: 'google'
  },
  {
    id: 4,
    name: 'Fatima Zahra',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Mon café préféré à El Manar ! L\'intérieur est magnifique, tout est propre et bien entretenu. Les boissons sont excellentes et le personnel très sympathique.',
    source: 'google'
  },
  {
    id: 5,
    name: 'Youssef Tazi',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Cadre moderne et chaleureux. Idéal pour les réunions professionnelles ou entre amis. La qualité du café est exceptionnelle, on sent la passion dans chaque tasse.',
    source: 'google'
  },
  {
    id: 6,
    name: 'Leila Mansouri',
    date: 'Il y a 3 mois',
    rating: 4,
    text: 'Super café avec une belle terrasse. Les pâtisseries sont délicieuses. C\'est devenu mon spot préféré pour le petit déjeuner du dimanche !',
    source: 'google'
  }
])
</script>

<style scoped>
.reviews-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #FAFAFA 0%, #ffffff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
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
}

/* Google Rating */
.google-rating {
  margin-bottom: 4rem;
}

.rating-card {
  background: white;
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.google-logo {
  height: 40px;
  margin-bottom: 1.5rem;
}

.rating-stars {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.stars {
  display: flex;
  gap: 0.25rem;
}

.rating-score {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark);
}

.rating-count {
  margin-top: 1rem;
  color: var(--gray);
  font-size: 0.95rem;
}

/* Reviews Grid */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.review-card {
  background: white;
  padding: 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-left-color: var(--primary-color);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.reviewer-info {
  display: flex;
  gap: 1rem;
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.reviewer-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.25rem;
}

.review-date {
  font-size: 0.85rem;
  color: var(--gray);
}

.review-stars {
  display: flex;
  gap: 0.25rem;
}

.review-text {
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.review-footer {
  display: flex;
  justify-content: flex-end;
}

.review-source {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-light);
  font-size: 0.85rem;
}

/* CTA */
.reviews-cta {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  border-radius: var(--radius-lg);
  color: white;
}

.reviews-cta h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.reviews-cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.reviews-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: white;
  color: var(--primary-color);
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.reviews-cta .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .reviews-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .rating-card {
    padding: 2rem;
  }

  .rating-score {
    font-size: 2rem;
  }

  .reviews-cta h3 {
    font-size: 1.5rem;
  }

  .reviews-cta p {
    font-size: 1rem;
  }
}
</style>
