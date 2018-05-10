<template>
  <div>
    <div class="top-wrap">
      <div class="top-box">
        <div class="bar-left">
          <span id="backPage" v-show="backPage" @click="backPageclick" style="cursor:pointer;">返回首页</span>
          <span id="backhide">PLAY RESPONSIBLY</span>
          <span style="padding-left:10px;">{{nowTime}}</span>
        </div>
        <!-- 登录界面 -->
        <div class="bar-right" v-if="!easysecret">
          <div class="item preson-info preson-balance">
            <input type="text" autoComplete='off' placeholder="账号" v-model="user_name">
          </div>
          <div class="item preson-balance personpwd">
            <input type="password" autoComplete='off' placeholder="密码" v-model="pass_word">
          </div>
          <div class="yanzheng">
            <input type="text" class="inputcode" v-model="code">
            <img :src="codeImg" @click='codeImgFn' class="code" alt="" title="点击更换">
          </div>
          <div class="item login">
            <a href="javascript:void(0);" @click='loginSubmit();'>{{is_login?"登录中...":"登录"}}</a>
          </div>
          <div class="item regster">
            <router-link to="/register">免费开户</router-link>
          </div>
          <div class="item regster">
            <span @click="trial">试玩</span>
          </div>
          <!-- <div class="item resetpwd">
            <a href="javascript:void(0);" @click="forgorWord">忘记密码</a>
          </div> -->
        </div>
        <!-- 登录后显示账户名余额信息 -->
        <div class="bar-right" v-else>
          <div class="preson-info preson-balance presonInput" id="presonInput">
            账号：{{username}}
          </div>
          <div class="preson-balance personpwd leftMoney presonInput" id="presonInput2">
            余额:{{money}}
          </div>
          <div style="width:540px;display:none;height:48px;" id="showId"></div>
          <router-link to='/UserCenter'>
            <div class="recharge items">
              充值
            </div>
          </router-link>
          <router-link to='/withdrawal'>
            <div class="withdraw items">
              提款
            </div>
          </router-link>
          <div class="login-out items" @click="loginout()">
            退出
          </div>
        </div>
      </div>
    </div>
    <nav>
      <!-- 导航 -->
      <div class="nav">
        <router-link to="/">
          <img class="logo" src="../assets/logo.png" alt="">
        </router-link>
        <ul>
          <li class="buy-center" @mousemove="overShow" @mouseout="outHide">
            <a href="javascript:;" to="/lottery">
              <div>购彩中心</div>
              <span>LOTTERY</span>
            </a>
          </li>
          <li class="user-center">
            <a href='javascript:void(0);' @click='enterUserCenter();'>
              <div>用户中心</div>
              <span>USERCENTER</span>
            </a>
          </li>
          <router-link to="/Activity" tag="li">
            <a @click="enterActivity">
              <div>优惠活动</div>
              <span>ACTIVITY</span>
            </a>
          </router-link>
          <li>
            <a href="javascript:void(0)" v-if="!username" @click="showMessge">
              <div>平台公告</div>
              <span>ANNOUNCEMENT</span>
            </a>
            <router-link to="/Notice" v-else>
              <div>平台公告</div>
              <span>ANNOUNCEMENT</span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>彩种信息</div>
              <span>GAMEINFORMATION</span>
            </a>
          </li>
          <router-link to="/live" tag="li" style="position:relative;" @click="goVideo" @mousemove.native="showmenu" @mouseout.native="hidemenu">
            <a>
              <div>视讯直播</div>
              <span>LIVEVIDEO</span>
            </a>
            <div class="hide" @mousemove.native="showmenu" @mouseout.native="hidemenu" v-show="menuVideo">
              <a href="javascript:;" class="p10">DS</a>
              <a href="javascript:;" class="p10">AG</a>
              <a href="javascript:;" class="p10">BB</a>
              <a href="javascript:;" class="p10">MG</a>
            </div>
          </router-link>
          <router-link to="/Games" tag="li" style="position:relative;" @mousemove.native="showmenu2" @mouseout.native="hidemenu2">
            <a href="javascript:void(0)">
              <div>电子游艺</div>
              <span>ELECTRONICGAMES</span>
            </a>
            <div class="hide" @mousemove="showmenu2" @mouseout="hidemenu2" v-show="menugame"
                 style="left:-11px;width:200px;">
              <a href="javascript:;" class="p20">BB</a>
              <a href="javascript:;" class="p20">AG</a>
              <a @click="GoMg" class="p20">MG</a>
            </div>
          </router-link>
          <router-link to="/mobile" tag="li">
            <a href="javascript:void(0)">
              <div>手机下注</div>
              <span>MOBILE</span>
            </a>
          </router-link>
        </ul>
      </div>
      <!-- 下拉菜单 -->
      <div class="menu-child1" v-show="showMenu" @mousemove="overShow" @mouseout="outHide" id="lot_sec_menu">
        <div class="gamelist-1 clear">
          <div class="official_play_h">
            <div class="gamelist_tit clear">
              <h1 class="red_style">信用玩法</h1>
              <div class="color">信</div>
            </div>
            <div class="high_wrap">
              <div class="gamelist_l">
                <ul v-for="item in headersArry" :key="item.id">
                  <li v-for="items in item.type" :key="items.id">
                    <!-- :href="'./lottery/index.html#/lottery/'+items.name" -->
                    <router-link  class="game_26" :to="{path:'/lottery/'+items.name}">
                      <img :src="`/static/img/${items.name}.png`" alt=""> <span class="hot"><font>{{items.short_name}}</font></span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="triangles_bacK"></div>
      </div>
      <!-- 平台公告 -->
      <div class="ui-popup-backdrop" v-show="showMessgeBox" @click="closeMessge"></div>
      <div class="alertdialog" v-show="showMessgeBox">
        <div class="ui-dialog">
          <table class="ui-dialog-grid">
            <tbody>
            <tr>
              <td class="ui-dialog-header">
                <button i="close" class="ui-dialog-close" title="取消" @click="closeMessge">×</button>
                <div class="ui-dialog-title">平台公告</div>
              </td>
            </tr>
            <tr>
              <td class="ui-dialog-body">
                <div class="ui-dialog-content">
                  <div id="DIALOG-VM" data-bind="template:__DIALOG_TPL" style="display: block;">
                    <div class="notice_main">
                      <div class="notice_title">
                      </div>
                      <div class="notice_text">
                        <div class="notice_item"></div>
                        <h1 style="color: #f4354a;text-align:left;">温馨提示：<span style="font-size:16px;padding:0;">{{sitesInfos.Msg}}</span></h1>
                        <div class="fright"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 忘记密码 -->
      <!-- <div class="alertdialog" v-show="showforgotPassword">
        <div class="ui-dialog">
          <table class="ui-dialog-grid">
            <tbody>
              <tr>
                <td  class="ui-dialog-header">
                  <button i="close" class="ui-dialog-close" title="取消" @click="closeMessge">×</button>
                  <div class="ui-dialog-title" style="font-size:15px;text-align:left;">忘记密码</div>
                </td>
                </tr>
                <tr>
                <td class="ui-dialog-body" style="text-align:center;background:#fff;">
                  <div class="ui-dialog-content" style="width: 440px;height:340px;">
                    <div id="DIALOG-VM" data-bind="template:__DIALOG_TPL" style="display: block;">
                      <div style="" class="passModel">
                        <ul>
                          <li>请输入账号以及取款密码</li>
                          <li><label>会员账号: </label><input type="text"></li>
                          <li><label>真实姓名: </label><input type="text"></li>
                          <li><label>取款密码: </label><input type="password"></li>
                          <li><label style="margin-left:14px;">验证码: </label><input type="text" v-model="code" value="验证码"><img :src="codeImg" @click='codeImgFn' class="code" title="点击更换"></li>
                        </ul>
                      </div>
                      <span>★&nbsp;会员账号、真实姓名及取款密码核对正确后，系统自动为您重置密码。</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
    </nav>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>
  import maskLayer from './base/mask-layer'
  import {mapState, mapMutations} from 'vuex'
  import alert from "@/components/base/alert"

  export default {
    name: 'Header',
    data() {
      return {
        backPage:false,
        nowTime: '',
        user_name: '',
        pass_word: '',
        content: '',
        ifopen: false,
        codeImg: '',
        temcodeToken: '',
        code: '',
        showMenu: false,
        headersArry:[],
        showMessgeBox: false,
        menuVideo: false,
        menugame: false,
        Msg:'',
        siteInfo:'',
        menugame: false,
        is_login:false
        // showforgotPassword:false
        // usermoney: '',
        // isShowLogin: sessionStorage.getItem('isLogin')

      }
    },
    mounted() {
      this.codeImgFn()
      this.clockon()
      this.checkUser();
    },
    computed: {
      ...mapState(['money', 'username', 'codeToken', 'headerArry', 'easysecret','sitesInfos'])
    },
    created() {
      this.getArry();
      this.Msg = this.sitesInfos.Msg;
      /*移到 home.vue(有些页面没有用到Header组件)
        this.$http.get('/api/site/info').then((res) => {
        this.siteInfo = res.data;
        this.Msg = res.data.Msg;
        this.getMsg(this.siteInfo);
      })*/
    },
    methods: {
      GoMg () {
        this.$router.push('/Games')
      },
      backPageclick () {
        this.$router.push('/')
      },
      async trial() {
        if(this.is_login)return;
        this.is_login=true;
        let res = await this.$http({
          method: "post",
          url: '/api/user/regsterVirtual',
          headers: {EasySecret: ""}
        });
        this.is_login=false;
        if(!res)return;
        if(res.data.code!=0){
          this.alert("提示",res.msg);
          return;
        }
        this.$http.defaults.headers.EasySecret = res.headers.easysecret;
        this.EASYSECRET(res.headers.easysecret);
        await this.getuserinfo(res.data.virtual==1?1:undefined);
        this.mytoast("登录成功");
      },
      goVideo() {
        this.$router.push('/live1');
      },
      showmenu() {
        this.menuVideo = true;
      },
      hidemenu() {
        this.menuVideo = false;

      },
      showmenu2() {
        this.menugame = true;
      },
      hidemenu2() {
        this.menugame = false;
      },
      checkUser() {
        if (!window.name) {
          this.showMessgeBox = true;
          window.name = 'already';
        } else {

        }
      },
      forgorWord() {
        this.showforgotPassword = true;
        this.showMessgeBoxM = true;
      },
      enterActivity() {
        this.$router.push('/Activity')
      },
      closeMessge() {
        this.showMessgeBox = false;
        this.showMessgeBoxM = false;
        this.showforgotPassword = false;
      },
      showMessge() {
        this.showMessgeBox = true;
        this.showMessgeBoxM = true;
      },
      getArry () {
        this.$http.get('/api/lottery/basic/LotteryGroup').then((res) => {
          this.headersArry = res.data;
          this.GETDATA(this.headersArry);
        })
      },
      overShow() {
        this.showMenu = true;
      },
      outHide() {
        this.showMenu = false;
      },
      codeImgFn() {
        this.$http.get('/api/site/captcha').then((res) => {
          if (res.status === 200) {
            this.codeImg = res.data.src
            this.temcodeToken = res.data.codeToken
            // this.mytoast(res.data.msg)
            // alert("11111"+this.temcodeToken)
            // this.getUserToken(this.temcodeToken)

          }
        }).catch((error) => {
          console.log(error)
        })
      },
      // 封装提示信息函数
      mytoast(msg) {
        this.ifopen = true

        this.content = msg
        setTimeout(() => {
          this.ifopen = false
          clearTimeout()
        }, 1500)
      },
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
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      enterUserCenter() {
        if (!this.username) {
          this.mytoast('请先登录')
          setTimeout(() => {
            this.$router.push('/Login')
            // this.$router.go('/');
          }, 1500)
        } else {
          this.$router.push('/UserCenter')
        }
      },
      enterUserCenter() {
        if (!this.codeToken) {
          this.mytoast('请先登录')
          setTimeout(() => {
            this.$router.push('/Login')
            // this.$router.go('/');
          }, 1500)
        } else {
          this.$router.push('/UserCenter')
        }
      },
      async getuserinfo(virtual) {
        let res = await this.$http.get('/api/users/info');
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        let userinfo={
          bankname: res.data.data.BandName,
          cardnum: res.data.data.CardNumber,
          logintime: res.data.data.LoginTime,
          mobile: res.data.data.Mobile,
          money: res.data.data.Money,
          msgnum: res.data.data.MsgNumber,
          name: res.data.data.Name,
          username: res.data.data.UserName,
          email: res.data.data.email,
          qq: res.data.data.qq
        }
        if(virtual)userinfo.virtual=virtual;
        this.USERINFO(userinfo);
        this.getUserRealName(res.data.data.Name);
        this.changeUserMoney(res.data.data.Money);
        this.changeUserName(res.data.data.UserName);
      },
      // 登录提交
      loginSubmit() {
        if(this.is_login)return;
        let data = {
          // action: 'login',
          username: this.user_name,
          password: this.pass_word,
          code: this.code,
          codeToken: this.temcodeToken
        }

        if (!this.user_name) {
          this.mytoast('请输入帐号')
        } else if (!this.pass_word) {
          this.mytoast('请输入密码')
        } else {
          this.is_login=true;
          this.$http({
            method: "post",
            url: '/api/user/login',
            data: data,
            headers: {EasySecret: ""}
          }).then(async (res) => {
            this.is_login=false;
            if (res.data.code === 0) {
              this.$http.defaults.headers.EasySecret = res.headers.easysecret;
              this.EASYSECRET(res.headers.easysecret);
              await this.getuserinfo();
              this.mytoast(res.data.msg);
              // this.usermoney = res.data.data.user_money

              // sessionStorage.setItem('username', this.username)
              // sessionStorage.setItem('isShowLogin', this.username)
              // sessionStorage.setItem('usermoney', res.data.data.user_money)

              // this.$store.dispatch('UserLogin', this.username)
              // this.$store.dispatch('SET_userMoney', this.usermoney)
              // this.$router.push('/UserCenter')
              // this.$router.push(this.$route.query.redirect || '/')
              //this.changeUserName(this.user_name)
              //this.changeUserMoney(res.data.data.money)
              // this.userIsLogin(true)
            } else {
              this.alert("提示",res.data.msg);
            }
          }).catch((error) => {
            this.is_login=false;
            console.log(error)
          })
        }
      },
      // 退出登录
      // loginout() {
      //   this.$http.get('/api/user/logout', {
      //     headers: {
      //       EasySecret: this.temcodeToken,
      //       emulateJSON: true
      //     }
      //   }).then((res) => {
      //     if (res.data.code === 0) {
      //       // this.$store.dispatch('UserLogout')

      //       this.userLoginOut()

      //       this.mytoast(res.data.msg)
      //       sessionStorage.clear();
      //       this.codeImgFn().stop
      //       setTimeout(() => {
      //         // alert(1)
      //         // instance.close()
      //         this.ifopen = false
      //         clearTimeout()
      //         this.$router.replace('/')
      //         location.reload()
      //       }, 1500)

      //       // this.isShow=false;
      //       // this.$store.dispatch('UserLogin', this.username)
      //       // this.$store.dispatch('SET_userMoney', this.usermoney)
      //       // this.$router.push('/UserCenter')
      //       // this.$router.push(this.$route.query.redirect || '/')


      //       // alert(this.user_name)
      //       this.changeUserName(this.user_name)
      //       this.changeUserMoney(res.data.data.user_money)
      //       // this.userIsLogin(true)
      //     }
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // },
      // 退出登录
      async loginout() {
        let res = await this.$http.post('/api/user/logout');
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.EASYSECRET("");
        sessionStorage.clear();
        this.$http.defaults.headers.EasySecret = undefined;
        this.$router.push("/login");
      },
      ...mapMutations(['changeUserName', 'getUserRealName', 'changeUserMoney', 'getUserToken', 'userLoginOut', "EASYSECRET", "ROOTBOX", "USERINFO",'GETDATA']),
      // getUserMoney(){
      //     // >获取用户余额
      //   this.$http.get('/json/center/?r=Money').then((res) => {
      //     this.user_money = res.data.data.user_money;
      //   }).catch((error) => {
      //     console.log(error)
      //   })
      // },

      clockon() {
        var now = new Date()
        // var day = now.getDay()
        var hour = now.getHours()
        var minu = now.getMinutes()
        var sec = now.getSeconds()

        if (hour < 10) hour = '0' + hour
        if (minu < 10) minu = '0' + minu
        if (sec < 10) sec = '0' + sec
        var time = ''
        time = hour + ':' + minu + ':' + sec
        setTimeout(this.clockon, 1000)
        this.nowTime = time
      }
    },
    components: {
      maskLayer
    }
  }
</script>
<style scoped>
  /* 平台公告 */
  .router-link-active {
    width: 128px;
    height: 45px;
    background: #af1313;
    margin: 0;
  }

  .p10 {
    padding-right: 10px;
  }

  .p20 {
    padding-right: 20px;
  }

  .hide {
    position: absolute;
    top: 68px;
    width: 200px;
    z-index: 6;
    left: -24px;
    background: #f14a4a;
    height: 30px;
    line-height: 30px;
  }

  .passModel {
    margin: auto;
    width: 350px;
    padding: 20px;
  }

  .passModel li {
    width: 350px;
    height: 42px;
    padding: 2px 0;
    color: #000000;
    font-size: 14px;
  }

  .passModel li input {
    width: 180px;
    height: 20px;
    padding: 5px;
    line-height: 20px;
    margin: 5px 7px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }

  #DIALOG-VM span {
    font-size: 12px;
    color: #000;
    padding-left: 30px;
  }

  .dialog-forgot table {
    width: 350px;
    margin: 0 auto;
  }

  .ui-dialog-close:hover, .ui-dialog-close:focus {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }

  .notice_main {
    float: left;
    width: 762px;
    height: 542px;
    overflow: auto;
    background: #fff;
  }

  .notice_title {
    padding: 5px 0;
    text-align: center;
    border-bottom: 1px solid #e5e4e4;
  }

  .notice_text {
    padding: 0 20px;
    font-size: 16px;
    color: #5c5c5c;
    text-align: center;
  }

  .notice_text div {
    line-height: 30px;
    margin-top: 22px;
    word-spacing: normal;
    width: 100%;
    text-align: left;
    word-break: break-all;
    /* float: left; */
  }

  .notice_title h1 {
    font-size: 22px;
    color: #f4354a;
    font-weight: bold;
  }

  .ui-dialog-content {
    color: #fff;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
  }

  .notice_main {
    float: left;
    width: 762px;
    height: 542px;
    overflow: auto;
    background: #fff;
  }

  .ui-dialog-body {
    padding: 0 !important;
  }

  .ui-dialog-header {
    border-bottom: none;
    color: #fff;
    background: #b62929;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#f83737), to(#b62929));
    background-image: -moz-linear-gradient(top, #f83737, #b62929);
    background-image: -o-linear-gradient(top, #f83737, #b62929);
    background-image: -webkit-linear-gradient(top, #f83737, #b62929);
    background-image: linear-gradient(to bottom, #f83737, #b62929);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#f83737', endColorstr='#b62929')";
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f83737', endColorstr='#b62929');
    zoom: 1;
    white-space: nowrap;
    padding: 0;
    border: 0 none;
    text-align: left;
  }

  .ui-dialog-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    letter-spacing: 8px;
    margin: 0;
    line-height: 1.428571429;
    min-height: 16.428571429px;
    padding: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    cursor: default;
  }

  .ui-dialog-close {
    position: absolute;
    opacity: 1;
    font-weight: normal;
    height: 64px;
    top: 0;
    font-size: 30px;
    color: #fff;
    background: url("../../static/img/popup-close.png") no-repeat center;
    right: 10px;
    border: none;
  }

  .ui-dialog {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    border-radius: 8px;
    display: inline-block;
    border: 1px solid #175e84;
    border: 5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 8px rgba(136, 136, 136, 0.5);
    overflow: hidden;
  }

  .ui-dialog-grid {
    width: auto;
    margin: 0;
    border: 0 none;
    border-collapse: collapse;
    border-spacing: 0;
    background: transparent;
  }

  .ui-popup-backdrop {
    opacity: 0.7;
    background: rgb(0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    z-index: 1024;
  }

  .alertdialog {
    position: absolute;
    outline: 0px;
    left: 0;
    top: 20%;
    z-index: 1024;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /*登录*/
  .top-wrap {
    height: 48px;
    overflow: hidden;
    color: #fff;
    background-color: rgba(0, 0, 0, .73);
  }

  .top-box {
    width: 1170px;
    margin: 0 auto;
    overflow: hidden;
  }

  .top-box .bar-left {
    float: left;
    background: url(../assets/base-ico2.png) 0 -176px no-repeat;
  }

  .top-box .bar-left span {
    display: inline-block;
    padding-left: 48px;
    font-size: 14px;
    font-style: normal;
    line-height: 48px;
    background-position: 0 -180px;
  }

  .bar-right {
    float: left;
    overflow: hidden;
    line-height: 44px;
  }

  .bar-right div {
    /*margin-right: 22px;*/
    font-size: 14px;
    float: left;
  }

  .bar-right .yanzheng {
    width: 128px;
    border: 2px solid #822b29;
    line-height: 0;
    margin-top: 9px;
    border-radius: 16px;
  }

  .bar-right .yanzheng .inputcode {
    width: 44px;
    height: 27px;
    /* border:2px solid #b62929; */
    padding-left: 4px;
  }

  .bar-right .yanzheng .code {
    vertical-align: middle;
  }

  .bar-right .item {
    margin-right: 0;
    float: left;
  }

  .bar-right div.login {
    /*margin-left: 140px;*/
  }

  .bar-right .login,
  .bar-right .regster {
    height: 34px;
    line-height: 34px;
    width: 100px;
    margin: 0 2px;
    margin-top: 10px;
    background: url(../assets/base-ico2.png) no-repeat;
    cursor: pointer;
    border-radius: 8px;
    background-position: 0px -334px;
    text-align: center;
  }

  .bar-right .login a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  .bar-right .regster a {
    color: #fff;
    padding: 8px 10px;
    text-decoration: none;
    font-size: 14px;
  }

  .resetpwd a {
    color: #fff;
    padding: 10px 0;
    text-decoration: none;
    font-size: 14px;
  }

  .bar-right div input {
    width: 120px;
    border: none;
    color: #fff;
    outline: none;
    background-color: transparent !important;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
  }

  .bar-right div input:focus {
    border: none;
    background-color: transparent;
    color: #fff;
    outline: none;
  }

  input::-webkit-input-placeholder {
    color: #fff;
  }

  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #fff;
  }

  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #fff;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  .preson-info,
  .preson-balance,
  .recharge,
  .withdraw,
  .login-out {
    float: left;
    cursor: pointer;
    background: url(../assets/base-ico2.png) no-repeat;
    font-size:14px;
  }

  .items {
    margin: 0 10px;
  }

  .preson-info {
    padding: 0;
    margin-left: 16px;
    background-position: 0 -591px;
  }

  .preson-balance {
    padding-top:2px;
    /*padding: 0 20px;*/
    min-width: 165px;
    padding-left: 40px;
    text-align: left;


  }

  .leftMoney {
    padding-left: 40px;
    padding-right: 23px;
  }

  .personpwd {
    background-position: 0 -635px;
    padding-top:2px;
  }

  .recharge {
    padding-left: 45px;
    background-position: -108px -677px;
    color: #fff;
  }

  .withdraw {
    padding-left: 45px;
    color: #fff;
    background-position: 0 -678px;
  }

  .login-out {
    padding-left: 45px;
    background-position: -201px -677px;
  }

  .recharge:hover {
    color: #b62929;
    background-position: -108px -750px;
  }

  .withdraw:hover {
    color: #b62929;
    background-position: 0 -750px;
  }

  .login-out:hover {
    color: #b62929;
    background-position: -201px -750px;
  }

  /*导航栏*/
  nav {
    background-color: #b62929;
  }

  .nav {
    width: 1320px;
    height: 69px;
    margin: 0 auto;
    /* overflow: hidden; */
    font-size: 14px;
    color: #fff;
  }

  .nav .logo {
    float: left;
    width: 200px;
    height: 68px;
  }

  .nav ul {
    float: left;
  }

  .nav ul > li {
    float: left;
    padding: 12px 18px;
    line-height: 22px;
    cursor: pointer;
    -webkit-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    text-align: center;
  }

  .nav ul > li a {
    color: #fff;
    text-decoration: none !important;
    outline: none !important;
    display: inline-block;
    transition: All .3s ease;
    -webkit-transition: All .3s ease;
    -moz-transition: All .3s ease;
    -o-transition: All .3s
  }

  .nav ul > li a:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    color: #fff;
  }

  .nav ul > li:hover {
    background: #f14a4a;
    color: #fff;
  }

  /*下拉菜单*/
  .menu-child1 {
    position: absolute;
    top: 90px;
    width: 1050px;
    margin: 0 5px;
    padding: 1px;
    z-index: 99999;
    border-radius: 0 0 8px 8px;
    zoom: 1;
    box-shadow: 0 1px 30px #A9A9A9;
    left: 180px;
    margin-top: 27px;
    padding-top: 5px;
    padding-bottom: 0;
  }

  .menu-child1 .gamelist-1 {
    background: url('../assets/bg_0909.png') repeat;
    padding-bottom: 20px;
    border-radius: 5px;
  }

  .gamelist-1 {
    padding: 20px 34px 0;
  }

  .clear {
    overflow: hidden;
  }

  .official_play {
    border-right: 1px solid #2b2b2b;
    display: inline-block;
    /* width: 490px; */
    zoom: 1;
    font-size: 0;
    float: left;
  }

  .gamelist_tit {
    border-bottom: 1px solid #2b2b2b;
    /* width: 490px; */
    display: block;
    margin: 8px 0 0 0;
    padding-bottom: 8px;
  }

  .menu-child1 h1 {
    width: 70px;
    height: 20px;
    font-size: 16px;
    display: inline-block;
    margin-left: 26px;
    margin-top: 2px;
    float: left;
    color: #fff;
  }

  .color {
    width: 23px;
    height: 23px;
    text-align: center;
    display: inline-block;
    line-height: 22px;
    font-size: 15px;
    margin-left: 12px;
    margin-top: 0;
    background: url('../assets/red_bg.png') no-repeat;
    color: #fff;
    float: left;
  }

  .high_wrap {
    /* width: 464px; */
    height: auto;
    float: none;
  }

  .gamelist-1 .gamelist_l {
    margin-left: 0;
  }

  .menu-child1 ul {
    /* min-height: 62px;
    padding: 11px 0;
    /* width: 464px; */
  }

  .high_wrap ul {
    float: none;
  }

  .menu-box ul {
    background-image: none;
  }

  .menu-child1 li {
    float: left;
    line-height: 28px;
    margin: 5px 4px;
    height: 104px;
    width: 92px;
    position: relative;
    text-align: center;
  }

  .menu-child1 li:hover {
    background: url(/static/img/Wbg_03.png) repeat;
  }

  .menu-child1 li a {
    display: block;
    width: 80px;
    height: 76px;
    padding: 0 0 18px 0;
    margin: 0 auto;
    color: #222;
    text-align: center;
    background: url('../assets/game-icon-bg.png') no-repeat;
    overflow: hidden;
  }

  .menu-child1 li a img {
    width: 80%;
    height: 80%;
    margin: 10%;
    display: none;
  }

  .menu-child1 li a img {
    display: block;
  }

  img {
    border: none;
  }

  .menu-child1 li span {
    font-size: 12px;
    display: block;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 22px;
    line-height: 28px;
    overflow: hidden;
  }

  .credit_play {
    display: inline-block;
    width: 490px;
    zoom: 1;
    font-size: 0;
    /* margin-left: -4px; */
    float: left;
  }

  .gamelist-1 .gamelist_r {
    margin-left: 15px;
  }

  .triangles_back {
    width: 26px;
    height: 19px;
    position: absolute;
    background: url('../assets/triangles_back.png') no-repeat;
    left: 246px;
    top: -8px;
  }
</style>
