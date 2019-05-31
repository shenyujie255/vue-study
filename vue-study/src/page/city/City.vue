<template>
  <div class="city_container"> 
    <head-top :head-title="cityname" go-back="ture">
      <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </head-top>
    <!-- city搜索历史 -->
    <form class="city_form" v-on:submit.prevent>
      <div>
        <!-- 双向绑定信息渲染到getsearch_ul -->
        <input type="text" placeholder="输入学校、商务楼、地址"  class="city_input input_style" v-model="inputVaule">
      </div>
      <div>
        <!-- 提交按钮，调用postpois方法-->
        <input type="submit" value="提交"  class="city_button input_style" @click="postpois">
      </div>
    </form>
    <header v-if="historytitle" class="search_history">搜索历史</header>
    <ul class="getsearch_ul">
      <li v-for="(item, index) in placelist" @click="nextpage(index,item.geohash)" :key="index">
        <h4 class="pois_name ellipsis">{{ item.name }}</h4>
        <p class="pois_address ellipsis">{{ item.address }}</p>
      </li>
    </ul>
    <footer class="clear_all_history"  v-if="historytitle&&placelist.length"  @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
  </div>
</template>
<script>
import headTop from '../../components/head/head'
import {currentcity,searchplace} from '../../service/getDate.js'
import { getStore,setStore,removeStore } from "../../utils/mUtils.js";


export default {
  data () {
    return {
      inputVaule:'', // 搜索地址
      cityid:'', // 当前城市id
      cityname:'', //城市名字
      historytitle: true, //默认显示搜索历史头部，点击搜索后隐藏
      placelist:[],       // 搜索地址列表
      placeNone: false,   //默认不显示，搜索无结果，显示提示信息
      placeHistory:[],  // 历史搜索列表
    }
  },
  mounted () {
      this.cityid = this.$route.params.cityid;
      //获取当前城市名字
      currentcity(this.cityid).then(res => {
      this.cityname = res.name;
      }),
      this.initData();
  },
  components:{
    headTop,
  },
  methods: {
    // 调用postpois方法提交inputvalue信息
    postpois(){
       if (this.inputVaule) {
        searchplace(this.cityid, this.inputVaule).then(res=>{
          this.historytitle = false;
          this.placelist = res;
          console.log(this.placelist)
          //三目运算符判断是否显示placeNone
          this.placeNone = res.length? false : true;
        })
      }
    },
    //获取搜索历史记录
    initData(){
      //获取搜索历史记录
      if(getStore('placeHistory')){
        this.placelist = JSON.parse(getStore('placeHistory'));
      }else{
        this.placelist = [];
      }
    },
    //跳转进入商铺列表页面
    nextpage(index, geohash){
        /**
       * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
       * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
       */
        let history = getStore('placeHistory');
        let choosePlace = this.placelist[index];
        if (history) {
        let checkrepeat = false;
        this.placeHistory = JSON.parse(history);   //JSON.parse将接受的数据转换成对象
        this.placeHistory.forEach(item => {
        if (item.geohash == geohash) {
          checkrepeat = true;
        }
        })
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace)
        }
        }else {
          this.placeHistory.push(choosePlace)
        }
        setStore('placeHistory',this.placeHistory)
        this.$router.push({path:'/miste', query:{geohash}})
    },
    //清除所有搜索方法
    clearAll(){
      removeStore('placeHistory');
      this.initData();
    }
  },
}
</script>

<style scoped>
.city_container{
  padding-top: 2.35rem;
}
.change_city{
  right: .4rem;
  position: absolute;
  font-size: .6rem;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
.city_form{
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-top: .4rem;
}
.city_form div{
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.input_style{
width: 100%;
height: 1.4rem;
margin-bottom: .4rem;
outline: none;
border-radius: .1rem;
border: none;
font-family: "Microsoft Yahei";
}
.city_form .city_input{
  border: 1px solid #e4e4e4;
  font-size: 0.65rem;
  padding: 0 0.3rem;
}
.city_button{
  background-color: #3190e8;
  color: #fff;
  font-size: 0.65rem;
}
.search_history{
  font: 0.475rem/0.8rem "Microsoft YaHei";
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-left: .5rem;
  color: #333;
}
.getsearch_ul{
  background: #fff;
  border-top: 1px solid #e4e4e4;
}
.getsearch_ul li{
  border-bottom: 1px solid #e4e4e4;
  padding-top: .65rem;
  margin:  0 auto;
}
.getsearch_ul li .pois_name{
  width: 90%;
  font-size: .65rem;
  color:#333;
  margin: 0 auto .35rem;
}
.getsearch_ul li .pois_address{
  width: 90%;
  margin: 0 auto .55rem;
  font-size: .45rem;
  color: #999;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search_none_place{
  font: 0.65rem/1.75rem "Microsoft YaHei";
  background-color: #fff;
  text-indent: .5rem;
  color: #333;
  margin: 0 auto;
}
.clear_all_history{
  text-align: center;
  color: #666;
  font-size: .7rem;
  background-color: #fff;
  line-height: 2rem;
}
</style>
