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
                path:'/mall',
                name:'mall',
                component:()=>import('../view/Mall')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../view/User')
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../view/other/pageOne.vue')
            },
            {
                path:'/page2',
                name:'page2',
                component:()=>import('../view/other/pageTwo.vue')
            }
        ]
    },
 
]
const Router = new VueRouter({
    mode:'history',
    routes
})
export default Router