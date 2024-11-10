import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

let app=createApp(App)
app.use(ElementPlus)
app.use(router)

app.mount('#app')

