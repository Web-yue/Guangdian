<template>
  <div class="leftOne">
    <div class="leftTitle">本年度正常运行情况</div>
    <div class="cvsBox">
      <div id="cvsOne" ref="Echart"></div>
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

    },
    watch: {
      screenWidth (val) {
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            console.log(that.screenWidth)
            that.timer = false
          }, 400)
        }
      }
    },
    methods: {

      draw: () => {
        let myChart = echarts.init(document.getElementById('cvsOne'))

        let option = {
          backgroundColor: 'transparent',
          // title:{
          //   text:'各类型注销数量占比'
          // },
          tooltip: {},

          series: [{
            name: '申请注销',
            type: 'pie',
            radius: ['40%', '45%'],
            center: ['80%', '30%'],
            color: '#00EE76',
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 69,
              name: '申请注销数',

              label: {
                normal: {
                  formatter: '{d} %',
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 申请注销数 : {c}'
              }
            }, {
              value: 133,
              name: '其他类型数',
              label: {
                normal: {
                  formatter: '\n申请注销占比',
                  textStyle: {
                    color: '#555',
                    fontSize: 13
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#aaa'
                },
                emphasis: {
                  color: '#aaa'
                }
              },
            }]
          }, {
            name: '吊销注销',
            type: 'pie',
            radius: ['40%', '45%'],
            center: ['20%', '30%'],
            color: '#FF4500',
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 38,
              name: '吊销注销数',

              label: {
                normal: {
                  formatter: '{d} %',
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 吊销注销数 : {c}'
              }
            }, {
              value: 164,
              name: '其他类型数',
              label: {
                normal: {
                  formatter: '\n吊销注销占比',
                  textStyle: {
                    color: '#555',
                    fontSize: 13
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#aaa'
                },
                emphasis: {
                  color: '#aaa'
                }
              },
            }]
          }, {
            name: '吊销注销',
            type: 'pie',
            radius: ['40%', '45%'],
            center: ['60%', '30%'],
            color: '#FF4500',
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 38,
              name: '吊销注销数',

              label: {
                normal: {
                  formatter: '{d} %',
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 吊销注销数 : {c}'
              }
            }, {
              value: 164,
              name: '其他类型数',
              label: {
                normal: {
                  formatter: '\n吊销注销占比',
                  textStyle: {
                    color: '#555',
                    fontSize: 13
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#aaa'
                },
                emphasis: {
                  color: '#aaa'
                }
              },
            }]
          }, {
            name: '到期注销',
            type: 'pie',
            radius: ['40%', '45%'],
            center: ['40%', '30%'],
            color: '#473C8B',
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              value: 95,
              name: '到期注销数',

              label: {
                normal: {
                  formatter: '{d} %',
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}'
              }
            }, {
              value: 107,
              name: '其他类型数',
              label: {
                normal: {
                  formatter: '\n到期注销占比',
                  textStyle: {
                    color: '#555',
                    fontSize: 13
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#aaa'
                },
                emphasis: {
                  color: '#aaa'
                }
              },
            }]
          }]
        }

        myChart.setOption(option)
        // setTimeout(function () {
        //   window.onresize = function () {
        //     myChart.resize()
        //   }
        // }, 200)
      }
    }
  }
</script>

<style scoped>
  .leftOne {
    height: 274px;
    /*background-color: rebeccapurple;*/
  }

  #cvsOne {
    width: 100%;
    height: 160px;
  }

</style>
