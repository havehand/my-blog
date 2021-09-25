<template>
    <Layout>
      <div ref="divContainer" class="main-container"  v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data"></BlogDetail>
        <BlogComment v-if="!isLoading"></BlogComment>
      </div>

      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogToc :toc="data.toc"></BlogToc>
        </div>
      </template>

    </Layout>
</template>

<script>
import fetchData from "@/misins/fetchData";
import {getBlog} from "@/api/blog";
import Layout from "@/components/Layout"
import BlogDetail from "@/views/Blog/components/BlogDetail";
import BlogToc from "@/views/Blog/components/BlogToc";
import BlogComment from "@/views/Blog/components/BlogComment";
// import ToTop from "@/components/ToTop"

export default {
  mixins:[fetchData({})],
  name: "Detail",
  components:{
    Layout,
    BlogToc,
    BlogDetail,
    BlogComment,
    // ToTop
  },
  data(){
    return{
      scrollTop: 0
    }
  },
  created() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  },
  methods:{
    handleSetMainScroll(top){
      this.$refs.divContainer.scrollTop = top;
    },
    async fetchData(){
      const resp = await getBlog(this.$route.params.id);
      if (!resp){
        this.$router.push({
          name: "NotFound"
        });
        return;
      }
      return resp
    },
    handleScroll(){
      this.$bus.$emit("mainScroll", this.$refs.divContainer);
    }
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(()=>{
      location.hash = hash;
    },100)
  },
  mounted() {
    this.$refs.divContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit("mainScroll", undefined);
    this.$refs.divContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  }
}

</script>

<style scoped lang="less">
  .main-container{
    overflow-y: scroll;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    scroll-behavior: smooth;
  }
  .right-container{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
  }
</style>
