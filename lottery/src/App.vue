<template>
  <div id="app">
    <lottery-generator></lottery-generator>
  </div>
</template>

<script>
import LotteryGenerator from './components/LotteryGenerator.vue'

export default {
  name: 'app',
  components: {
    LotteryGenerator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
