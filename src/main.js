// 入口文件
import Vue from 'vue'

// 1.1 导入路由对象
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 导入自己的独立的路由模块 router.js
import router from './router.js'

// 2.1 导入 vue-resource
import VueResource from  'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 导入 MUI 样式   
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 app 组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 挂载路由对象到 VM 实例上
})