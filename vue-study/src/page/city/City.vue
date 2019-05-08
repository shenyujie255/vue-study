<template>
  <div class="city_container"> 
    <head-top :head-title="cityname" go-back="ture">
      <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
    </head-top>
    <!-- city搜索历史 -->
    <form class="city_form">
      <div>
        <input type="text" placeholder="输入学校、商务楼、地址"  class="city_input input_style">
      </div>
      <div>
        <input type="submit" value="提交"  class="city_button input_style">
      </div>
    </form>
    <header class="search_history">搜索历史</header>
    <ul class="getsearch_ul">
      <li>
        <h4></h4>
        <p></p>
      </li>
    </ul>
  </div>
</template>
<script>
import headTop from '../../components/head/head'
import {currentcity} from '../../service/getDate.js'
export default {
  data () {
    return {
      cityid:'', // 当前城市id
      cityname:'', //城市名字
    }
  },
  mounted () {
      this.cityid = this.$route.params.cityid;
      //获取当前城市名字
      currentcity(this.cityid).then(res => {
      this.cityname = res.name;
      console.log(res.name)
      })
  },
  components:{
    headTop,
  },
  methods: {
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
  top: 28%;
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
</style>
