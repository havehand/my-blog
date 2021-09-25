<template>
  <div class="text-container">
    <Layout>

      <template #left>
        <div class="aside">
          <SideAside></SideAside>
        </div>
      </template>

      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop></ToTop>
  </div>
</template>

<script>
import SideAside from "@/components/SiteAside"
import Layout from "@/components/Layout"
import ToTop from "@/components/ToTop"
export default {
  components:{
    SideAside,
    Layout,
    ToTop
  }
}
</script>

<style scoped lang="less">
.text-container{
  width: 100%;
  height: 100%;
  background-color: white;
  .aside{
    width: 250px;
    height: 100%;
    background-color: black;
  }
}
</style>
