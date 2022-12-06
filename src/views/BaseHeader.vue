<template>
  <el-row class="me-header">

    <el-col :span="4" class="me-header-left" mode="horizontal">
      <div style="height: 60px;text-align:center;" ><el-button class= "hellowbutton" type="primary" icon="el-icon-search"  style="margin: 10px;">Hello</el-button></div>
    </el-col>

    <el-col v-if="!simple" :span="16">
      <el-menu :router=true menu-trigger="click" active-text-color="#5FB878" :default-active="activeIndex"
               mode="horizontal">
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/category/all">文章分类</el-menu-item>
        <el-menu-item index="/tag/all">标签</el-menu-item>
        <el-menu-item index="/archives">文章归档</el-menu-item>
        <el-menu-item index="/log">日志</el-menu-item>
        <el-menu-item index="/messageBoard">留言板</el-menu-item>

        <el-col :span="4" :offset="4">
          <el-menu-item index="/write"><i class="el-icon-edit"></i>写文章</el-menu-item>
        </el-col>

      </el-menu>
    </el-col>

    <template v-else>
      <slot></slot>
    </template>

    <el-col :span="4">
      <el-menu :router=true menu-trigger="click" mode="horizontal" active-text-color="#5FB878">

        <template v-if="!simple">
          <el-menu-item index="/login">
            <el-button type="text">登录</el-button>
          </el-menu-item>
          <el-menu-item index="/register">
            <el-button type="text">注册</el-button>
          </el-menu-item>
        </template>

        <template v-else>
          <el-submenu index>
            <el-menu-item index ><i class="el-icon-back"></i>退出</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    activeIndex: String,
    simple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },


}
</script>

<style>
.hellowbutton{
  /*margin:10px 0;*/
}
.me-header-left {
  /*padding-top: 10px;*/
}

.me-title img {
  max-height: 2.4rem;
  max-width: 100%;
}


</style>
