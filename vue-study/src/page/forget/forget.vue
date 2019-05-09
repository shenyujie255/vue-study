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
      <section class="input_container">
        <input type="text" placeholder="验证码">
        <div class="img_change_img">
          <img src="../../assets/下载 (1).png" alt="">
          <div class="change_img">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
        </section>
    </form>
    <div class="Confirm_change">确认修改</div>
  </div>
</template>

<script>
import headTop from '../../components/head/head'

export default {
  data () {
    return {
      
    }
  },
  methods: {
    
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
.img_change_img{
  display: flex;
  align-items: center;
  height: 24px;
}
.img_change_img img{
  width: 3.5rem;
  margin-right: .2rem;
}
.change_img{
  width: 2rem;
  position: flex;
  justify-content: center;
  margin-left: .2rem;
}
.change_img p{
  font-size: .55rem;
}
</style>
