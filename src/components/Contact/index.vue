<template>
  <div class="contact-container">
    <ul>
      <li v-for="(item,i) in contactData" :key="i">
        <a href="#">
          <Icon :type=item.iconType :size="20"></Icon>
          <span>{{item.text}}</span>
        </a>
        <div class="pop">
          <img :src=item.QRCodeUrl alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "../Icon/index"
export default {
  components:{
    Icon
  },
  data(){
    return{
      contactData:[
        {
          iconType:'github',
          text:'jiluqi',
          QRCodeUrl:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
        },
        {
          iconType: 'qq',
          text:'1210900889',
          QRCodeUrl:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
        },
        {
          iconType: 'weixin',
          text:'18142385872',
          QRCodeUrl:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
        },
        {
          iconType: 'mail',
          text:'1210900889@qq.com',
          QRCodeUrl:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/var";
.contact-container{
  margin-top: 30%;
  ul{
    padding-left: 30px;
    list-style: none;
  }
  a{
    display: inline;
    color: #eee;
    text-decoration: none;
    span{
      margin-left: 20px;
    }
    font-size: 16px;
    &:hover{
      + .pop{
        transform: scaleY(1);
      }
      color: @primary;
    }
  }
  li{
    margin: 14px 0;
    position: relative;
    height: 5%;
    line-height: 30px;
  }
  .pop{
    position: absolute;
    width: 150px;
    height: 150px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;
    bottom: 35px;
    transform: scaleY(0);
    transition: all 0.5s;
    transform-origin: center bottom;
    img{
      width: 150px;
      height: 150px;
    }
    &::after{
      content: "";
      width: 8px;
      height: 8px;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      bottom: -4px;
    }
  }
}

</style>