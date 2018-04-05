<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <router-view name="banner"></router-view>
    <router-view name="moregame"></router-view>
    <router-view name="download"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: url(./assets/bg1.jpg) 0 0 no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
/*公共样式*/
li {
    list-style-type: none;
}
li,
ul,body,h2 {
    padding: 0;
    margin: 0;
}
</style>
