<template>
  <div>
    <!-- <comment-box :id="$route.params.id"></comment-box> -->
    <comment :id="$route.params.id"></comment>
  </div>
</template>

<script>
  import comment from '../subcomponents/comment.vue'

export default {
  components: {
    // "comment-box": comment
    comment
  }
}
</script>

<style lang="scss" scoped>

</style>

