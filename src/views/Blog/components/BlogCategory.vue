<template>
  <div class="blog-category-container">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" ></RightList>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import fetchData from "@/misins/fetchData";
import {getBlogCategories} from "@/api/blog";
export default {
  name: "BlogCategory",
  mixins:[fetchData([])],
  components:{
    RightList
  },
  methods:{
    async fetchData(){
      return await getBlogCategories();
    },
    handleSelect(item){
      const query = {
        page: 1,
        limit: this.limit
      };
      if (item.id === -1){
        this.$router.push({
          name: "Blog",
          query
        })
      }else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params:{
            categoryId: item.id
          }
        })
      }
    }
  },
  computed:{
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list(){
      let totalArticleCount = 0;
      for (let i of this.data){
        totalArticleCount  += i.articleCount;
      }
      return [{name: "全部", id: -1, articleCount: totalArticleCount},...this.data].map(item=>({...item,isSelect: item.id === this.categoryId,aside: `${item.articleCount}篇`}))
    }
  }
}
</script>

<style scoped lang="less">
.blog-category-container{
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2{
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>