import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datyboard: [{ date: "-100000", opis: "początek ziemi" }],
    daty: [{ date: "1596 ", opis: "Unia brzeska" }, { date: "1600 ", opis: "Początek wojny ze Szwedami" }, { date: "1609", opis: "Wojna polsko-rosyjska" }, { date: "1610", opis: "zajęcie Moskwy przez Żółkiewskiego" }, { date: "1496", opis: "statusy piotrkowskie" }, { date: "1018", opis: "wyprawa kijowska" }, { date: "1620", opis: "klęska pod cecorą" }
      , { date: "1655", opis: "potop szwedzki" }, { date: "1660", opis: "pokój w oliwie" }, { date: "1669", opis: "pierwsze liberum veto" }, { date: "1879", opis: "narodziny einsteina" }, { date: "1921", opis: "Einstein nobel z fizyki" }, { date: "1492", opis: "Kolumb" }, { date: "1756", opis: "Narodziny Mozarta" }, { date: "1804", opis: "Napoleon" }, { date: "1772", opis: "I rozbiór" }, { date: "1791", opis: "Konstytucja 3 maja" },
    { date: "1793", opis: "II rozbiór" }, { date: "1795", opis: "III rozbiór" }, { date: "1914", opis: "I wojna" }, { date: "1944", opis: "Market Garden" },],
    current: {},
    fails: 0
  },
  mutations: {
    draw(state) {
      let num = Math.floor(Math.random() * state.daty.length)
      state.current = state.daty[num];
      state.daty.splice(num, 1);
    },
    check(state,payload){

    }

  },
  actions: {
    draw(context){
      context.commit('draw');
    }
  },
  modules: {
  }
})
