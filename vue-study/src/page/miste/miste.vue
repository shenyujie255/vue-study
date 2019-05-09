<template>
  <div class="miste_container">
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
    <h1>这是商铺列表页面</h1>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
export default {
  data() {
    return {
      misteTitle:'浙江人民广播电台东南',
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
.miste_container{
  padding-top: 2.35rem;
}
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
</style>
