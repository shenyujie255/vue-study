<template>
  <div class="order_container">
    <head-top go-back="ture" head-title="订单列表"></head-top>
        <ul class="order_list"> 
    </ul>
    <foot-end></foot-end>
    <transition name="router-slid" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import headTop from '../../components/head/head'
  import footEnd from '../../components/footer/foot'

  export default {
    data () {
      return {
      }
    },
    components: {
      headTop,
      footEnd
    }
  }
</script>

<style lang='scss' scoped>
.order_container{
  padding-top: 1.95rem;
}
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s ease-out;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>