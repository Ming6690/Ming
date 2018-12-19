<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容(最多输入120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_tiem">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_tiem | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === '' ? '评论为空' : item.content }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      pageIndex: 1, // 默认显示第一页数据
      comments: [] // 所有的评论数据
    };
  },
  created() {
    this.getComment()
  },
  methods: {
    getComment() {
      // this.$http.get("api/getcomments/"+ this.id + "?pageindex=" + this.pageIndex)
      //   .then(result => {
      //     if(result.body.status === 0) {
      //       this.comments = result.body.message
      //     } else {
      //       Toast("获取评论失败！")
      //     }
      //   })

      this.$http.get('../../../data.json').then(result => {
        if(result.status === 200) {
          for(var j=0;j<result.body.length;j++) {
            if(result.body[j].id == this.id){
              // 每当获取新评论的时候，不要清空就评论，应该在旧评论上拼接新评论
              // this.comments = this.comments.concat(result.body[j].comment)
              this.comments = result.body[j].comment
            }           
          }
        } else {
          Toast("加载评论失败！")
        }
      })
    },
    getMore() {
      // 加载更多评论
      console.log("加载更多评论...");
      // this.pageIndex++
      // this.getComment()
    }
  },
  props: ["id"]
} 
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
