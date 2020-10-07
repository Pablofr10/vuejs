<template>
  <div>
    {{ curso }}
    <router-link :to="{ name: 'aulas' }">Aulas</router-link>
    <router-link :to="{ name: 'descricao' }">descricao</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["curso"],
};
</script>

<style scoped>
ul {
  width: 100px;
}
li {
  list-style: none;
}
</style>
