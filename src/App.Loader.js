/**
 * @Author: Caven
 * @Date: 2020-03-19 22:36:19
 */
import Vue from 'vue'

import 'cesium/Widgets/widgets.css'

global.Cesium = require('cesium/Cesium')

require('@dvgis/cesium-map/build/cesium.map.min')

// const hub = new Vue()
// class AppLoader {
//   constructor() {
//     Vue.config.productionTip = false
//     Vue.use({
//       install(Vue) {
//         Vue.prototype.$hub = hub
//       }
//     })
//   }

//   // install() {
//   //   global.Vue = Vue
//   //   return Promise.all([import('@/components')])
//   // }
// }

const appLoader = new AppLoader()
export default appLoader
