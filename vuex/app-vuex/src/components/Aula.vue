<template>
  <div>
    <!-- <p>{{ user }} Aula {{ aulasCompletas }}</p>
    <p>{{ nome }}</p>
    <button @click="handleClick">Modificar usuário</button>
    <button @click="COMPLETAR_AULA">Completar Aula</button>
    <input type="text" v-model="novoUser" /> -->

    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        {{ aula.nome }} {{ aula.duracao }} horas
        <button @click="ADICIONAR_AULA(aula)">Marcar como concluída</button>
      </li>
    </ul>
    <div>
      <h2>Aulas finalizadas {{ totalHoras }}</h2>
      <ul>
        <li
          v-for="aulaFinalizada in aulasFinalizadas"
          :key="aulaFinalizada.nome"
        >
          {{ aulaFinalizada.nome }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Aula",
  data() {
    return {
      nome: "André",
      novoUser: "",
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15,
        },
        {
          nome: "JAVASCRIPT",
          duracao: 40,
        },
        {
          nome: "C#",
          duracao: 30,
        },
        {
          nome: ".NET",
          duracao: 40,
        },
      ],
    };
  },
  computed: {
    ...mapState(["user", "aulasCompletas", "aulasFinalizadas", "totalHoras"]),
    nomeMaiusculo() {
      return this.nome.toUpperCase();
    },
  },
  methods: {
    ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA", "ADICIONAR_AULA"]),
    handleClick() {
      this.CHANGE_USER({ user: this.novoUser });
    },
  },
};
</script>

<style scoped>
</style>
