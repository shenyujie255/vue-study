<template>
    <div id="home">
        <header></header>
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
  export default {
    data () {
      return {
      }
    },
    methods: {

    },
    components:{
        HomePage
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
</style>