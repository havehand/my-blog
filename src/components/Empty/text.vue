<template>
  <div class="a">
    <Empty></Empty>
  </div>
</template>

<script>
import Empty from "./index"
export default {
  components:{
    Empty
  },
}
</script>

<style scoped>
.a{
  height: 500px;
  width: 500px;
  border: 1px solid black;
}
.empty-container /deep/.icon-container{
  font-size: 72px;
}
</style>