<template>
  <el-dialog :visible.sync="loginshow" >
    <div >
      <label style="margin-top: 20px" >登录</label>
    </div>
    <div class="search_user" style="margin-bottom: 10px">
      <el-input v-model="LoginUser.id" style="display: inline-block;width:200px" placeholder="请输入id" ></el-input>
    </div>
    <div style="margin-bottom: 10px">
      <el-input v-model="LoginUser.pass" style="display: inline-block;width:200px" placeholder="请输入密码"></el-input>
    </div>

    <div>
      <el-button type="primary" icon="el-icon-search" @click="login">登录</el-button>
    </div>

    <div>
      <label v-if="islogin">登录成功</label>
    </div>

  </el-dialog>
</template>

<script>
import axios from "axios"
  export default {
    name:"childLogin",
    props:{
      show:{
        type:Boolean,
        default: false,
      },
    },
    data(){
      return{
        loginshow:this.show,
        islogin:false,
        LoginUser:{
          id:'',
          pass:''
        }
      }
    },
    watch:{
      show(val){
        this.loginshow = val;
      }
    },
    methods:{
      login(){
        axios
          .post("/api/login", {
            id: this.LoginUser.id,
            password:this.LoginUser.pass
          })
          .then((res) => {
            if (res) {
              // 隐藏登录组件

                this.$emit('func',this.LoginUser);
                this.islogin = true;
                this.$emit('close')
            } else {
              this.islogin = false;
            }
          })
      },
      // beforeClose(){
      //   this.loginshow=false;
      // }
    }
  }
</script>
