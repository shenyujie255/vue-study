<template>
  <div class="head_top">
    <!-- slot插槽(logo) -->
    <slot name='logo'></slot>
    <!-- 返回按钮 -->
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <!-- 登录注册 -->
    <router-link :to="userInfo? '/profile':'/login'"   v-if='signinUp'  class="head_login">
      <svg class="user_avatar" v-if="userInfo" fill='#fff'>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <!-- head标题 -->
    <section class="title_head ellipsis" v-if="headTitle">
        <span class="title_text">{{headTitle}}</span>
    </section>
    <!-- slot插槽(changecity) -->
    <slot name="changecity"></slot>
    <!-- slot插槽(miste-title) -->
    <slot name="miste-title"></slot>
    <!-- slot插槽(search) -->
    <slot name="search"></slot>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return { 
    }
  },
  props: ['signinUp', 'headTitle', 'goBack'],
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },
  mounted () {
    this.getUserInfo();
  },
  methods:{
    ...mapActions([
      'getUserInfo'
    ])
    },
}
</script>
<style scoped>
.head_top{
  width: 100%;
  height: 1.95rem;
  position: fixed;
  background: #3190e8;
  color: #fff;
  left: 0;
  top: 0;
}
.head_top .head_goback{
  width: .6rem;
  height: 1rem;
  margin-left: .4rem;
  line-height: 2.2rem;
}
.head_top .head_login{
  color: #fff;
  font-size: .65rem;
  position: absolute;
  right: .55rem;
  top: 50%;
  transform: translateY(-50%);
}
.head_top .head_login .user_avatar{
  width: .8rem;
  height: .8rem;
}
.head_top .login_span{
  color: #fff;
}
.head_top .title_head{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  text-align: center;
  transform: translate(-50%,-50%);
  color: #fff;
}
.title_text{
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    font-weight: bold;
}
</style>
