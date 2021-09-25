<template>
  <div class="ImageLoaderContainer">
    <img v-if="!everyThingDone" :src="placeholder" alt="" class="img1">
    <img @load="handleLoaded" :src="src" alt="" class="img2" :style="{opacity: originOpacity,transitionDuration: duration+'ms'}">
  </div>
</template>>

<script>
export default {
  props:{
    src:{
      type: String,
      request: true
    },
    placeholder:{
      type: String,
      request: true
    },
    duration:{
      type:Number,
      default:3000
    }
  },
  data(){
    return{
      originLoaded: false,
      everyThingDone: false
    }
  },
  computed:{
    originOpacity(){
      return this.originLoaded? 1:0;
    }
  },
  methods:{
    handleLoaded() {
      this.originLoaded = 1;
      setTimeout(()=>{
        this.everyThingDone = true;
        this.$emit("load");
      },this.duration)
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/mixin";
  .ImageLoaderContainer{
    position: relative;
    width: 100%;
    height: 100%;
    img{
      .self-fill();
      object-fit: cover;
    }
    .img1{
      filter: blur(10px);
    }
    .img2{
      opacity: 0;
      transition-property: all;
    }
    overflow: hidden;
  }

</style>