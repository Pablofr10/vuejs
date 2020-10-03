<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition appear name="trans" @enter="enter">
      <h1>Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false,
    };
  },
  methods: {
    enter(elemento) {
      console.log(elemento.classList.add("teste"));
    },
  },
};
</script>

<style>
.trans-enter-active,
.trans-leave-active {
  transition: opacity 2s;
}

/* .animar {
  transition: opacity 2s;
} */

.trans-enter,
.trans-leave-to {
  opacity: 0;
}
</style>
