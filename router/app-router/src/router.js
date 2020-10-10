import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
const Cursos = () =>
  import(/* webpackChunkName: "curso" */ './views/Cursos.vue');
const Curso = () => import(/* webpackChunkName: "curso" */ './views/Curso.vue');
const CursoAulas = () =>
  import(/* webpackChunkName: "curso" */ './views/CursoAulas.vue');
const CursoDescricao = () =>
  import(/* webpackChunkName: "curso" */ './views/CursoDescricao.vue');
const Acoes = () => import('./views/Acoes.vue');
const AcoesDados = () => import('./views/AcoesDados.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/acoes',
      component: Acoes,
      children: [
        {
          path: ':simbolo',
          component: AcoesDados,
          props: true,
        },
      ],
    },
    {
      path: '/cursos',
      component: Cursos,
      props: true,
      children: [
        {
          name: 'curso',
          path: ':curso',
          component: Curso,
          props: true,
          children: [
            {
              name: 'aulas',
              path: 'aulas',
              component: CursoAulas,
            },
            {
              name: 'descricao',
              path: 'descricao',
              component: CursoDescricao,
            },
          ],
        },
      ],
    },
  ],
});
