<template>
  <div id="app">
    <div>
      <router-link to="/game/index">게임 매쳐</router-link>
      <router-link to="/game/number-baseball">Numbase </router-link>
      <router-link to="/game/response-check">response </router-link>
      <router-link to="/game/lottery-gen">lotto </router-link>
      <!-- <router-link to="/tictacto">tictacto</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
