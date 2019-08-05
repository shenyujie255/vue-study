// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './config/rem'
import Fastclick from 'fastclick'
Vue.config.productionTip = false
// fastclick 3s事件
if ('addEventListener' in document) {
  document.addEventListener('DOMcontentLoaded', function () {
    Fastclick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
