<template>
  <div class="text-container">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./index"
export default {
  components:{
    Contact
  }
}
</script>

<style scoped lang="less">
@import "../../styles/mixin.less";
.text-container{
  width: 400px;
  height: 600px;
  background-color: #111;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>