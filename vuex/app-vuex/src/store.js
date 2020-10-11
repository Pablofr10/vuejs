import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: 'Lobo',
    aulasCompletas: 21,
    aulasFinalizadas: [],
    totalHoras: 0,
    livros: [
      {
        nome: 'Harry Potter 1',
        lido: true,
      },
      {
        nome: 'Hunger Games',
        lido: false,
      },
      {
        nome: 'Harry Potter 2',
        lido: true,
      },
      {
        nome: 'Harry Potter 3',
        lido: false,
      },
      {
        nome: 'O Jogador número 1',
        lido: false,
      },
    ],
  },
  getters: {
    livrosLidos: (state) => (lido) =>
      state.livros.filter((livro) => livro.lido === lido),
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
