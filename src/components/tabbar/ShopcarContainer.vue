<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.img_url" alt="">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件,总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
          </div>
          <mt-button type="danger">结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'

export default {
  data() {
    return {
      goodslist: [], // 购物车中所有商品的数据
    }
  },
  created() {
    this.getGoodList()
  },
  methods: {
    getGoodList() {
      // 1. 获取 store 中所有的商品的 id
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果购物车中没有商品，则直接返回，不需要请求数据
      if (idArr.length <= 0) {
        return
      }

      this.$http.get("../../../data/goodsData.json").then(result => {
        if (result.status == 200) {
          for(var i=0; i<result.body.length; i++) {
            for(var j=0; j<idArr.length; j++) {
              if (result.body[i].id == idArr[j]) {
                this.goodslist.push(result.body[i])
              }
            }
          }
        }
      })
    },
    remove(id, index) {
      // 点击删除，把商品从 store 中根据传递的id删除，同时根据index删除当前组件中的 goodslist 中的商品
      this.goodslist.splice(index, 1)
      this.$store.commit('removeFromCar', id)
    },
    selectedChanged(id, val) {
      // 每当点击开关，把最新的开关状态同步到 store 中
      this.$store.commit('updateGoodsSelected', {id, selected: val})
    }
  },
  components: {
    numbox
  }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;

  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }

    img {
      width: 60px;
      height: 60px;
    }

    h1 {
      font-size: 13px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }

  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
