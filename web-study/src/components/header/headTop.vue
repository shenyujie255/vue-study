<template>
    <div class="head_top">
        <slot name="logo"></slot>
        <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </div>
        <div class="head_search">
            <input type="search" placeholder="搜索目的" class="serarch_ipt">
            <button></button>
        </div>
          <router-link to="/login" class="head_user">
            <svg class="login_avater" v-if="userInfo">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span">登录</span>
          </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: false
    }
  },
  methods: {
  },
  props: ['goBack']
}

</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.head_top {
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 1.33rem);
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  .head_goback {
  }
  .head_search {
    @include center;
    width: 50%;
    height: 1.33rem;
    .serarch_ipt{
      text-align: center;
      padding: .1rem .3rem;
    }
  }
  .head_user {
    @include ct;
    right: 0.45rem;
    @include sc(14px,#ffa800);
    .login_span{
      color: #ffa800;
    }
  }
}
</style>
