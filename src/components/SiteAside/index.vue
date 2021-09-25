<template>
  <div class="SiteAside-container" v-if="data">
    <div class="avatar">
      <Avatar :size="140" :url="data.avatar"></Avatar>
    </div>
    <div class="title">{{data.siteTitle}}</div>
    <Menu></Menu>
    <Contact></Contact>
  </div>
</template>

<script>
import Avatar from "../Avatar/index";
import Contact from "../Contact/index";
import Menu from "../Menu/index";
import {mapState} from "vuex";
export default {
  components:{
    Avatar,
    Contact,
    Menu
  },
  computed:{
    ...mapState("setting", ["data"])
  },
}
</script>

<style scoped lang="less">
.SiteAside-container{
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  .avatar{
    width: 140px;
    margin: 10px auto 10% auto;
  }
  .title{
    color: #eeeeee;
    text-align: center;
    font-size: 26px;
  }
}
</style>