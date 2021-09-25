<template>
  <div class="data-form-container" ref="container" id="data-form-container">
    <form @submit.prevent="handleSubmit" action="#">
      <div class="input-name">
        <label for="user-name">
          <input type="text" maxlength="10" placeholder="用户昵称" id="user-name" v-model="formData.nickname"/>
        </label>
        <span class="limit">{{formData.nickname.length}}/10</span>
      </div>
      <div class="err">{{error.nickname}}</div>
      <div class="input-content">
        <label for="input-area">
          <textarea maxlength="300" id="input-area" placeholder="输入内容" v-model="formData.content"></textarea>
        </label>
        <span class="limit">{{formData.content.length}}/300</span>
      </div>
      <div class="err">{{error.content}}</div>
      <div class="form-item">
        <div class="button-area">
          <button type="submit" class="submit" :disabled="isSubmitting">{{isSubmitting?"提交中...":"提交"}}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "DataForm",
  data(){
    return{
      formData:{
        nickname: "",
        content: ""
      },
      error:{
        nickname: "",
        content: ""
      },
      isSubmitting: false
    }
  },
  methods:{
    handleSubmit(){
      this.error.nickname = this.formData.nickname? "":"请填写昵称";
      this.error.content = this.formData.content? "":"请填写内容";
      if (this.error.nickname || this.error.content){
        return;
      }
      this.isSubmitting = true;
      this.$emit("submit", this.formData, (success)=>{
        this.$showMessage({
          content: success,
          type: "success",
          duration: 1000,
          container: this.$refs.container,
          callback: ()=>{
            this.formData.nickname = "";
            this.formData.content = "";
            this.isSubmitting = false;
          }
        });
      });
    }
  }
}
</script>

<style scoped lang="less">
@import "../../styles/var";
  .data-form-container{
    position: relative;
    .input-name{
      position: relative;
      margin: 30px 0;
      #user-name{
        width: 50%;
        height: 35px;
        border: 1px dashed darken(@gray, 30%);
        border-radius: 5px;
        padding-left: 15px;
        outline: none;
        font-size: 16px;
        &:focus{
          border: 2px dashed darken(@primary, 30%);
        }
      }
     .limit{
       position: absolute;
       font-size: 10px;
       color: @gray;
       height: 100%;
       top: 30%;
       left: 48%;
     }
    }
    .err{
      color: @warn;
      margin: 10px 0;
    }
    .input-content{
      position: relative;
      margin: 30px 0;
      #input-area{
        width: 90%;
        height: 80px;
        outline: none;
        border: 1px dashed darken(@gray, 30%);
        border-radius: 5px;
        padding-left: 15px;
        font-size: 16px;
        resize: none;
        &:focus{
          border: 2px dashed darken(@primary, 30%);
        }
      }
      .limit{
        position: absolute;
        font-size: 10px;
        color: @gray;
        top: 70%;
        left: 87%;
      }
    }
    .form-item{
      .button-area{
        @bgcolor: #6b9eee;
        .submit{
          width: 100px;
          height: 35px;
          background-color: @bgcolor;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          &:disabled{
            background-color: lighten(@bgcolor, 15%);
            cursor: not-allowed;
          }
        }
      }
    }
  }
</style>