<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中 使用 v-for 循环一定要使用 key -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" >
      </mt-swipe-item> -->
      <mt-swipe-item><a href="http://www.baidu.com"><img src="../../images/lunbo/1.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item><img src="../../images/lunbo/2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../images/lunbo/3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu2.png" alt="">        
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu3.png" alt="">        
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>]
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu4.png" alt="">        
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu5.png" alt="">        
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu6.png" alt="">        
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
  import { Toast } from  'mint-ui'

  export default {
    data() {
      return {
        lunbotuList: [
        ] // 保存轮播图的数组
      }
    },
    created() {
      // this.getLunbotu()
    },
    methods: {
      // getLunbotu() { // 获取轮播图数据的方式
      //   this.$http.get('api/getlunbo').then(result => {
      //     // console.log(result.body)
      //     if(result.body.status === 0) {
      //       // 请求成功
      //       this.lunbotuList = result.body.message 
      //     } else {
      //       // 请求失败
      //       Toast("加载图片失败。。。")
      //     }
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item { // 这是交集选择器
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: pink;
      }
      &:nth-child(3) {
        background-color: cyan;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }

    .mui-media-body {
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
    padding: 0;
    margin: 0;
  }

</style>
