<template>
<div>
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
        text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened>
    </el-menu>  
     
</div>
</template>

<script>
import { itemDate } from "../../service/getDate";
  export default {
    data () {
      return {
          collapse: false,
          items: [],
      }
    },
    mounted() {
        itemDate().then(res =>{
            this.items = res.items;
            console.log(this.items);
        })
    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    methods: {

    }
  }
</script>

<style lang='scss' scoped>
.sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>