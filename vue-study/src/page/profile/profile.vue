<template>
  <div class="profile_container">
    <head-top go-back='ture' :head-title="profiletitle"></head-top>
    <section>
      <section class="profile_number">
        <router-link to="/login" class="profile_link">
          <span class="profile_image">
            <svg class="privateImage-svg">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
            </svg>
          </span>
          <span class="suer_info">
            <p>{{username}}</p>
            <p>
              <span class="user_icon">
                <svg class="icon-mobile" fill="#fff">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                </svg>
              </span>
              <span class="icon_moddile_number">暂无绑定手机号</span>
            </p>
          </span>
          <span class="arrow">
            <svg class="arrow-svg" fill="#fff">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
            </svg>
          </span>
        </router-link>
      </section>
      <section class="info_data">
        <ul class="clear">
          <router-link to="/home" tag="li" class="info_data_link">
            <span class="info_data_top"><b>{{parseInt(balance).toFixed(2)}}</b>元</span>
            <span class="info_data_bottom">我的余额</span>
          </router-link>
          <router-link to="/home" tag="li" class="info_data_link">
            <span class="info_data_top"><b>{{count}}</b>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </router-link>
          <router-link to="/home" tag="li" class="info_data_link points">
            <span class="info_data_top"><b>{{pointNumber}}</b>分</span>
            <span class="info_data_bottom">我的积分</span>
          </router-link>
        </ul>
      </section>
      <section class="profile_1reTe">
        <!-- 我的订单 -->
        <router-link to="/home" class="myorder">
          <aside>
            <svg fill="#4aa5f0">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
            </svg>            
          </aside>
          <div class="myorder-div">
            <span>我的订单</span>
            <span class="myorder_divsvg">
              <svg fill="#bbb">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
        <!-- 积分商城 -->
        <router-link to="/home" class="myorder">
          <aside>
            <svg fill="#fc7b53">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>积分商城</span>
            <span class="myorder_divsvg">
              <svg fill="#bbb">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
        <!-- 饿了么会员卡 -->
        <router-link to="home" class="myorder" >
          <aside>
            <svg fill="#ffc636">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip"></use>
            </svg>
          </aside>
          <div class="myorder-div down">
            <span>饿了么会员卡</span>
            <span class="myorder_divsvg">
              <svg fill="#bbb">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
      </section>
      <section class="profile_1reTe">
        <!-- 服务中心 -->
        <router-link to="/service" class="myorder">
          <aside>
            <svg fill="#4aa5f0">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
            </svg>
          </aside>
          <div class="myorder-div">
            <span>服务中心</span>
            <span class="myorder_divsvg">
              <svg fill="#bbb">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
        <!-- 下载饿了么App -->
        <router-link to="/download" class="myorder">
          <aside>
            <svg fill="#3cabff">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
            </svg>
          </aside>
          <div class="myorder-div down">
            <span>下载饿了么APP</span>
            <span class="myorder_divsvg">
              <svg fill="#bbb">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
            </span>
          </div>
        </router-link>
      </section>
    </section>
    <foot-end></foot-end>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
import footEnd from '../../components/footer/foot'
import SvgIcon from '../../components/commons/svg'
export default {
  data () {
    return {
      profiletitle: '我的',
      username: '登录/注册',           //用户名
      balance: 0,            //我的余额
      count : 0,             //优惠券个数
      pointNumber : 0,       //积分数
    }
  },
  components: {
    headTop,
    footEnd,
    SvgIcon
  }
}
</script>
<style <style lang="scss" scoped>

.profile_number{
  padding-top: 1.95rem;
}
.profile_number p, span{
  font-family: Helvetica Neue,Tahoma,Arial;
}
.profile_number .profile_link{
  display:flex;
  box-align: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: .666667rem .6rem;
  background: #3190e8;
}
.profile_image{
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.profile_image .privateImage-svg{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #fff;
}
.suer_info{
  margin-left: .48rem;
  flex-grow: 1;
}
.suer_info p{
  font-size: .8rem;
  font-weight: 700;
  color: #fff;
}
.user_icon{
  width: .5rem;
  height: .75rem;
  display: inline-block;
  vertical-align: middle;
  line-height: .75rem;
}
.icon-mobile,.arrow-svg,.arrow-right{
  width: 100%;
  height: 100%;
}
.suer_info .icon_moddile_number{
  font-size: .573333rem;
  display: inline-block;
  color: #fff;
  font-weight: normal;
}
.arrow{
  width: .46667rem;
  height: .98rem;
  display: inline-block;
}
.info_data{
  width: 100%;
  background: #fff;
  box-sizing: border-box;
}
.info_data .info_data_link{
  width: 33.33%;
  display: inline-block;
  border-right: 1px solid #f1f1f1;
  float: left;
}
.info_data .info_data_link span{
  display: block;
  width: 100%;
  text-align: center;
}
.info_data_link .info_data_top{
  font-size: .55rem;
  color: #333;
  padding: .853333rem 0 .453333rem;
}
.info_data_link:nth-of-type(2){
  .info_data_top{
    b{
      color:#ff5f3e;
    }
  }
}
.info_data_link:nth-of-type(3){
  .info_data_top{
    b{
      color:#6ac20b;
    }
  }
}
.info_data_link .info_data_top b{
  display: inline-block;
  font-size: 1.2rem;
  color:#f90;
  font-weight: 700;
  line-height: 1rem;
  font-family: Helvetica Neue,Tahoma;
}
.info_data_link .info_data_bottom{
  font-size: .573333rem;
  color: #666;
  font-weight: 400;
  padding-bottom: .453333rem;
}
.info_data .points{
  border: 0;
}
.clear{
  zoom: 1;
}
.clear:after{
  content: "";
  display: block ;
  clear:both;
}
.profile_1reTe{
  margin-top: .4rem;
  background: #fff;
}
.profile_1reTe .myorder{
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
}
.profile_1reTe .myorder .myorder-div{
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: .433333rem .266667rem .433333rem 0;
  font-size: .7rem;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.myorder_divsvg{
    width: 0.46667rem;
    height: 0.46667rem;
}
.myorder_divsvg svg{
  width: 100%;
  height: 100%;
}
.profile_1reTe .myorder aside{
  width: .7rem;
  height: .7rem;
  margin-right: .266667rem;
  margin-left: -.866667rem;
  display: flex;
  align-items: center;
}
.profile_1reTe .myorder aside svg{
  width: 100%;
  height: 100%;
}
.profile_1reTe .myorder .down{
  border: 0;
}
</style>
