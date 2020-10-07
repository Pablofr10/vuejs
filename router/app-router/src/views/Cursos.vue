<template>
  <div>
    <h1>Curso de: {{ curso }}</h1>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["curso"],
};
</script>

<style>
</style>
