<template>
    <div>
        <h1> {{ result}} </h1> 
        <form v-on: submit = "onSubmitForm">
            <input v-model = "value">
            <button>입력하세요</button>
        </form>   
    </div>    
</template>

<script>
export default {
    data(){
        return{
            value: '',
            result:''
        }
    },
    methods: {
        onSubmitForm(e){
            e.preventDefault();
        },

    }
}
</script>

<style>

</style>
