import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
import Login from '../page/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
       path: '/login', component: Login
    }
  ]
})
