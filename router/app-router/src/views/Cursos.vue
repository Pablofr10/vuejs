<template>
  <div>
    <h1>Curso de: {{ curso }}</h1>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>

    <transition mode="out-in">
      <router-view :key="cursoi"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
};
</script>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
