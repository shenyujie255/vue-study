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
        <shop-list></shop-list>
    </section>
</div>
</template>

<script>
import headTop from '../../components/head/head'
import shopList from '../../components/commons/shoplist'
  export default {
    data () {
      return {
          headTitle: '甜品饮品',
      }
    },
    mounted() {
        
    },
    methods: {
        
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