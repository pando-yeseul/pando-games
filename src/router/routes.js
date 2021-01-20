import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "../components/Main.vue";
import Games from "../components/Games.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            component:Main,
            name:'Main'
        },
        {
            path:"/games",
            component:Games,
            name:'Games',
        }
    ],
    scrollBehavior (){
        return{x : 0, y : 0}
    }
})