<template>
<div class="home-container">
    <head-top></head-top>
    <sider-bar></sider-bar>
    <main class="content_box" :class="{'content_collapse':collapse}">
        <tag-nav></tag-nav>
        <div class="content">
            <transition name="move" mode="out-in">
              <router-view></router-view>
            </transition>
        </div>
    </main>
</div>
</template>

<script>
import headTop from '../../components/header/head'
import siderBar from '../../components/commons/siderBar'
import Bus from '../../components/commons/bus'
import tagNav from '../../components/commons/tags'
  export default {
    data () {
      return {
        collapse: false,
      }
    },
    methods: {
    },
    components: {
      headTop,
      siderBar,
      tagNav
    },
    created() {
      Bus.$on('collapse',msg => {
        this.collapse = msg;
      })
    }
  }
</script>

<style lang='scss' scoped>
.content_box{
  position: absolute;
  right: 0;
  left: 250px;
  background-color: #f0f0f0;
  bottom: 0;
  top: 70px;
  .content{
    width: auto;
    height: 100%;
    overflow-y: scroll;
    padding: 10px;
  }
}
.content_collapse{
  left: 65px;
}
</style>