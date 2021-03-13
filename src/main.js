import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import store from './store'
import JwPagination from 'jw-vue-pagination'

Vue.component('jw-pagination', JwPagination);

window.REQUESTS = require('./api.lib/Requests').REQUESTS

Vue.prototype.REQUESTS = window.REQUESTS

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
