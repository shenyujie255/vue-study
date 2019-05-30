<template>
<div class="info_page">
  <head-top go-back="true" head-title="编辑地址">
    <span class="edit" slot="edit" @click="editThing">{{ editText }}</span>
  </head-top>
  <transition name="router-slid" mode="out-in">
      <router-view></router-view>
  </transition>
</div>
</template>

<script>
import headTop from '../../../../components/head/head'
  export default {
    data () {
      return {
        editText:"编辑",
      }
    },
    components: {
      headTop,
    },
    mounted () {
      
    },
    methods: {
      editThing(){
        if (this.editText == '编辑') {
          this.editText = '完成'
        } else {
          this.editText = '编辑'
        }
      },
    },
  }
</script>

<style lang='scss' scoped>
@import '../../../../style/mixin.scss';
.info_page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f2f2;
    z-index: 202;
    padding-top: 1.95rem;
      p, span{
          font-family: Helvetica Neue,Tahoma,Arial;
      }
}
.edit{
  position: absolute;
  right: .4rem;
  top: 50%;
  transform: translateY(-50%);
  @include sc(.7rem,#fff);
}
.router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
}
.router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
}
</style>