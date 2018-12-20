<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.quantity }}件</span>
        </p>
      </div>
    </div>
    
    <div class="goods-item">
      <img src="../../images/lunbo/2.jpg" alt="">
      <h1 class="title">小米(Mi) 小米6 6+64G/6+128G双网通/全网通全新上架</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../images/lunbo/3.jpg" alt="">
      <h1 class="title">小米(Mi) 小米Note16G双网通</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥2199</span>
          <span class="old">￥2399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // data 是往自己组件内部挂载数据
    return {
      pageindex: 1, // 分页的页数
      goodslist: [], // 存放商品列表的数组
    }
  },
  created() {
    this.getGoodsList()    
  },
  methods: {
    getGoodsList() {
      // 获取商品列表
      this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result => {
        if (result.body.status === 0) {
          this.goodslist = result.body.message
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 287px;
    img{
      height: 180px;
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>

