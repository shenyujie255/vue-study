<template>
<div class="food_page">
    <head-top go-back='true' :head-title='headTitle'></head-top>
    <section class="sort_container">
        <!-- 分类 -->
        <section class="sort_item">
            <div class="sort_item_container">
                <div class="shop_item_border">
                    <span>甜品饮品</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon points="0,3 10,3 5,8"/>
                    </svg>
                </div>
            </div>
            <section class="sort_detail_type category_container">

            </section>
        </section>
        <!-- 排序 -->
        <section class="sort_item" :class="{choose_type:sortBy == 'sort'}">
            <div class="sort_item_container" @click="chooseType('sort')">
                <div class="shop_item_border">
                    <span :class="{category_title:sortBy == 'sort'}">排序</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon points="0,3 10,3 5,8"/>
                    </svg>
                </div>
            </div>
            <section class="sort_detail_type" v-show="sortBy == 'sort'">
                <ul class="sort_list_container" @click="sortList($event)">
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                        </svg>
                        <p data ="0" :class="{sort_select: sortByType == 0}">
                            <span>智能排序</span>
                            <svg v-if="sortByType == 0">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                        </svg>
                        <p data = "5" :class="{sort_select: sortByType == 5}">
                            <span>距离最近</span>
                            <svg v-if="sortByType == 5">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                        </svg>
                        <p data = "6" :class="{sort_select: sortByType == 6}">
                            <span>销量最高</span>
                            <svg v-if="sortByType == 6">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                        </svg>
                        <p data = "1" :class="{sort_select: sortByType == 1}">
                            <span>起送价最低</span>
                            <svg v-if="sortByType == 1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                        </svg>
                        <p data = "2" :class="{sort_select: sortByType == 2}">
                            <span>配送速度最快</span>
                            <svg v-if="sortByType == 2">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                    <li class="sort_list_li">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                        </svg>
                        <p data = "3" :class="{sort_select: sortByType == 3}">
                            <span>评分最高</span>
                            <svg v-if="sortByType == 3">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </p>
                    </li>
                </ul>
            </section>
        </section>
        <!-- 筛选 -->
        <section class="sort_item" :class="{choose_type:sortBy == 'activity'}">
            <div class="sort_item_container" @click="chooseType('activity')">
                <span :class="{category_title:sortBy == 'activity'}">筛选</span>
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
          sortBy: "",    //筛选条件
          sortByType:null, // 根据何种方式排序
          Activity:null,
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
        },
        chooseType(type){
            if (this.sortBy !== type) {
                this.sortBy = type;
            } else {
                this.sortBy = "";
            }
        },
        //点击某个排序方式，获取事件对象的data值，并根据获取的值重新获取数据渲染
        sortList(event){
            let node;
            // 如果点击的是 span 中的文字，则需要获取到 span 的父标签 p
            if (event.target.nodeName.toUpperCase() !== "P") {
                node = event.target.parentNode;
            } else {
                node = event.target;
            }
            this.sortByType = node.getAttribute("data");
            this.sortBy = "";
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
        }
    }
    .sort_icon{
        vertical-align: middle;
        transition: all 0.3s;
        fill: #666;
    }
    .sort_detail_type{
            position: absolute;
            top: 1.6rem;
            width: 100%;
            left: 0;
            background-color: #fff;
            border-top: 0.025rem solid #e4e4e4;
            display: flex;
           
        }
         .sort_list_container{
                width: 100%;
                .sort_list_li{
                    display: flex;
                    align-items: center;
                    height: 2.5rem;
                    svg{
                        width: .7rem;
                        height: .7rem;
                        margin: 0 0.3rem 0 0.8rem;
                    }
                    p{
                        line-height: 2.5rem;
                        display: flex;
                        align-items: center;
                        border-bottom: .025rem solid #e4e4e4;
                        text-indent: .25rem;
                        flex: auto;
                        text-align: left;
                        justify-content: space-between;
                        span{
                            color: #666;
                        }
                    }
                    .sort_select{
                        span
                        {color: #3190e8;}
                    }
                }
            }
}
.choose_type{
    .sort_item_container{
        .category_title{
            color: #3190e8;
        }
        .sort_icon{
            transform: rotate(180deg);
            fill: #3190e8;
        }
    }
}

</style>