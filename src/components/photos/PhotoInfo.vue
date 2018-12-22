<template>
  <div class="photoinfo-container">
    <!-- 标题区域 -->
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间: {{ photoinfo.add_time | dateFormat }}</span>
      <span>点击: {{ photoinfo.click }} 次</span>
    </p>

    <hr>

    <!-- 缩略区域 -->
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论子组件区域 -->
    <cmt-box :id="id"></cmt-box>

  </div>
</template>
 
<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, // 从路由中获取的图片路由 Id
      photoinfo: {}, // 图片详情对象
      list: [], // 缩略图数组
    }
  },
  created() {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      // this.$http.get("api/getimageInfo/" + this.id).then(result => {
      //   if (result.body.status === 0) {
      //     this.photoinfo = result.body.message[0]
      //   }
      // })
      this.$http.get("../../../data/photoinfoData.json").then(result => {
        if (result.status === 200) {
          // console.log(result);
          for (var j=0; j<result.body.length; j++) {
            if (result.body[j].id == this.id) {
              this.photoinfo = result.body[j]
              result.body[j].url.forEach(item => {
                item.w = 600
                item.h = 400
              })
              this.list = result.body[j].url
            }
          }
        }
      })
    }
  },
  components: { // 注册评论子组件
    'cmt-box': comment
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    img {
      width: 100px;
      height: 100px;
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
