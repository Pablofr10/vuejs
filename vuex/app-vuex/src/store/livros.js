export default {
  state: {
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
};
