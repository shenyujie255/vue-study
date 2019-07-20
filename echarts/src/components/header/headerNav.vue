<template>
<div class="header_container">
    <div class="header_left">
      <span class="left_title">依然<i>ADMIN</i></span>
    </div>
    <div class="header_right">
      <div class="userinfor">
        <img src="../../assets/avatar.d99a9dff.png" alt="" style="width:40px;height:40px;">
        <div class="username">
          <p>欢迎</p>
          <p>管理员</p>
        </div>
        <div class="dropdown"></div>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang='scss' scoped>
.header_container{
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  height: 60px;
}
.header_left{
  align-items: center;
  display: flex;
  .left_title{
    font-size: 22px;
    i{
      color: #ff6c60;
    }
  }
}
.header_right{
  display: flex;
  align-items: center;
  .username{
    display: inline-block;
    width: auto;
    .p{
      justify-content: center;
      line-height: 20px;
    }
  }
}
</style>