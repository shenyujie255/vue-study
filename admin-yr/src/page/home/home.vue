<template>
<div class="home-container">
    <head-top></head-top>
    <sider-bar></sider-bar>
    <main class="content_box" :class="{'content_collapse':collapse}">
        <tag-nav></tag-nav>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive :include="tagList">
                    <router-view ></router-view>
                </keep-alive>
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
        tagList: [],
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
      }),
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      Bus.$on('tags', msg => {
          let arr = [];
          for(let i = 0, len = msg.length; i < len; i ++){
              msg[i].name && arr.push(msg[i].name);
          }
          this.tagList = arr;
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
.move-enter-active,
.move-leave-active {
    transition: opacity 3s;
}

.move-enter,
.move-leave {
    opacity: 0;
}
</style>