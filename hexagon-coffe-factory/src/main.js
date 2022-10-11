import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from 'mitt'
import 'bootstrap'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'


const emitter = mitt()
const app=createApp(App)
app.config.globalProperties.$emitter = emitter
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.component('LoadIng', Loading)
app.mount('#app')
