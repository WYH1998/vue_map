import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '主页面',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/cesium',
    name: '三维',
    component: () => import('@/views/cesium_Map.vue')
  },
  {
    path: '/openlayers',
    name: '二维',
    component: () => import('@/views/openlayer_Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router