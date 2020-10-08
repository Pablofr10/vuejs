<template>
  <div id="app">
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/curso">JavaScript</router-link>
      <router-link to="/acoes">Ações</router-link>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 2px solid #2c3e50;
}

.nav-links {
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 20px 0;
  justify-content: center;
}
.nav-links > a {
  padding: 5px 15px;
  background: brown;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
}
.nav-links > a:hover {
  background: rgb(146, 57, 57);
}
.router-link-exact-active {
  background: rgb(65, 15, 15) !important;
}

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
