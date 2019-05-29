<template>
  <div class="download_page">
    <head-top go-back="true" head-title="下载"></head-top>
    <section class="download_container">
      <img src="../../assets/logo.png" alt="下载" class="logo_img">
      <p>下载饿了么APP</p>
      <div class="down_btn">下载</div>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/head/head'
  export default {
    data () {
      return {
      }
    },
    methods: {
      
    },
    components: {
      headTop,
    }
  }
</script>

<style lang='scss' scoped>
.download_page{
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 202;
    padding-top: 1.95rem;
  p, span{font-family: Helvetica Neue,Tahoma,Arial;}
}
.download_container{
    text-align: center;
    .logo_img{
      margin-top: 1rem;
      width: 180px;
      height: 180px;
    }
    p{
      font-size: .8rem;
      color: #666;
      margin-bottom: 1rem;
    }
    .down_btn{
      background: #4cd964;
      margin: 0 .7rem;
      font-size: .7rem;
      line-height: 1.8rem;
      color: #fff;
      border-radius: .2rem;
    }
  }
</style>