import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  geohash: '31.22299,121.36025',//地址geohash值
  userInfo: null, //用户信息
  latitude: '', // 当前位置纬度
  longitude: '', // 当前位置经度
  login: true,//是否登录
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})