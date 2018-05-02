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
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333;
    height: 100%;
    min-width: 1170px;
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


  .fade-enter-active,
  .fade-leave-active {
    transition: all .25s ease-out;
    backface-visibility: hidden;
  }


  .fade-enter {
    opacity: 0;
  }

  .fade-leave-active {
    opacity:0;
  }
  .slide-enter-active,
  .slide-leave-active {
    //transition: transform .25s ease-out;
    transition: height .25s ease-out;
    backface-visibility: hidden;
  }


  .slide-enter {
    //transform: translate3d(64px,0 , 0);
    /*height:*/
  }

  .slide-leave-active {
    //transform: translate3d( 64px,0, 0);
  }
</style>
