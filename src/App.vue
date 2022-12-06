<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from "./components/Home/LeftNav";
import BaseFooter from "../src/views/BaseFooter";
import BaseHeader from "../src/views/BaseHeader";

export default {
  name: "App",
  components: {
    // LeftNav,
    // BaseHeader,
    // BaseFooter
  }
}
</script>

<style>
html,body,#app{
  margin: 0;
  height:100%
}

</style>
