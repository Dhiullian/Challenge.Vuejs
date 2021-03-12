import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import store from './store'

window.REQUESTS = require('./api.lib/Requests').REQUESTS

Vue.prototype.REQUESTS = window.REQUESTS

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
