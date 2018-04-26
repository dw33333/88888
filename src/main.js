import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = true
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

/* eslint-disable no-new */

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
