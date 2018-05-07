<template>
  <div id="app">
    <router-view></router-view>
    <transition name="ew-slide">
      <!--最外层动态组件-->
      <component v-if="rootbox.open" :is="rootbox.compt" v-bind="rootbox.props" v-on="rootbox.handles"/>
    </transition>
  </div>
</template>
<script>
  import {mapState,mapMutations} from "vuex";
  import 'element-ui/lib/theme-chalk/index.css';
  export default {
    name: 'App',
    computed: {
      ...mapState(["rootbox"])
    },
    created(){
      this.getAgentId()
    },
    methods:{
      ...mapMutations(["AGENT_ID"]),
      async getAgentId(){
        let res = await this.$http({
          method:"post",
          url:'/api/user/getAgentId',
          data:{domain:window.location.host},
          headers:{EasySecret:""},
        });
        if(!res)return;
        if (res.data.code==1) {
          this.AGENT_ID(0);
        }else if(res.data.code==0){
          this.AGENT_ID(res.data.data);
        }
      }
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
    color: #6f6d6d;
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
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: rgba(255, 255, 255, 1);;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }

  @-webkit-keyframes autofill { //去除chrome浏览器自动填充表单的黄色背景
    to {
      color: rgba(255, 255, 255, 1);
      background: transparent;
    }
  }

  @-webkit-keyframes autofill2 { //去除chrome浏览器自动填充表单的黄色背景
    to {
      color: #aaa;
      background: transparent;
    }
  }
  @-webkit-keyframes autofill3 { //去除chrome浏览器自动填充表单的黄色背景
    to {
      color: rgba(255, 255, 255, 1);
      background: #fff;
    }
  }
  body {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-animation-name: autofill2;
      -webkit-animation-fill-mode: both;
      color: #aaa !important;
    }
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
