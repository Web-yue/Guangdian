<template>
  <div class="gmap">
    <!--<el-amap vid="amapDemo"  :zoom="zoom" :center="center" :plugin="plugin" :mapStyle="mapStyle" style="height:100%;width: 100%">-->
    <!--</el-amap>-->
    <div id="container" class="amap-container" style="height:100%;width: 100%"></div>
  </div>
</template>

<script>
  // https://lbs.amap.com/api/javascript-api/example/object3d-base/3d-radar

  export default {
    name: 'GMap',
    data () {
      let self = this
      return {
        // zoom:16,
        // mapStyle: "amap://styles/darkblue",
        // center:[121.59996,31.197646],
        // plugin:[{
        //   pName:'Geolocation',
        //     event:{
        //     init(o){
        //       o.getCurrentPosition((status,result) => {
        //         if(result&&result.position){
        //           self.lng=result.position.lng;
        //           self.lat=result.position.lat;
        //           self.center=[self.lng,self.lat];
        //           self.loaded=true;
        //           self.$nextTick()
        //
        //         }
        //       })
        //     }
        //     }
        //   }]
      }
    },
    methods: {},

    beforeMount: function () {



      let opts = {
        subdistrict: 0,
        extensions: 'all',
        level: 'province'
      }
      //利用行政区查询获取边界构建mask路径
      //也可以直接通过经纬度构建mask路径

      AMap.service('AMap.DistrictSearch', function () {
        let district = new AMap.DistrictSearch(opts)
        district.search('浙江省', function (status, result) {
          let bounds = result.districtList[0].boundaries
          let mask = []
          for (let i = 0; i < bounds.length; i += 1) {
            mask.push([bounds[i]])
          }
          let map = new AMap.Map('container', {
            mask: mask,
            disableSocket: true,
            showLabel: false,
            viewMode:'3D',
            labelzIndex: 130,
            pitch: 40,
            zoom: 8,
            layers: [
              //new AMap.TileLayer.Satellite()
            ],
            resizeEnable: true,
            mapStyle: 'amap://styles/darkblue',


          })


          //标记点
          // let maskerIn = new AMap.Marker({
          //   position:[116.501415,39.926055],
          //   map:map
          // })
          // let maskerOut = new AMap.Marker({//区域外的不会显示
          //   position:[117.001415,39.926055],
          //   map:map
          // })

          //添加高度面 3D视图
          // let object3Dlayer = new AMap.Object3DLayer({zIndex:1});
          // map.add(object3Dlayer)

          // let height = -8000;
          // let color = '#0088ffcc';//rgba
          // let wall = new AMap.Object3D.Wall({
          //   path:bounds,
          //   height:height,
          //   color:color
          // });
          // wall.transparent = true
          // object3Dlayer.add(wall)
          //添加描边

          for (let i = 0; i < bounds.length; i += 1) {
            new AMap.Polyline({
              path: bounds[i],
              strokeColor: '#99ffff',
              strokeWeight: 4,
              map: map
            })
          }


          var canvas = document.createElement('canvas');
          canvas.width = canvas.height = 200;

          var context = canvas.getContext('2d')
          context.fillStyle = 'rgb(0,100,255)';
          context.strokeStyle = 'white';
          context.globalAlpha = 1;
          context.lineWidth = 2;

          var radious = 0;
          var draw = function () {
            context.clearRect(0, 0, 200, 200)
            context.globalAlpha = (context.globalAlpha - 0.01 + 1) % 1;
            radious = (radious + 1) % 100;

            context.beginPath();
            context.arc(100, 100, radious, 0, 2 * Math.PI);
            context.fill();
            context.stroke();

            //2D视图时可以省略
            CanvasLayer.reFresh();

            AMap.Util.requestAnimFrame(draw);
          };

          var CanvasLayer = new AMap.CanvasLayer({
            canvas: canvas,
            bounds: new AMap.Bounds(
              [116.328911, 39.937229],
              [116.342659, 39.946275]
            ),
            zooms: [3, 18],
          });

          CanvasLayer.setMap(map);
          draw();

        })
      })

    },
    mounted: function () {

    }
  }
</script>

<style scoped>
  .gmap {
    width: 100%;
    height: 100%;
    top: 0;
    /*left: 0;*/
    position: absolute;
    z-index: 0;
  }
</style>
