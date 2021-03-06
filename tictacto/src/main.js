import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

Vue.config.productionTip = false

export default new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
// new Vue(App).$mount('#app')
