import { GET_USERINFO,SAVE_GEOHASH,RECORD_ADDRESS,RECORD_USERINFO,OUT_LOGIN } from "./mutation-type";
import { getStore,setStore } from "../utils/mUtils";

export default{
  //获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = null;
		}
	},
	// 记录用户信息
	[RECORD_USERINFO](state,info){
		state.userinfo = info;
		setStore('user_id', info.user_id); //存储store
		state.login = true;
	},
	// 保存geohash
	[SAVE_GEOHASH](state, geohash){
		state.geohash = geohash;
	},
	// 记录经纬度
	[RECORD_ADDRESS](state,{
		latitude,
		longitude
	}){
		state.latitude = latitude;
		state.longitude = longitude;
	},
	//退出登录
	[OUT_LOGIN](state) {
		state.userInfo = {};
		state.login = false;
	},
}