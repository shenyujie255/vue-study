<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import svgIcon from './components/commons/svg'
export default {
  components: {
    svgIcon,
  }
}
</script>

<style lang="scss">
@import './style/common.scss';
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

