import BotaoContador from './BotaoContador.js';

export default {
  name: 'MenuPrincipal',
  template: `
  <ul>
    <li>Home</li>
    <li>About</li>
    <botao-contador></botao-contador>
  </ul>
  `,
  components: {
    BotaoContador,
  },
};
