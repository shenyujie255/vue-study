<template>
  <div class="head_top">
    <router-link to="/home" signin-up='home'>
      <span class="head_logo" >ele.me</span>
    </router-link>
    <router-link to="/login" class="head_login">
      <span class="login_span">登录|注册</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return { 
    }
  },
  methods:{
    },
}
</script>
<style lang="scss" scoped>
.head_top{
  width: 100%;
  height: 1.95rem;
  position: fixed;
  background: #3190e8;
  color: #fff;
  left: 0;
  top: 0;
}
.head_logo{
  font-size: .7rem;
  width: 2.3rem;
  height: .7rem;
  text-align: center;
  left: .34rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}
.login_span{
  position: absolute;
  right: .55rem;
  color: #fff;
  font-size: .65rem;
  transform: translateY(-50%);
  top: 50%
}
</style>
