import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '主页面',
    component: () => import('@/views/index')
  },
  {
    path: '/cesium',
    name: '三维',
    component: () => import('@/views/Cesium/cesium')
  },
  {
    path: '/openlayers',
    name: '二维',
    component: () => import('@/views/openlayer/openlayer')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router