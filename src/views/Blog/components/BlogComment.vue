<template>
  <div class="blog-comment-container" v-loading = "isLoading">
    <MessageArea @submit="handleSubmit" title="评论列表" :subTitle="`(${data.total})`" :list="data.rows" :isListLoading="isLoading"></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/misins/fetchData";
import {getComments, postComment} from "@/api/blog";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components:{
    MessageArea
  },
  data(){
    return{
      page: 1,
      limit: 10,
      endRequest: false
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  computed:{
    hasMore(){
      if (this.data.total > this.data.rows.length + this.limit){
        return {
          isEnd: false,
          surplus: 0
        };
      }else{
        return {
          isEnd: true,
          surplus: this.data.total - this.data.rows.length
        }
      }
    }
  },
  methods:{
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if (this.endRequest){
        return;
      }
      const obj = this.hasMore;
      if (obj.isEnd){
        this.isLoading = true;
        const trueLimit = this.limit;
        this.limit = obj.surplus;
        const resp = await this.fetchData();
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
        this.limit = trueLimit;
        this.endRequest = true;
      }else{
        this.isLoading = true;
        this.page++;
        const resp = await this.fetchData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
      }
    },
    async handleSubmit(formData,callback){
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
    },
    handleScroll(dom) {
      if (this.isLoading || !dom){
        return;
      }
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range){
        this.fetchMore();
      }
    }
  }
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
