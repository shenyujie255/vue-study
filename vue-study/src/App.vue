<template>
    <div>
        <transition name="router-fade" mode="out-in">
            <keep-alive v-if="$route.meta.keepAlive">
                <!-- keepAlive为true组件被缓存 -->
                <router-view></router-view>
            </keep-alive>   
        </transition>
        <transition name="router-fade" mode="out-in">
            <keep-alive v-if="!$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>   
        </transition>
    <svg-icon></svg-icon>
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

.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
