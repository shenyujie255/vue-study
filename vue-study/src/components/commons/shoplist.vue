<template>
  <div class="shoplist_container">
    <ul>
      <li class="shop_li" tag="li">
        <section>
          <img src="../../assets/164ad0b6a3917599.jpg" alt="" class="shop_img">
        </section>
        <hgroup class="shop_right">
          <header class="shop_right_head">
            <h4 class="shop_right_title premium ellipsis">效果演示</h4>
            <ul class="shop_right_ul">
              <li class="ensure">保</li><li class="ensure">准</li><li class="ensure">票</li>
            </ul>
          </header>
          <h5 class="star_num">
            <section class="star_num_left">
                <section class="star_section">
                  <span class="rating_num"></span>
                </section>
                <section class="order_section">
                  月售106单
                </section>
            </section>
            <section class="star_num_right">
                <span class="delivery_style delivery_style_l">蜂鸟专送</span>
                <span class="delivery_style delivery_style_r">准时达</span>
            </section>
          </h5>
          <h5 class="fee_distance">
              <p class="fee">
                  ¥20起送
                  <span class="segmentation">/</span>
                  配送费约6¥
              </p>
              <p class="distance">
                  <span class="">1381.8公里</span>
                  <span class="segmentation">/</span>
                  <span class="order_time">14小时14分钟</span>
              </p>
          </h5>
        </hgroup>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        shopListArr:[],
      }
    }
  }
</script>

<style lang='scss' scoped=''>
  @import '../../style/mixin.scss';
.shoplist_container{
  margin-bottom: 2rem;
  background-color: #fff;
  .shop_li{
    display: flex;
    padding: .7rem .4rem;
    border-bottom: .025rem solid #e4e4e4;
    .shop_img{
      width: 2.7rem;
      height: 2.7rem;
      display: block;
      margin-right: .4rem;
    }
  }
}
.shop_right{
  flex: auto;
  .shop_right_head{
    @include fj(space-between);
    align-items: center;
      .shop_right_title{
          @include sc(.65rem,#333);
          font-family: 'PingFangSC-Regular';
          line-height: .6rem;
          font-weight: 700;
          padding-top: .01rem;
          width: 8.5rem;
      }
      .premium::before{   //  :before在premium前插入内容
          content: '品牌';
          @include sc(.5rem,#333);
          background-color: #ffd930;
          line-height: .6rem;
          margin-right: .2rem;
          padding: 0 0.1rem;
          border-radius: .1rem;
          display: inline-block;
      }
      .shop_right_ul{
        display: flex;
        margin-right: -0.3rem;
        transform: scale(.8);   //transform scale缩放
        .ensure{
            @include sc(.5rem,#999);
            padding: 0 .04rem;
            margin-left: .05rem;
            border: .025rem solid #f1f1f1;
            border-radius: .08rem;
        }
        }
  }
  .star_num{
    margin-top: .52rem;
    @include fj(space-between);
    .star_num_left{
      @include fj(flex-start);
        .star_section{
          width: 70.063px;
          height: 13.266px;
          display: flex;
          .rating_num{
						@include sc(0.4rem, #ff6000);
						margin: 0 0.2rem;
					}
        }
        .order_section{
          @include sc(.4rem,#666);
          transform: scale(.8);
          margin-left: -0.2rem;
        }
    }
    .star_num_right{
      display: flex;
      justify-content: flex-end;
      min-width: 5rem;
      align-items: center;
      transform: scale(.7);
      margin-right: -0.8rem;
        .delivery_style{
          font-size: .4rem;
          border: 1px;
          border-radius: 0.08rem;
          margin-left: 0.08rem;
          padding: 0.04rem 0.08rem 0;
        }
        .delivery_style_l{
          background-color: #3190e8;
          color: #fff;
          border: 0.025rem solid #3190e8;
        }
        .delivery_style_r{
          background-color: #fff;
          border: 0.025rem solid #3190e8;
        }
    }
  }
  .fee_distance{
    @include fj(space-between);
    font-size: .5rem;
    margin-top: .52rem;
    color: #333;
    .fee{
      @include sc(.5rem,#666);
      transform: scale(.9);
      .segmentation{

      }
    }
    .distance{
      transform: scale(.9);
      span{
        color: #999;
      }
      .segmentation{
        color: #ccc;
      }
      .order_time{
        color: #3190e8;
      }
    }
  }
}
</style>