import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapResults: [],
    mapCoordenadas: []
  },
  mutations: {
    SET_MAP_RESULTS(state, payload){
      state.mapResults = payload;
    },
    SET_MAP_COORDENADAS(state, payload){
      state.mapCoordenadas = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
