<template>
  <div id="app">
    <table-component :tableElements="tableData"></table-component>
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue';
import { mapState } from 'vuex';
// import store from './store/store.js'

export default {
  name: 'app',  
  // store: store,  
  computed:{
    ...mapState(['tableData', 'winner','turn']),
    // tableData(){
    //   return this.$store.state.tableData;
    // },
    // turn(){
    //   return this.$store.state.turn;
    // },
    // winner(){
    //   return this.state.state.winner;
    // },
  },
  components: {
    TableComponent
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
td{
    border: 1px solid gray;
    width: 100px;
    height: 100px;
}
</style>
