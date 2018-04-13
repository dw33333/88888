<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <router-view name="register" v-if="isShowRegster"></router-view>
    <router-view name="Login" v-if="isShowLogin"></router-view>
    <router-view name="banner" v-if="isShowBannerGame"></router-view>
    <router-view name="moregame" v-if="isShowBannerGame"></router-view>
    
    <!-- 进入     点开户   点登录   登录成功
false     true     false   false
false     false    true    false
true      false    false  true
true      false    false   true -->

    <router-view name="footer" class="footer"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isShowBannerGame: false,
      isShowRegster: true,
      isShowLogin: false,
    }
  },

  methods: {
    isShowBannerGameFn() {
      this.isShowRegster = true;
      this.isShowBannerGame = false;

    },
  }
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
