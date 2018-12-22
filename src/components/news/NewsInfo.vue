<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h1 class="title"> {{ newsinfo.title }} </h1>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间: {{ newsinfo.add_time | dateFormat }} </span>
      <span>点击: {{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
  // 导入评论子组件
  import comment from '../subcomponents/comment.vue'
  import Toast from 'mint-ui'

  export default {
    data() {
      return {
        id: this.$route.params.id, // 将 URL 地址中传递过来的 Id 挂载到 data 上，方便调用
        newsinfo: {} // 新闻对象
      }
    },
    created() {
      this.getNewsInfo()
    },
    methods: {
      getNewsInfo () {
        // 获取新闻详情
        // this.$http.get("api/getnew/" + this.id).then(result => {
        //   if (result.body.status === 0) {
        //     this.newsinfo = result.body.status
        //   } else {
        //     Toast("获取新闻失败！")
        //   }
        // })


        this.$http.get('../../../data/data.json').then(result => {
          if(result.status === 200) {
            for(var j=0;j<result.body.length;j++) {
              if(result.body[j].id == this.id){
                this.newsinfo = result.body[j]
              }           
            }
          } else {
            Toast("获取新闻失败！")
          }
        })
      }
    },
    components: { // 注册子组件
      'comment-box': comment
    }
  }
</script>

<style lang="scss">
.newsinfo-container {
  padding: 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 13px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
    h4 {
      text-align: center;
    }
  }
}
</style>
