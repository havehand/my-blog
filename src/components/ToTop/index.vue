<template>
  <div v-show="this.show" class="top-container" @click="handleClick">
    Top
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      show: false
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
    this.$bus.$on("blogScroll", this.handleBlogScroll);
    this.$bus.$on("projectScroll", this.handleProjectScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
    this.$bus.$off("blogScroll", this.handleBlogScroll);
    this.$bus.$off("projectScroll", this.handleProjectScroll);
  },
  methods:{
    handleScroll(dom){
      if (!dom){
        this.show = false;
        return;
      }
      const top = 1500;
      this.show = dom.scrollTop >= top;
    },
    handleBlogScroll(dom){
      if (!dom){
        this.show = false;
        return;
      }
      const top = 300;
      this.show = dom.scrollTop >= top;
    },
    handleProjectScroll(dom){
      if (!dom){
        this.show = false;
        return;
      }
      const top = 400;
      this.show = dom.scrollTop >= top;
    },
    handleClick(){
      this.$bus.$emit("setMainScroll", 0)
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var";
  .top-container{
    background-color: @primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    z-index: 20;
    right: 50px;
    top: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
</style>