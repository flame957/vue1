<template>
  <div class="me-login" v-title data-title="注册 - For Fun">
    <div class="me-login-box">
      <h1>注册界面</h1>
      <el-form class="me-login-form" label-position="left" label-width="60px" >
        <el-form-item label="用户名">
          <el-input  v-model="RegisterForm.name" placeholder="请输入用户名"  clearable></el-input>
        </el-form-item>

        <el-form-item label="密码" >
          <el-input  v-model="RegisterForm.password" placeholder="请输入密码" clearable></el-input>
        </el-form-item>


        <el-button type="primary" @click.native.prevent="regist(RegisterForm)" style="width:100%">注册</el-button>

      </el-form>

      <div class="me-login-design" style="margin:0px">
        <p>Designed by
          <strong>
            <el-link href="http://47.100.86.230/" target="_blank" style="color: #5FB878">littleMango</el-link>
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginPage",
  data() {
    return {
      RegisterForm: {
        name: '',
        password: '',
      }
    }
  },
  methods: {
    regist(formName) {
            axios
              .post("/api/regist", {
                id: this.RegisterForm.name,
          password:formName.password
        })
        .then((res) => {
          if (res) {
            // 隐藏登录组件
            this.$router.push({path:'/',key:'1'});
          } else {
            console.log(res)
          }
        });
    }
  }
}
</script>

<style>
.me-login {
  min-width: 100%;
  min-height: 100%;
}

.me-login-box{
  position: relative;
  width: 300px;
  height: 300px;
  background-color: rgba(100, 100, 100, 0.1);
  margin-top: 100px;
  left: 40%;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgba(161, 159, 159, 0.1);
}



.me-login-design {
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  margin:0px;
  position:relative;
}

.me-login-box h1{
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  vertical-align: middle;
}

. me-login-form{
  align: center;

}
</style>
