<template>
  <div> 
      <p>{{ firstNum }} 곱하기 {{ secondNum }}은? </p>
      <input type='text' v-model="inputNum" v-on:keyup.enter="submitNumber"/>
      <button v-on:click="submitNumber">제출</button>
      <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      firstNum:'',
      secondNum: '',
      inputNum : '',
      result: '',
    }
  },
  methods: {
    makeProblem(){
      this.firstNum = Math.ceil(Math.random()*10);
      this.secondNum = Math.ceil(Math.random()*10);
    },
    submitNumber(){
      const num1 = parseInt(this.firstNum);
      const num2 = parseInt(this.secondNum);
      // console.log('num1' , num1);
      // console.log('num2', num2);
      if(parseInt(this.inputNum)=== num1*num2){
        this.result = "정답입니다";
      }else{
        // console.log(this.inputNum);
        // console.log(num1*num2);
        this.result = '땡';
      }
      this.input = '';
    },
    checkNum(){

    },
  },
  created: function(){
    this.makeProblem();
  }
}
</script>

<style>

</style>