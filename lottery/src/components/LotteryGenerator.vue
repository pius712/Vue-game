<template>
  <div>
    <div>당첨숫자</div>
    <div id="lottery-result">
        <lotto-ball v-for="(number,idx) in lotteryNum" :key="idx" :number="number"></lotto-ball>
        
    </div>
    <button v-if="isNumMade" @click="initArray">숫자 생성</button>
    <div>보너스!</div>
    <lotto-ball v-if="bonusNum" :number="bonusNum"></lotto-ball>
    <button @click="resetLottery">한번 더!</button>
    
  </div>
</template>

<script>
import LottoBall from './LottoBall';

let tempArray = [];
for(let i= 1; i<45; i++){
    tempArray.push(i);
}
const shuffle = (a) =>{
    let j, x, i; 
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i); 
        x = a[i - 1]; 
        a[i - 1] = a[j]; 
        a[j] = x; 
    }
    return a;
};

export default {
    data(){
        return {
            lotteryArray: [],
            lotteryNum: [],
            bonusNum: null,
        }
    },
    methods:{
        initArray(){
            this.lotteryArray = shuffle(tempArray);
            for(let i=0; i<6; i++){
                setTimeout(()=>{
                    this.lotteryNum.push(this.lotteryArray[i]);
                },(i+1)*1000);
            }
            setTimeout(()=>{
                this.bonusNum = this.lotteryArray[this.lotteryArray.length-1];
            }, 7000);
        },
        resetLottery(){
            this.lotteryArray = [];
            this.lotteryNum = [];
            this.bonusNum = null;
        }
    },
    computed :{
        isNumMade(){
            return this.lotteryNum.length != 6;
        }
    },
    components:{
        LottoBall,
    }
   
}
</script>

<style scoped>
p{
    display: inline-block;
    width: 100px;
    height: 100px;
}
</style>