import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import ConditionsUtilisation from '../views/ConditionsUtilisation.vue'
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mentions-legales',
    name: 'MentionsLegales',
    component: MentionsLegales,
    meta: {
      title: 'Mentions Légales - Estrella Gold'
    }
  },
  {
    path: '/conditions-utilisation',
    name: 'ConditionsUtilisation', 
    component: ConditionsUtilisation,
    meta: {
      title: 'Conditions d\'Utilisation - Estrella Gold'
    }
  },
  {
    path: '/politique-confidentialite',
    name: 'PolitiqueConfidentialite',
    component: PolitiqueConfidentialite,
    meta: {
      title: 'Politique de Confidentialité - Estrella Gold'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Mettre à jour le titre de page
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Estrella Gold - Café à Marrakech'
  }
  next()
})

export default router