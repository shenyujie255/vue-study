<template>
<div class="service_page">
  <head-top go-back="true" head-title="服务中心"></head-top>
  <section class="service_call">
    <a href="javascript" class="service_call_l">
      <svg>
        <use xmlns:link="http://www.w3.org/2000/xlink" xlink:href="#human"></use>
      </svg>
      <span>在线客服</span>
    </a>
    <a href="javascript" class="service_call_r">
      <svg>
        <use xmlns:link="http://www.w3.org/2000/xlink" xlink:href="#phone"></use>
      </svg>
      <span>在线客服</span>
    </a>
  </section>
  <section class="hot_question">
    <h4 class="question_head">热门问题</h4>
    <ul>
      <li class="question_title" v-for="(item, index) in questionTitle" :key="index">
        <span>{{item}}</span>
        <svg class="arrow-svg" fill="#999">
          <use xmlns:link="http://www.w3.org/2000/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </li>
    </ul>
  </section>
</div>
</template>

<script>
import headTop from '../../components/head/head'
import { getService } from "../../service/getDate";
  export default {
    data () {
      return {
        questionTitle:[],  //问题标题
        questionDetail:[],  //问题详情
      }
    },
    mounted(){
      this.initData();
    },
    components:{
      headTop,
    },
    methods:{
      async initData(){
        //获取信息
        this.serviceData = await getService();
        // console.log(this.serviceData)
        // Object.keys 返回一个所有元素为字符串的数组
        Object.keys(this.serviceData).forEach(item => {
        let avoidRepeat = false;
        this.questionTitle.forEach((insertItem) => {
            //防止重复的数据，后台返回的数据有些是重复的
            // console.log(this.questionTitle);
            if (insertItem == this.serviceData[item]) {
                avoidRepeat = true;
            }
            })
        //将标题和内容分别放进数组中
        if (item.indexOf('Caption') !== -1 && !avoidRepeat) {
            this.questionTitle.push(this.serviceData[item]);
        }else if(!avoidRepeat){
            this.questionDetail.push(this.serviceData[item]);
        }
        })  
      }
    }
  }
</script>

<style lang='scss' scoped>
.service_page{
  background: #fff;
  padding-top: 1.95rem;
  p, span{
    font-family: Helvetica Neue,Tahoma,Arial;
  }
}
.service_call{
  display: flex;
  justify-content: space-between;
  a{
    display: flex;
    flex: 1;
    border-bottom: 1px solid #f5f5f5;
    justify-content: center;
    height: 4rem;
    align-items: center;
    flex-direction: column;
    svg{
      width: 1rem;
      height: 1rem;
    }
    span{
      font-size: .6rem;
      color: #666;
      margin-top: .4rem;
    }
  }
  .service_call_l{
    border-right: 1px solid #f5f5f5;
  }
}
.hot_question{
  .question_head{
    display: flex;
    align-items: center;
    line-height: 3rem;  
    padding-left: .7rem;
    font-size: .75rem;
    color: #333;
    border-bottom: 1px solid #f5f5f5;
  }
  .question_title{
    display: flex;
    justify-content: space-between;
    padding: 0 .7rem;
    border-bottom: 1px solid #f5f5f5;
    line-height: 2rem;
    align-items: center;
    svg{
      width: .6rem;
      height: .6rem;
    }
    span{
      font-size: .6rem;
      color:#666;
    }
  }
}
</style>