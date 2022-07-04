import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Main',
        component:()=>import('../view/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../view/Home')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../view/User')
            }
        ]
    },
 
]
const Router = new VueRouter({
    mode:'history',
    routes
})
export default Router