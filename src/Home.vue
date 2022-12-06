<template>
  <div id="Home">
    <el-container class="main-container">
      <el-header class="el-header" >
        <BaseHeader :activeIndex="activeIndex"></BaseHeader>
      </el-header>
      <el-container class="me-container">
        <el-aside class="left-nav" width="200px">
          <!--引入自定义左侧菜单栏-->
          <leftNav></leftNav>
        </el-aside>
        <!--引入跳转路由-->
        <router-view ></router-view>
      </el-container>
      <el-footer class="el-footer">
        <BaseFooter></BaseFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import LeftNav from "./components/Home/LeftNav";
import BaseFooter from "../src/views/BaseFooter";
import BaseHeader from "../src/views/BaseHeader";

export default {
  name: "Home",
  components: {
    LeftNav,
    BaseHeader,
    BaseFooter
  },
  data(){
    return{
      activeIndex: '/index',
    }
  }
}
</script>

<style>
.main-container{
  height:100%;
  width:100%;
}
.el-header {
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  background-color: white;
}

.me-container{
  margin-top: 60px;
  height:1000px
}

.el-footer {
  min-width: 100%;
  box-shadow: 0 -2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 1024;
}
</style>
