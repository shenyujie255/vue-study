import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home.vue'
import App from '../App'
import Login from '../page/lgoin/Login.vue'
import City from '../page/city/City.vue'
import Forget from '../page/forget/forget.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children:[//二级路由。对应App.vue
        { //地址为空时跳转home页面
          path: '', redirect:'/home'
        },
        {//首页
          path: '/home', component:Home
        },
        { //登录注册页面
          path: '/login', component: Login
        },
        { //选择城市页面
          path: '/city/:cityid', component: City
        },
        { //重置密码页面
           path: '/forget', component: Forget 
        }
      ]
    }
  ]
})
