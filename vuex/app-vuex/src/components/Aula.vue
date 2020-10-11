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
        <button @click="handleClickAula(aula)">Marcar como concluída</button>
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
import { mapState, mapActions } from "vuex";

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
    ...mapActions(["completarAula"]),
    handleClick() {
      this.CHANGE_USER({ user: this.novoUser });
    },
    handleClickAula(aula) {
      this.completarAula(aula);
    },
  },
};
</script>

<style scoped>
</style>
