export default {
  state: {
    user: 'Lobo',
  },
  mutations: {
    CHANGE_USER(state, novoUser) {
      state.user = novoUser.user;
    },
  },
  actions: {
    completarAula(context, payload) {
      context.commit('ADICIONAR_AULA', payload);
    },
  },
};
