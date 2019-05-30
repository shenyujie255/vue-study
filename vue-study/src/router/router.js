import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/Home.vue'
import App from '../App'
import Login from '../page/lgoin/Login.vue'
import City from '../page/city/City.vue'
import Forget from '../page/forget/forget.vue'
import Miste from '../page/miste/miste.vue'
import Search from '../page/search/search.vue'
import Profile from '../page/profile/profile.vue'
import Order from '../page/order/order.vue'
import Download from '../page/download/download.vue'
import Service from '../page/service/service.vue'
import Info from '../page/profile/chilrdren/info.vue'
import Address from '../page/profile/chilrdren/children/address.vue'
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
        },
        { //商铺列表页面
          path: '/miste', component: Miste 
        },
        { //搜素页面
          path: '/search/geohash', component: Search 
        },
        { //信息页面
          path: '/profile', component: Profile,
          children:[{
             path: 'info', component: Info,
             children:[{
               path: 'address',component: Address,
             }] 
          }]
        },
        { //订单页面
          path: '/order', component: Order
        },
        { //下载页面
          path: '/download', component: Download
        },
        { //服务中心页面
          path: '/service', component: Service 
        }
      ]
    }
  ]
})
