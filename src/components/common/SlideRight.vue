<template>
  <div class="slideRight">
    <template>
      <div class="rightOne">
        <div class="rightTitle">在线用户数</div>
        <div class="cvsBox" style="display: flex">
          <div id="cvsRtOne_a"></div>
          <div id="cvsRtOne_b"></div>
        </div>
      </div>
    </template>
    <template>
      <div class="rightTwo">
        <div class="rightTitle">在线用户数</div>
        <div class="cvsBox">
          <div id="cvsRtTwo"></div>
        </div>
      </div>
    </template>
    <template>
      <div class="rightThree">
        <div class="rightTitle">在线用户数</div>

        <ul >
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
         </ul>
        <ul >
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
<style>
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    padding:11px 16px;
    /*height: 142px;*/
    box-sizing: border-box;
  }
  ul>li{
    width: 49%;
    height: 180px;
    background:url('../../assets/img/leftBg.png')no-repeat;
    box-shadow:0 0 12px 0 rgba(9,78,154,0.65);
    background-size: 100% 100%
  }
  ul>li>p{
    text-align: center;
    color:white
  }
  ul:nth-of-type(2){
    padding-top: 0;
    /*margin-top: 16px;*/
  }
</style>
<script>
  export default {
    name: 'SlideRight',
    mounted () {
      this.draw();
      (function () {
        let myChart = echarts.init(document.getElementById('cvsRtOne_a'))

       let data = [{
          "name": "1",
          "value": 10
        }, {
          "name": "2",
          "value": 10
        }, {
          "name": "3",
          "value": 10
        }, {
          "name": "4",
          "value": 10
        }, {
          "name": "5",
          "value": 10
        }, {
          "name": "6",
          "value": 20
        }, {
          "name": "7",
          "value": 30
        }, ]

       let option = {

          color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
          backgroundColor: '#000',
          title: {
            text: '总数',
            subtext: 7789,
            textStyle: {
              color: '#f2f2f2',
              fontSize: 24,
              // align: 'center'
            },
            subtextStyle: {
              fontSize: 30,
              color: ['#ff9d19']
            },
            x: 'center',
            y: 'center',
          },
          grid: {
            bottom: 150,
            left: 100,
            right: '10%'
          },
          legend: {
            orient: 'vertical',
            top: "middle",
            right: "5%",
            textStyle: {
              color: '#f2f2f2',
              fontSize: 25,

            },
            icon: 'roundRect',
            data: data,
          },
          series: [
            // 主要展示层的
            {
              radius: ['30%', '61%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: true,
                  formatter: "{c}%",
                  textStyle: {
                    fontSize: 30,

                  },
                  position: 'outside'
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 30,
                  length2: 55
                },
                emphasis: {
                  show: true
                }
              },
              name: "民警训练总量",
              data: data,

            },
            // 边框的设置
            {
              radius: ['30%', '34%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [{
                value: 1,
                itemStyle: {
                  color: "rgba(250,250,250,0.3)",
                },
              }],
            }, {
              name: '外边框',
              type: 'pie',
              clockWise: false, //顺时加载
              hoverAnimation: false, //鼠标移入变大
              center: ['50%', '50%'],
              radius: ['65%', '65%'],
              label: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 9,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    borderColor: '#0b5263'
                  }
                }
              }]
            },
          ]
        };

        myChart.setOption(option)
      })()
    },

    methods: {
      draw: () => {
        let myChart = echarts.init(document.getElementById('cvsRtTwo'))

        let model = {
          yCates: ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday',
            'Sunday'],
          xCates: ['1', '2', '3', '4', '5'],
          data: [
            // [yCateIndex, xCateIndex, value]
            [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
            [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
            [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
            [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
            [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
            [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
            [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
          ]
        }

        let data = model.data.map(function (item) {
          return [item[1], item[0], item[2] || '-']
        })

        let option = {
          tooltip: {
            position: 'top'
          },
          animation: false,
          grid: {
            height: '50%',
            y: '5%',
            x:'20%'
          },
          xAxis: {
            type: 'category',
            data: model.xCates
          },
          yAxis: {
            type: 'category',
            data: model.yCates
          },
          visualMap: {
            min: 1,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '3%'
          },
          series: [{
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        }
        myChart.setOption(option)


      }
    }
  }
</script>

<style scoped>
  .slideRight {
    float: right;
    width: 440px;
    height: fit-content;
    padding-right: 10px;
    overflow: hidden;
  }

  .slideRight:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
  }

  .slideRight > div {
    width: 100%;
    margin-bottom: 10px;
    background: url('../../assets/img/leftBg.png');
    box-shadow: 0 0 12px 0 rgba(9, 78, 154, 0.65);
    background-size: 100% 100%
  }

  .rightOne {
    width: 100%;
    height: 248px;
    background-color: #baffad;
  }

  .rightTwo {
    width: 100%;
    height: 258px;
    background-color: #d29eff;
  }

  .rightThree {
    width: 100%;
    height: 440px;
    background-color: #ff3156;
    margin-bottom: 0;
  }


  #cvsRtTwo{
    width: 400px;
    height: 201px;
  }
  #cvsRtThree{
    height: 370px;
  }

  #cvsRtOne_a{
    width: 100%;
    height: 191px;
  }

  .el-row{
    padding: 10px;
  }
  .el-col{
    height: 100px;
    /*border: 1px solid #daff60;*/
   }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .hover-row{
    background-color: #212e3e !important;
  }

  .el-table__body tr:hover{
    background-color: #8ad3f0 !important;
  }

  .el-table tr.current-row>td{
    background-color: #38d3f0 !important;
  }

</style>
