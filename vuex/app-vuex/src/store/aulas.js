export default {
  state: {
    aulasCompletas: 21,
    aulasFinalizadas: [],
    totalHoras: 0,
  },
  mutations: {
    COMPLETAR_AULA(state) {
      state.aulasCompletas++;
    },
    ADICIONAR_AULA(state, payload) {
      state.aulasFinalizadas.push(payload);
    },
  },
};
