<template>
    <div class="tags_container" v-if="showTags">
        <section class="tags_l">
            <ul>
                <li class="tag_li" v-for="(item,index) in tagList" :key="index" :class="{'active': isActive(item.path)}">
                    <router-link :to="item.path" class="tag_text">{{item.title}}</router-link>
                    <span class="tag_icon"><i class="el-icon-close" @click="delItem(index)"></i></span>
                </li>
            </ul>
        </section>
        <section class="tags_r">
           <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu size="small" slot="dropdown">
                    <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                    <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </section>
    </div>
</template>

<script>
import Bus from './bus'
  export default {
    data () {
      return {
          tagList: [],
      }
    },
    methods: {
        // 当前Active页面
        isActive(path){
            return path === this.$route.fullPath;
        },
        //设置标签
        setTags(route){
            // some方法，不满足返回false
            const isExist = this.tagList.some(item =>{
                return item.path === route.fullPath;
            })
            if (!isExist) {
                if(this.tagList.length >=6){
                    this.tagList.shift();  //如果打开标签大于六个不在添加，返回第一个元素的值
                }
                this.tagList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[1].components.default.name
                })            
            }
        },
        // 关闭单个标签
        delItem(index){
            const delItem = this.tagList.splice(index, 1)[0];
            const item = this.tagList[index] ? this.tagList[index] : this.tagList[index - 1];
            if (item) {
                delItem.path === this.$route.fullPath && this.$router.push(item.path);
            }else{
                this.$router.push('/');
            }
        },
        //关闭单其他标签
        closeOther(){
            const otherItem = this.tagList.filter(item => {
                return item.path === this.$route.fullPath;
            })
            this.tagList = otherItem;
        },
        //关闭所有标签
        closeAll(){
            this.tagList = [];
            this.$router.push('/');
        },
        handleTags(command){
            command === 'other' ? this.closeOther() : this.closeAll();
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
        // 监听关闭当前页面的标签页
        Bus.$on('close_current_tags', () => {
            for (let i = 0, len = this.tagList.length; i < len; i++) {
                const item = this.tagList[i];
                if(item.path === this.$route.fullPath){
                    if(i < len - 1){
                        this.$router.push(this.tagList[i+1].path);
                    }else if(i > 0){
                        this.$router.push(this.tagList[i-1].path);
                    }else{
                        this.$router.push('/');
                    }
                    this.tagList.splice(i, 1);
                    break;
                }
            }
        })
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
            background: #fff;
            cursor: pointer;
            -webkit-transition: all .3s ease-in;
            -moz-transition: all .3s ease-in;
            transition: all .3s ease-in;
            .tag_text{}
            .tag_icon{}
        }
        .tag_li.active{
            background-color: #409EFF;
            border: 1px solid #409EFF;
            color: #fff;
        }
        .tag_li:not(.active):hover {
            background: #f8f8f8;
        }
        .tag_li.active .tag_text {
            color: #fff;
        }
    }
    .tags_r{
    }
}
.tag_li:not(.active):hover {
    background: #f8f8f8;
}

</style>