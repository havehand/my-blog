<template>
  <Layout>
    <template #default>
      <BlogList></BlogList>
    </template>
    <template #right>
      <BlogCategory></BlogCategory>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout"
import BlogList from "@/views/Blog/components/BlogList";
import BlogCategory from "@/views/Blog/components/BlogCategory";
export default {
  name: "Blog",
  components:{
    Layout,
    BlogList,
    BlogCategory
  },
}
</script>

<style scoped>

</style>