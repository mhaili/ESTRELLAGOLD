<template>
  <div class="optimized-image-wrapper" :class="wrapperClass">
    <img 
      :src="src" 
      :alt="alt || 'Estrella Gold'" 
      :loading="loading"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      v-bind="$attrs"
    />
    <div v-if="showLoader && !imageLoaded" class="image-loader">
      <div class="loader-spinner"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  wrapperClass: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  },
  showLoader: {
    type: Boolean,
    default: true
  }
})

const imageLoaded = ref(false)

const onImageLoad = () => {
  imageLoaded.value = true
}

const onImageError = (event) => {
  console.warn('Erreur de chargement image:', props.src)
  // Fallback vers une image par défaut si nécessaire
}
</script>

<style scoped>
.optimized-image-wrapper {
  position: relative;
  display: inline-block;
}

.optimized-image-wrapper img {
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.image-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #d4af37;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>