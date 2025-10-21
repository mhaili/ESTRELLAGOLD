<template>
  <section id="menu" class="menu-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Notre Carte</span>
        <h2 class="section-title">Menu Estrella Gold</h2>
        <p class="section-subtitle">
          Découvrez notre sélection de boissons et mets préparés avec passion.<br>
          Des saveurs authentiques dans un cadre d'exception à Marrakech.
        </p>
      </div>

      <!-- Produit Star - Gold Pistachio Latte -->
      <div class="star-product">
        <div class="star-content">
          <div class="star-text">
            <div class="star-badge"> PRODUIT STAR </div>
            <h3 class="star-title">Gold Pistachio Latte</h3>
            <p class="star-description">
              Notre signature exclusive ! Un café au lait onctueux sublimé par notre sirop de pistache maison, 
              couronné d'une délicate chantilly verte et saupoudré de poudre de pistache. 
              Une création unique qui marie tradition orientale et modernité, servie dans nos tasses dorées signature. 
              Un véritable voyage gustatif qui fait la renommée d'Estrella Gold à Marrakech.
            </p>
            <div class="star-price">26 DHS</div>
          </div>
          <div class="star-image">
            <img :src="starProductImage" alt="Gold Pistachio Latte" loading="lazy">
          </div>
        </div>
      </div>

      <!-- Menu Categories -->
      <div class="menu-tabs">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['tab-btn', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          <span class="tab-icon">{{ category.icon }}</span>
          {{ category.name }}
        </button>
      </div>

      <!-- Menu Items Grid -->
      <div class="menu-grid">
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="menu-item"
          :class="{ 'star-item': item.star }"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.name" loading="lazy">
            <div class="item-badge" v-if="item.star">⭐ STAR</div>
          </div>
          <div class="item-content">
            <div class="item-header">
              <h3 class="item-name">{{ item.name }}</h3>
              <span class="item-price">{{ item.price }} DHS</span>
            </div>
            <p class="item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { EstrellaCookies } from '../utils/cookies.js'

const activeCategory = ref('ftour')

// Tracker les changements de catégorie
watch(activeCategory, (newCategory) => {
  EstrellaCookies.setFavoriteMenuSection(newCategory)
  EstrellaCookies.trackPageVisit(`menu-${newCategory}`)
})

// Image du produit star
const starProductImage = new URL('../assets/images/products-menu/latte-pistachio-medium.webp', import.meta.url).href

// Catégories du menu
const categories = ref([
  { id: 'ftour', name: 'Petits Déjeuners' },
  { id: 'hot', name: 'Boissons Chaudes' },
  { id: 'cold', name: 'Boissons Froides' },
  { id: 'desserts', name: 'Desserts & Douceurs' }
])

// Tous les items du menu
const menuItems = ref([
  // === PETITS DÉJEUNERS ===
  {
    id: 1,
    category: 'ftour',
    name: 'Continental',
    price: '24',
    description: 'Boisson chaude + jus d\'orange + viennoiserie + pain complet + beurre + confiture',
    image: new URL('../assets/images/products-menu/ftour-continental-medium.webp', import.meta.url).href
  },
  {
    id: 2,
    category: 'ftour',
    name: 'Marrakchi',
    price: '30',
    description: 'Boisson chaude + jus d\'orange + harcha + msemen + amlou + olives noires + pain complet',
    image: new URL('../assets/images/products-menu/ftour-merrakchi-medium.webp', import.meta.url).href
  },
  {
    id: 3,
    category: 'ftour',
    name: 'Fassi',
    price: '32',
    description: 'Tajine de khlii + pain complet + thé à la menthe + jus d\'orange',
    image: new URL('../assets/images/products-menu/ftour-fassi-medium.webp', import.meta.url).href
  },
  {
    id: 4,
    category: 'ftour',
    name: 'Formule Healthy',
    price: '34',
    description: 'Jus détox (orange, carotte, gingembre) + pain complet + avocat + œuf dur + yaourt aux fruits',
    image: new URL('../assets/images/products-menu/ftour-healthy-medium.webp', import.meta.url).href
  },

  // === BOISSONS CHAUDES ===
  {
    id: 5,
    category: 'hot',
    name: 'Espresso',
    price: '12',
    description: 'Café italien traditionnel, corsé et aromatique',
    image: new URL('../assets/images/products-menu/espresso-medium.webp', import.meta.url).href
  },
  {
    id: 6,
    category: 'hot',
    name: 'Allongé',
    price: '14',
    description: 'Espresso allongé avec de l\'eau chaude',
    image: new URL('../assets/images/products-menu/cafe-allongé-medium.webp', import.meta.url).href
  },
  {
    id: 7,
    category: 'hot',
    name: 'Cappuccino',
    price: '22',
    description: 'Espresso avec mousse de lait onctueuse et cacao',
    image: new URL('../assets/images/products-menu/cappuccino-medium.webp', import.meta.url).href
  },
  {
    id: 8,
    category: 'hot',
    name: 'Café Latte',
    price: '24',
    description: 'Café au lait italien, doux et crémeux',
    image: new URL('../assets/images/products-menu/cafe-latte-medium.webp', import.meta.url).href
  },
  {
    id: 9,
    category: 'hot',
    name: 'Latte Vanille / Caramel / Pistache',
    price: '26',
    description: 'Café latte parfumé aux sirops maison',
    image: new URL('../assets/images/products-menu/latte-pistachio-medium.webp', import.meta.url).href,
    star: true
  },
  {
    id: 10,
    category: 'hot',
    name: 'Chocolat chaud classique',
    price: '24',
    description: 'Chocolat chaud onctueux et réconfortant',
    image: new URL('../assets/images/products-menu/chocolat-chaud-classic-medium.webp', import.meta.url).href
  },
  {
    id: 11,
    category: 'hot',
    name: 'Chocolat chaud royal',
    price: '28',
    description: 'Chocolat noir onctueux avec mini guimauves et chantilly',
    image: new URL('../assets/images/products-menu/chocolat-chaud-royal-medium.webp', import.meta.url).href
  },
  {
    id: 12,
    category: 'hot',
    name: 'Thé à la menthe',
    price: '12',
    description: 'Thé traditionnel marocain à la menthe fraîche',
    image: new URL('../assets/images/products-menu/thé-menthe-medium.webp', import.meta.url).href
  },
  {
    id: 13,
    category: 'hot',
    name: 'Thé au gingembre & miel',
    price: '15',
    description: 'Infusion détox au gingembre frais et miel',
    image: new URL('../assets/images/products-menu/Thé au gingembre & miel.jpg', import.meta.url).href
  },

  // === BOISSONS FROIDES ===
  {
    id: 14,
    category: 'cold',
    name: 'Iced Latte',
    price: '24',
    description: 'Café latte glacé, rafraîchissant et onctueux',
    image: new URL('../assets/images/products-menu/Iced Caramel Macchiato-medium.webp', import.meta.url).href
  },
  {
    id: 15,
    category: 'cold',
    name: 'Iced Caramel Macchiato',
    price: '26',
    description: 'Café glacé au caramel, servi dans des verres transparents',
    image: new URL('../assets/images/products-menu/Iced Caramel Macchiato-medium.webp', import.meta.url).href
  },
  {
    id: 16,
    category: 'cold',
    name: 'Café frappé',
    price: '25',
    description: 'Café glacé mixé, mousseuse et rafraîchissant',
    image: new URL('../assets/images/products-menu/iced-cofee-machiatto-medium.webp', import.meta.url).href
  },
  {
    id: 17,
    category: 'cold',
    name: 'Frappé Oreo',
    price: '28',
    description: 'Café glacé mixé avec biscuits Oreo, chantilly et coulis chocolat',
    image: new URL('../assets/images/products-menu/frappe-oreo-medium.webp', import.meta.url).href,
    star: true
  },
  {
    id: 18,
    category: 'cold',
    name: 'Milkshake Vanille / Fraise / Pistache / Oreo',
    price: '26',
    description: 'Milkshakes crémeux aux parfums variés',
    image: new URL('../assets/images/products-menu/Milkshake.jpg', import.meta.url).href
  },
  {
    id: 19,
    category: 'cold',
    name: 'Smoothie Fruits Rouges / Mangue / Banane Dattes',
    price: '25',
    description: 'Smoothies naturels aux fruits frais de saison',
    image: new URL('../assets/images/products-menu/smoothie-medium.webp', import.meta.url).href
  },
  {
    id: 20,
    category: 'cold',
    name: 'Jus d\'orange frais',
    price: '15',
    description: 'Jus d\'orange pressé minute, 100% naturel',
    image: new URL('../assets/images/products-menu/Jus-orange-frais-medium.webp', import.meta.url).href
  },

  // === DESSERTS & DOUCEURS ===
  {
    id: 21,
    category: 'desserts',
    name: 'Tiramisu (Pistache, Nutella, Spéculoos, Café)',
    price: '25',
    description: 'Tiramisu maison en verrine, aux parfums variés',
    image: new URL('../assets/images/products-menu/teramisu-medium.webp', import.meta.url).href,
    star: true
  },
  {
    id: 22,
    category: 'desserts',
    name: 'Cookies géants moelleux',
    price: '18',
    description: 'Cookies épais style américain : Double Choco / Caramel / Oreo',
    image: new URL('../assets/images/products-menu/cookie-medium.webp', import.meta.url).href
  },
  {
    id: 23,
    category: 'desserts',
    name: 'Cheesecake maison',
    price: '28',
    description: 'Cheesecake crémeux Framboise ou Oreo',
    image: new URL('../assets/images/products-menu/Cheesecake maison-medium.webp', import.meta.url).href
  },
  {
    id: 24,
    category: 'desserts',
    name: 'Coupe glacée "Marrakech"',
    price: '32',
    description: 'Glace vanille, miel, amandes grillées, morceaux de msemen',
    image: new URL('../assets/images/products-menu/Coupe glacée-medium.webp', import.meta.url).href
  },
  {
    id: 25,
    category: 'desserts',
    name: 'Coupe "Banana Dream"',
    price: '30',
    description: 'Glace banane, Nutella, chantilly, morceaux de cookie',
    image: new URL('../assets/images/products-menu/Coupe glacée-medium.webp', import.meta.url).href
  }
])

// Items filtrés par catégorie
const filteredItems = computed(() => {
  return menuItems.value.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped>
.menu-section {
  padding: 6rem 0;
  background: var(--light-bg);
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
  margin-bottom: 1.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--gray);
  max-width: 600px;
  margin: 0 auto;
}

/* === PRODUIT STAR === */
.star-product {
  background: linear-gradient(135deg, #FF8C42, #D4AF37);
  border-radius: var(--radius-lg);
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 20px 60px rgba(255, 140, 66, 0.2);
}

.star-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: center;
}

.star-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.star-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.star-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
}

.star-price {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.star-image {
  text-align: center;
}

.star-image img {
  width: 100%;
  max-width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* === TABS === */
.menu-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid var(--light-bg);
  padding: 1rem 2rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  color: var(--gray);
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.tab-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  box-shadow: 0 8px 25px rgba(255, 140, 66, 0.3);
}

.tab-icon {
  font-size: 1.2rem;
}

/* === MENU GRID === */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.menu-item {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.menu-item.star-item {
  border: 2px solid var(--gold);
}

.item-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.menu-item:hover .item-image img {
  transform: scale(1.05);
}

.item-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gold);
  color: var(--dark);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.item-content {
  padding: 1.5rem;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.75rem;
}

.item-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark);
  line-height: 1.3;
  flex: 1;
  margin-right: 1rem;
}

.item-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  white-space: nowrap;
}

.item-description {
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .menu-section {
    padding: 4rem 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .star-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .star-title {
    font-size: 2rem;
  }
  
  .star-image img {
    max-width: 240px;
    height: 240px;
  }
  
  .menu-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .star-product {
    padding: 2rem 1.5rem;
  }
  
  .star-title {
    font-size: 1.8rem;
  }
  
  .star-description {
    font-size: 1rem;
  }
}
</style>