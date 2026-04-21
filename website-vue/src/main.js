import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.use(PrimeVue, { unstyled: true })
app.mount('#app')
