<template>
  <div class="text-container">
    <Layout>

      <template #left>
        <div class="left">
          左边区域
        </div>
      </template>

      <template>
        <div class="main">
          主区域
        </div>
      </template>

      <template #right>
        <div class="right">
          右边区域
        </div>
      </template>

    </Layout>
  </div>
</template>

<script>
import Layout from "./index"
export default {
  components:{
    Layout
  }
}
</script>

<style scoped lang="less">
.text-container{
  width: 1000px;
  height: 600px;
  border: 2px solid black;
  margin: 0 auto;
}
.left{
  width: 200px;
  height: 100%;
  background-color: #6b9eee;
}
.main{
  width: 100%;
  height: 100%;
  background-color: #dc6a12;
}
.right{
  width: 150px;
  height: 100%;
  background-color: #7ebf50;
}
</style>