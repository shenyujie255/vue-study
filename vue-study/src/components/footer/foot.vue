<template>
  <div class="foot_container">
      <section class="end_item">
        <svg class="icon_style">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('msite') !== -1? '#msiteActive' : '#msite'"></use>
        </svg>
        <span>外卖</span>
      </section>
      <section class="end_item">
        <svg class="icon_style">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('search') !== -1? '#findActive' : '#find'"></use>
        </svg>
        <span>搜索</span>
      </section>
      <section class="end_item">
          <svg class="icon_style">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('order') !== -1? '#orderActive' : '#order'"></use>
          </svg>
        <span>订单</span>
      </section>
      <section class="end_item">
          <svg class="icon_style">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('profile') !== -1? '#profileActive' : '#profile'"></use>
          </svg>
        <span>我的</span>
      </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.foot_container{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  z-index: 100;
  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
  height: 1.95rem;
  width: 100%;
}
.end_item{
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  flex: 1;
}
.end_item .icon_style{
  width: .8rem;
  height: .8rem;
  color: #ccc;
  margin-top: .3rem;
}
.end_item span{
  font-size: .45rem;
  color: #666;
}
</style>
