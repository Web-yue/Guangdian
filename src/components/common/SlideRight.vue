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

        <ul>
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
          <li>
            <img src="../../assets/img/car.png" height="142" width="100%" alt="">
            <p>北高峰</p>
          </li>
        </ul>
        <ul>
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

    <!--<template>-->
      <!--<div class="RightFltBox">-->
        <!--<el-form ref="form" :model="form" style="">-->
          <!--&lt;!&ndash;<el-form-item label="名字">&ndash;&gt;-->
          <!--<el-select @change="selectGet" v-model="form.region" placeholder="请选择名字">-->
            <!--<el-option-->
              <!--v-for="item in selectList"-->
              <!--:key="item.id"-->
              <!--:label="item.name"-->
              <!--:value="item.id"-->
            <!--&gt;</el-option>-->
          <!--</el-select>-->
          <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--</el-form>-->
        <!--<template >-->
          <!--<div id="eltmp">-->
            <!--<el-table :header-cell-style="tableHeaderColor"-->
                      <!--:data="tableData" border style="width: 100%">-->
              <!--<el-table-column prop="date" label="日期" width="auto" height="32" align="center" >-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="name" label="姓名" width="auto" height="32" align="center">-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="address" label="地址" width="auto" height="32" align="center">-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</div>-->

        <!--</template>-->

        <!--&lt;!&ndash;&ndash;&gt;-->
        <!--&lt;!&ndash;<ul class="littleUl">&ndash;&gt;-->
        <!--&lt;!&ndash;<li></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li></li>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;<li v-for="(item,index) in lstArr" @click="check($event,item)"&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;:style="index==0?{borderTop:'1px solid #51A0F8'}:{borderTop:'none'}">&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;{{item.content}}&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</ul>&ndash;&gt;-->
      <!--</div>-->
    <!--</template>-->
  </div>
</template>
<style>
  .rightThree > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    padding: 11px 16px;
    /*height: 142px;*/
    box-sizing: border-box;
  }

  .rightThree > ul > li {
    width: 49%;
    height: 180px;
    background: url('../../assets/img/leftBg.png') no-repeat;
    box-shadow: 0 0 12px 0 rgba(9, 78, 154, 0.65);
    background-size: 100% 100%
  }

  .rightThree > ul > li > p {
    text-align: center;
    color: white
  }

  .rightThree > ul:nth-of-type(2) {
    padding-top: 0;
    /*margin-top: 16px;*/
  }

  .RightFltBox {
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style: none;
    width: 250px;
    height: 228px;
    position: absolute;
    border: 1px solid rgba(248,81,81,0.6);
    /*background-color: rgba(248,81,81,0.3);*/
    z-index: 1;
    left: -280px;
    top: 30px;
  }

  .RightFltBox > ul {
    list-style: none;
  }

  .el-input__inner {
    position: relative;
    box-shadow: 0 0 10px red inset;
    border: none;
    color: white;
    background-color: transparent !important;
  }

  #eltmp{
    padding: 0
  }
</style>
<script>
  export default {
    name: 'SlideRight',

    data () {
      return {
        selectList: [
          {id: 0, name: '张三'},
          {id: 1, name: '里三'},
          {id: 2, name: '李四'}
        ],
        form: {
          region: ''
        },
        bgcolor:'black',
        tableData: [{
          date: '台电',
          name: '频段',
          address: '告警类型'
        }, {
          date: '台电',
          name: '频段',
          address: '告警类型'
        },
          {
            date: '台电',
            name: '频段',
            address: '告警类型'
          }

        ]
      }
    },
    mounted () {
      this.draw();
      (function () {
        let myChart = echarts.init(document.getElementById('cvsRtOne_a'))

        let data = [{
          'name': '1',
          'value': 10
        }, {
          'name': '2',
          'value': 10
        }, {
          'name': '3',
          'value': 10
        }, {
          'name': '4',
          'value': 10
        }, {
          'name': '5',
          'value': 10
        }, {
          'name': '6',
          'value': 20
        }, {
          'name': '7',
          'value': 30
        },]

        let option = {

          color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', 'rgba(250,250,250,0.3)'],
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
            left: 0,
            right: '10%'
          },
          legend: {
            orient: 'vertical',
            top: 'middle',
            right: '5%',
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
                  formatter: '{c}%',
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
              name: '民警训练总量',
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
                  color: 'rgba(250,250,250,0.3)',
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
        }

        myChart.setOption(option)

        // setTimeout(function (){
        //   window.onresize = function () {
        //     myChart.resize();
        //   }
        // },200)
      })()

    },

    methods: {
      selectGet (vId) {
        let obj = {}
        obj = this.selectList.find((item) => {//这里的selectList就是上面遍历的数据源
          return item.id === vId//筛选出匹配数据
        })
        console.log(obj.name)//我这边的name就是对应label的
        console.log(obj.id)
      },
      tableHeaderColor({ row, column, rowIndex, columnIndex }) {
        if (rowIndex === 0) {
          return 'background-color: #0C2859;color: #fff;font-weight: 500;'
        }
      },
      draw: () => {
        let myChart = echarts.init(document.getElementById('cvsRtTwo'))

        let model = {
          yCates: ['周一', '周二', '周三',
            '周四', '周五', '周六',
            '周末'],
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
            width: '80%',
            right: '5%',
            left: '10%',
            y: '5%',
            // x:'10%'
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
        // setTimeout(function (){
        //   window.onresize = function () {
        //     myChart.resize();
        //   }
        // },200)

      }

    }
  }
</script>

<style scoped>
  .RightFltBox .el-form {
    width: 100%;
    background-color: transparent;
  }

  .slideRight {
    /*float: right;*/
    position: absolute;
    right: 0;
    top: 100px;
    z-index: 1;
    width: 440px;
    height: fit-content;
    padding-right: 10px;
    /*overflow: hidden;*/
  }

  .slideRight:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
  }

  .slideRight > div:not(.RightFltBox) {
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

  #cvsRtTwo {
    width: 100%;
    height: 201px;
  }

  #cvsRtThree {
    height: 370px;
  }

  #cvsRtOne_a {
    width: 100%;
    height: 191px;
  }

  .el-row {
    padding: 10px;
  }

  .el-col {
    height: 100px;
    /*border: 1px solid #daff60;*/
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .hover-row {
    background-color: #212e3e !important;
  }

  .el-table__body tr:hover {
    background-color: #8ad3f0 !important;
  }

  .el-table tr.current-row > td {
    background-color: #38d3f0 !important;
  }

</style>
