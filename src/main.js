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
  key: '4cb80a196a9ac498bb2ba39e0d72f9e8',
// 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

Vue.use(ElementUi, {
  size: 'small'
})

 new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
