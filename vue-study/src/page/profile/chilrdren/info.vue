<template>
<div class="info_page">
  <head-top go-back="true" head-title="账户信息"></head-top>
  <section class="profile_info">
    <section class="headportrait">
      <input type="file" class="profileinfopanel-upload">
      <h2>头像</h2>
      <div class="headportrait_div">
        <img :src="imgBaseUrl + userInfo.avatar" alt="" v-if="userInfo" class="headportrait-div-top">
        <span class="headportrait-div-top" v-else>
            <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
            </svg>
        </span>
        <span class="headportrait_div_r">
            <svg fill="#d8d8d8">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
      </div>
    </section>

    <router-link to="/profile/info/setusername" class="info_router">
      <section class="headportrait headportraitwo">
        <h2>用户名</h2>
        <div class="headportrait_div">
          <p>{{username}}</p>
          <span class="headportrait_div_r">
            <svg fill="#d8d8d8">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </section>
    </router-link>

    <router-link to="/profile/info/address" class="info_router">
      <section class="headportrait headportraitwo headportraithree">
        <h2>收货地址</h2>
        <div class="headportrait_div">
          <span class="headportrait_div_r">
            <svg fill="#d8d8d8">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </section>
    </router-link>

    <section class="bind_phone">账号绑定
    </section>

    <router-link to="" class="info_router">
      <section class="headportrait headportraitwo headportraithree">
        <h2><img src="../../../assets/phone.png" alt="">手机</h2>
        <div class="headportrait_div">
          <span class="headportrait_div_r">
            <svg fill="#d8d8d8">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </section>
    </router-link>

    <section class="bind_phone">安全设置</section>

    <router-link to="/forget" class="info_router">
      <section class="headportrait headportraitwo headportraithree ">
        <h2>登录密码</h2>
        <div class="headportrait_div">
          <p>修改</p>
          <span class="headportrait_div_r">
            <svg fill="#d8d8d8">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </div>
      </section>
    </router-link>

    <section class="exitlogin" @click="exitLogin">退出登录</section>
  </section>
  <transition name="router-slid" mode="out-in">
      <router-view></router-view>
  </transition>
</div>
</template>

<script>
import headTop from '../../../components/head/head'
import { mapState, mapMutations } from 'vuex';
import { imgBaseUrl } from "../../../config/env";
import { getImgPath } from "../../../components/commons/mixin";
import { removeStore } from '../../../utils/mUtils';
import { signout } from "../../../service/getDate";
  export default {
    data () {
      return {
        imgBaseUrl:'http://elm.cangdu.org/img/',  //图片地址
        username:'',    //用户名
        avatar:'',      //用户头像
      }
    },
    components: {
      headTop,
    },
    computed: {//从vuex获取userInfo
      ...mapState([
        'userInfo',
      ])
    },
    methods: {
      ...mapMutations([
        'OUT_LOGIN'
      ]),
      exitLogin(){
        this.OUT_LOGIN();
        this.$router.go(-1);
        removeStore('user_id');
        signout();
      }
    },
    watch: {//  监听处理函数,当value值满足条件时时执行内容
      userInfo:function(value){
        if(value && value.user_id){
          this.username = value.username;
          this.avatar = value.avatar;
        }
      }
    },
  }
</script>

<style lang='scss' scoped>
@import '../../../style/mixin.scss';
.info_page{
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 202;
    padding-top: 1.95rem;
    p, span{
        font-family: Helvetica Neue,Tahoma,Arial;
    }
}
.profile_info{
   @include wh(100%,3.1rem);
  .profileinfopanel-upload{
      display: block;
      position: absolute;
      opacity: 0;
      top: 2.35rem;
      left: 0;
      @include wh(100%,3.1rem);
  }
  .headportrait{
    @include fj(space-between);
    align-items: center;
    border-top: 1px solid #e5e5e5;
    margin-top: .4rem;
    padding: .5rem .4rem;
    background: #fff;
    .headportrait_div{
      .headportrait_div_r{
        width: 0.6667rem;
        height: 1.4rem;
        position: relative;
        top: .44rem;
      }
       span{
            display:inline-block;
            svg{
                @include wh(100%,100%);
            }
      }
      .headportrait-div-top{
        @include wh(2rem, 2rem);
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    h2{
      display: flex;
      align-items: center;
      @include sc(.6rem,#333);
      font-weight: 500;
    }
  }
  .headportraitwo{
    margin-top: 0;
    padding: .3rem .4rem;
    .headportrait_div{
      @include fj(left);
      p{
        @include sc(.7rem,#999);
        font-weight: 100;
        line-height: 1.39rem;
        font-family: Arial;
        margin-right: .2rem;
      }
      .headportrait_div_r{
        top: 0;
      }
    }
  }
  .headportraithree{
    border-bottom: 1px solid #ddd;
    h2{
      img{
        display: inline-block;
        margin-right: .4rem;
      }
    }
  }
  .bind_phone{
    @include sc(.5rem,#666);
    padding: .4rem .4rem;
  }
  
}
.info_router{
    display:block;
}
.exitlogin{
  background: #d8584a;
  width: 96%;
  @include fj(center);
  margin:1.3rem auto 0;
  @include sc(.6rem,#fff);
  line-height: 1.5rem;
  border-radius: 5px;
}
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>