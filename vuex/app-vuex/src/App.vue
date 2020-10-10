<template>
  <div id="app">
    {{ $store.state.user }}
    <Usuario />
    <Curso />
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";
import Curso from "@/components/Curso.vue";

export default {
  name: "App",
  components: {
    Usuario,
    Curso,
  },
};
</script>

<style>
</style>
