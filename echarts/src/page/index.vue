<template>
    <div  class="data_section" ref="data_section">
        <div>
        <bar-type-data id="bar_data"></bar-type-data>
        <line-type-data id="line_data"></line-type-data>
        </div>
        <div>
          <order-type id="bin1_data" type="ordertype"></order-type>
          <order-source id="bin2_data" type="ordersource"></order-source>
          <order-type id="bin3_data" type="areatype"></order-type>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
import barTypeData from '../components/barTypeData'
import lineTypeData from '../components/lineTypeData'
import orderType from '../components/orderType'
import orderSource from '../components/orderSource'
  export default {
    data () {
      return {
          bar_id: 'bar_data',
          line_id: 'line_data',
      }
    },
    mounted() {
        this.setSectionHeight();
    },
    components: {
        barTypeData,
        lineTypeData,
        orderType,
        orderSource
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
.data_section{
  display: flex;
}
</style>