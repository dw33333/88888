<template>
  <div>
    <div class="top-wrap">
      <div class="top-box">
        <div class="bar-left">
          <span>PLAY RESPONSIBLY</span>
          <span style="padding-left:10px;">{{nowTime}}</span>
        </div>
        <!-- 登录界面 -->
        <div class="bar-right" v-if="!codeToken">
          <div class="item preson-info preson-balance">
            <input type="text" autoComplete='off' placeholder="账号" v-model="user_name">
          </div>
          <div class="item preson-balance personpwd">
            <input type="password" autoComplete='off' placeholder="密码" v-model="pass_word">
          </div>
          <div class="yanzheng">
            <input type="text" class="inputcode" v-model="code">
            <img :src="codeImg" @click='codeImgFn' class="code" alt="">
          </div>
          <div class="item login">
            <a href="javascript:void(0);" @click='loginSubmit();'>登录</a>
          </div>
          <div class="item regster">
            <router-link to="/register">免费开户</router-link>
          </div>
          <div class="item resetpwd">
            <a href="javascript:void(0);">忘记密码</a>
          </div>
        </div>
        <!-- 登录后显示账户名余额信息 -->
        <div class="bar-right" v-else>
          <div class="preson-info preson-balance">
            账号：{{username}}
          </div>
          <div class="preson-balance personpwd leftMoney">
            余额:{{usermoney}}


          </div>

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
          <div class="login-out items" @click="loginout();">
            退出
          </div>
        </div>
      </div>
    </div>
    <nav>
      <!-- 导航 -->
      <div class="nav">
        <img class="logo" src="../assets/logo.png" alt="">
        <ul>
          <li class="buy-center">
            <router-link to="/lottery">
              <div>购彩中心</div>
              <span>LOTTERY</span>
            </router-link>
          </li>
          <li class="user-center">
            <a href='javascript:void(0);' @click='enterUserCenter();'>
              <div>用户中心</div>
              <span>USERCENTER</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>优惠活动</div>
              <span>ACTIVITY</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>平台公告</div>
              <span>ANNOUNCEMENT</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>彩种信息</div>
              <span>GAMEINFORMATION</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>手机下注</div>
              <span>MOBILE</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 下拉菜单 -->
      <div class="menu-child1" style="display:none;" id="lot_sec_menu">
        <div class="gamelist-1 clear">
          <div class="official_play">
            <div class="gamelist_tit clear">
              <h1 class="red_style">官方玩法</h1>
              <div class="color">官</div>
            </div>
            <div class="high_wrap">
              <div class="gamelist_l">
                <ul>
                  <li>
                    <a class="game_26"> <img
                    src='https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/ZQSSC.png?_=20160805'><span
                    class="hot"><font>重庆时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_28"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/BJKL8.png?_=20160805"><span
                    class="hot"><font>北京快乐8</font></span></a>
                  </li>
                  <li>
                    <a class="game_29"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/BJPKS.png?_=20160805"><span
                    class="hot"><font>北京PK拾</font></span></a>
                  </li>
                  <li>
                    <a class="game_30"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/FC3D.png?_=20160805"><span
                    class="hot"><font>福彩3D</font></span></a>
                  </li>
                  <li>
                    <a class="game_40"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/XJSSC.png?_=20160805"><span
                    class="hot"><font>新疆时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_44"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/PLSW.png?_=20160805"><span
                    class="hot"><font>排列三、五</font></span></a>
                  </li>
                  <li>
                    <a class="game_45"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/GD11X5.png?_=20160805"><span
                    class="hot"><font>广东11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_50"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/HLJ11X5.png?_=20160805"><span
                    class="hot"><font>黑龙江11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_56"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/BJSSC.png?_=20160805"><span
                    class="hot"><font>北京时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_78"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/QQFFC.png?_=20160805"><span
                    class="hot"><font>QQ分分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_81"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/SHSSL.png?_=20160805"><span
                    class="hot"><font>上海时时乐</font></span></a>
                  </li>
                  <li>
                    <a class="game_80"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/HEBEIKUAI3.png?_=20160805"><span
                    class="hot"><font>河北快3</font></span></a>
                  </li>
                  <li>
                    <a class="game_51"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/HGKLC.png?_=20160805"><span
                    class="hot"><font>韩式1.5分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_62"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/JS11X5.png?_=20160805"><span
                    class="hot"><font>江苏11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_68"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/AZ3FC.png?_=20160805"><span
                    class="hot"><font>澳洲3分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_72"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/SH11X5.png?_=20160805"><span
                    class="hot"><font>上海11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_76"> <img
                    src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/TXFFC.png?_=20160805"><span
                    class="hot"><font>腾讯分分彩</font></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="credit_play">
            <div class="gamelist_tit clear">
              <h1 class="orange_style">信用玩法</h1>
              <div class="color">信</div>
            </div>
            <div class="high_wrap">
              <div class="gamelist_r">
                <ul>
                  <li>
                    <a class="game_1" href="/six/index"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/⑥HC.png?_=20160805"><span
                      class="hot"><font>香港六合彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_4" href="/OtherGame/Index/4"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/GD11X5.png?_=20160805"><span
                      class="hot"><font>广东11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_6" href="/OtherGame/Index/6"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/GXKS.png?_=20160805"><span
                      class="hot"><font>广西快十</font></span></a>
                  </li>
                  <li>
                    <a class="game_7" href="/OtherGame/Index/7"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/ZQSSC.png?_=20160805"><span
                      class="hot"><font>重庆时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_10" href="/OtherGame/Index/10"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/XJSSC.png?_=20160805"><span
                      class="hot"><font>新疆时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_13" href="/OtherGame/Index/13"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/ZQKS.png?_=20160805"><span
                      class="hot"><font>幸运农场</font></span></a>
                  </li>
                  <li>
                    <a class="game_15" href="/OtherGame/Index/15"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/BJPKS.png?_=20160805"><span
                      class="hot"><font>北京PK拾</font></span></a>
                  </li>
                  <li>
                    <a class="game_55" href="/OtherGame/Index/55"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/BJSSC.png?_=20160805"><span
                      class="hot"><font>北京时时彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_77" href="/OtherGame/Index/77"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/QQFFC.png?_=20160805"><span
                      class="hot"><font>QQ分分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_63" href="/OtherGame/Index/63"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/JS11X5.png?_=20160805"><span
                      class="hot"><font>江苏11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_69" href="/OtherGame/Index/69"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/AZ3FC.png?_=20160805"><span
                      class="hot"><font>澳洲3分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_73" href="/OtherGame/Index/73"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/SH11X5.png?_=20160805"><span
                      class="hot"><font>上海11选5</font></span></a>
                  </li>
                  <li>
                    <a class="game_79" href="/OtherGame/Index/79"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/HEBEIKUAI3.png?_=20160805"><span
                      class="hot"><font>河北快3</font></span></a>
                  </li>
                  <li>
                    <a class="game_53" href="/OtherGame/Index/53"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/HGKLC.png?_=20160805"><span
                      class="hot"><font>韩式1.5分彩</font></span></a>
                  </li>
                  <li>
                    <a class="game_101" href="/OtherGame/Index/101"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/XY28.png?_=20160805"><span
                      class="hot"><font>幸运28</font></span></a>
                  </li>
                  <li>
                    <a class="game_5" href="/OtherGame/Index/5"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/GDKS.png?_=20160805"><span
                      class="hot"><font>广东快十</font></span></a>
                  </li>
                  <li>
                    <a class="game_75" href="/OtherGame/Index/75"><img
                      src="https://zzzy3qqqt.52notice.net//Content/default/images/gameIcon/TXFFC.png?_=20160805"><span
                      class="hot"><font>腾讯分分彩</font></span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="triangles_back"></div>
      </div>
    </nav>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>
  import maskLayer from './base/mask-layer'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'Header',
    data() {
      return {
        nowTime: '',
        user_name: '',
        pass_word: '',
        content: '',
        ifopen: false,
        codeImg: '',
        temcodeToken: '',
        code: ''
        // usermoney: '',
        // isShowLogin: sessionStorage.getItem('isLogin')

      }
    },
    mounted() {
      this.codeImgFn()
      this.clockon()

    },
    computed: {
      ...mapState(['usermoney', 'username', 'codeToken'])
    },
    methods: {
      codeImgFn() {
        this.$http.get('/api/site/captcha').then((res) => {

          if (res.status === 200) {

            this.codeImg = res.data.src
            this.temcodeToken = res.data.codeToken
            // this.mytoast(res.data.msg)
            // alert("11111"+this.temcodeToken)
            this.getUserToken(this.temcodeToken)

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

      // 登录提交
      loginSubmit() {
        let data = {
          // action: 'login',
          username: this.user_name,
          password: this.pass_word,
          code: this.code,
          codeToken: this.codeToken
        }

        if (!this.user_name) {
          this.mytoast('请输入帐号')
        } else if (!this.pass_word) {
          this.mytoast('请输入密码')
        } else {
          this.$http.post('/api/user/login', data).then((res) => {
            if (res.status === 200 && res.data.code === 0) {
              this.mytoast(res.data.msg)
              // this.usermoney = res.data.data.user_money

              // sessionStorage.setItem('username', this.username)
              // sessionStorage.setItem('isShowLogin', this.username)
              // sessionStorage.setItem('usermoney', res.data.data.user_money)

              // this.$store.dispatch('UserLogin', this.username)
              // this.$store.dispatch('SET_userMoney', this.usermoney)
              // this.$router.push('/UserCenter')
              // this.$router.push(this.$route.query.redirect || '/')


              // alert(this.user_name)
              this.changeUserName(this.user_name)
              this.changeUserMoney(res.data.data.user_money)
              // this.userIsLogin(true)
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      },
      // 退出登录
      async loginout() {
        let res = await this.$http.post('/api/user/logout');
        if (!res) return
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.EASYSECRET("");
        sessionStorage.clear();
        this.$http.defaults.headers.EasySecret=undefined;
        this.$router.push("login");
      },
      ...mapMutations(['changeUserName', 'changeUserMoney', 'getUserToken', 'userLoginOut',"EASYSECRET"]),
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
  /*登录*/

  .top-wrap {
    height: 48px;
    overflow: hidden;
    color: #fff;
    background-color: rgba(0, 0, 0, .73);
  }

  .top-box {
    width: 1050px;
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
    font-style: italic;
    line-height: 48px;
    background-position: 0 -180px;
  }

  .bar-right {
    float: left;
    overflow: hidden;
    line-height: 48px;
  }

  .bar-right div {
    /*margin-right: 22px;*/

    float: left;
  }

  .bar-right .yanzheng {
    width: 128px;
  }

  .bar-right .yanzheng .inputcode {
    width: 44px;
    height: 26px;
    border: 2px solid #b62929;
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
    margin: 0 8px;
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
  }

  .bar-right .regster a {
    color: #fff;
    padding: 8px 10px;
    text-decoration: none;
  }

  .resetpwd a {
    color: #fff;
    padding: 10px 0;
    text-decoration: none;
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
  }

  .items {
    margin: 0 10px;
  }

  .preson-info {
    padding: 0;
    margin-left: 16px;
    background-position: 0 -390px;
  }

  .preson-balance {
    /*padding: 0 20px;*/
    width: 125px;
    padding-left: 40px;
    text-align: left;
  }

  .leftMoney {
    padding-left: 40px;
    padding-right: 23px;
  }

  .personpwd {
    background-position: 0 -434px;
  }

  .recharge {
    padding-left: 45px;
    background-position: -108px -677px;
    color: #fff;
  }

  .withdraw {
    padding-left: 45px;
    color: #fff;
    background-position: 0 -677px;
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
    width: 1050px;
    height: 69px;
    margin: 0 auto;
    overflow: hidden;
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
    padding: 12px 26px;
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
  }

  .nav ul > li:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    background-color: #f14a4a;
  }

  /*下拉菜单*/
  .menu-child1 {
    position: absolute;
    top: 90px;
    width: 1050px;
    margin: 0 5px;
    padding: 1px;
    z-index: 9999;
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
    width: 490px;
    zoom: 1;
    font-size: 0;
    float: left;
  }

  .gamelist_tit {
    border-bottom: 1px solid #2b2b2b;
    width: 490px;
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
    width: 464px;
    height: auto;
    float: none;
  }

  .gamelist-1 .gamelist_l {
    margin-left: 0;
  }

  .menu-child1 ul {
    min-height: 62px;
    padding: 11px 0;
    width: 464px;
    overflow: hidden;
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
    margin: 5px 0;
    height: 104px;
    width: 92px;
    position: relative;
    text-align: center;
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
    height: 28px;
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
