import { get,post } from "../service/http";
import {getStore} from '../utils/mUtils'

/**
 * 获取首页默认地址
 */
export const cityGuess = () => get('/v1/cities',{
	type:'guess'
})

/**
 * 获取首页热门城市
 */
export const hotcity = () => get('/v1/cities',{
	type:'hot'
})

/**
 * 获取首页所有城市
 */

export const groupcity = () => get('/v1/cities',{
	type:'group'
})


export const  currentcity = number  => get('/v1/cities/'+ number);

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => get('/v1/pois',{
	type: 'search',
	city_id: cityid,
	keyword: value
})

/**
 * 获取msite页面地址信息
 */

export const misteAddress = geohash => get('/v2/pois/' + geohash);

/**
 * 获取用户信息
 */

export const getUser = () => get('/v1/user', {user_id: getStore('user_id')});
/**
 * 获取验证码
 */
export const getcaptchas = () => post('/v1/captchas',{});

/**
 * 获取用户信息
 */
export const accountLogin = (username,password,captcha_code) => post('/v2/login',{username,password,captcha_code});

/**
 * 获取食品列表
 */
export const misteFoodTypes = geohash => get('/v2/index_entry',{
	geohash,
	group_type: '1',
	'flags[]': 'F'
});