<template>
  <div id="app">
    <modal-principal>
      <template #header>
        <h4>Carlos Garcia é o dev mais rico de Angola.</h4>
      </template>
      <button>Mudar</button>
      <template #footer>
        <h2>Footer</h2>
      </template>
    </modal-principal>
    <button @click="componenteAtivo = 'AulaDownload'">Download</button>
    <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <keep-alive>
      <component :is="componenteAtivo">Descrição</component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao";

export default {
  name: "App",
  data() {
    return {
      componenteAtivo: "AulaDownload",
    };
  },
  components: {
    ModalPrincipal: () => import("./components/ModalPrincipal"),
    AulaDescricao,
    AulaDownload: () => import("./components/AulaDownload"),
  },
};
</script>

<style>
</style>
