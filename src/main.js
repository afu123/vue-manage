/*
 * @Author: zhaojian
 * @Date: 2022-07-04 08:48:55
 * @LastEditors: zhaojian
 * @LastEditTime: 2022-07-04 08:57:25
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI, { Menu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from '../store/index'
import http from 'axios'
import '../src/api/mock'

Vue.prototype.$store = store
Vue.prototype.$http = http

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !=='login'){
    next({name:'login'})
  }else if(token && to.name ==='login') {
    next({name:'home'})
  }else {
    next()
  }
})
//解决多次点击路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
    
    console.log(39,Menu);
  }
}).$mount('#app')
