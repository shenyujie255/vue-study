import Vue from 'vue'
import Router from 'vue-router'

const  Home = r => require.ensure([], () => r(require('../page/home/home.vue')),'Home')
const Dashboard = r => require.ensure([], () => r(require('../page/dashboard/dashboard.vue')),'Dashboard')
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
      redirect: '/table',
    },
    {
       path: '/login', component: Login
    },
    {
       path: '/', component: Home,
       children: [
        { path: '/dashboard', component: Dashboard, meta: { title: '系统首页' } },
        { path: '/tabs', component: Tabs, meta: { title: 'tab选项卡' } },
        { path: '/table', component: Table, meta: { title: '基本表格' }},
        { path: '/form', component: Form , meta: { title: '基本表单' }},
        { path: '/echarts', component: Echarts, meta: { title: 'schart图表' } },
        { path: '/donate', component: Donate, meta: { title: '支持作者' } },
        ]
    },
    
  ]
})
