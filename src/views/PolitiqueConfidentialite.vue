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

    <!-- Contenu de la politique de confidentialité -->
    <main class="legal-content">
      <div class="container">
        <header class="page-header">
          <h1>Politique de Confidentialité</h1>
          <p class="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>
        </header>

        <div class="content-sections">
          <section class="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Estrella Gold accorde une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations 
              lorsque vous visitez notre site web ou utilisez nos services.
            </p>
            <p>
              En utilisant notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Responsable du traitement</h2>
            <div class="info-block">
              <p>
                <strong>Nom :</strong> Estrella Gold<br>
                <strong>Adresse :</strong> Lot Charaf N362 El Manar, Marrakech 40090, Maroc<br>
                <strong>Téléphone :</strong> +212 718-853356<br>
                <strong>Email :</strong> contact@estrellagold.ma
              </p>
            </div>
          </section>

          <section class="legal-section">
            <h2>3. Données collectées</h2>
            <h3>3.1 Cookies d'analyse (Google Analytics)</h3>
            <p>
              Si vous acceptez les cookies d'analyse, nous collectons automatiquement des données 
              anonymisées via Google Analytics pour comprendre l'utilisation de notre site :
            </p>
            <ul>
              <li>Pages visitées et temps passé sur chaque page</li>
              <li>Localisation géographique approximative (pays/ville)</li>
              <li>Type de navigateur et appareil utilisé</li>
              <li>Source de trafic (comment vous avez trouvé notre site)</li>
              <li>Interactions avec le contenu du site</li>
            </ul>

            <h3>3.2 Données techniques automatiques</h3>
            <p>Lors de votre visite, certaines données techniques sont automatiquement collectées :</p>
            <ul>
              <li>Adresse IP (anonymisée)</li>
              <li>Type de navigateur et système d'exploitation</li>
              <li>Date et heure de la visite</li>
              <li>Pages consultées</li>
            </ul>

            <p class="info-highlight">
              <strong>Important :</strong> Notre site web est purement informatif. Nous ne collectons 
              aucune donnée personnelle via des formulaires de contact, newsletters ou comptes utilisateurs.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Finalités du traitement</h2>
            <p>Nous utilisons vos données personnelles pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact et de renseignements</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Analyser l'utilisation de notre site web</li>
              <li>Assurer la sécurité de notre site</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Base légale du traitement</h2>
            <p>Le traitement de vos données personnelles repose sur :</p>
            <ul>
              <li><strong>Consentement :</strong> pour l'envoi de communications via les formulaires de contact</li>
              <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services et l'analyse du trafic</li>
              <li><strong>Obligation légale :</strong> pour respecter nos obligations comptables et fiscales</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>6. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons, ni ne partageons vos données personnelles avec des tiers, 
              sauf dans les cas suivants :
            </p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec nos prestataires techniques (hébergement, maintenance) sous contrat de confidentialité</li>
              <li>En cas de restructuration de notre entreprise</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>7. Durée de conservation</h2>
            <p>Nous conservons vos données personnelles pour les durées suivantes :</p>
            <ul>
              <li><strong>Données de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
              <li><strong>Cookies :</strong> selon les paramètres de votre navigateur</li>
            </ul>
            <p>
              À l'expiration de ces délais, vos données sont supprimées de manière sécurisée, 
              sauf obligation légale de conservation plus longue.
            </p>
          </section>

          <section class="legal-section">
            <h2>8. Cookies</h2>
            <p>
              Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. 
              Ces cookies ne collectent aucune information personnelle identifiable.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies, 
              mais cela pourrait affecter le fonctionnement de certaines fonctionnalités du site.
            </p>
          </section>

          <section class="legal-section">
            <h2>9. Sécurité des données</h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            <ul>
              <li>Chiffrement des communications (HTTPS)</li>
              <li>Accès limité aux données personnelles</li>
              <li>Sauvegarde régulière des données</li>
              <li>Formation de notre équipe à la protection des données</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>10. Vos droits</h2>
            <p>
              Conformément à la loi marocaine n° 09-08 relative à la protection des données personnelles, 
              vous disposez des droits suivants :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit de suppression :</strong> demander l'effacement de vos données</li>
              <li><strong>Droit de limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de portabilité :</strong> récupérer vos données dans un format structuré</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : contact@estrellagold.ma
            </p>
          </section>

          <section class="legal-section">
            <h2>11. Transferts internationaux</h2>
            <p>
              Vos données personnelles sont hébergées et traitées au Maroc. 
              Si nous devions transférer vos données vers d'autres pays, 
              nous nous assurerions que des garanties appropriées sont en place pour protéger vos données.
            </p>
          </section>

          <section class="legal-section">
            <h2>12. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment. 
              Les modifications prendront effet dès leur publication sur cette page. 
              Nous vous encourageons à consulter régulièrement cette politique.
            </p>
          </section>

          <section class="legal-section">
            <h2>13. Contact</h2>
            <div class="info-block">
              <p>
                Pour toute question concernant cette politique de confidentialité 
                ou l'exercice de vos droits, contactez-nous :
              </p>
              <p>
                <strong>Email :</strong> contact@estrellagold.ma<br>
                <strong>Téléphone :</strong> +212 718-853356<br>
                <strong>Adresse :</strong> Lot Charaf N362 El Manar, Marrakech 40090, Maroc
              </p>
            </div>
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
  margin: 1.5rem 0 1rem 0;
}

.legal-section p {
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 1rem;
}

.legal-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.legal-section li {
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 0.5rem;
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