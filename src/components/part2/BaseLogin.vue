<template>
  <div class="me-login" >
    <div class="me-login-box">
      <h1>登录界面</h1>
      <el-form  :model="loginForm" class="me-login-form" :rules="rules" label-position="left" label-width="60px" ref="loginForm">
        <el-form-item label="用户名" >
          <el-input  v-model="loginForm.username" placeholder="请输入用户名"  clearable></el-input>
        </el-form-item>

        <el-form-item label="密码" >
          <el-input  v-model="loginForm.password" placeholder="请输入密码" clearable></el-input>
        </el-form-item>


        <el-button type="primary" @click.native.prevent="login('loginForm')" style="width:100%">登录</el-button>

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
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请选择密码', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      login(formName) {
        const _this = this
        // console.log( this.$refs[formName])
        this.$refs[formName].validate((valid) => {
          if (valid) {
          // 提交逻辑
          axios.post('/api/login', {
            username: this.loginForm.username,
            password:this.loginForm.password
          }).then((res)=>{
            if (res) {
              console.log(res.data)
              const jwt = res.headers['authorization']
              const userInfo = res.data.data

              // 把数据共享出去
              _this.$store.commit("SET_TOKEN", jwt)
              _this.$store.commit("SET_USERINFO", userInfo)

              this.$router.push({path:'/',key:'1'});
            }else{
              console.log(res)
            }

          })
        } else {
          console.log('error submit!!');
          return false;
        }
        });

        // axios
        //   .post("/api/login", {
        //     id: this.loginForm.username,
        //     password:this.loginForm.password
        //   })
        //   .then((res) => {
        //     if (res) {
        //       // 隐藏登录组件
        //       this.$router.push({path:'/',key:'1'});
        //     } else {
        //       console.log(res)
        //     }
        //   });
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
