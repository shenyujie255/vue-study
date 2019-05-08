<template>
  <div class="login_container">
    <head-top go-back="ture" head-title="密码登录"></head-top>
    <!-- login界面 -->
    <form action="" class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号">
      </section>
      <section class="input_container">
        <input type="text" placeholder="密码">
        <div class="button_switch">
          <div class="circle_button"></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码">
        <div class="img_change">
          <img src="../../assets/下载 (1).png" alt="">
          <div class="change_image">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <!-- 登录按钮 -->
    <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
    <div class="loginbutton">登录</div>
    <router-link to="/forget" class="to_forget">重置密码？</router-link>
  </div>
</template>
<script>
import headTop from '../../components/head/head'
export default {
  data () {
    return {
      loginWay: false, //登录方式，默认短信登录
    }
  },
 components:{
   headTop,
 }
}
</script>

<style scoped>
form {
    display: block;
    margin-top: 0em;
}
.login_container{
  padding-top: 1.95rem;
  color: #f5f5f5;
  font-family: Helvetica Neue,Tahoma,Arial;
}
.loginForm{
  margin-top: .6rem;
  background-color: #fff;
}
.input_container{
  display: flex;
  justify-content: space-between;
  padding: .6rem .8rem;
  border-bottom: 1px solid #f1f1f1;
}
.input_container input{
  font-size: .7rem;
  color: #666;
  border-style: none;
  font-family: Helvetica Neue,Tahoma,Arial;
  outline: none;
}
.button_switch{
  background-color: #ccc;
  width: 2rem;
  height: 0.7rem;
  padding: 0 .2rem;
  display: flex;
  justify-content: center;
  border: 1px;
  position: relative;
  border-radius: 0.5rem;
}
.circle_button{
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #f1f1f1;
  border-radius: 50%;
  box-shadow: 0 0.02667rem 0.05333rem 0 rgba(0, 0, 0, 0.1);
  top: -0.2rem;
  left: -0.3rem;
  transition: all 0.3s;
  z-index: 1;
}
.button_switch span{
  font-size: 0.45rem;
  color: #fff;  
  line-height: .6rem;
  transform: translateY(0.005rem);
}
.captcha_code_container{
  height: 2.2rem;
}
.img_change{
  display: flex;
  align-items: center;
}
.img_change img{
  width: 3.5rem;
  height: 1.5rem;
  margin-right: .2rem;
}
.change_image{
  width: 2rem;
}
.change_image p{
  font-size: 0.55rem;
  color:#666;
  font-family: Helvetica Neue,Tahoma,Arial;
}
.login_tips{
  font-size: .5rem;
  color: rgb(255, 0, 0);
  line-height: .5rem;
  padding: .4rem .6rem;
}
.loginbutton{
  font-size: .7rem;
  background-color: #4cd964;
  padding: .5rem 0;
  margin: 0 .5rem 1rem;
  text-align: center;
  border-radius: 0.15rem;
  border: 1px;
}
.to_forget{
  float: right;
  color: #3b95e9;
  font-size: 0.6rem;
  margin-right: .3rem;
}
</style>
