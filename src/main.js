import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {routes} from './routes.js'
import {store} from './store/store.js' 

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd5918871153mxkjnh.wilddogio.com/'

Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
