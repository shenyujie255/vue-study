<template>
    <div  class="data_section" ref="data_section">
        <bar-type-data id="bar_data"></bar-type-data>
    </div>
</template>

<script>
import echarts from 'echarts'
import barTypeData from '../components/barTypeData'
  export default {
    data () {
      return {
          bar_id: 'bar_data',
      }
    },
    mounted() {
        this.setSectionHeight();
    },
    components: {
        barTypeData
    },
    methods: {
        setSectionHeight(){
				this.$nextTick(() => {
				   this.$refs.data_section.style.height =  (document.body.clientHeight - 200)+'px';
				})
		   }
    }
  }
</script>

<style lang='scss' scoped>

</style>