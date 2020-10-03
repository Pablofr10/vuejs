<template>
  <div>
    <button @click="filtroAZ">A - Z</button>
    <button @click="filtroZA">Z - A</button>
    <transition-group tag="ul">
      <li v-for="filme in filmes" :key="filme">
        {{ filme }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: ["Harry Potter", "Jogos Vorazes", "Senhores dos Aneis", "Nárnia"],
    };
  },
  methods: {
    filtroAZ() {
      this.filmes.sort();
    },
    filtroZA() {
      this.filmes.sort().reverse();
    },
  },
};
</script>

<style>
.v-move {
  transition: transform 0.3s;
}

li {
  padding: 5px 20px;
  margin: 2px auto;
  width: 100px;
  color: white;
  background: rgb(21, 58, 21);
}
</style>
