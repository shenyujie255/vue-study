<template>
  <div class="paddingTop search_page">
    <head-top go-back="ture" head-title="搜索"></head-top>
    <form class="search_from">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="searchValue" @input="checkInput">
      <input type="button" value="提交" class="search_button" @click="searchTarget('')">
    </form>
    <section class="search_history" v-if="searchHistory.length&&showHistory">
      <h4 class="search_history_title ellipsis">搜索历史</h4>
      <ul>
        <li class="search_history_li" v-for="(item, index) in searchHistory" :key="index">
          <span class="history_text ellipsis" @click="searchTarget(item)">{{ item }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="delete_icon" @click="delateHistory(index)">
            <line x1="8" y1="8" x2="18" y2="18" style="stroke:#999;stroke-width:3" />
            <line x1="18" y1="8" x2="8" y2="18" style="stroke:#999;stroke-width:3" />
          </svg>
        </li>
      </ul>
      <footer class="clear_history" @click="clearAllHistory()">清空搜索历史</footer>
    </section>
    <div class="search_none" v-if="emptyResult">很抱歉！无搜索结果</div>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
import { getStore,setStore } from "../../utils/mUtils";
import { searchRestaurant } from "../../service/getDate";
export default {
  data () {
    return {
      showHistory: true,  // 是否显示历史记录，只有在返回搜索结果后隐藏
      searchHistory: [],  // 搜索历史记录
      searchValue: '',// 搜索内容
      geohash: '',  // miste页面传递过来的地址信息
      emptyResult: false, // 搜索结果为空时显示
      restaurantList: [], // 搜索返回的结果
    }
  },
  mounted () {
    this.geohash = this.$route.params.geohash;
    //获取搜索历史记录
    if (getStore('searchHistory')){
      this.searchHistory = JSON.parse(getStore('searchHistory'));
    }
  },
  components: {
    headTop,
    footEnd,
  },
  methods: {
    async searchTarget(historyValue){
      if (historyValue) {
        this.searchValue = historyValue;
      }else if (!this.searchValue) {
        return
      }
      // 点击提交进行搜索，隐藏历史记录
      this.showHistory = false;
      // 获取搜索结果
      this.restaurantsList = await searchRestaurant(this.geohash,this.searchValue)    //后台接口数据有问题，暂时获取不了
      this.emptyResult = true;    
      /**
       * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
       * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
       */
      let history = getStore('searchHistory');
      if (history) {
          let checkrepeat = false;    //检测重复
          this.searchHistory = JSON.parse(history);
          this.searchHistory.forEach(item=>{  //遍历Store中的历史记录
            if (item == this.searchValue) {   //如果有重复则不做重复储存
              checkrepeat = true;
            }
          })
          if (!checkrepeat) {     //判断完成后进入下一页
              this.searchHistory.push(this.searchValue);
          }
      } else {
        this.searchHistory.push(this.searchValue);
      }
      setStore('searchHistory',this.searchHistory);   //存searchHistory到Store
    },
    //点击删除按钮，删除当前li历史记录
    delateHistory(index){
      this.searchHistory.splice(index,1);     //splice()方法向/从数组中添加/删除项目，然后返回被删除的项目。
      setStore('searchHistory',this.searchHistory);
    },
    //搜索结束后，删除搜索框内容值直到为空时清空搜索结果，并显示历史记录
    checkInput(){
      if (this.searchValue === '') {
        this.showHistory = true;  //显示历史记录
        this.restaurantList = []; //清空搜索结果
        this.emptyResult = false; //隐藏搜索为空提示
      }
    },
    // 清空所有搜索记录
    clearAllHistory(){
      this.searchHistory = [];
      setStore('searchHistory',this.searchHistory);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.search_page{
  margin-bottom: 1.95rem;
}
.search_from{
    display: flex;
    background-color: #fff;
    padding: .5rem;
    input{
        height:1.5rem;
    }
    .search_input{
        flex: 4;
        background-color: #f2f2f2;
        padding: 0 0.25rem;
        @include sc(.65rem, #333);
        font-weight: bold;
        border: .025rem solid #e2e2e2;
        border-radius: 0.125rem;
      }
    .search_button{
        flex: 1;
        margin-left: .2rem;
        padding: 0 0.25rem;
        @include sc(.65rem, #fff);
        background-color: #3190e8;
        font-weight: bold;
        border: .025rem solid #3190e8;
        border-radius: 0.125rem;
    }
}
.search_history{
  .search_history_title{
    @include sc(.6rem,#666);
    font-weight: bold;
    text-indent: .5rem;
    line-height: 2rem;
  }
  .search_history_li{
    background-color: #fff;
    @include fj(space-between);
    padding: 0 .3rem;
    align-items: center;
    line-height: 2rem;
    font-size: .7rem;
    border-bottom: .025rem solid #e4e4e4;
    .history_text{
      display: inline-block;
      width: 80%;
    }
    .delete_icon{
      @include wh(1rem,1rem);
    }
  }
  .clear_history{
    background-color: #fff;
    text-align: center;
    line-height: 2rem;
    @include sc(.7rem,#3190e8);
    font-weight: bold;
  }
}
.search_none{
  text-align: center;
  margin: 0 auto;
  font: 0.65rem/1.75rem "Microsoft YaHei";
  color: #333;
  background-color: #fff;
  margin-top: .125rem;
}
</style>

