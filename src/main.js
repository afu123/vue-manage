/*
 * @Author: zhaojian
 * @Date: 2022-07-04 08:48:55
 * @LastEditors: zhaojian
 * @LastEditTime: 2022-07-04 08:57:25
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from '../store/index'

Vue.prototype.$store = store

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
