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
 * 获取商铺列表
 */
export const shopList = (latitude, longitude,offset,restaurant_category_id,order_by,) => get('/shopping/restaurants',{
	latitude,
	longitude,
	offset,
	restaurant_category_id,
	order_by,
});

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

/**
 * 获取服务中心热门问题
 */
export const getService = () => get('/v3/profile/explain');

/**
 * 退出登录
 */
export const signout = () => get('/v2/signout');

export const searchRestaurant = (geohash,keyword) => get('/v4/restaurants',{
	'extras[]': 'restaurant_activity',
	geohash,
	keyword,
	type: 'search'
});
/**
 * 筛选列表的配送方式
 */
export const foodDelivery =(latitude,longitude) => get('/shopping/v1/restaurants/delivery_modes',{
	latitude,
	longitude,
	kw: ''
});

/**
 * 筛选列表的商家属性
 */
export const foodActivity = (latitude,longitude) => get('/shopping/v1/restaurants/activity_attributes',{
	latitude,
	longitude,
	kw: ''
})