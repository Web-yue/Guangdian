// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 默认主题

Vue.config.productionTip = false

import echarts from 'echarts' //引入echarts
Vue.prototype.$echarts = echarts //引入组件
window.echarts = require('echarts')

// vue-cli 引用高德地图方法 npm install vue-amap -S
import AMap from 'vue-amap'
Vue.use(AMap)

AMap.initAMapApiLoader({
// 高德的key
//   key: '4cb80a196a9ac498bb2ba39e0d72f9e8',
  key: 'fa76932d81b49ad464949b6f5a08799f',
// 插件集合
  plugin: ['AMap.Autocomplete','AMap.DistrictSearch','AMap.Object3DLayer', 'Map3D','AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

// import AMap from 'AMap'
// Vue.use(AMap)
//
//
// let createMap = () => {
//   const promise = new Promise(function (resolve, reject) {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://webapi.amap.com/maps?v=1.3&key=1f648c12a2709a14b0e79551fdc5f791'   // 高德地图
//     document.body.appendChild(script)
//     if (script.nodeName === 'SCRIPT') {
//       resolve()
//     } else {
//       reject(new Error('Could not script image at ' + script.src))
//     }
//   })
//   return promise
// }
// createMap().then(function () {
//   console.log('读取高德地图成功')
//   // 加載當前的ip定位
// }).catch(function (error) {
//   // 处理 getJSON 和 前一个回调函数运行时发生的错误
//   console.log('发生错误！', error)
// })




Vue.use(ElementUi, {
  size: 'small'
})

 new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
