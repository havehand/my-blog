<template>
  <ul class="menu-container">
    <li v-for="(item,i) in items" :key="i">
      <router-link :exact="item.exact" :to="{name: item.name}">
        <span class="icon">
          <Icon :type="item.icon" :size="20"></Icon>
        </span>
        <span class="span-text">{{item.title}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "../Icon/index"
export default {
  components:{
    Icon
  },
  data(){
    return{
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/var";
.menu-container{
  padding-left: 0;
  list-style: none;
  li{
    a {
      padding: 10px 0 10px 30px;
      display: block;
      box-sizing: border-box;
      color: @gray;
      width: 100%;
      height: 100%;
      text-decoration: none;
      &:hover{
        background: darken(@words,1%);
        cursor: pointer;
        a{
          color: #eee;
        }
      }
      .icon {
        margin-right: 16px;
      }
      .span-text{
        font-size: 16px;
      }
      &.router-link-active{
        background: darken(@gray, 20%);
        span{
          color: #fff;
        }
      }
      &.router-link-exact-active{
        background: darken(@gray, 20%);
        span{
          color: #fff;
        }
      }
    }
  }
}
</style>