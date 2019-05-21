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
          <div class="swiper_slide food_types_container">
            <router-link to="">
              <figure>
                <img src="">
                <figcaption></figcaption>
              </figure>
            </router-link>
          </div>
        </div>
        <div class="swiperlist"></div>
      </div>
    </div>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'

export default {
  data() {
    return {
      misteTitle: '请选择地址...',
    }
  },
  mounted () {
  },
  methods: {
    
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
</style>
