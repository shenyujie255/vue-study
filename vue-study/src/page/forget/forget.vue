<template>
  <!-- 重置密码 -->
  <div class="forget_container">
    <head-top go-back="true" head-title="重置密码"></head-top>
    <form action="" class="forget_form">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号">
        </section>
      <section class="input_container">
        <input type="text" placeholder="旧密码">
        </section>
      <section class="input_container">
        <input type="text" placeholder="请输入新密码">
        </section>
      <section class="input_container">
        <input type="text" placeholder="请确认密码">
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
    <div class="Confirm_change">确认修改</div>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import { getcaptchas } from "../../service/getDate";
export default {
  data () {
    return {
      codeNumber: null,
      captchaCodeImg: null,
    }
  },
  methods: {
    async getCaptchaCode(){
    let res = await getcaptchas();
    this.captchaCodeImg = res.code;
  },
  },
  created () {
  this.getCaptchaCode()
  },
  components:{
    headTop,
  }
}
</script>

<style scoped>
.forget_container{
  padding-top: 1.95rem;
}
.forget_form{
  background-color: #fff;
  margin-top: .6rem;
}
.input_container{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding: .6rem .8rem;
}
.forget_form .phone_number{
  padding: .3rem .8rem;
}
.input_container input{
  outline: none;
  border: none;
  font-size: .7rem;
  color: #666;
  font-family: "Microsoft Yahei";
}
.Confirm_change{
  background-color: #4cd964;
  text-align: center;
  margin: 1rem .5rem;
  border-radius: .15rem;
  color: #fff;
  font-size: .7rem;
  padding: .5rem 0;
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
</style>
