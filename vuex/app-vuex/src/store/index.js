import Vue from 'vue';
import Vuex from 'vuex';
import aulas from '@/store/aulas.js';
import livros from '@/store/livros.js';
import user from '@/store/user.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    aulas,
    livros,
    user,
  },
});
