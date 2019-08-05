<template>
<div class="home-container">
    <!-- head -->
    <head-top>
        <div class="head_logo" slot="logo" @click="reload">
          <img src="../../assets/logo1.png" alt="">
        </div>
    </head-top>
    <!-- swiper -->
    <div class="swiper_container">

    </div>
    <!-- 首页nav -->
    <nav class="nav_containe">

    </nav>
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
.head_logo{
  left: .5rem;
  img{
    width: 2rem;
    height: 1rem;
  }
}
</style>
