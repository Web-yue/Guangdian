<template>
  <div class="header">

    <div class="header-right" ref="time" v-html="realTime">
     </div>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    data () {
      return {
        realTime: '2019-1-1 00:00'
      }
    },
    props:['msgFather'],

    methods: {
      // 获取当前时间函数a
      dealWithTime: (timeStamp) => {
       const  fmtTime=(a) => {return a < 10 ? '0' +  a: a}
        let year = new Date(timeStamp).getFullYear()
        let month = new Date(timeStamp).getMonth()
        let date = new Date(timeStamp).getDate()
        let hh = new Date(timeStamp).getHours()
        let mm = new Date(timeStamp).getMinutes()
        let ss = new Date(timeStamp).getSeconds()
        return year + '-' +fmtTime(month) + '-' + fmtTime(date)  + ' ' + fmtTime(hh) + ':' + fmtTime(mm) + ':' + fmtTime(ss)
      },

    },

    mounted () {
      // 页面加载完后显示当前时间
      this.realTime = this.dealWithTime(new Date())
      // 定时刷新时间
      let _this = this
      // 定时器
      this.timer = setInterval(function () {
        _this.realTime = _this.dealWithTime(new Date()) // 修改数据date
      }, 1000)
    },
    destroyed () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }

  }
</script>

<style scoped>
  .header {
    height: 100px;
     background: url('../../assets/img/header.png') no-repeat center top;
     background-size: auto 100%;
    position: relative;
  }

  .header-right {
    float: right;
     padding: 20px 50px 0 0;
    font-size:16px;
    font-family:BigYoungBoldGB20;
    color:rgba(246,249,255,1);
    line-height:16px;
    text-shadow:0 2px 0 rgba(16,17,18,0.5), 0 0 5px rgba(37,108,215,0.77);
  }
</style>
