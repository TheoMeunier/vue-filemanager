import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {message} from "./lang/index.js";

const i18n = createI18n({
    legacy: true,
    locale: 'fr',
    fallbackLocal: 'en',
    message
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18n)

app.mount('#app')
