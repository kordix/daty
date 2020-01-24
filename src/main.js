import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.config.devTools = true

new Vue({
  store,
  render: function (h) { return h(App) },
  created(){
    this.$store.dispatch('loadUsers');
  }
}).$mount('#app')
