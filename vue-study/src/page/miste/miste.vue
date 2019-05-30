<template>
  <div class="miste_container">
    <!-- head -->
    <head-top signin-up='miste'>
      <router-link to="/search/geohash" class="link_search" slot="search">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
	    			<circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" stroke-width="1" fill="none"/>
	    			<line x1="14" y1="14" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
	    	</svg>
      </router-link>
      <router-link to="/home" slot="miste-title" class="miste_title">
        <span class="title_text ellipsis">{{ misteTitle }}</span>
      </router-link>
    </head-top>
    <!-- 食品分类列表 -->
    <div class="mist_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index" style="width:354px;">
            <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="foodItem_link">
              <figure>
                <img :src="imgBaseUrl + foodItem.image_url">
                <figcaption>{{foodItem.title}}</figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <!-- Swiper分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="shop_list_container">
      <header class="shop_list_title">
        <svg class="shop_icon">
          <use xmlns="http://www.w3.org/2000/svg" xlink:href="#shop"></use>
        </svg>
        <span class="shop_head_title">附近商家</span>
      </header>   
      <shop-list v-if="hasGetData"></shop-list>
    </div>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
import shopList from '../../components/commons/shoplist'
import { misteAddress,cityGuess,misteFoodTypes } from "../../service/getDate"
import "../../style/swiper.min.css"
import Swiper from 'Swiper'   //Swiper插件
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      geohash:'',   // city页面传递过来的地址geohash
      misteTitle: '请选择地址...',  // miste页面头部标题
      imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      foodTypes: [],  // 食品分类列表
      hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
    }
  },
  async beforeMount(){
    if (!this.$route.query.geohash) {
      const adress = await cityGuess();   //做判断如果flase则获取首页默认位置
      this.geohash = address.latitude + ',' + address.longitude;
    } else {
      this.geohash = this.$route.query.geohash
    }
    // 保存geohash到vuex
    this.SAVE_GEOHASH(this.geohash);
    //获取位置信息
    let res = await misteAddress(this.geohash);
    this.misteTitle = res.name; 
    // console.log(this.misteTitle);
    //  记录经纬度到vuex
    this.RECORD_ADDRESS(res);
    this.hasGetData = true;
  },
  mounted () {
    //获取导航食品类型列表
    misteFoodTypes(this.geohash).then(res =>{
          let resLength = res.length;
          let resArr = [...res]; // 返回一个新的数组				
          let foodArr = [];
    		for (let i = 0, j = 0; i < resLength; i += 8, j++) {
          foodArr[j] = resArr.splice(0, 8);
    		}
        this.foodTypes = foodArr;
        }).then(()=>{//初始化Swiper
            new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 分页器
            pagination: {
            el: '.swiper-pagination',
            },
            })
          })
  },
  methods: {
    // 解码url地址，求去restaurant_category_id值
    	getCategoryId(url){
    		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    		if (/restaurant_category_id/gi.test(urlData)) {
    			return JSON.parse(urlData).restaurant_category_id.id
    		}else{
    			return ''
    		}
      },
      ...mapMutations([
        'SAVE_GEOHASH','RECORD_ADDRESS'
      ])
  },
  components:{
    headTop,
    footEnd,
    shopList,
  }
}
</script>
<style scoped>
.link_search{
  position: absolute;
  left: .8rem;
  width: .9rem;
  height: .9rem;
  top: 50%;
  transform: translateY(-50%);
}
.miste_title{
  position: absolute;
  text-align: center;
  left: 50%;
  width: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin-left: -.5rem;
}
.miste_title .title_text{
  font-size: .8rem;
  display: block;
  color: #fff;
}
.miste_title .ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}
.mist_nav{
  padding-top: 2.1rem;
  background-color: #fff;
  height: 10.6rem;
  border-bottom: .025rem solid #e4e4e4;
}
.swiper-container{
  width: 100%;
  height: auto;
  padding-bottom: .6rem;
}
.swiper-container .swiper-pagination{
  bottom: .2rem;
}
.food_types_container{
  display: flex;
  flex-wrap: wrap;
}
.foodItem_link{
  width: 25%;
  padding: .3rem 0rem;
  display: flex;
  justify-content: center;
}
.foodItem_link figure img{
  width: 1.8rem;
  height: 1.8rem;
  margin-bottom: .3rem;
}
.foodItem_link figure figcaption{
  font-size: .55rem;
  color: #666;
  text-align: center;
}
.swiperlist{
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: .2rem;
}
.swiperlist_bullet{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  display: inline-block;
  margin: 0 5px;
  opacity: .2;
}
.swiperlist .swiperlist_active{
  background: #007aff;
  opacity: 1;
}
.shop_list_container{
  margin-top: .4rem;
  background: #fff;
  border-top: .025rem solid #e4e4e4;
}
.shop_list_container .shop_icon{
  width: .6rem;
  height: .6rem;
  fill: #999;
  margin-left: .6rem;
  vertical-align: middle;
}
.shop_list_container .shop_head_title{
  font: 0.55rem/1.6rem "Microsoft YaHei";
  color: #999;
}
</style>
