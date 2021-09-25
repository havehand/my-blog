<template>
  <div ref="messageContainer" class="message-container" v-if="data.total !== undefined">
    <MessageArea title="留言板" :sub-title="`(${data.total})`" :list="data.rows" @submit="handleSubmit" :isListLoading="isLoading"></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/misins/fetchData";
import * as msgApi from "@/api/message";
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
  },
  mounted() {
    this.$refs.messageContainer.addEventListener("scroll", this.handleScroll);
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
      return await msgApi.getMessages(this.page, this.limit);
    },
    async fetchMore() {
      if (this.endRequest){
        return;
      }
      const obj = this.hasMore;
      if (obj.isEnd){
        console.log("最后一次");
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
      const resp = await msgApi.postMessage({
        blogId: this.$route.params.id,
        ...formData
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("留言成功");
    },
    handleScroll() {
      const dom = this.$refs.messageContainer;
      if (this.isLoading){
        return;
      }
      const range = 10;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range){
        this.fetchMore();
      }
    }
  }
}
</script>

<style scoped lang="less">
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
