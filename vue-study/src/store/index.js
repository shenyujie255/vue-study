import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  geohash: '31.22299,121.36025',//地址geohash值
  userInfo: null, //用户信息
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})