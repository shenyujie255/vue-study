<template>
<div class="header">
    <div class="head_left">
      <div class="collapse_menu">
        <i class="el-icon-menu"></i>
      </div>
      <div class="logo">后台管理系统</div>
    </div>
    <div class="head_right">
      <!-- 全屏显示 -->
      <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
              <i class="el-icon-rank"></i>
          </el-tooltip>
      </div>
      <div class="user_avator"><img src="../../assets/logo.png" alt=""></div>
      <el-dropdown class="user_name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          名字<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">狮子头</el-dropdown-item>
          <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
          <el-dropdown-item command="loginout" divided @click="outLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</div>
</template>

<script>
import { removeStore } from '../../utils/mUtils';
  export default {
    data () {
      return {
        collapse: false,
        fullscreen: false,
      }
    },
    methods: {
      // 全屏事件
      handleFullScreen(){
          let element = document.documentElement;
          if (this.fullscreen) {
              if (document.exitFullscreen) {
                  document.exitFullscreen();
              } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
              } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
              }
          } else {
              if (element.requestFullscreen) {
                  element.requestFullscreen();
              } else if (element.webkitRequestFullScreen) {
                  element.webkitRequestFullScreen();
              } else if (element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
              } else if (element.msRequestFullscreen) {
                  // IE11
                  element.msRequestFullscreen();
              }
          }
          this.fullscreen = !this.fullscreen;
      },
      outLogin(){
        
      },
      // 用户名下拉菜单选择事件
      handleCommand(command) {
          if(command == 'loginout'){
              localStorage.removeItem('ms_username')
              this.$router.push('/login');
          }
      },
    }
  }
</script>

<style lang='scss' scoped>
  @import '../../style/mixin.scss';
.header{
  @include wh(100%,70px);
  @include fj(space-between);
  align-items: center;
  font-size: 22px;
  color: #fff;
  background-color: #11b0f2;
}
.head_left{
    @include fj(space-between);
    .collapse_menu{
      padding: 0 21px;
    }
    .logo{
    }
}
.head_right{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  .btn-fullscreen{
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
    @include wh(30px,30px);
  }
  .user_avator{
    display: flex;
    align-items: center;
    img{
      @include wh(40px,40px);
      border-radius: 50%;
    }
  }
  .user_name{
  }
}
</style>