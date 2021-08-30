import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './main.css';

import 'cesium/Widgets/widgets.css';

global.Cesium = require('cesium/Cesium');

require('@dvgis/cesium-map/build/cesium.map.min');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')