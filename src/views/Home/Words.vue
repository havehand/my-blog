<template>
  <div class="words-container">
    <div class="title" ref="title">{{carousel.title}}</div>
    <div class="desc" ref="desc">{{carousel.description}}</div>
  </div>
</template>

<script>
export default {
  props:{
    carousel:{
      type: Object,
    },
    domWidth:{
      type: Object
    },
    getIndex:{
      type: Object
    }
  },
  mounted() {
      this.showWords();
  },
  methods:{
    showWords(){
      this.$refs.title.style.width = 0;
      this.$refs.desc.style.width = 0;

      this.$refs.title.clientWidth;
      this.$refs.desc.clientWidth;

      setTimeout(()=>{
        this.$refs.title.style.width = this.domWidth.title + 'px';
        this.$refs.desc.style.width = this.domWidth.desc + 'px';
      },100);
    }
  }
}
</script>

<style scoped lang="less">
.words-container{
  position: absolute;
  top: calc(50% - 40px);
  left: 7%;
  .title, .desc{
    overflow: hidden;
    color: white;
    position: absolute;
    letter-spacing: 6px;
    left: 7%;
    transition: all 2s;
    white-space: nowrap;
    width: 0;
    text-shadow: 1px 0 0 rgba(0,0,0,0.5),-1px 0 0 rgba(0,0,0,0.5),0 1px 0 rgba(0,0,0,0.5),0 -1px 0 rgba(0,0,0,0.5);
  }
  .title{
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc{
    top: calc(50% + 20px);
    font-size: 1.2em;
  }
}
</style>