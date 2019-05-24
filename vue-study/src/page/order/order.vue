<template>
  <div class="order_container">
    <head-top go-back="ture" head-title="订单列表"></head-top>
    <ul class="order_list">
     
    </ul>
    <foot-end></foot-end>
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

<style lang='scss' scoped='' type='text/css'>
.order_container{
  padding-top: 1.95rem;
}
</style>