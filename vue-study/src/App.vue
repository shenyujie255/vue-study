<template>
    <div>
        <transition name="router-fade">
            <router-view></router-view>
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
