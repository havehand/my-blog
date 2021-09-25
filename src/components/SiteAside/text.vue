<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from "./index"
export default {
  components:{
    SiteAside
  }
}
</script>

<style scoped lang="less">
.test-container{
  width: 250px;
  height: 700px;
  border: 2px solid black;
  margin: 0 auto;
  background-color: #000;
}
</style>