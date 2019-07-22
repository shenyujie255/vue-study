<template>
<div class="sider_bar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#04516a"
        text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
        <template v-for="item in items">
            <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon" class="icon-font"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            <template v-else>
                <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon" class="icon-font"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</div>
</template>

<script>
// 引入公共的bus，来做为中间传达的工具
import bus from '../../components/commons/bus'
import { itemDate } from "../../service/getDate";
  export default {
    data () {
      return {
          collapse: false,
          items: [],
      }
    },
    mounted() {
        itemDate().then(res =>{
            this.items = res.items;
        })
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    methods: {

    },
    created(){
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })
    }
  }
</script>

<style lang='scss' scoped>
.sider_bar{
    position: fixed;
    left: 0;
    top: 70px;
    bottom:0;
    overflow-y: scroll;
    background-color: #04516a;
}
.sidebar::-webkit-scrollbar{
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse){
    width: 250px;
}
.sidebar > ul {
    height:100%;
}
.icon-font{
    font-size: 18px;
    width: 24px;
    margin-right: 5px;
}
</style>