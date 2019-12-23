// 이게 이제 컴포넌트가 되는 것이다
<template>
    <div>
        <h1>숫자 야구</h1>
        
        <div v-if="!isNumMade">
            <input placeholder="숫자 4개를 입력하세요." v-model="quizNumber">
            <button v-on:click="makeNumber">입력</button>
        </div>    
        <div v-else>
            <input v-model="value" v-on:keyup.enter ="onSubmitForm">
            <button v-on:click="onSubmitForm">입력</button>
            <div> counter: {{ counter }}</div>
            <ul>
                <li v-for="(record,index) in records" v-bind:key="index"> 
                    {{ record.value }}
                    <p v-if="record.strike===4"> 성공 ! <button v-on:click="resetGame">다시하기</button></p>
                    <p v-else-if="record.strike===0 && record.ball===0"> 아웃 !</p>
                    <p v-else> {{ record.strike }} 스트라이크 {{ record.ball }} 볼입니다. </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: '',
            records: [],
            isNumMade: false,
            quizNumber: '',
        }
    },
    computed:{
        counter(){
            return this.records.length;
        }
    },
    methods:{
        makeNumber(){
            this.isNumMade = !this.isNumMade;
            console.log('clicked', this.isNumMade);
        },
        onSubmitForm(e){
            // e.preventDefault();
            if(this.value.length !== 4){
                alert("4개의 숫자를 입력해주세요");
            }else{
                
                const obj = this.checking(this.value);
                this.records.push(obj); 
                this.value = '';
            }
        },
        checking(value){
            var goal = '1234';
            let strike = 0;
            let ball = 0;
            for(var i=0; i<value.length; i++){
                if(value[i] === goal[i]){
                    strike++;
                }else if(goal.includes(value[i])){
                    ball++;
                }
            }
            return {value, strike, ball};
        },
        resetGame(){
            alert('게임을 다시 시작합니다.');
            this.value='';
            this.records='';
            this.isNumMade=false;
        }
    }
}
</script>

<style>

</style>