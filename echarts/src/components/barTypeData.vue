<template>
  <div :id="id" style="width:100%;height:400px;">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      myChart:null,
    }
  },
  props: ['id'],
  mounted () {
    this.myChart = echarts.init(document.getElementById(this.id));
    this.myChart.setOption(this.readyBarOption(this.type));
  },
  methods: {
    readyBarOption(){
      let data = {
        tooltip: {
          trigger:'axis',     // 坐标轴触发有效，主要在柱状图，折线图等会使用
          axisPointer:{ 
              type:'shadow'     // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度']
        },
        grid:{
          left:'3%',
          right:'4%',
          bottom:'3%',
          containLabel:true
        },
        xAxis: {
          type: 'category',
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
          name:'邮件营销',
          type:'bar',
          stack: '广告',
          data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
              lineStyle: {
                normal: {
                  type: 'dashed' //线的类型
                }
              },
              data : [
                [{type : 'min'}, {type : 'max'}]  //线最小值到最大值
              ]
            }
          },
          {
            name:'百度',
            type:'bar',
            barWidth : 5, //最后一个 'bar' 系列上才会生效，宽度
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
          }
        ]
      }
      return data;
    }
  },
  watch: {
    id: (v)=>{
      this.readyBarOption(v);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
