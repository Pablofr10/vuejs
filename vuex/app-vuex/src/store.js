import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Lobo',
    aulasCompletas: 21,
    aulasFinalizadas: [],
    totalHoras: 0,
  },
  mutations: {
    CHANGE_USER(state, novoUser) {
      state.user = novoUser.user;
    },
    COMPLETAR_AULA(state) {
      state.aulasCompletas++;
    },
    ADICIONAR_AULA(state, payload) {
      state.aulasFinalizadas.push(payload);
    },
  },
  actions: {
    completarAula(context, payload) {
      context.commit('ADICIONAR_AULA', payload);
    },
  },
});
