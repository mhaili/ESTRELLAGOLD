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

    <!-- Contenu des conditions d'utilisation -->
    <main class="legal-content">
      <div class="container">
        <header class="page-header">
          <h1>Conditions d'Utilisation</h1>
          <p class="last-updated">Dernière mise à jour : {{ lastUpdated }}</p>
        </header>

        <div class="content-sections">
          <section class="legal-section">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions 
              d'utilisation du site web d'Estrella Gold, accessible à l'adresse [votre-domaine.com].
            </p>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. 
              Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
            </p>
          </section>

          <section class="legal-section">
            <h2>2. Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur ayant un accès à Internet. 
              Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) 
              sont à sa charge.
            </p>
            <p>
              Estrella Gold se réserve le droit de refuser l'accès au site, unilatéralement et sans notification préalable, 
              à tout utilisateur ne respectant pas les présentes conditions d'utilisation.
            </p>
          </section>

          <section class="legal-section">
            <h2>3. Utilisation du site</h2>
            <p>Le site et ses services sont destinés à :</p>
            <ul>
              <li>Présenter les services et l'activité d'Estrella Gold</li>
              <li>Afficher les menus et tarifs du café</li>
              <li>Permettre aux clients de nous contacter</li>
              <li>Partager des informations sur notre établissement</li>
            </ul>
            <p>
              L'utilisateur s'engage à utiliser le site de manière loyale, conformément à sa destination et aux présentes conditions d'utilisation.
            </p>
          </section>

          <section class="legal-section">
            <h2>4. Obligations de l'utilisateur</h2>
            <p>L'utilisateur s'interdit expressément :</p>
            <ul>
              <li>D'utiliser le site à des fins commerciales, publicitaires ou politiques</li>
              <li>De porter atteinte aux droits de propriété intellectuelle d'Estrella Gold</li>
              <li>De diffuser des contenus illégaux, diffamatoires, injurieux ou contraires à l'ordre public</li>
              <li>De perturber le bon fonctionnement du site</li>
              <li>De tenter d'accéder aux parties non publiques du site</li>
              <li>D'utiliser des robots, scripts ou autres moyens automatisés pour accéder au site</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>5. Contenu du site</h2>
            <p>
              Estrella Gold s'efforce de maintenir des informations aussi précises que possible sur le site. 
              Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur le site.
            </p>
            <p>
              En particulier, les prix, menus et disponibilités affichés sur le site sont donnés à titre indicatif 
              et peuvent être modifiés sans préavis. Il est recommandé de nous contacter pour confirmer ces informations.
            </p>
          </section>

          <section class="legal-section">
            <h2>6. Disponibilité du site</h2>
            <p>
              Estrella Gold s'efforce d'assurer au mieux de ses possibilités, la continuité et la qualité du site. 
              Cependant, le site peut être temporairement indisponible en raison de maintenance ou de problèmes techniques.
            </p>
            <p>
              Estrella Gold ne saurait être tenu responsable des dommages de toute nature qui pourraient résulter 
              de l'indisponibilité du site ou de l'utilisation du site.
            </p>
          </section>

          <section class="legal-section">
            <h2>7. Liens externes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites web (réseaux sociaux, partenaires, etc.). 
              Estrella Gold n'exerce aucun contrôle sur ces sites externes et ne saurait être tenu responsable 
              de leur contenu ou de leur politique de confidentialité.
            </p>
          </section>

          <section class="legal-section">
            <h2>8. Protection des données</h2>
            <p>
              Les informations personnelles collectées via le site sont traitées conformément à notre 
              <router-link to="/politique-confidentialite" class="inline-link">Politique de Confidentialité</router-link>.
            </p>
            <p>
              En utilisant le site, vous acceptez la collecte et l'utilisation de vos informations 
              dans les conditions décrites dans notre politique de confidentialité.
            </p>
          </section>

          <section class="legal-section">
            <h2>9. Modification des conditions</h2>
            <p>
              Estrella Gold se réserve le droit de modifier les présentes conditions d'utilisation à tout moment. 
              Les conditions modifiées prennent effet dès leur publication sur le site.
            </p>
            <p>
              Il est de la responsabilité de l'utilisateur de consulter régulièrement les conditions d'utilisation 
              pour prendre connaissance des éventuelles modifications.
            </p>
          </section>

          <section class="legal-section">
            <h2>10. Droit applicable et juridiction</h2>
            <p>
              Les présentes conditions d'utilisation sont régies par le droit marocain. 
              En cas de litige, et après tentative de résolution amiable, les tribunaux de Marrakech seront seuls compétents.
            </p>
          </section>

          <section class="legal-section">
            <h2>11. Contact</h2>
            <div class="info-block">
              <p>
                Pour toute question concernant ces conditions d'utilisation, vous pouvez nous contacter :
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

.inline-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.inline-link:hover {
  text-decoration: underline;
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