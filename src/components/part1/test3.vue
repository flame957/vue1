<template>
  <div style="text-align: center">
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
      <el-button type="primary" icon="el-icon-search" @click="regist">注册</el-button>
    </div>
    <div>
      <el-button type="primary" icon="el-icon-search" v-if="islogin">寄</el-button>
    </div>

    <div>
      <el-button type="primary" icon="el-icon-search" @click="handleClick">父子组件</el-button>
    </div>

    <div>
      <childlogin :show="childshow"
                  @close="closeChild"
                  @func="getChildData">
      </childlogin>
    </div>
<!--    <div>-->
<!--      <el-button type="primary" icon="el-icon-search" @click="getUser">搜索</el-button>-->
<!--    </div>-->


<!--    <div>-->
<!--      <el-table :data="dormitory"-->
<!--                border-->
<!--                style="width:100%;border: #121313 solid 2px;"-->
<!--                highlight-current-row-->
<!--                :header-cell-style="{background:'#d9e1ea',color:'black'}">-->
<!--        <el-table-column prop="id" label="编号"></el-table-column>-->
<!--        <el-table-column prop="username" label="名字"></el-table-column>-->
<!--        <el-table-column prop="password" label="密码"></el-table-column>-->
<!--        <el-table-column prop="age" label="年龄"></el-table-column>-->
<!--        <el-table-column prop="sex" label="性别"></el-table-column>-->
<!--        <el-table-column prop="email" label="邮箱"></el-table-column>-->
<!--      </el-table>-->
<!--    </div>-->
  </div>
</template>

<script>
import axios from "axios"
import childlogin from "../part1/Mylogin.vue"
export default {
  name:"test3",
  components:{childlogin},
  data(){
    return {
      search:'',
      dormitory: [],
      LoginUser: {
        id: '',
        pass: ""
      },
      islogin: true,
      childshow:false

    }
  },
  created() {
    axios.get("/api/getUser",{
      params:{
        id:1,
      }}).then((response) => {
      this.dormitory.push({
        age: response.age,
        email: response.email,
        sex: response.sex,
        username: response.username,
        password: response.password,
        id: response.id,
      })

    }).catch(function (error) {
      console.log(error);
    });
  },
  // watch:{
  //   search(){
  //     this.getUser()
  //   }
  // },

  methods:{
    getUser(){
      this.dormitory=[]
      axios.get("/api/getUser",{
        params:{
          id:this.search,
        }}).then((response) => {
        this.dormitory.push({
          age: response.age,
          email: response.email,
          sex: response.sex,
          username: response.username,
          password: response.password,
          id: response.id,
        })})
      return this.dormitory;
    },

    login(){
      axios
        .post("/api/login", {
          id: this.LoginUser.id,
          password: this.LoginUser.pass
        })
        .then(res => {
          console.log(res)
          // “001”代表登录成功，其他的均为失败
          if (res) {
            // 隐藏登录组件
            this.islogin = false;
            // 登录信息存到本地
            // let user = JSON.stringify(res.data.data);
            // localStorage.setItem("user", user);
            // 登录信息存到vuex

          } else {
            this.islogin = true;
          }
        })
        .catch(err => {
          return Promise.reject(err);
        });
    },

    regist(){
      axios
        .post("/api/regist", {
        id:this.LoginUser.id,
        password:this.LoginUser.pass
      })
        .then(res=>{
        if(res)
          this.login = false;
        else this.login = true;
      }).catch(err =>{
        return Promise.reject(err);
      })
    },

    closeChild(){
      this.childshow = false;
    },

    getChildData(data){
      this.LoginUser = data;
    },

    handleClick(){
      this.childshow= true;
    }

  }

}
</script>

<style>

</style>
