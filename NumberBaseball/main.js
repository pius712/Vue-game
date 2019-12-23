import Vue from 'vue';

// import NumberBaseball from'./NumberBaseball.vue';
import NumberBaseball from'./NumberBaseball';  // webpack.config.js에서 resolve에 extesion option 만져주면 .vue 
//확장자 안써줘도 된다.

new Vue(NumberBaseball).$mount('#app');   // Vue       