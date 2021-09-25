<template>
  <div class="empty-container">
    <div>
      <Icon type="empty" :size="size"></Icon>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon/index"
export default {
  components:{
    Icon
  },
  props:{
    text:{
      type:String,
      default:"无数据"
    },
    size:{
      type: Number,
      default: 20
    }
  }
}

</script>

<style scoped lang="less">
@import "../../styles/mixin";
@import "../../styles/var";
.empty-container{
  color: @gray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icon{
  font-size: 200px;
}
.text{
  text-align: center;
  font-size: 20px;
  letter-spacing: 6px;
}
</style>