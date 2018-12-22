<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- lunbotuList 有使用者提供 -->
      <!-- lunbotuList 由父组件想子组件传值设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.src">
        <img :src="item.src" alt="" :class="{ 'full': isfull }">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ["lunbotuList", "isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;

  .mint-swipe-item { // 这是交集选择器
    img {
      // width: 100%;
      height: 100%;
    }
  }
}

.full {
  width: 100%;
}
</style>
