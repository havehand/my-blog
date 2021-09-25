<template>
  <div class="blog-detail-container">
    <h1>{{blog.title}}</h1>
    <div class="aside">
      <span v-if="blog.createDate" style="margin-right: 20px">日期：{{formatData(blog.createDate)}}</span>
      <span v-if="blog.scanNumber" style="margin-right: 20px">浏览：{{blog.scanNumber}}</span>
      <a href="#data-form-container" v-if="blog.commentNumber" style="margin-right: 20px">评论：{{blog.commentNumber}}</a>
      <RouterLink :to="{
        name: 'CategoryBlog',
        params:{
          categoryId: blog.category.id
        },
      }" v-if="blog.category" style="margin-right: 20px">{{blog.category.name}}</RouterLink>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import formatData from "@/utils/formatDate";
import "highlight.js/styles/github.css"
import "@/styles/markdown.css"
export default {
  props:{
    blog:{
      type: Object,
      required: true
    }
  },
  methods:{
    formatData,
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var";
.blog-detail-container{
  .markdown-body{
    margin: 2em 0;
  }
}
</style>