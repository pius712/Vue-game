<template>
    <div>
        <div id="computer" :style="computedStyle"></div>
        <div>
            <button @click="onClickBtn('가위')">가위</button>
            <button @click="onClickBtn('바위')">바위</button>
            <button @click="onClickBtn('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점 </div>
    </div>
</template>

<script>
const code = {
    가위: `-18px -24px`, 
    바위:`-195px -24px`,
    보 : `-435px -24px`
};
const score ={
    가위: 1,
    바위: 0,
    보: -1
}
const computerChoice = (imgLocation)=>{
    return Object.entries(code).find(function(v){
        return v[1] === imgLocation;                //여기서 반환되는 것은 ['키', '값'] 형태의 배열을 반환한다. 그래서 [0]을 해주는것..
    })[0]
}
let interval = null;
export default {
    data(){
        return{
            imgLocation: code.가위,
            result: 0,
            score: 0,
        }
    },
    computed :{
        computedStyle(){
            return {
                background: `url(http://folkency.nfm.go.kr/upload/img/20170428/20170428153307_t_.jpg) ${this.imgLocation}`, 
                backgroundRepeat :'no-repeat'
                }
        }
    },
    methods : {
        onClickBtn(choice){
            clearInterval(interval);
            const myScore = score[choice];
            const computerScore = score[computerChoice(this.imgLocation)];
            const diff = myScore - computerScore;
            if(diff===0){
                this.result = "비겼습니다.";
            }else if([-1,2].includes(diff)){
                this.result = '이겼습니다';
                this.score += 1;
            }else{
                this.result = '졌습니다';
                this.score -= 1;
            }
            setTimeout(()=>{
                interval = setInterval(()=>{
                if(this.imgLocation === code.가위){
                    this.imgLocation = code.바위;
                }else if(this.imgLocation === code.바위){
                    this.imgLocation = code.보;
                }else{
                    this.imgLocation = code.가위;
                }},100);
            },1000);
       }
    },
    mounted(){
        console.log("hi");

        interval = setInterval(()=>{
            if(this.imgLocation === code.가위){
                this.imgLocation = code.바위;
            }else if(this.imgLocation === code.바위){
                this.imgLocation = code.보;
            }else{
                this.imgLocation = code.가위;
            }
        },100);
    },
    beforeDestroy(){
        clearInterval(interval);
    }

}
</script>

<style scoped>
#computer{
     width: 210px;
    height: 280px;
}
</style>