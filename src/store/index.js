import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../http-common.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datyboard: [{ date: "-100000", opis: "początek ziemi" }],
    daty: [{date:'1111',opis:'dupa'}],
    current: {},
    fails: 0,
    users:[]
  },
  mutations: {
    draw(state) {
      let num = Math.floor(Math.random() * state.daty.length)
      if(state.daty[num]){
      state.current = state.daty[num];
      state.daty.splice(num, 1);
      }else{
        state.current = {date:'9999',opis:'koniec gry'}
      }
    },
    SAVE_USERS(state, users) {
      state.daty = users;
    }

  },
  actions: {
    draw(context){
      context.commit('draw');
    },
    loadUsers(context){
      HTTP.get('api/read.php').then((res)=>context.commit('SAVE_USERS',res.data)).then((res)=>context.commit('draw'))
    }
  },
  modules: {
  }
})


