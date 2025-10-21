import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

const app = createApp(App)

// Configuration du router
app.use(router)

// Configuration globale
app.config.globalProperties.$apiUrl = import.meta.env.DEV 
  ? 'http://localhost:5000/api' 
  : '/api'

app.mount('#app')