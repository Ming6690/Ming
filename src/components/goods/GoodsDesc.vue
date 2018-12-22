<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}, // 图文数据
    }
  },
  created() {
    this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      this.$http.get('../../../data/goodsData.json').then(result => {
        if (result.status === 200) {
          for(var j=0; j<result.body.length; j++) {
            if (result.body[j].id == this.$route.params.id) {
              // console.log(result.body[j]);
              this.info = result.body[j]
            }
          }
        }
      })
    }
  },
}
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
