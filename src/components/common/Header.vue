<template>
  <div class="header">
    <div class="header-right" ref="time">

    </div>
  </div>
</template>

<script>
  // $(function(){
  //   setInterval("getTime();",1000); //每隔一秒运行一次
  // })
  // //取得系统当前时间
  // function getTime(){
  //   var myDate = new Date();
  //   var date = myDate.toLocaleDateString();
  //   var hours = myDate.getHours();
  //   var minutes = myDate.getMinutes();
  //   var seconds = myDate.getSeconds();
  //   $("#showDate").html(date+" "+hours+":"+minutes+":"+seconds); //将值赋给div
  // }
   export default {
    name: 'Header',
     data(){
      return {
      }
     },
     beforeMount(){
      this.$ref.time.bindTexture('12')
     }
  }
</script>

<style scoped>
  .header{
    height: 100px;
    /*width: 100%;*/
    background: url('../../assets/img/header.png')no-repeat center top;
    /*-webkit-background-size: ;*/
    background-size: auto 100%;
    position: relative;
  }
  .header-right{
    float: right;
    color:white;
    padding:20px 50px 0 0;
  }
</style>
