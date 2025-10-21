<template>
  <div class="home">
    <!-- Navigation -->
    <NavBar />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- À Propos -->
    <AboutSection />
    
    <!-- Menu -->
    <MenuSection />
    
    <!-- Galerie -->
    <GallerySection />
    
    <!-- Avis Clients -->
    <ReviewsSection />
    
    <!-- Contact et Localisation -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Bouton retour en haut -->
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar_NEW.vue'
import HeroSection from '../components/HeroSection_UNIFIED.vue'
import AboutSection from '../components/AboutSection_UNIFIED.vue'
import MenuSection from '../components/MenuSection_NEW.vue'
import GallerySection from '../components/GallerySection_NEW.vue'
import ReviewsSection from '../components/ReviewsSection_UNIFIED.vue'
import ContactSection from '../components/ContactSection_SIMPLIFIED.vue'
import FooterSection from '../components/FooterSection_UNIFIED.vue'
import BackToTop from '../components/BackToTop_UNIFIED.vue'
</script>

<style scoped>
/* Styles spécifiques à la page d'accueil si nécessaire */
</style>