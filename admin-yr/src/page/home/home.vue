<template>
<div class="home-container">
    <head-top></head-top>
    <sider-bar></sider-bar>
    <main class="content_box" >
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
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
      headTop,
      siderBar
    }
  }
</script>

<style lang='scss' scoped>
.content_box{
  position: absolute;
  right: 0;
  left: 250px;
}
</style>