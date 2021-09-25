<template>
  <div class="blog-toc-container">
    <h2>文章分类</h2>
    <RightList :list="toWithSelect" @select="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "@/views/Blog/components/RightList";
import debounce from "@/utils/debounce";
export default {
  name: "BlogToc",
  components:{
    RightList
  },
  data(){
    return{
      activeAnchor: "",
      deBounceSelect: null
    }
  },
  props:{
    toc:{
      type: Array
    }
  },
  methods:{
    debounce,
    handleSelect(item){
      location.hash = item.anchor;
    },
    setSelect(scrollDom){
      if (!scrollDom){
        return;
      }
      this.activeAnchor = "";
      const range = 50;
      for (const dom of this.demo){
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range){
          this.activeAnchor = dom.id;
          return;
        }else if (top > range) {
          return;
        }else {
          this.activeAnchor = dom.id;
        }
      }
    }
  },
  created() {
    this.deBounceSelect = debounce(this.setSelect, 100);
    this.$bus.$on("mainScroll",this.deBounceSelect);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.deBounceSelect);
  },
  computed:{
    toWithSelect(){
      const getToc = (toc=[])=>{
        return toc.map((t)=>({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children)
        }))
      }
      return getToc(this.toc);
    },
    demo(){
      let dom = [];
       const getDom = (toc)=>{
         for (let t of toc){
           dom.push(document.getElementById(t.anchor));
           if (t.children && t.children.length){
             getDom(t.children);
           }
         }
       }
       getDom(this.toc);
       return dom;
    }
  }
}
</script>

<style scoped lang="less">
  .blog-toc-container{
    padding: 20px;
    height: 100%;
    overflow-y: auto;
    h2{
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1em;
      margin: 0;
    }
  }
</style>