<template>
  <div class="paddingTop search_page">
    <head-top go-back="ture" head-title="搜索"></head-top>
    <form class="search_from">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
      <input type="button" value="提交" class="search_button">
    </form>
    <section class="search_history"></section>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="delete_icon">
        <line x1="8" y1="8" x2="18" y2="18" style="stroke:#999;stroke-width:3" />
        <line x1="18" y1="8" x2="8" y2="18" style="stroke:#999;stroke-width:3" />
    </svg> -->
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
export default {
  data () {
    return {
      
    }
  },
  components: {
    headTop,
    footEnd,
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
</style>

