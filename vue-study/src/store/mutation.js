import { GET_USERINFO,SAVE_GEOHASH } from "./mutation-type";
import { getStore } from "../utils/mUtils";

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
	// 保存geohash
	[SAVE_GEOHASH](state, geohash){
		state.geohash = geohash;
	},
}