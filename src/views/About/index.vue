<template>
  <div class="about-container" v-loading="loading || !srcLoading">
    <iframe class="about-content" :src="data" @load="srcLoading = true"></iframe>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"
export default {
  data(){
    return{
      srcLoading: false
    }
  },
  name: "About",
  computed:{
    ...mapState("about", ["data", "loading"])
  },
  methods:{
    ...mapActions("about",["fetchAbout"])
  },
  created() {
    this.fetchAbout();
  }
}
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>