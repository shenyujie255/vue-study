<template>
  <div class="home-container">
    <!-- head区域 -->
    <head-top signin-up='home'>
      <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
    </head-top>
    <!-- nav区域 -->
    <div class="city_nav">
        <div class="city_tip">
          <span class="tip_left">当前定位城市：</span>
          <span class="tip_right">定位不准时，请在城市列表中选择</span>
        </div>
        <router-link  :to="'/city/' + guessCityid" class="guess_city">
          <span>{{guessCity}}</span>
          <svg class="arrow_right" fill="#999">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </router-link>
    </div>
    <!-- 热门城市 -->
    <section class="hot_city">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylist clear">
        <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
        {{item.name}}
        </router-link>
      </ul>
    </section>
    <!-- 所有城市 -->
    <section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                      <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
      </section> 
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import { cityGuess,groupcity,hotcity } from '../../service/getDate.js'

export default {
  data () {
    return {
      guessCity: '',   //当前城市
      guessCityid: '', //当前城市id
      hotcity: [],     //热门城市列表
      groupcity: {},  //所有城市列表
    }
  },
  components:{
    headTop,
  },
  computed:{
    //所有城市按A-Z分组
    sortgroupcity(){
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {//String.fromCharCode方法将 Unicode 编码转为A-Z
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
        } 
      } return sortobj
      console.log(sortobj);
      
    }
    },
  mounted(){
      // 获取当前城市
      cityGuess().then(res => {
          this.guessCity = res.name;
          console.log(res);
          this.guessCityid = res.id;
      })
      //获取所有城市
      groupcity().then(res=>{
          this.groupcity = res;  
           
      });
      //获取热门城市
      hotcity().then(res=>{
          this.hotcity = res;
      })
      
    },
  methods:{
     //点击图标刷新页面
    reload(){
        window.location.reload();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.city_nav{
  padding-top: 2.35rem;
  margin-bottom: .4rem;
  background: #fff;
  border-top: 1px solid #fff;
}
.head_logo{
  font-size: .7rem;
  position: absolute;
  left:.4rem;
  top: 50%;
  width: 2.3rem;
  height: .7rem;
  font-weight: 400;
  color: #fff;
  transform: translateY(-50%);
}
.city_tip{
  display: flex;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 .45rem;
}
.city_tip .tip_left{
  color: #666;
  font-size: .55rem;
}
.city_tip .tip_right{
  color: #9f9f9f;
  font-size: .475rem;
  font-weight: 700;
}
.guess_city{
  display: flex;
  font: .75rem/1.8rem Microsoft YaHei;
  height: 1.8rem;
  align-items: center;
  padding:0 .45rem;
  justify-content: space-between;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.guess_city span{
  color: #3190e8;
}
.guess_city .arrow_right{
  width: .6rem;
  height: .6rem;
}
.hot_city{
  margin-bottom: .4rem;
  background: #fff;
}
.hot_city .city_title{
  font: .55rem/1.45rem Helvetica Neue;
  color: #666;
  font-weight: 400;
  text-indent: .45rem;
  border-bottom: 1px solid #e4e4e4;
  border-top: 2px solid #e4e4e4;
}
ul:after{
    clear:both;
    display:block;
    content:" ";
}
.citylist li{
  width: 25%;
  color: #3190e8;
  font: .6rem/1.75rem Microsoft YaHei;
  height: 1.75rem;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  float: left;
  text-align: center;
}
.letter_classify_li{
  margin-bottom: .4rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.letter_classify_li .city_title{
  color:#666;
  font-weight: 400;
  text-indent: .45rem;
  font: 0.55rem/1.45rem "Helvetica Neue";
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.letter_classify_li span{
  font-size: .475rem;
  color: #999;
}
.letter_classify_li .groupcity_name_container li{
  color: #666;
  width: 25%;
  font: .6rem/1.75rem Microsoft YaHei;
  height: 1.75rem;
  border-bottom: 0.025rem solid #e4e4e4;
  border-right: 0.025rem solid #e4e4e4;
  float: left;
  text-align: center;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.clear{
        zoom: 1;
    }
</style>

