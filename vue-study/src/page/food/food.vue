<template>
<div class="food_page">
    <head-top go-back='true' :head-title='headTitle'></head-top>
    <section class="sort_container">
        <!-- 分类 -->
        <section class="sort_item" :class="{choose_type:sortBy == 'food'}">
            <div class="sort_item_container" @click="chooseType('food')">
                <div class="shop_item_border">
                    <span :class="{category_title:sortBy == 'food'}">{{foodTitle}}</span>
                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon points="0,3 10,3 5,8"/>
                    </svg>
                </div>
            </div>
            <section class="sort_detail_type category_container" v-show="sortBy == 'food'">
                <section class="categroy_left">
                    1
                </section>
                <section class="categroy_right">
                    2
                </section>
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
            <section class="sort_detail_type filter_container" v-show="sortBy =='activity'">
                <section style="width:100%;">
                    <header class="filter_header_style">配送方式</header>
                    <ul class="filter_ul">
                        <li class="filter_li" v-for="(item, index) in Delivery" :key="index" @click="selectDeliveryMode(item.id)">
                            <svg :style="{opacity: (item.id == 0)&&(delivery_mode !== 0)? 0: 1}">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href ="delivery_mode == item.id? '#selected':'#fengniao'"></use>
                            </svg>
                            <span :class="{selected_filter: delivery_mode == item.id}">{{item.text}}</span>
                        </li>
                    </ul>
                </section>
                <section style="width:100%;">
                    <header class="filter_header_style">商家属性（可以多选）</header>
                    <ul class="filter_ul" style="padding-bottom:0.5rem;">
                        <li class="filter_li" v-for="(item, index) in Activity" :key="index" @click="selectSupportIds(index, item.id)">
                            <svg v-show="support_ids[index].status" class="activity_svg">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                            <span class="filter_icon" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" v-show="!support_ids[index].status">{{item.icon_name}}</span>
                            <span :class="{selected_filter: support_ids[index].status}">{{item.name}}</span>
                        </li>
                    </ul>
                </section>
                <footer class="confirm_filter">
                    <div class="filter_button_style clear_all" @click="clearSelect">清空</div>
                    <div class="filter_button_style confirm_select" @click="confirmSelectFun">确定<span v-show="filterNum">({{filterNum}})</span></div>
                </footer>
            </section>
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
import { misteAddress,foodDelivery,foodActivity } from '../../service/getDate';
import { mapMutations,mapState } from "vuex";
  export default {
    data () {
      return {
          headTitle: '',    // miste页面头部标题
          geohash: "",  // city页面传递过来的地址geohash
          foodTitle: "",   // 排序左侧头部标题
          restaurant_category_id: "", // 食品类型id值
          sortBy: "",    //筛选条件
          sortByType: null, // 根据何种方式排序
          Activity: null,   // 商家支持活动数据
          Delivery: null, // 配送方式数据
          delivery_mode: null, // 选中的配送方式
          filterNum: 0,
          support_ids: [], 
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
            this.foodTitle = this.headTitle;
            this.restaurant_category_id = this.$route.query.restaurant_category_id;
            //防止刷新页面时，vuex状态丢失，经度纬度需要重新获取，并存入vuex
            if (!this.latitude) {
                // console.log(Number(!this.latitude))
                //获取位置信息
                let res = await misteAddress(this.geohash);
                // 记录当前经纬度存入vuex
                this.RECORD_ADDRESS(res);
            }
            // 获取筛选列表配送方式
            this.Delivery = await foodDelivery(this.latitude,this.longitude)
            // 获取筛选列表商家属性
            this.Activity = await foodActivity(this.latitude,this.longitude)
            console.log(this.Activity);
            //记录support_ids的状态，默认不选中，点击状态取反，status为true时为选中状态
            this.Activity.forEach((item, index) => {
            this.support_ids[index] = { status: false, id: item.id };
      });
        },
        chooseType(type){
            if (this.sortBy !== type) {
                this.sortBy = type;
                if (type == "food") {
                    this.foodTitle = "分类";
                }
                else {
                    //将foodTitle 和 headTitle 进行同步
                    this.foodTitle = this.headTitle;
                }
            } else {
                this.sortBy = "";
                if (type == "food") {
                    this.foodTitle = this.headTitle;
                }
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
        },
        selectDeliveryMode(id){
            if (this.delivery_mode == null) {
                this.filterNum++;
                this.delivery_mode = id;
            } else if (this.delivery_mode == id) {
                this.filterNum--;
                this.delivery_mode = null;
                //delivery_mode已有值且不等于当前选择值，则赋值delivery_mode为当前所选id
            } else{
                this.delivery_mode = id;
            }
        },
        //点击商家活动，状态取反
        selectSupportIds(index,id){
            //splice方法数组替换新的值
            this.support_ids.splice(index,1,{
                status: !this.support_ids[index].status,
                id
            });
            //重新计算filterNum的个数
            this.filterNum = this.delivery_mode == null ? 0 : 1;
            this.support_ids.forEach(item =>{
                if (item.status) {
                    this.filterNum++;
                }
            })
        },
        // 清空所有
        clearSelect(){
            this.support_ids.map(item => (item.status = false));
            this.delivery_mode =null;
            this.filterNum = 0;
        },
        confirmSelectFun(){
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
    .filter_container{
        flex-direction: column;
        align-items: flex-start;
        background-color: #f1f1f1;
        // min-height: 10.6rem;
        .filter_header_style{
            text-align: left;
            padding-left: .5rem;
            background-color: #fff;
            height: 1.5rem;
            line-height: 1.5rem;
            @include sc(.4rem,#333);
        }
        .filter_ul{
            display: flex;
            flex-wrap: wrap;
            padding: 0 0.5rem;
            background-color: #fff;
            .filter_li{
                display: flex;
                align-items: center;
                border: 0.025rem solid #eee;
                @include wh(4.7rem, 1.4rem);
                margin-right: 0.25rem;
                border-radius: 0.125rem;
                padding: 0 0.25rem;
                margin-bottom: 0.25rem;
                svg{
                    width: .8rem;
                    height: .8rem;
                    margin-right: .125rem;
                }
                span{
                    @include sc(.4rem,#333);
                }
                .filter_icon{
                    @include wh(0.8rem, 0.8rem);
                    font-size: 0.5rem;
                    border: 0.025rem solid #e4e4e4;
                    border-radius: 0.15rem;
                    margin-right: 0.25rem;
                    line-height: 0.8rem;
                    text-align: center;
                }
                .selected_filter {
                    color: #3190e8;
                }
                .activity_svg{
                    margin-right: .25rem;
                }
            }
        }
        .confirm_filter{
            display: flex;
            width: 100%;
            background-color: #f1f1f1;
            padding: .3rem 0.2rem;
            .filter_button_style{
                width: 50%;
                height:1.8rem;
                line-height: 1.8rem;
                font-size: .8rem;
                border-radius: .2rem;
            }
            .clear_all{
                background-color: #fff;
                margin-right: .5rem;
                border: .025rem solid #fff;
            }
            .confirm_select{
                background-color: #56d176;
                color: #fff;
                border: .025rem solid #56d176;
                span{
                    color: #fff;
                }
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