import Vue from 'vue'
import Router from 'vue-router'

const  Home = r => require.ensure([], () => r(require('../page/home/home.vue')),'Home')
const Login = r => require.ensure([], () => r(require('../page/login/login.vue')),'Login')
const Tabs = r => require.ensure([], () => r(require('../page/tabs/tabs.vue')),'Tabs')
const Table = r => require.ensure([], () => r(require('../page/table/table.vue')),'Table')
const Form = r => require.ensure([], () => r(require('../page/form/form.vue')),'Form')
const Echarts = r => require.ensure([], () => r(require('../page/echarts/echarts.vue')),'Echarts')
const Donate = r => require.ensure([], () => r(require('../page/donate/donate.vue')),'Donate')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
       path: '/login', component: Login
    },
    {
       path: '/home', component: Home,
       children: [
          { path: '/tabs', component: Tabs },
          { path: '/table', component: Table },
          { path: '/form', component: Form },
          { path: '/echarts', component: Echarts },
          { path: '/donate', component: Donate },
        ]
    }
  ]
})
