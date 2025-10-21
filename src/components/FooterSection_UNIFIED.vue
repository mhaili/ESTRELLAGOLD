<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Column 1: About -->
        <div class="footer-column">
          <div class="footer-logo">
            <img :src="logoUrl" alt="Estrella Gold" class="logo-img">
          </div>
          <p class="footer-description">
            Votre café de référence à Marrakech. Un espace moderne où tradition et excellence se rencontrent pour vous offrir les meilleurs moments autour d'un café.
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/Estrellagoldmarrakech" target="_blank" class="social-link facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/estrellagoldmarrakech/" target="_blank" class="social-link instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://wa.me/212718853356" target="_blank" class="social-link whatsapp" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Navigation -->
        <div class="footer-column">
          <h3 class="footer-title">Navigation</h3>
          <ul class="footer-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#menu">Notre Menu</a></li>
            <li><a href="#gallery">Galerie</a></li>
            <li><a href="#reviews">Avis Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: Informations Légales -->
        <div class="footer-column">
          <h3 class="footer-title">Informations Légales</h3>
          <ul class="footer-links">
            <li><router-link to="/mentions-legales">Mentions Légales</router-link></li>
            <li><router-link to="/conditions-utilisation">Conditions d'Utilisation</router-link></li>
            <li><router-link to="/politique-confidentialite">Politique de Confidentialité</router-link></li>
          </ul>
        </div>

        <!-- Column 4: Horaires -->
        <div class="footer-column">
          <h3 class="footer-title">Horaires</h3>
          <ul class="footer-schedule">
            <li>
              <span class="day">Lundi - Vendredi</span>
              <span class="time">8:00 - 23:00</span>
            </li>
            <li>
              <span class="day">Samedi</span>
              <span class="time">8:00 - 23:00</span>
            </li>
            <li>
              <span class="day">Dimanche</span>
              <span class="time">8:00 - 23:00</span>
            </li>
          </ul>
          <div class="footer-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            Ouvert 7j/7
          </div>
        </div>

        <!-- Column 5: Contact -->
        <div class="footer-column">
          <h3 class="footer-title">Contact</h3>
          <ul class="footer-contact">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Lot Charaf N362 El Manar<br>Marrakech 40090, Maroc</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <a href="tel:+212718853356">+212 718-853356</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:contact@estrellagold.ma">contact@estrellagold.ma</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Estrella Gold. Tous droits réservés.
        </p>
        <div class="footer-bottom-links">
          <router-link to="/mentions-legales">Mentions légales</router-link>
          <span>•</span>
          <router-link to="/politique-confidentialite">Politique de confidentialité</router-link>
          <span>•</span>
          <router-link to="/conditions-utilisation">Conditions d'utilisation</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const logoUrl = new URL('../assets/images/logo.png', import.meta.url).href
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark-light) 100%);
  color: white;
  padding: 4rem 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Footer Logo */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link.facebook:hover {
  background: #1877F2;
}

.social-link.instagram:hover {
  background: linear-gradient(45deg, #F58529, #DD2A7B, #8134AF);
}

.social-link.whatsapp:hover {
  background: #25D366;
}

/* Footer Columns */
.footer-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

/* Schedule */
.footer-schedule {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.footer-schedule li {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}

.footer-schedule .day {
  color: rgba(255, 255, 255, 0.7);
}

.footer-schedule .time {
  color: var(--primary-color);
  font-weight: 600;
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
}

.footer-badge svg {
  color: white;
}

/* Contact */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-contact svg {
  flex-shrink: 0;
  color: var(--primary-color);
  margin-top: 0.2rem;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--primary-color);
}

/* Bottom Bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.copyright {
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-bottom-links a,
.footer-bottom-links .router-link-active {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover,
.footer-bottom-links .router-link-active:hover {
  color: var(--primary-color);
}

/* Responsive */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
