<template>
  <div class="blog-list-container" ref="container" v-loading = 'isLoading'>
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{name: 'BlogDetail', params: {id: item.id}}">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title"/>
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{name: 'BlogDetail', params: {id: item.id}}">
            <h2>{{item.title}}</h2>
          </router-link>
          <div class="aside">
            <span>日期:{{formatData(item.createDate)}}</span>
            <span>浏览:{{item.scanNumber}}</span>
            <span>评论:{{item.commentNumber}}</span>
            <RouterLink :to="{name: 'CategoryBlog',params:{
              categoryId: item.category.id
            }}">{{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" :size="100"></Empty>
    <Paper v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visibleNumber="10" @pageChange="handlePageChange"></Paper>
  </div>
</template>

<script>
  import formatData from "@/utils/formatDate";
  import Paper from "@/components/Paper/index"
  import fetchData from "@/misins/fetchData";
  import {getBlogs} from "@/api/blog";
  import Empty from "@/components/Empty"
  export default {
    mixins: [fetchData({total: 0, rows: []})],
    components:{
      Paper,
      Empty
    },
    watch:{
      async $route(){
        this.isLoading = true;
        this.data = await this.fetchData();
        this.$refs.container.scrollTop = 0;
        this.isLoading = false;
      }
    },
    methods:{
      formatData,
      async fetchData(){
        return await getBlogs(this.routeInfo.page, this.routeInfo.limit, this.routeInfo.categoryId);
      },
      handlePageChange(newPage){
        const query = {
          page: newPage,
          limit: this.routeInfo.limit
        };
        if (this.routeInfo.categoryId === -1){
          this.$router.push({
            name: "Blog",
            query:query
          })
        }else {
          this.$router.push({
            name: "CategoryBlog",
            query,
            params:{
              categoryId: this.routeInfo.categoryId
            }
          })
        }
      },
      handleSetMainScroll(top){
        this.$refs.container.scrollTop = top;
      },
      handleScroll(){
        this.$bus.$emit("blogScroll", this.$refs.container);
      }
    },
    computed:{
      routeInfo(){
        const categoryId = this.$route.params.categoryId || -1;
        const page = +this.$route.query.page || 1;
        const limit = +this.$route.query.limit || 10;
        return{
          categoryId,
          page,
          limit
        };
      }
    },
    beforeDestroy() {
      this.$bus.$emit("blogScroll", undefined);
      this.$refs.container.removeEventListener("scroll",this.handleScroll);
      this.$bus.$off("setMainScroll", this.handleSetMainScroll)
    },
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs.container.addEventListener("scroll",this.handleScroll);
    }
  }
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
