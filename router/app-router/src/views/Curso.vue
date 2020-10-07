<template>
  <div>
    {{ curso }}
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>
    <router-link :to="{ name: 'descricao' }">descricao</router-link>

    <transition mode="out-in" name="curso">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  methods: {
    puxarDados() {
      console.log("puxou");
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   next();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.puxarDados();
  //   next();
  // },
  // beforeRouteLeave(to, from, next) {
  //   const confirmar = confirm("Deseja realmente sair da página?");
  //   if (confirmar) {
  //     next();
  //   }
  // },
};
</script>

<style scoped>
ul {
  width: 100px;
}
li {
  list-style: none;
}

.curso-enter,
.curso-leave-to {
  transform: translate3d(0, -40px, 0) scale(0.2);
  opacity: 0;
}
.curso-enter-active,
.curso-leave-active {
  transition: all 0.3s;
}
</style>
