<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
html {
  height: 100%;
}
body {
  background: url('./assets/bg1.jpg') 0 0 no-repeat;
  height: 100%;
  background-size: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /*margin-top: 60px;*/
}

/*公共样式*/
li {
  list-style-type: none;
}

li,
ul,
body,
h2 {
  padding: 0;
  margin: 0;
}

</style>
