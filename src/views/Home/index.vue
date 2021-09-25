<template>
  <div class="home-container" ref="container" @wheel="handWheel" v-loading="loading">
    <ul class="carousel-container" :style="{marginTop: setMarginTop}"  @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" :index="index" ref="carouse" :key="item.id"></CarouselItem>
      </li>
    </ul>

    <div class="icon icon-up" v-show="index >= 1" @click="clickBtn(index - 1)">
      <Icon type="arrowUp" :size="30"></Icon>
    </div>
    <div class="icon icon-down" v-show="index < data.length - 1" @click="clickBtn(index + 1)">
      <Icon type="arrowDown" :size="30"></Icon>
    </div>

    <ul class="indicator">
      <li v-for="(item, i) in data" :key="item.id" :class="{active : i === index}" @click="switchTo(i)"></li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
import CarouselItem from "@/views/Home/Carouselitem";
import Icon from "@/components/Icon"
export default {
  components:{
    CarouselItem,
    Icon,
  },
  created() {
    this.fetchBanner();
  },
  data(){
    return{
      index: 0,
      containerHeight: 0,
      isSwitching: false,
      lastIndex: 0,
    }
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.addEventListener("resize", this.handleResize);
  },
  computed:{
    setMarginTop(){
      return -this.index * this.containerHeight + 'px';
    },
    ...mapState("banner", ["loading", "data"])
  },
  methods:{
    ...mapActions("banner", ["fetchBanner"]),
    clickBtn(i){
      if (this.isSwitching){
        return;
      }
      this.switchTo(i);
    },
    switchTo(i){
      this.lastIndex = this.index;
      this.index = i;
      setTimeout(()=>{
        this.$refs.carouse[this.index].showWords();
        setTimeout(()=>{
          this.$refs.carouse[this.lastIndex].removeDom();
        },1000)
      },0);
    },
    handWheel(e){
      if (this.isSwitching){
        return;
      }
      if (e.deltaY === 125 && this.index + 1 <= this.data.length - 1){
        this.isSwitching = true;
        this.switchTo(this.index + 1);
      }
      if (e.deltaY === -125 && this.index - 1 >= 0){
        this.isSwitching = true;
        this.switchTo(this.index - 1);
      }
    },
    handleTransitionEnd(){
      this.isSwitching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var";
@keyframes jump-up {
  0%{
    transform: translateY(5px);
  }
  50%{
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(5px);
  }
}
@keyframes jump-down {
  0%{
    transform: translateY(-5px);
  }
  50%{
    transform: translateY(5px);
  }
  100%{
    transform: translateY(-5px);
  }
}
.home-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  //测试:
  //width: 400px;
  //height: 300px;
  //overflow: visible;
  //border: 2px solid #6b9eee;


  .carousel-container{
    width: 100%;
    height: 100%;
    transition: all 1s;
    li{
      width: 100%;
      height: 100%;
    }
  }
  ul{
    margin: 0;
    padding: 0;
  }
  .icon{
    @gep: 15px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    color: @gray;
    cursor: pointer;
    &.icon-up{
      top: @gep;
      animation: jump-up 2s infinite;
    }
    &.icon-down{
      bottom: @gep;
      animation: jump-down 2s infinite;
    }
  }
  .indicator{
    @size: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
    li{
      width: @size;
      height: @size;
      border-radius: 50%;
      background-color: @words;
      margin: 10px 0;
      border: 1px solid #fff;
      box-sizing: border-box;
      transition: 0.5s;
      cursor: pointer;
      &.active{
        background-color: white;
      }
    }
  }

}
</style>