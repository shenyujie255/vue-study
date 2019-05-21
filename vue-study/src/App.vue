<template>
    <div>
    <router-view></router-view>
    <svg-icon></svg-icon>
    </div>
</template>

<script>
import './style/reset.css'
import svgIcon from './components/commons/svg'
export default {
components: {
    svgIcon,
}
}
</script>

<style>

</style>
