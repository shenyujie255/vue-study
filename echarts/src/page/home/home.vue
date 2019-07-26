<template>
    <div id="home">
        <header-nav></header-nav>
        <main class="content">
            <div class="bread">
                <span class="bread_bar">
                    <i class="fa fa-bars"></i>
                </span>
                <el-breadcrumb separator="/" class="breadcrumb">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <home-page></home-page>
        </main>    
        <footer></footer>   
        
    </div>
</template>

<script>
import HomePage from '../index'
import headerNav from '../../components/header/headerNav'
import leftNav from '../../components/leftNav/leftNav'
  export default {
    data () {
      return {
      }
    },
    methods: {

    },
    components:{
        HomePage,
        headerNav,
        leftNav
    }
  }
</script>

<style lang='scss' scoped>
.bread{
    background: #eff2f7;
    width: 100%;
    .bread_bar{
        float: left;
        margin: 4px 10px;
        cursor: pointer;
    }
    .breadcrumb{
        height: 30px;
        line-height: 30px;
    }
}
.left_nav{
    position: fixed;
    top: 60px;
    left: 0;
}
</style>