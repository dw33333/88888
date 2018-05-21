<template>
  <div class='container hp_help'>
    <div class="header">
      <img class="logo" src="../assets/logo1.png" height="82" width="136" alt="">
      <ul class="nav">
        <li class='game' @mouseover="showAllgame" @mouseout="hideAllgame"><a href="javascript:;">游戏大厅</a>
        </li>
        <li class="home">
          <router-link to="/">返回首页</router-link>
        </li>
        <li class="server"><a :href="this.sitesInfos.SiteService" target="_blank">在线客服</a></li>
        <li class="rules"><a href="#" @click="isShowtop(5)">规则说明</a></li>
        <!--<li class="help"><a href="#">游戏帮助</a></li>-->
        <li class="layout"><a href="#" @click="loginout();">登出账号</a></li>
      </ul>
      <!-- 下拉游戏选择 -->
      <transition name="fade">
        <div class="menu-child" @mouseover="showAllgame" @mouseout="hideAllgame" v-if="isShowMenu" id="lot_sec_menu">
          <div class="gamelist clear">

            <div class="cut-line"></div>
            <div class="credit_play">
              <div class="gamelist_tit clear">
                <h1 class="orange_style">信用玩法</h1>
              </div>
              <div class="high_wrap">
                <div class="gamelist_r">
                  <ul data-bind="foreach:credit">
                    <li>
                      <span>
                        <router-link to="/lottery/six">
                          香港六合彩
                        </router-link>
                      </span>
                    </li>
                    <li v-for="item in this.headerArry" :key="item.id">
                      <span v-for="items in item.type" :key="items.id">
                        <router-link  class="game_1" :to="{path:'/lottery/'+items.name}">
                          {{items.short_name}}
                        </router-link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="triangles_back"></div>
        </div>
      </transition>
      <!-- 下拉游戏选择 -->
    </div>
    <div class="main-body">
      <div class='select'>
        <!-- 折叠菜单 -->
        <div class="sidebar">
          <div class="sidebar-menu">
            <div style="margin-top: 0;" class="item" @click="isShow(1)" :class="{help_active:1 == num}">
              <span >常见问题</span>
            </div>
            <div  class="item" @click="isShow(2)" :class="{help_active:2 == num}">
             <span >存款帮助</span>
            </div>
             <div  class="item"  @click="isShow(3)" :class="{help_active:3 == num}">
              <span>取款帮助</span>
            </div>
            <div class="item" @click="isShow(4)" >
              <a href="javascript:void(0);">玩法介绍</a>
            </div>
            <ul class='list-item' id="ul_list" :class="{show_item:isActive}"
                :style="{height:isDisplay==4?((34*28)+'px'):'0px',visibility:isDisplay==4?'visible':'hidden',overflow:'hidden'}">
                <span>
                  <li><router-link to="/six">香港六合彩</router-link></li>
                </span>
                <span v-for="item in this.headerArry" :key="item.id">
                    <li v-for="items in item.type" :key="items.id">
                        <router-link :to="items.name">{{items.short_name}}</router-link>
                    </li>
                </span>
            </ul>
          </div>
        </div>
      </div>
      <router-view class="content">
      </router-view>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>

  import maskLayer from './base/mask-layer'
  import {mapState, mapMutations} from 'vuex'
  import alert from "@/components/base/alert"

  export default {
    data() {
      return {
        isDisplay: 0,
        num: '',
        content: '',
        ifopen: false,
        isShowMenu: false,
        unread_count: '',
        realname: '',
        bankCardNum: '',
        bankName: '',
        isActive:false
        // headersArry:[]
      }
    },
    created () {
    //   this.getArry();
    },
    components: {
      maskLayer
    },
    mounted() {
      
      if(this.$route.name == 'Teller'){
        this.num = 3;
      }else
      if(this.$route.name == 'Deposit'){
        this.num = 2;
        this.isActive = false;
      }else
      if(this.$route.name == 'Generalq'){
        this.num = 1;
        this.isActive = false;
      }else{
        this.num = 0;
        this.isDisplay = 4;
      }
    },
    computed: {
      ...mapState(['agmoney', 'dsmoney', 'money', 'username', 'userRealName', 'userinfo','sitesInfos','headerArry'])
    },
    methods: {
      alert(tit, msg, fn, msgStyle) {
        let _this = this;
        this.ROOTBOX({
          open: true,
          compt: alert,
          props: {
            tit: tit,
            msg: msg,
            msgstyle: msgStyle
          },
          handles: {
            confirm() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      ...mapMutations(['getUserRealName', 'changeUserMoney', 'changeUserName', 'userLoginOut', 'USERINFO', 'ROOTBOX','EASYSECRET']),
      // 封装提示信息函数
      mytoast(msg) {
        this.ifopen = true
        this.content = msg
        setTimeout(() => {
          this.ifopen = false
          clearTimeout()
        }, 1500)
      },
      // 退出登录
      async loginout() {
        let res = await this.$http.post('/api/user/logout');
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.EASYSECRET("");
        localStorage.clear();
        this.$http.defaults.headers.EasySecret = undefined;
        this.$router.push("login");
      },
      showAllgame() {
        this.isShowMenu = true
      },
      hideAllgame() {
        this.isShowMenu = false
      },
      isShow(index) {
        if(index == 1){
          this.$router.push('/Generalq')
        }
        if(index == 2){
          this.$router.push('/Deposit')
        }
        if(index == 3){
          this.$router.push('/Teller')
        }
        this.num = index;
        if (this.isDisplay == index)
          this.isDisplay = 0;
        else
          this.isDisplay = index;
        return;
      },
      isShowtop () {
        this.isDisplay = 4;
        this.num =0;
      }
    }
  }

</script>
<style lang="less">
.hp_help{
  .subtitle2{
    background-color: rgb(175, 175, 228) !important;
  }
  table{
    border-collapse: initial;
    width: auto;
  }
  table td{
    text-align: left;
  }
}
.rule_from02{
  padding: 30px;
}
.show_item{
    visibility: visible !important;
    height: 100% !important;
    overflow: auto !important;
}
.col_red{
    color: red;
}
.red{
  background-color: #afafe4;
}
.help-con{
    padding: 30px;
}
.help_active{
    background-position: 0 -535px !important;
    color: #000 !important;
}


  /*body {
    background-image: none;
  }*/

  .container {
    overflow-y: auto;
    /*height:100%*/;
    background-color: #363636;
    box-sizing: border-box;
  }

  .container::-webkit-scrollbar {
    /*display: none;*/
  }

  .header {
    background-color: #363636;
    /*height: 18px;*/
    overflow: hidden;
  }

  .header .logo {
    float: left;
    margin: 14px 0 0 36px;
  }

  .header .nav {
    float: right;
    color: #fff;
    text-align: center;
    margin-right: 30px;
  }

  .header .nav li {
    background: url(../assets/top_menu_icos.png) no-repeat;
    float: left;
    height: 18px;
    padding-top: 78px;
    margin: 0 10px;
    padding-bottom: 10px;
    cursor: pointer;
  }

  .header .nav li a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    padding-top: 78px;
  }

  .header .nav li.game {
    background-position: 8px -470px;
  }

  .header .nav li.game:hover {
    background-position: -45px -470px;
  }

  .header .nav li.game:hover .menu-child {
    display: block;
  }

  .header .nav li.home {
    background-position: 8px 30px;
  }

  .header .nav li.home:hover {
    background-position: -45px 30px;
  }

  .header .nav li.server {
    background-position: 8px -71px;
  }

  .header .nav li.server:hover {
    background-position: -45px -71px;
  }

  .header .nav li.rules {
    background-position: 8px -172px;
  }

  .header .nav li.rules:hover {
    background-position: -45px -172px;
  }

  .header .nav li.help {
    background-position: 8px -372px;
  }

  .header .nav li.help:hover {
    background-position: -45px -372px;
  }

  .header .nav li.layout {
    background-position: 8px -274px;
  }

  .header .nav li.layout:hover {
    background-position: -45px -274px;
  }

  /*下拉游戏选择*/
  .menu-child {
    position: absolute;
    zoom: 1;
    top: 104px;
    right: 50px;
    width: 500px;
    background: url("../assets/nav_bg.png") repeat;
    margin: 2px 0 0;
    height: auto;
    padding: 15px 0;
    border-radius: 5px;
    box-shadow: 0 2px 10px #000;
    z-index: 99;
  }

  .gamelist {
    position: relative;
    height: 100%;
    width: 100%;
  }


  .official_play {
    border-bottom: none;
    font-size: 12px;
    float: left;
  }

  .gamelist_tit {
    width: 370px;
    display: block;
    margin: 8px 0;
    border-bottom: none;
    text-align: left;
  }

  .menu-child h1.red_style {
    height: 28px;
    background: url("../assets/icon51.png") no-repeat center left;
  }

  .menu-child h1 {
    padding: 4px 0 4px 38px;
    margin-left: 30px;
    font-size: 15px;
    font-weight: normal;
    width: 70px;
    height: 20px;
    font-size: 16px;
    display: inline-block;
    color: #fff;
  }

  .high_wrap {
    float: left;
    border-bottom: none;
    width: auto;
    height: auto;
  }

  .cut-line {
    position: absolute;
    height: 100%;
    width: 1px;
    left: 50%;
    background: #fff;
    text-align: center;
  }

  .credit_play {
    font-size: 0;
    float: left;
  }

  .menu-child h1.orange_style {
    height: 28px;
    background: url("../assets/icon52.png") no-repeat center left;
  }

  .menu-child ul {
    min-height: 62px;
    float: left;
    margin-left: 30px;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  .menu-child li {
    line-height: 28px;
    margin: 5px 0;
    text-align: left;
    margin-right: 10px;
  }
  .menu-child li span{
    float: left;
    padding: 2px 13px;
  }
  .menu-child li a {
    display: block;
    width: 80px;
    height: 24px;
    color: #fff;

    background: none;
    font-size: 12px;
    margin: 0;
  }

  .top_menu a {
    width: 52px;
    margin: 0 14px;
    color: #fff;
    background: url("../assets/top_menu_icos.png") no-repeat;
  }

  a {
    text-decoration: none;
  }

  .main-body {
    overflow: visible;
    /*height: 100%;*/
  }

  /*左边区域*/
  .container .select {
    float: left;
    background-color: #363636;
    color: #fff;
    width: 200px;
    font-size: 14px;
    /*height: 100%;*/
  }

  .container .select .account,
  .container .select .balance {
    padding-top: 10px;
    width: 154px;
    height: 31px;
    line-height: 28px;
    background: url("../assets/base-ico2.png") no-repeat;
  }

  .container .select .account {
    background-position: -96px -36px;
    text-align: left;
    padding-left: 52px;
  }

  .container .select .balance {
    background-position: -96px -83px;
    text-align: left;
    padding-left: 46px;

    margin-top: 16px;
  }

  .container .select .money {
    padding-top: 10px;
    width: 197px;
    height: 41px;
    line-height: 28px;
    margin-top: 20px;
  }

  .container .select .money a {
    float: left;
    width: 26%;
    padding-left: 40px;
    line-height: 55px;
    background: url("../assets/user-btn.png") no-repeat;
    color: #fff;
  }

  .container .select > a {
    margin: 0 auto;
    padding-top: 20px;
  }

  .container .select .money a span {
    margin-left: 10px;
  }

  .container .select .money a.recharge {
    background-position: 10px 8px;
  }

  .container .select .money a.withdraw {
    background-position: -71px 10px;
  }

//   .sidebar {
//     margin-top: 20px;
//   }

  .sidebar-menu .item {
    text-align: left;
    padding-left: 20px;
    cursor: pointer;
    line-height: 40px;
    /* height: 40px; */
    width: 172px;
    margin: 3px auto;
    background: url(../assets/base-ico3.png) 0 -579px no-repeat;
  }

  .sidebar-menu .item a {
    text-decoration: none;
    color: #fff;
    padding: 11px 0;
    padding-right: 102px;
    background: url(../assets/base-ico.png) 128px -12px no-repeat;
  }

  .sidebar-menu .list-item {
    box-sizing: border-box;
    transition: height 0.25s;
    font-size: 14px;
    line-height: 30px;
    width: 95%;
    margin: 0 auto;
  }

  .sidebar-menu .list-item li {
    cursor: pointer;
    text-align: left;
    margin-top: 2px;
    width: 100%;
  }

  .sidebar-menu .list-item li a {
    color: #fff;
    text-decoration: none;
    text-indent: 1rem;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .sidebar-menu .list-item li a:hover {
    color: #000;
    background-color: #fff;
  }

  .sidebar-menu .list-item li .router-link-exact-active.router-link-active {
    color: #000;
    background-color: #fff;
  }

  /*右边区域*/
  .container .content {
    /*width: 1600px;*/
    /*height: 100%;*/
    margin-left: 0px;
    /*margin-left: 213px;*/
    min-height: 900px;
    min-width: 500px;
    background-color: #ededed;
    overflow-y:auto;
    text-align: left;
    color: #6f6d6d;
    font-size: 14px;
  }
ol{
        padding: 0;
}
</style>
