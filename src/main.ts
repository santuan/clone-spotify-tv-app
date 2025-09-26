import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
// Instalar el plugin de navegación TV
import SpatialNavigation from 'js-spatial-navigation'
// mount after the initial navigation is ready
// Hacer SpatialNavigation disponible globalmente
window.SpatialNavigation = SpatialNavigation
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ui)
app.mount('#app')
