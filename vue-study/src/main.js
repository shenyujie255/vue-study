// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/index'
import './utils/rem'
import axios from 'axios'
// import {Header,Footer,Container,Main} from 'element-ui'

Vue.config.productionTip = false
//将axios绑定到vue原型中
Vue.prototype.$http = axios 
// axios post方法请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
			return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

new Vue({
	router,
	store,
}).$mount('#app')
