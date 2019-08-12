<template>
<div class="home-container">
    <!-- head -->
    <head-top>
        <div class="head_logo" slot="logo">
          <span class="logo" @click="reload"></span>
        </div>
    </head-top>
    <!-- swiper -->
    <section class="swiper_container">
        <div class="swiper_warpper">
          <a href="">
            <img src="../../assets/wKgE2l1M5uOAJX3lAAmGcOXJQiQ601.jpg" alt="">
          </a>
        </div>
        <div class="swiper-pagination"></div>
    </section>
    <!-- 首页nav -->
    <section class="nav_containe">

    </section>
    <!-- 推荐攻略 -->
    <section class="recommend">
      <ul>
        <li></li>
      </ul>
    </section>
    <!-- footer -->
</div>
</template>

<script>
import headTop from '../../components/header/headTop'
import footGuide from '../../components/footer/footGuide'
export default {
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    // 点击图标刷新页面
    reload () {
      window.location.reload()
    }
  },
  components: {
    headTop,
    footGuide
  }
}
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.head_logo{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  height: 1.33rem;
  .logo{
    width: 2.51rem;
    height: .67rem;
    background: url('../../assets/logo1.png') no-repeat;
    background-size: 2.16rem .56rem;
    display: inline-block;
    background-position: 10px 3px;
  }
}
.swiper_container{
  position: relative;
  width: 960px;
  height: 100%;
  padding-top: 1.33rem;
  .swiper_warpper{
    img{
      width: 320px;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
