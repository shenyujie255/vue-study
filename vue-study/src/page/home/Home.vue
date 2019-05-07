<template>
  <div class="home-container">
    <!-- head区域 -->
    <head-top>
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
          <span class="arrow_right"></span>
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
                    <h4 class="city_title">{{key}}<span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </section> 
    <!-- <router-link to="/home">登录</router-link> -->
    <foot></foot>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import foot from '../../components/footer/foot'

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
    foot
  },
  computed:{
    //所有城市按A-Z分组
    sortgroupcity(){
      let sortobj = {};
      for (let i = 0; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
          console.log(i);
        } 
       
      } return sortobj
    }
    },
  mounted(){
      this.Hot();
      this.Cityguess();
      this.citygroup();
    },
  methods:{
     //点击图标刷新页面
    reload(){
        window.location.reload();
    },
    Hot() {
      this.$http.get('https://elm.cangdu.org/v1/cities?type=hot').then(res => {
        this.hotcity =  res.data;
    })
    },
    Cityguess(){
      this.$http.get('https://elm.cangdu.org/v1/cities?type=guess').then(res =>{
        this.guessCity = res.data.name;
        this.guessCityid = res.data.id;
      })
    },
    citygroup(){
      this.$http.get('https://elm.cangdu.org/v1/cities?type=group').then(res =>{
        this.groupcity = res.data;
      })
    }
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
.letter_classify_li .groupcity_name_container li{
  color: #666;
  width: 25%;
  color: #3190e8;
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

