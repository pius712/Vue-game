<template>
    <table>
         <tr-component v-for="(element, index) in tableElements" :key="index"  :rowIndex="index"></tr-component>
    </table>
</template>

<script>
import TrComponent from './TrComponent.vue';

export default {
    data(){
        return{
            table: 'this is table data'
        }
    },
    computed :{
        tableElements(){
            return this.$store.state.tableData;
        }
    },
    components:{
        TrComponent,
    }
}
</script>

<style scoped>


</style>