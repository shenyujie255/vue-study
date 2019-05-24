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
      <div class="swiper_container">
        <div class="swiper_wrapper">
          <div class="swiper_slide food_types_container" v-for="(item, index) in foodTypes" :key="index" style="width:354px;">
            <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="foodItem_link">
              <figure>
                <img :src="imgBaseUrl + foodItem.image_url">
                <figcaption>{{foodItem.title}}</figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="swiperlist">
          <span class="swiperlist_bullet swiperlist_active"></span><span class="swiperlist_bullet"></span>
        </div>
      </div>
    </div>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
import { misteAddress,cityGuess,misteFoodTypes } from "../../service/getDate";

export default {
  data() {
    return {
      geohash:'',   // city页面传递过来的地址geohash
      misteTitle: '请选择地址...',  // miste页面头部标题
      imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      foodTypes: [],  // 食品分类列表
    }
  },
  async beforeMount(){
    if (!this.$route.query.geohash) {
      const adress = await cityGuess();
      this.geohash = address.latitude + ',' + address.longitude;
    } else {
      this.geohash = this.$route.query.geohash
    }//获取位置信息
    let res = await misteAddress(this.geohash);
    this.misteTitle = res.name; 
  },
  mounted () {
    //获取导航食品类型列表
    misteFoodTypes(this.geohash).then(res =>{
          let resLength = res.length;
          let resArr = [...res]; // 返回一个新的数组				
          let foodArr = [];
    		for (let i = 0, j = 0; i < resLength; i += 16, j++) {
    			foodArr[j] = resArr.splice(0, 8);
    		}
        this.foodTypes = foodArr;
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
    	}
  },
  components:{
    headTop,
    footEnd,
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
  color: #fff;
}
.miste_title .title_text{
  font-size: .8rem;
  display: block;
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
.mist_nav .swiper_container{
  position: relative;
  margin: auto;
  overflow: hidden;
  z-index: 1;
  height: auto;
  padding-bottom: .6rem;
  width: 100%;
}
.swiper_container{
  width: 100%;
  height: auto;
  padding-bottom: .6rem;
}
.swiper_wrapper{
  width: 100%;
  height: 100%;
  display: flex;
}
.food_types_container{
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide{
  width: 100%;
  height: 100%;
  overflow: hidden;
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
</style>
