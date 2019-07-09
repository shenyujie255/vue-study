import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      component: Home,
    }
  ]
})
