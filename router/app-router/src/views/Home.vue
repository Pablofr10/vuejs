<template>
  <div>
    <h1 @click="navegarCursos">Essa é a home</h1>
  </div>
</template>

<script>
export default {
  methods: {
    navegarCursos() {
      this.$router.push("cursos");
    },
  },
};
</script>

<style>
</style>
