import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  store,
  render: function (h) { return h(App) },
  created(){
    let self = this;
    this.$store.dispatch('loadUsers');
  },
  methods:{
    drawinner(){
      this.$store.dispatch('draw');
    }
  }
}).$mount('#app')
