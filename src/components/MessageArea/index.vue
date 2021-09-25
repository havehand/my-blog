<template>
  <div class="message-area-container">
    <DataForm @submit="handleSubmit"></DataForm>
    <h3>
      {{ title }}
      <span>{{subTitle}}</span>
    </h3>
    <DataList :list="list"></DataList>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "@/components/MessageArea/DataForm";
import DataList from "@/components/MessageArea/DataList";
export default {
  name: "index",
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components:{
    DataForm,
    DataList
  },
  methods:{
     handleSubmit(formData, callback) {
       this.$emit("submit", formData, callback);
     }
  }
}
</script>

<style scoped>
  .message-area-container{
    width: 100%;
    height: 100%;
  }
  .loading {
    position: relative;
    height: 100px;
  }
</style>