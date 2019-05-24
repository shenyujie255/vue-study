<template>
  <div class="search_container">
    <h1>这是搜索页面</h1>
    <head-top go-back="ture" head-title="搜索"></head-top>
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
    footEnd,
  }
}
</script>

<style scoped>
.search_container{
  padding-top: 2.3rem;
}
</style>
