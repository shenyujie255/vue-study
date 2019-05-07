// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './utils/rem'
import axios from 'axios'
// import {Header,Footer,Container,Main} from 'element-ui'

Vue.config.productionTip = false
//将axios绑定到vue原型中
Vue.prototype.$http = axios 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
