<template>
  <div class="gmap">
     <el-amap vid="amapDemo"  :zoom="zoom" :center="center" :plugin="plugin" style="height:100%;width: 100%">
    </el-amap>
  </div>
</template>
<!--<script src="http://webapi.amap.com/maps?v=1.3&amp;key=您申请的key值&callback=init"></script>-->

<script>


  // var map
  export default {
    name: 'Gmap',
    data(){
      let self=this;
      return {
        zoom:16,
        center:[121.59996,31.197646],
          plugin:[{
          pName:'Geolocation',
            event:{
            init(o){
              o.getCurrentPosition((status,result) => {
                if(result&&result.position){
                  self.lng=result.position.lng;
                  self.lat=result.position.lat;
                  self.center=[self.lng,self.lat];
                  self.loaded=true;
                  self.$nextTick()

                }
              })
            }
            }
          }]
      }
    },
    methods: {

    },
    beforeMount:function(){

    },
    mounted:function () {
      // var script = document.createElement('script')
      // script.type = 'text/javascript'
      // script.src = 'https://webapi.amap.com/maps?v=1.3&key=4cb80a196a9ac498bb2ba39e0d72f9e8'   // 高德地图
      // document.body.appendChild(script);
     }
  }
</script>

<style scoped>
  .gmap{
    width:100%;
    height: 100%;
    top: 0;
    left: 0;
    position: relative;
    z-index: 0;
  }
</style>
