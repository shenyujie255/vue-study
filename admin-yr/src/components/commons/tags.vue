<template>
    <div class="tags_container" v-if="showTags">
        <section class="tags_l">
            <ul>
                <li class="tag_li" v-for="(item,index) in tagList" :key="index" :class="{'active': isActive(item.path)}">
                    <router-link :to="item.path" class="tag_text">{{item.title}}</router-link>
                    <span class="tag_icon"><i class="el-icon-close"></i></span>
                </li>
            </ul>
        </section>
        <section class="tags_r">
            2
        </section>
    </div>
</template>

<script>
  export default {
    data () {
      return {
          tagList: [
          
        ]
      }
    },
    methods: {
        // 当前Active页面
        isActive(path){
            return path = this.$route.fullPath;
        },
        //设置标签
        setTags(route){
            // some方法，不满足返回false
            const isExist = this.tagList.some(item =>{
                return item.path === route.fullPath;
            })
            console.log(isExist);
            if (!isExist) {
                if(this.tagList.length >=6){
                    this.tagList.shift();  //如果打开标签大于六个不在添加，返回第一个元素的值
                }
                this.tagList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[1].components.default.name
                })
                console.log(this.tagList);
                
            }
        }
    },
    computed: { //返回true&false判断是否显示tag
        showTags(){
            return this.tagList.length > 0; 
        }
    },
    watch:{ //监听
        $route(newValue, oldValue){
            this.setTags(newValue);
        }
    },
    created () {
        this.setTags(this.$route);
    }
  }
</script>

<style lang='scss' scoped>
@import '../../style/mixin.scss';
.tags_container{
    @include fj();
    background-color: #fff;
    padding: 5px;
    .tags_l{
        li{
            display: inline-block;
            border: 1px solid #e9eaec;
            @include sc(12px,#666);
            padding: 0 5px 0 12px;
            margin: 3px 5px 2px 3px;
            line-height: 23px;
            border-radius: 5px;
            cursor: pointer;
            .tag_text{}
            .tag_icon{}
        }
    }
    .tags_r{

    }
}
</style>