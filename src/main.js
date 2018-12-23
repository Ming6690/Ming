// 入口文件
import Vue from 'vue'

// 1.1 导入路由对象
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
// 导入自己的独立的路由模块 router.js
import router from './router.js'

// 每次进入网站，在刚调用 main.js 的时候，先从本地存储中，把购物车的数据读取出来，放到 store 中
var car = JSON.parse(localStorage.getItem('car') || '[]')

// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    car: car, // 将购物车中商品的数据，用一个数组存储起来
  },
  mutations: {
    addToCar(state, goods) {
      // 点击加入购物车，把商品信息保存到 store 的 car 中

      // 假设购物车中没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goods.id) { // 购物车中已有该商品，只需要更新商品数量
          item.count += parseInt(goods.count)
          flag = true
          return true
        }
      })
      
      // 如果循环结束，flag=false，则把商品数据直接 push 到购物车中
      if (!flag) {
        state.car.push(goods)
      }

      // 当 更新 car 之后，把 car 数组，存储到本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))      
    },
    removeFromCar(state, id) {
      // 根据id，从 store 中的购物车中删除对应的商品数据
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i,1)
          return true
        }
      })
      // 当 删除商品完成 之后，把 最新的购物车数据，存储到本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))  
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中商品的数量值
      state.car.some( item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当 修改完商品的数量，把最新的购物车数据 ，存储到本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))   
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))   
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, // 勾选数量
        amount: 0, // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

// 导入时间插件
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from  'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io' 
// 全局设置 post 时候表单数据格式的组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 导入 MUI 样式   
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 app 组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, // 挂载路由对象到 VM 实例上
  store, // 挂载 store 状态管理对象
})