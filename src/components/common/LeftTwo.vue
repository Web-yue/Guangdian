<template>
  <div class="leftTwo">
    <div class="leftTitle">各频段发射机数量</div>
    <div class="cvsBox">
      <canvas id="cvsTwo"></canvas>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LeftTwo',
    mounted () {
      this.draw()
    },

    methods: {
      draw: () => {
        let myChart = echarts.init(document.getElementById('cvsTwo'))

        let option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          // legend: {
          //   data: ['云上贵州', '政法平台', '互联网舆情']
          // },
          grid: {
            left: '3%',
            right: '4%',
            top:'2%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          series: [
            {
              name: '云上贵州',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '政法平台',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '互联网舆情',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },

          ]
        }

        myChart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  .leftTwo {
    height: 240px;
    /*background-color: #859964;*/
  }



  #cvsTwo {
    width: 100%;
    height: 188px;
    background-color: #fff;
  }
</style>
