import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../../NumberBaseball/NumberBaseball.vue'
import ResponseCheck from '../../ResponseGame/src/App.vue'
import LotteryGen from '../../lottery/src/App.vue'
import Tictacto from '../../tictacto/src/App.vue'
import GameMatcher from './GameMatcher.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/number-baseball', component: NumberBaseball},
        // { path: '/response-check', component: ResponseCheck},
        // { path: '/lottery-gen', component: LotteryGen },
        // { path: '/tictacto', component: Tictacto},
        { path: '/game/:name', component: GameMatcher}
    ]
});