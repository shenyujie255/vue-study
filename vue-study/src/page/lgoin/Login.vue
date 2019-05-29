<template>
  <div class="login_container">
    <head-top go-back="ture" :head-title="loginWay? '登录':'密码登录'">

    </head-top>
    <!-- login界面 -->
    <form action="" class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码"  v-model="passWord">
        <input v-else type="text" placeholder="密码" v-model="passWord">
        <div class="button_switch" :class="{change_to_text: showPassword}">
          <div class="circle_button" @click="changePassWordType" :class="{trans_to_right: showPassword}"></div>
          <span>abc</span>
          <span class="drop">...</span>
        </div>
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码"  v-model="codeNumber"  maxlength="4">
        <div class="img_change">
          <img v-show="captchaCodeImg" :src="captchaCodeImg">
          <div class="change_image">
            <p>看不清</p>
            <p class="Another_one" @click="getCaptchaCode">换一张</p>
          </div>
        </div>
      </section>
    </form>
    <p class="login_tips">
        温馨提示：未注册过的账号，登录时将自动注册
    </p>
    <p class="login_tips">
        注册过的用户可凭账号密码登录
    </p>
    <!-- 登录按钮 -->
    <div class="loginbutton" @click="mobileLogin">登录</div>
    <router-link to="/forget" class="to_forget">重置密码？</router-link>
  </div>
</template>
<script>
import headTop from '../../components/head/head'
import { getcaptchas,accountLogin } from "../../service/getDate";
import { imgBaseUrl } from "../../config/env";
export default {
  data () {
    return {
      loginWay: false, //登录方式，默认短信登录
      userAccount: null,  //用户名
      passWord: null,  //密码
      showPassword: false,  // 是否显示密码,默认不显示
      captchaCodeImg: null, //验证码图片地址
      codeNumber:null,  //验证码
      userInfo:null,  //用户信息
    }
  },
 components:{
   headTop,
 },
created () {
  this.getCaptchaCode()
},
 methods: {
  //  show(){
  //    console.log(this.userAccount)
  //是否显示密码
  changePassWordType(){
    this.showPassword = !this.showPassword
  },
  //获取验证码 注：这里使用异步promise
  async getCaptchaCode(){
    let res = await getcaptchas();
    this.captchaCodeImg = res.code;
  },
  async mobileLogin(){
    if (!this.userAccount){
      alert('请输入用户名/密码/验证码')
      return
    }else if(!this.passWord){
      alert('请输入正确密码')
      return
    }else if(!this.codeNumber){
      alert('请输入正确验证码')
      return
    }
    //用户名登录
    this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber);  
    if (!this.userInfo.user_id) {
      if (!this.loginWay) this.getCaptchaCode();
    } else {
      this.RECORD_USERINFO(this.userInfo);
      this.$router.go(-1);
    }
    }
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
.login_container p {
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
.trans_to_right{
  transform: translateX(1.3rem);
}
.change_to_text{
  background-color: #4cd964;
}
.button_switch span{
  font-size: 0.45rem;
  color: #fff;  
  line-height: .6rem;
  transform: translateY(0.05rem);
}
.button_switch .drop{
  transform: translateY(-0.08rem);
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.change_image p{
  font-size: 0.55rem;
  color:#666;
}
.change_image .Another_one{
  margin-top: .2rem;
  color: #3b95e9;
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
  color: #fff;
}
.to_forget{
  float: right;
  color: #3b95e9;
  font-size: 0.6rem;
  margin-right: .3rem;
}
</style>
