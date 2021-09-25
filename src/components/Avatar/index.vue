<!--头像定义组件-->
<template>
  <img class="avatar-container" :src="url" :style="{
		width: size + 'px',
		height: size + 'px'
	}" alt="">
</template>

<script>
export default{
  props:{
    url:{
      type:String,
      required:true
    },
    size:{
      type:Number,
      default:150
    }
  }
}
</script>

<style scoped="scoped">
.avatar-container{
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
