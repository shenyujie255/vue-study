<template>
  <div class="shoplist_container">
    <ul>
      <router-link  :to="{path: 'shop', query:{geohash, id:item.id}}" class="shop_li" tag="li" v-for="item in shopListArr" :key="item.id">
        <section>
          <img :src="imgBaseUrl + item.image_path" alt="" class="shop_img">
        </section>
        <hgroup class="shop_right">
          <header class="shop_right_head">
            <h4 class="shop_right_title premium ellipsis">{{item.name}}</h4>
            <ul class="shop_right_ul">
              <li class="ensure" v-for="item in item.supports" :key="item.id">{{item.icon_name}}</li>
            </ul>
          </header>
          <h5 class="star_num">
            <section class="star_num_left">
                <section class="star_section">
                  <rating-star :rating='item.rating'></rating-star>
                  <span class="rating_num">{{item.rating}}</span>
                </section>
                <section class="order_section">
                    月售{{ item.recent_order_num }}单
                </section>
            </section>
            <section class="star_num_right">
                <span class="delivery_style delivery_style_l">蜂鸟专送</span>
                <span class="delivery_style delivery_style_r">准时达</span>
            </section>
          </h5>
          <h5 class="fee_distance">
              <p class="fee">
                  ¥{{ item.float_minimum_order_amount }}起送
                  <span class="segmentation">/</span>
                  配送费约{{ item.float_delivery_fee }}¥
              </p>
              <p class="distance">
                  <span class="">{{ item.distance }}</span>
                  <span class="segmentation">/</span>
                  <span class="order_time">{{ item.order_lead_time }}</span>
              </p>
          </h5>
        </hgroup>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { shopList } from "../../service/getDate";
import ratingStar from './ratingstar'
import { mapState } from "vuex";
  export default {
    data () {
      return {
        shopListArr:[], //店铺列表
        imgBaseUrl: '//elm.cangdu.org/img/', //图片域名地址
      }
    },
    mounted() {
      this.initData();
    },
    components:{
      ratingStar,
    },
    props: ['geohash'],
    computed: {
      ...mapState([
        'latitude','longitude'
      ])
    },
    methods: {
      async initData(){
        let res = await shopList(this.latitude,this.longitude);
        this.shopListArr = [...res];
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
    height: .6rem;
    .star_num_left{
        @include fj(flex-start);
        .star_section{
            display: flex;
            .rating_num{
                @include sc(0.4rem, #ff6000);
                margin: 0 0.2rem;
                height: .4rem;
            }
        }
        .order_section{
         transform: scale(.8);
					margin-left: -0.2rem;
					@include sc(0.4rem, #666);
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
          color: #3190e8;
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