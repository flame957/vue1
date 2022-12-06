<template>
  <el-row>
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#E9EEF3"
        text-color="black" router>
        <!--HelloWorld-->
        <el-menu-item index="/hello" style="text-align: left">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span >HelloWorld</span>
          </template>
        </el-menu-item>

        <el-submenu  style="text-align: left">
          <template slot="title">
          <i class="el-icon-menu"></i>
          <span >Test</span>
          </template>

          <el-menu-item index="/test1">
            <span slot="title">test1</span>
          </el-menu-item>

          <el-menu-item index="/test2">
            <span slot="title">test2</span>
          </el-menu-item>

          <el-menu-item index="/test3">
            <span slot="title">test3</span>
          </el-menu-item>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<style>
.el-menu-vertical-demo{
  height: 100%
}
</style>

<script>
import HelloWorld from "../HelloWorld";
import test1 from "../part1/test1";
import test2 from "../part1/test2";
import test3 from "../part1/test3";
export default {
  name: 'LeftNav',
  components: {HelloWorld,test1,test2,test3},
};


</script>
