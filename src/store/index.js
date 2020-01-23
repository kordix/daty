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
      state.current = state.daty[num];
      state.daty.splice(num, 1);
    },
    SAVE_USERS(state, users) {
      state.daty = users;
    }

  },
  actions: {
    draw(context){
      context.commit('draw');
    },
    loadUsers({ commit }) {
      HTTP.get('api/read.php').then(result => {
        commit('SAVE_USERS', result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})


