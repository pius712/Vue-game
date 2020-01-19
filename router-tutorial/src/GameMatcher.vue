<template>
  <div v-if="currentGame === 'number-baseball'">
    <number-baseball></number-baseball>
  </div>
  <div v-else-if="currentGame === 'response-check'">
    <response-check></response-check>
  </div>
  <div v-else-if="currentGame === 'lottery-gen'">
    <lottery-gen></lottery-gen>
  </div>
  <div v-else></div>
</template>

<script>
import NumberBaseball from '../../NumberBaseball/NumberBaseball.vue'
import ResponseCheck from '../../ResponseGame/src/App.vue'
import LotteryGen from '../../lottery/src/App.vue'

export default {
    mounted(){
        console.log(this.$router);
        console.log(this.$route);
    },
    computed:{
      currentGame(){
        return this.$route.params.name;
      }
    },
    components:{
      NumberBaseball,
      ResponseCheck,
      LotteryGen,
    }
}
</script>

<style>

</style>