<template>
  <div>
      <div id="screen" :class="state" @click="onClickScreen"> {{ message }} </div>
      <div>
          <div>평균 시간: {{ averageTime || 0}}</div>
          <button @click="onReset">리셋</button>
          <p>{{startTime}} {{endTime}}</p>
          <p v-for="res in result" v-bind:key ="res"> {{ res }} </p>
      </div>
  </div>
</template>

<script>
// let startTime = 0;
// let endTime = 0;
let timeout = null;
export default {
    data(){
        return{
            state: 'waiting',
            message:'클릭해서 시작하세요',
            result: [],
            startTime :0,
            endTime :0,
        }
    },
    computed:{
        averageTime(){
            return this.result.reduce((a, c)=> a + c, 0) / this.result.length
        }
    },
    methods:{
        onReset(){
            this.result = [];
        },
        onClickScreen(){
            if(this.state === "waiting"){
                this.state = "ready";
                this.message = '초록색이 되면 클릭하세요'
                timeout = setTimeout(()=>{
                    this.state = "none";
                    this.message = "지금클릭";
                    this.startTime = new Date();
                }, Math.floor(Math.random()*1000)+2000);
            }else if(this.state ==="ready"){
                clearTimeout(timeout);
                this.state = "waiting";
                this.message = '초록색이 된 후에 클릭하라고';
                setTimeout(()=>{
                    this.message ="클릭해서 시작하세요";
                },1000)
            }else{
                this.endTime = new Date();
                this.state = "waiting";
                this.message = "클릭해서 시작하세요";
                this.result.push(this.endTime-this.startTime);
            }
        }
    }
}
</script>

<style>
#screen{
    width: 300px;
    height: 300px;
    text-align: center;

}

#screen.waiting{
    background-color: aqua;
}
#screen.ready{
    background-color: red;
}
#screen.none{
    background-color: green;
}
</style>