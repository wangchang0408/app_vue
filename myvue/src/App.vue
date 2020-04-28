<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import TabBar from "element-ui/packages/tabs/src/tab-bar";
  export default {
    name: 'App',
    components: {TabBar}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
