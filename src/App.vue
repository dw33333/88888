<template>
  <div id="app">
    <router-view></router-view>
    <transition name="ew-slide">
      <component v-if="rootbox.open" :is="rootbox.compt" v-bind="rootbox.props" v-on="rootbox.handles"/>
    </transition>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    name: 'App',
    computed: {
      ...mapState(["rootbox"])
    }
  }

</script>
<style lang="less">
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
    color: #333;
    height: 100%;
    /*margin-top: 60px;*/
  }

  .clearfix {
    *zoom: 1;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
  }

  .clearfix:after {
    clear: both;
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

  .ew-slide-enter-active,
  .ew-slide-leave-active {
    transition: opacity .25s ease-out;
    .alert {
      backface-visibility: hidden;
      transition: margin-top .25s ease-out;
    }
  }

  .ew-slide-enter,
  .ew-slide-leave-active {
    opacity: 0;
  }

  .ew-slide-enter .alert {
    margin-top:-64px;
  }

  .ew-slide-leave-active .alert {
    margin-top:64px;
  }
</style>
