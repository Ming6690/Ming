<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容(最多输入120字)" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
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
      comments: [], // 所有的评论数据
      msg: '', // 评论输入的内容
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

      this.$http.get('../../../data/data.json').then(result => {
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
    },
    postComment() {
      // 校验是否为空内容
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }

      this.$http.get('../../../data/data.json').then(result => { // 数据不能保存
        if(result.status === 200) {
          for(var j=0;j<result.body.length;j++) {
            if(result.body[j].id == this.$route.params.id){
              var cmt = { "user_name": "匿名用户", "add_time": Date.now(), "content": this.msg.trim() };
              result.body[j].comment.unshift(cmt)
              // console.log(result.body[j].comment);
              this.msg = ""
              this.comments = result.body[j].comment
              console.log(result.body[j].comment);
            }           
          }
        } 
      })

      // 发表评论
      // 参数1： 请求的URL地址
      // 参数2： 提交给服务器的数据对象 { content: this.msg }
      // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
      // this.$http
      //   .post("api/postcomment/" + this.$route.params.id, {
      //     content: this.msg.trim()
      //   })
      //   .then(function(result) {
      //     if (result.body.status === 0) {
      //       // 1. 拼接出一个评论对象
      //       var cmt = {
      //         user_name: "匿名用户",
      //         add_time: Date.now(),
      //         content: this.msg.trim()
      //       };
      //       this.comments.unshift(cmt);
      //       this.msg = "";
      //     }
      //   });
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
