<!--小图标组件-->
<template>
  <span class="iconfont icon-container" :class="fontClass" :style="{fontSize: size+'px'}"></span>
</template>

<script>
const classmap = {
  home: 'icon-shouye',
  error: 'icon-jinggao',
  clsoe: 'icon-guanbi',
  warn: 'icon-jinggao',
  info: 'icon-xinxi',
  blog: 'icon-blog',
  code: 'icon-code',
  about: 'icon-about',
  qq: 'icon-logo-qq',
  weixin: 'icon-weixin',
  mail: 'icon-email',
  github: 'icon-GitHub',
  arrowUp: 'icon-shangjiantou',
  arrowDown: 'icon-jiantou9',
  empty: 'icon-empty',
  chat: 'icon-liuyan',
  success: "icon-zhengque"
};
export default{
  props:{
    type:{
      type:String,
      required:true
    },
    size:{
      type:Number,
      default: 16
    }
  },
  computed:{
    fontClass(){
      return classmap[this.type];
    }
  },

}
</script>

<style scoped="scoped">
@import url("//at.alicdn.com/t/font_2694273_689nws9kcyv.css");
</style>
