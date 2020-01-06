<template>
  <tr>
      <td-component v-for="(cellData,index) in rowData" :key="index" :cellData ="cellData" :cellIndex ="index" :rowIndex="rowIndex"></td-component>
  </tr>
</template>

<script>
import TdComponent from './TdComponent.vue';
export default {
    data(){
        return {
            pdata : 'pdata'
        }
    },
    computed:{
        rowData(){
            return this.$store.state.tableData[this.rowIndex];
        },
    },
    props:{
        'rowIndex': Number,
    },
    components: {
        TdComponent
    }
}
</script>

<style>

</style>