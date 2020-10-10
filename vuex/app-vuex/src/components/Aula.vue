<template>
  <div>
    <p>{{ user }} Aula {{ aulasCompletas }}</p>
    <p>{{ nome }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Aula",
  data() {
    return {
      nome: "André",
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
};
</script>

<style scoped>
</style>
