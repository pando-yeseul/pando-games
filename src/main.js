import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "./css/common.css"
import "./css/slick.css"

import Slick from "./js/slick.js"

import vuerouter from "./router/routes.js"




new Vue({
  router:vuerouter,
  Slick,
  render: h => h(App),
}).$mount('#app')
