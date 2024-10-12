import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import Vueform from '@vueform/vueform'
// import vueformConfig from '../vueform.config.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Vueform, vueformConfig)
app.use(PrimeVue, {
  //   unstyled: true,
  theme: {
    preset: Aura,
  },
})

app.mount('#app')
