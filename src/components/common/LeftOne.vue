<template>
  <div class="leftOne">
    <div class="leftTitle">本年度正常运行情况</div>
    <div>
      <canvas id="cvsOne"></canvas>
    </div>

    <!--<p v-html="inputName"></p>-->
    <!--<p v-html="msgFather"></p>-->
  </div>
</template>

<script>

//  var echarts = require("echarts");
//  require('echarts/chart/line');
//  require('echarts/chart/bar');
  export default {
    name: 'LeftOne',
    props: {
      msgFather: {
        default: '123'
      },
      inputName: {
        default: '123456',
      }
    },
    // props:['inputName','msgFather']
    mounted () {
      this.draw();
      (function () {
        let myChart = echarts.init(document.getElementById('cvsOne'))

        myChart.configParameters = {
          pie1Process: {
            min: 0,
            max: 100
          },
          pie2Process: {
            min: 0,
            max: 100
          },
          pie3Process: {
            min: 0,
            max: 100
          },
        };

        myChart.config = {
          message: 'dat.gui',
          pie1Process: 25,
          pie2Process: 50,
          pie3Process: 75,
          pie1Color: '#3dd4de',
          pie2Color: '#b697cd',
          pie3Color: '#a6f08f',
          onChange: function() {
            var tempOption = {
              title: {
                text: parseInt(myChart.config.pie2Process) + '%',
                textStyle: {
                  color: myChart.config.pie2Color,
                }
              },
              series: [{
                data: [{
                  value: parseInt(myChart.config.pie1Process),
                  itemStyle: {
                    normal: {
                      color: myChart.config.pie1Color,
                      shadowColor: myChart.config.pie1Color,
                    }
                  },
                  label: {
                    normal: {
                      formatter: '{d}%',
                      position: 'center',
                      show: true,
                      textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: myChart.config.pie1Color
                      }
                    }
                  },
                }, {
                  value: 100 - parseInt(myChart.config.pie1Process),
                  itemStyle: placeHolderStyle,

                }]
              }, {
                data: [{
                  value: parseInt(myChart.config.pie2Process),
                  itemStyle: {
                    normal: {
                      color: myChart.config.pie2Color,
                      shadowColor: myChart.config.pie2Color,
                    }
                  }
                }, {
                  value: 100 - parseInt(myChart.config.pie2Process),
                  itemStyle: placeHolderStyle,
                }]
              }, {
                data: [{
                  value: parseInt(myChart.config.pie3Process),
                  label: {
                    normal: {
                      formatter: '{d}%',
                      position: 'center',
                      show: true,
                      textStyle: {
                        fontSize: '35',
                        fontWeight: 'normal',
                        color: myChart.config.pie3Color
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: myChart.config.pie3Color,
                      shadowColor: myChart.config.pie3Color,
                    }
                  }
                }, {
                  value: 100 - parseInt(myChart.config.pie3Process),

                  itemStyle: placeHolderStyle,
                }]
              }]
            }
            myChart.setOption(tempOption);
          }
        };


// 这里借鉴'5643我'和'小明的小可'两位大神的圆环图格式演示一下效果
        var dataStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
          }
        };

        var placeHolderStyle = {
          normal: {
            color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
          }
        };

        let option = {
          title: {
            text: '50%',
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#b697cd',
              fontSize: 35
            }
          },
          tooltip: {
            show: false,
          },
          toolbox: {
            show: false,
          },
          // color : ['#3dd4de','#b697cd','#a6f08f'],
          backgroundColor: 'rgba(0,0,0,0.8)',
          series: [{
            name: 'Pie1',
            type: 'pie',
            clockWise: false,
            radius: [80, 85],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['25%', '50%'],
            data: [{
              value: 25,
              label: {
                normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '35',
                    fontWeight: 'normal',
                    color: '#3dd4de'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#3dd4de',
                  shadowColor: '#3dd4de',
                  shadowBlur: 10
                }
              }
            }, {
              value: 75,
              name: 'invisible',
              itemStyle: placeHolderStyle,
            }]
          }, {
            name: 'Pie2',
            type: 'pie',
            clockWise: false,
            radius: [80, 85],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
              value: 50,
              itemStyle: {
                normal: {
                  color: '#b697cd',
                  shadowColor: '#b697cd',
                  shadowBlur: 10
                }
              }
            }, {
              value: 50,
              name: 'invisible',
              itemStyle: placeHolderStyle,
            }]
          }, {
            name: 'Pie3',
            type: 'pie',
            clockWise: false,
            radius: [80, 85],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['75%', '50%'],
            data: [{
              value: 75,
              label: {
                normal: {
                  formatter: '{d}%',
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: '35',
                    fontWeight: 'normal',
                    color: '#a6f08f'
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#a6f08f',
                  shadowColor: '#a6f08f',
                  shadowBlur: 10
                }
              }
            }, {
              value: 25,
              name: 'invisible',
              itemStyle: placeHolderStyle,
            }]
          }, ]
        }

        myChart.setOption(option);
      })();
      (function () {

      })()
    },

    methods: {
      draw: () => {

      }
    }
  }
</script>

<style scoped>
  .leftOne {
    height: 274px;
    /*background-color: rebeccapurple;*/
  }


</style>
