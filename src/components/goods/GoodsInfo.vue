<template>
  <div class="goodsinfo-container">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card goods-info">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量: <numbox></numbox></p>
          <p class="mtb">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号: {{ goodsinfo.goods_no }}</p>
          <p>库存情况: {{ goodsinfo.quantity }} 件</p>
          <p>上架时间: {{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'
// 导入数字选择框组件
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [], // 轮播图数据
      goodsinfo: {}, // 商品信息
      ballFlag: false, // 控制小球的隐藏与显示
    }
  },
  created() {
    this.getLunbotu()
  },
  methods: {
    getLunbotu() {
      // 获取商品详情轮播图和商品信息
      this.$http.get('../../../data/goodsData.json').then(result => {
        if (result.status === 200) {
          for(var j=0; j<result.body.length; j++) {
            if (result.body[j].id == this.id) {
              this.lunbotu = result.body[j].lunbotu 
              this.goodsinfo = result.body[j]
            }
          }
        }
      })
    },
    goDesc(id) {
      // 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } })
    },
    goComment(id) {
      // 点击跳转到 评论页面
      this.$router.push({ name: "goodscomment", params: { id } })
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)"
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(26px, 212px)"
      el.style.transition = "all 0.3s cubic-bezier(.4,-.3,1,.68)"
      done()
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag
    }
  },
  components: {
    swiper,
    numbox
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
    
  }

  .goods-info {
    text-align: center;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 407px;
    left: 212px;
  }
}
</style>
