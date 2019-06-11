<template>
<div class="food_page">
    <head-top go-back='true' :head-title='headTitle'></head-top>
    <section class="sort_container">
        <section class="sort_item">
            <div class="sort_item_container">
                <div class="shop_item_border">
                    <span>甜品饮品</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon points="0,3 10,3 5,8"/>
                    </svg>
                </div>
            </div>
            <section class="sort_detail_type category_container"></section>
        </section>
        <section class="sort_item">
            <div class="sort_item_container">
                <div class="shop_item_border">
                    <span>排序</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon points="0,3 10,3 5,8"/>
                    </svg>
                </div>
            </div>
            <section class="sort_detail_type category_container"></section>
        </section>
        <section class="sort_item">
            <div class="sort_item_container">
                <span>筛选</span>
                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                    <polygon points="0,3 10,3 5,8"/>
                </svg>
            </div>
            <section class="sort_detail_type category_container"></section>
        </section>
    </section>
    <section class="sort_list_container">
        <shop-list v-if="latitude"></shop-list>
    </section>
</div>
</template>

<script>
import headTop from '../../components/head/head'
import shopList from '../../components/commons/shoplist'
import { misteAddress } from '../../service/getDate';
import { mapMutations,mapState } from "vuex";
  export default {
    data () {
      return {
          headTitle: '',    // miste页面头部标题
          geohash: "",  // city页面传递过来的地址geohash
          foodTitle: "",   // 排序左侧头部标题
          restaurant_category_id: "", // 食品类型id值
      }
    },
    created() {
        this.initData();
    },
    computed: {
        ...mapState([
            "latitude","longitude"
        ])
    },
    methods: {
        ...mapMutations([   //存储地址信息到vuex
            "RECORD_ADDRESS"
        ]),
        async initData(){
            //获取数据从miste页面传递过来的参数
            this.geohash = this.$route.query.geohash;
            this.headTitle = this.$route.query.title;
            this.restaurant_category_id = this.$route.query.restaurant_category_id;
            //防止刷新页面时，vuex状态丢失，经度纬度需要重新获取，并存入vuex
            if (!this.latitude) {
                // console.log(Number(!this.latitude))
                //获取位置信息
                let res = await misteAddress(this.geohash);
                // 记录当前经纬度存入vuex
                this.RECORD_ADDRESS(res);
            }
        }
    },
    components: {
        headTop,
        shopList
    }
  }
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.food_page{
    padding-top: 3.6rem;
}
.sort_container{
    display: flex;
    position: fixed;
    width: 100%;
    height: 35.94px;
    background: #fff;
    right: 0;
    top: 1.95rem;
    z-index: 12;
    box-sizing: border-box;
    border-bottom: .025rem solid #f1f1f1;
    .sort_item{
        width: 33.3%;
        height: 1.6rem;
        @include sc(.55rem,#444);
        text-align: center;
        line-height: 1rem;    
        .sort_item_container{
            width: 100%;
            height: 100%;
            padding-top: .3rem;
            position: relative;
            background-color: #fff;
            z-index: 14;
            .shop_item_border{
                height: 1rem;
                border-right: .025rem solid #e4e4e4;                
            }
            .sort_icon{
                vertical-align: middle;
                transition: all 0.3s;
                fill: #666;
            }
        }
        .sort_detail_type{

        }
    }
}
</style>