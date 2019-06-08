import App from '../App'
// router按需加载
const Home = r => require.ensure([], () => r(require('../page/home/Home.vue')),'Home')
const Login = r => require.ensure([], () => r(require('../page/lgoin/Login.vue')),'Login')
const City = r => require.ensure([], () => r(require('../page/city/City.vue')),'City') 
const Forget = r => require.ensure([], () => r(require('../page/forget/forget.vue')),'Forget')
const Miste = r => require.ensure([], () => r(require('../page/miste/miste.vue')),'Miste')
const Search = r => require.ensure([], () => r(require('../page/search/search.vue')),'Search')
const Profile = r => require.ensure([], () => r(require('../page/profile/profile.vue')),'Profile')
const Order = r => require.ensure([], () => r(require('../page/order/order.vue')),'Order')
const Download = r => require.ensure([], () => r(require('../page/download/download.vue')),'Download')
const Service = r => require.ensure([], () => r(require('../page/service/service.vue')),'Service')
const Info = r => require.ensure([], () => r(require('../page/profile/chilrdren/info')),'Info')
const Address = r => require.ensure([], () => r(require('../page/profile/chilrdren/children/address.vue')),'Address')
const Food = r => require.ensure([],() => r(require('../page/food/food.vue')),'Food')

 export default [{
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
          path: '/miste', component: Miste,
          meta: { keepAlive: true },    //组件需要被缓存
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
        },
        { //food页面
          path: '/food', component: Food 
        }
      ]
    }]
