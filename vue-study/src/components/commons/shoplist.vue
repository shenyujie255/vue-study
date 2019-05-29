<template>
  <div class="shoplist_container">
    <ul>
      <li class="shop_li" tag="li">
        <section>
          <img src="../../assets/164ad0b6a3917599.jpg" alt="" class="shop_img">
        </section>
        <hgroup class="shop_right">
          <header class="shop_right_head"></header>
          <h5 class="star_num">
            <section class="star_num_left"></section>
            <section class="star_num_right"></section>
          </h5>
          <h5 class="fee_distance">
            <p class="fee"></p>
            <p class="distance"></p>
          </h5>
        </hgroup>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        shopListArr:[],

      }
    }
  }
</script>

<style lang='scss' scoped=''>
.shoplist_container{
  margin-bottom: 2rem;
  background-color: #fff;
  .shop_li{
    display: flex;
    padding: .7rem .4rem;
    border-bottom: .025rem solid #e4e4e4;
    .shop_img{
      width: 2.7rem;
      height: 2.7rem;
      display: block;
      margin-right: .4rem;
    }
  }
}
.shop_right{
      flex: auto;
}
</style>