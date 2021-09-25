<template>
  <div class="carouse-item-container" ref="containerDom" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="carousel-img" ref="imgContainer" :style="imagePosition">
      <ImageLoader @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" :duration="1000"></ImageLoader>
    </div>
    <div class="title-text" ref="title">{{carousel.title}}</div>
    <div class="desc-text" ref="desc">{{carousel.description}}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
import Words from "@/views/Home/Words";
import getComponentRootDom from "@/utils/getComponentRootDom";
export default {
  props:{
    carousel:{
      type: Object,
      request: true
    },
    index:{
      type: Number,
      request: true
    }
  },
  components:{
    ImageLoader,
  },
  data(){
    return{
      titleWidth: 0,
      descWidth: 0,
      carouselDom: null,
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0
    }
  },
  computed:{
    imagePosition(){
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
      const left = -extraWidth / this.containerSize.width * this.mouseX;
      const top = -extraHeight / this.containerSize.height * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`
      };
    },
    center(){
      return{
        x: this.containerSize.width/2,
        y: this.containerSize.height/2
      }
    }
  },
  mounted() {
    this.getWidth();
    this.ruinDom();
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize",this.setSize);
  },
  methods:{
    setSize(){
      this.containerSize = {
        width: this.$refs.containerDom.clientWidth,
        height: this.$refs.containerDom.clientHeight
      };
      this.innerSize = {
        width: this.$refs.imgContainer.clientWidth,
        height: this.$refs.imgContainer.clientHeight
      };
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
    removeDom(){
      this.$refs.containerDom.removeChild(this.carouselDom);
    },
    showWords(){
      if (this.index === this.carousel.index){
        const dom = getComponentRootDom(Words,{
          carousel: this.carousel,
          domWidth:{
            title: this.titleWidth,
            desc: this.descWidth
          },
          getIndex:{
            index: this.index
          }
        });
        this.carouselDom = dom;
        this.$refs.containerDom.appendChild(dom);
      }
    },
    getWidth(){
      this.descWidth = this.$refs.desc.clientWidth;
      this.titleWidth = this.$refs.title.clientWidth;
    },
    ruinDom(){
      this.$refs.containerDom.removeChild(this.$refs.title);
      this.$refs.containerDom.removeChild(this.$refs.desc);
    },
    handleMouseMove(e){
      const rect = this.$refs.containerDom.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    }
  },
}
</script>

<style scoped lang="less">
@import "../../styles/var";
.carouse-item-container{
  background-color: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img{
    width: 120%;
    height: 120%;
    position: absolute;
    transition: 0.3s;
  }
  .title-text, .desc-text{
    overflow: hidden;
    color: white;
    position: absolute;
    top: 0;
    letter-spacing: 6px;
    left: 7%;
    opacity: 0;
    transition: all 2s;
    white-space: nowrap;
    text-shadow: 1px 0 0 rgba(0,0,0,0.5),-1px 0 0 rgba(0,0,0,0.5),0 1px 0 rgba(0,0,0,0.5),0 -1px 0 rgba(0,0,0,0.5);
  }
  .title-text{
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc-text{
    top: calc(50% + 20px);
    font-size: 1.2em;
  }
}

</style>