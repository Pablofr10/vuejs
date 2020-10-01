<template>
  <div id="app">
    <modal-principal>
      <template #header>
        <h4>Carlos Garcia é o dev mais rico de Angola.</h4>
      </template>
      <button>Mudar</button>
      <template #footer>
        <h2>Footer</h2>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal";

export default {
  name: "App",
  components: {
    ModalPrincipal,
  },
};
</script>

<style>
</style>
