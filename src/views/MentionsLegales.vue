<template>
  <div class="legal-page">
    <!-- Navigation simple -->
    <nav class="legal-nav">
      <div class="container">
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Retour à l'accueil
        </router-link>
        <div class="logo">
          <img :src="logoUrl" alt="Estrella Gold" class="nav-logo">
        </div>
      </div>
    </nav>

    <!-- Contenu des mentions légales -->
    <main class="legal-content">
      <div class="container">
        <header class="page-header">
          <h1>Mentions Légales</h1>
          <p class="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>
        </header>

        <div class="content-sections">
          <section class="legal-section">
            <h2>1. Informations générales</h2>
            <div class="info-block">
              <h3>Éditeur du site</h3>
              <p>
                <strong>Nom :</strong> Estrella Gold<br>
                <strong>Adresse :</strong> Lot Charaf N362 El Manar, Marrakech 40090, Maroc<br>
                <strong>Téléphone :</strong> +212 718-853356<br>
                <strong>Email :</strong> contact@estrellagold.ma
              </p>
            </div>
          </section>

          <section class="legal-section">
            <h2>2. Hébergement</h2>
            <p>
              Ce site est hébergé par [Nom de l'hébergeur]<br>
              Adresse : [Adresse de l'hébergeur]<br>
              Téléphone : [Téléphone de l'hébergeur]
            </p>
          </section>

          <section class="legal-section">
            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
              sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
              mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
              merci de bien vouloir le signaler par email à contact@estrellagold.ma en décrivant le problème de la manière la plus précise possible.
            </p>
          </section>

          <section class="legal-section">
            <h2>5. Liens hypertextes</h2>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet 
              ne sauraient engager la responsabilité d'Estrella Gold.
            </p>
            <p>
              De même, tout site web souhaitant établir un lien en direction du présent site web est tenu d'en demander l'autorisation préalable.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Données personnelles</h2>
            <p>
              Aucune information personnelle n'est collectée à votre insu sur ce site. 
              Les données personnelles que vous acceptez de transmettre via les formulaires de contact sont uniquement utilisées 
              pour répondre à votre demande et ne sont jamais transmises à des tiers.
            </p>
            <p>
              Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, 
              vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. 
              Ces cookies ne collectent aucune information personnelle et ne sont pas utilisés à des fins publicitaires.
            </p>
          </section>

          <section class="legal-section">
            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit marocain. 
              En cas de litige, et à défaut d'accord amiable, les tribunaux marocains seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </main>

    <!-- Footer simple -->
    <footer class="legal-footer">
      <div class="container">
        <div class="footer-links">
          <router-link to="/mentions-legales">Mentions Légales</router-link>
          <router-link to="/conditions-utilisation">Conditions d'Utilisation</router-link>
          <router-link to="/politique-confidentialite">Politique de Confidentialité</router-link>
        </div>
        <p>&copy; {{ currentYear }} Estrella Gold. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const logoUrl = new URL('../assets/images/logo.png', import.meta.url).href
const lastUpdated = 'Octobre 2025'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: var(--light-bg);
}

/* Navigation */
.legal-nav {
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.legal-nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--primary-dark);
}

.nav-logo {
  height: 50px;
  width: 50px;
  object-fit: contain;
}

/* Contenu */
.legal-content {
  padding: 3rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.last-updated {
  color: var(--gray);
  font-style: italic;
}

.content-sections {
  max-width: 800px;
  margin: 0 auto;
}

.legal-section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.legal-section h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
}

.legal-section h3 {
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.legal-section p {
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 1rem;
}

.info-block {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--primary-color);
}

/* Footer */
.legal-footer {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.legal-footer p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-nav .container {
    flex-direction: column;
    gap: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .legal-section {
    padding: 1.5rem;
  }

  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>