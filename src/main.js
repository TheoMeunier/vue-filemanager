import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import {i18nVue} from "./lang/index.js";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18nVue)

app.mount('#app')
