<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index.js";
export default {
  name: "App",
  components: {},
  mounted() {
    // storage.setItem("a", 1);
    // storage.setItem('user',{b:1})
    // storage.setItem('abc',{a:1},'user')
    // storage.clear('mall')
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
