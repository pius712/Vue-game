<template>
  <div id ="ball-circle" v-bind:style="{backgroundColor: style}">
    <div class="number-area" >
        {{ number }}
    </div>
  </div>
</template>

<script>
export default {
    props:['number'],
    computed:{
        style(){
            let background;
            if(this.number <= 10)
                background = 'red';
            else if(this.number <= 20)
                background = 'orange';
            else if(this.number <= 30)
                background = 'yellow';
            else if(this.number <= 40)
                background = "green";
            else
                background = "blue";
            return background;
        }
    }
}
</script>

<style scoped>
#ball-circle{
    border: 1px solid red;
    border-radius: 100px;
    width:100px;
    height: 100px;
    display: inline-block;
    text-align: center;
    margin: 0 10px;
}
#ball-circle .number-area{
    position: relative;
    top:37px;
}
</style>