<template>
  <div>
    <div v-if="loading">Carregando...</div>
    <div v-else>
      <p>{{ simbolo }}</p>
      <div>{{ acao }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["simbolo"],
  data() {
    return {
      acao: null,
      loading: true,
    };
  },
  methods: {
    puxarAcao() {
      fetch(`https://jsonplaceholder.typicode.com/todos/${this.simbolo}`)
        .then((r) => r.json())
        .then((r) => {
          this.acao = r;
          this.loading = false;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
  watch: {
    $route: "puxarAcao",
  },
  //   beforeRouteUpdate(to, from, next) {
  //     this.puxarAcao(to.params.simbolo);
  //     next();
  //   },
};
</script>

<style scoped>
</style>
