import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/main.css'

createApp(App)
.use(router)
.use(store)
.use(VueLazyLoad, {
    loading: './assets/images/loading.png',
    error: './assets/images/error.png',
})
.mount('#app')
