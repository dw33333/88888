<template>
  <div style="padding-top:26px;">
    <div class="login-area">
      <div class="login_area_box">
        <div class="mainloginbox" id="LOGIN-FORM">
          <div class="site-logo">
            <div class="logo-items">
              <embed width="340" height="150" class="logo_none" autostart="true" loop="true" src="/static/logo.swf"
                     quality="high" wmode="Transparent" type="application/x-shockwave-flash" param="transparent"
                     id="swfNav">
            </div>
          </div>
          <div class="login_tit">
            <h1>用户登陆</h1>
            <!--<a href="#">线路选择</a> -->
          </div>
          <div class="login-form" autocomplete="off" method="post">
            <input type="text" style="visibility:hidden;position:absolute;z-index:-999;">
            <input type="password" style="visibility:hidden;position:absolute;z-index:-999;">
            <ul>
              <li>
                <label for="ph1523347205303" style="display: block;"></label>
                <input type="text" class="fieldWithIcon2" placeholder="帐号" v-model="user_name">
              </li>
              <li>
                <label for="ph1523347205304" style="display: block;"></label>
                <input type="password" placeholder="密码" class="fieldWithIcon3" v-model='pass_word'>
              </li>
              <li>
                <input type="text" class="code" v-model="code"><img @click='codeImgFn' class="code-img" :src="codeImg">
              </li>
              <li class="loginbtn" @click="loginFn">
                <input v-show="!is_login" type="submit" title="登录" class="btn btn_login" value="">
                <div v-show="is_login" style="color:#fff;line-height: 32px;">正在登录...</div>
              </li>
              <li class="loginbtn">
                <router-link title="免费开户" class="btn btn_register" to="/register"></router-link>
              </li>
              <li class="login_others">
                <a href="javascript:void(0)" id="forgetBtn" class="login_forgetpassword"
                   style="line-height:40px;color:#eaeaec;display:inline-block;">忘记密码?</a>
                <span class="separate">|</span>
                <!--<a href="javascript:;" class="authentication" style="display:inline-block;">域名验证</a>
                                <span class="separate">|</span> -->
                <a href="https://tb.53kf.com/code/client/10172705/1" target="_blank" class="online_service"
                   style="text-align:right;margin-top: 12px;color:#eaeaec;text-decoration:underline;font-size:14px;text-decoration:none;display:inline-block;">在线客服</a>
                <span class="separate separate_hidden">|</span>
              </li>
              <!--  <li class="browser_hidden">
                 <p>推荐使用浏览器：</p>
                 <a href="http://rj.baidu.com/soft/detail/14744.html?ald" class="chrome_icon">Chrome</a>
                 <a href="http://rj.baidu.com/soft/detail/11843.html" class="firefox_icon">Firefox</a>
               </li> -->
            </ul>
          </div>
          <div clsas="clear_both"></div>
        </div>
      </div>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
    <footervue></footervue>
  </div>
</template>
<script>
  import footervue from '@/components/Footer.vue'
  import maskLayer from '@/components/base/mask-layer'
  import alert from "@/components/base/alert"
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        user_name: '',
        pass_word: '',
        ifopen: false,
        content: '',
        codeImg: '',
        temcodeToken: '',
        is_login:false,
        code: ''
      }
    },
    mounted() {
      this.codeImgFn();
      /*if(this.easysecret){
        this.$router.push("/");
      }*/
    },
    methods: {
      codeImgFn() {
        this.$http.get('/api/site/captcha/').then((res) => {
          if (res.status === 200) {
            this.codeImg = res.data.src;
            this.temcodeToken = res.data.codeToken;
            // this.mytoast(res.data.msg)

            this.getUserToken(this.temcodeToken)

          }
        }).catch((error) => {
          console.log(error)
        })
      },
      // 封装提示信息函数
      mytoast(msg) {
        this.ifopen = true
        // let instance = Toast(msg);
        this.content = msg
       let timer= setTimeout(() => {
          // instance.close();
          this.ifopen = false
           clearTimeout(timer);
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
      async getuserinfo() {
        let res = await this.$http.get('/api/users/info/');
        if (!res) return
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.USERINFO({
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
        });
        this.getUserRealName(res.data.data.Name);
        this.changeUserMoney(res.data.data.Money);
        this.changeUserName(res.data.data.UserName);
      },
      async loginFn() {
        if (!this.user_name) {
          this.alert('提示', '请输入用户名！')
          return;
        } else if (this.user_name.length < 4) {
          this.alert('提示', '用户名长度最少4位！')
          return;
        } else if (!this.pass_word) {
          this.alert('提示', '请输入密码！')
          return;
        } else if (this.pass_word.length < 6) {
          this.alert('提示', '密码长度最少6位！')
          return;
        }
        let data = {
          // action: 'login',
          username: this.user_name,
          password: this.pass_word,
          code: this.code,
          codeToken: this.codeToken
        }
        //this.$http.defaults.headers.EasySecret = undefined;
        this.is_login=true;
        this.$http({
          method:"post",
          url:'api/user/login',
          data: data,
          headers:{EasySecret:""}
        }).then(async (res) => {
          this.is_login=false;
          if (res.data.code === 0) {
          this.$http.defaults.headers.EasySecret = res.headers.easysecret;
          this.EASYSECRET(res.headers.easysecret);
            this.mytoast("登录成功");
            await this.getuserinfo();
            //this.changeUserName(this.user_name);
            //this.changeUserMoney(res.data.data.money);
            if(this.$route.params.hback){
              this.$router.push({name:this.$route.params.hback,params:this.$route.params.params});
              //this.$router.go(-1);
            }else{
              this.$router.push({path: "/"});
            }
            //this.codeImgFn()
          } else {
            this.is_login=false;
            this.alert('提示', res.data.msg);
            this.codeImgFn()
          }
        }).catch((error) => {
          this.codeImgFn()
          this.alert("提示", "登录失败");
          this.is_login=false;
          console.log('err:' + error)
        })
      },
      ...mapMutations(['changeUserName', 'getUserRealName', 'changeUserMoney', 'getUserToken', "EASYSECRET", "ROOTBOX", "USERINFO"]),
    },
    components: {
      footervue,
      maskLayer
    },
    computed: {
      ...mapState(['codeToken', 'easysecret'])
    }
  }

</script>
<style scoped>
  .login-area {
    height: 495px;
    width: 930px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    background: url("../assets/login-bg.png") no-repeat;
    margin-top: 4%;
  }

  .site-logo {
    width: 50%;
    height: 460px;
    float: left;
  }

  .logo-items {
    width: 100%;
    height: 100%;
  }

  .logo-items embed {
    margin-left: 96px;
    margin-top: 160px;
  }

  .login_tit {
    width: 50%;
    float: left;
    padding: 44px 0 12px 0;
  }

  .login_tit h1 {
    font-size: 20px;
    font-weight: normal;
    display: inline-block;
    padding-left: 45px;
    color: #fff;
    margin:13px 0;
  }

  .code {
    width: 180px !important;
  }

  .code-img {
    position: absolute;
    top: 10px;
    right: 24px;
    width: 70px;
  }

  .login-area .login-form {
    float: left;
    width: 357px;
    padding: 0 35px 0 39px;
  }

  .login-area input {
    width: 300px;
    height: 15px;
    margin: 0 auto;
    padding: 15px 10px 15px 46px;
    border-radius: 4px;
    background: none;
    border: none;
    color: #fff;
    float: left;
  }

  .login-area li {
    padding: 1px 0;
    width: 360px;
    height: 45px;
    margin: 0 auto 8px;
    position: relative;
  }

  .login-area li span,
  .login-area li label {
    position: absolute;
    top: 16px;
    left: 46px;
    line-height: 15px;
    color: #fff;
  }

  .login-area li.codewrap input {
    width: 218px;
    background: none;
  }

  .login-area li span.codeBox {
    float: left;
    cursor: pointer;
    position: static;
    height: 47px;
  }

  .login-area li span {
    color: #fff;
  }

  .login-area li span,
  .login-area li label {
    position: absolute;
    top: 16px;
    left: 46px;
    line-height: 15px;
    color: #fff;
  }

  .codeBox img {
    width: 70px;
    height: 28px;
  }

  .login-area li {
    padding: 1px 0;
    width: 360px;
    height: 45px;
    margin: 0 auto 8px;
    position: relative;
  }

  .loginbtn .btn_login {
    width: 363px;
    height: 50px;
    background: url("../assets/btn_login.png") no-repeat top center;
  }

  .login-area .btn {
    color: #fff;
    width: 360px;
    height: 46px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.33333;
    margin-bottom: 0;
    padding: 10px 0;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    min-width: 80px;
    font-family: Arial;
  }

  .login-area .loginbtn {
    margin: 6px auto 8px auto;
  }

  .loginbtn .btn_register {
    width: 363px;
    height: 30px;
    background: url("../assets/btn_register.png") no-repeat top center;
    margin-top: 2px;
  }

  .login-area .login_others {
    padding: 0;
    text-align: center;
  }

  .login-area li span.separate {
    display: inline-block;
    position: static;
    margin: 0 10px;
    color: #eaeaec;
  }

  .login-area li span,
  .login-area li label {
    position: absolute;
    top: 16px;
    left: 46px;
    line-height: 15px;
    color: #fff;
  }

  .login-area li span.separate {
    display: inline-block;
    position: static;
    margin: 0 10px;
    color: #eaeaec;
  }

  .login-area li .separate_hidden {
    display: none !important;
  }

  .login-area .browser_hidden {
    margin: 25px 0 0 10px;
  }

  .login-area li p {
    float: left;
    color: #000;
    font-size: 14px;
  }

  .login-area .chrome_icon {
    width: 56px;
    height: 28px;
    padding-left: 38px;
    float: left;
    line-height: 28px;
    background: url("../assets/login_browser.png") 0px -1px no-repeat;
  }

  .login-area .firefox_icon {
    width: 28px;
    height: 28px;
    padding-left: 34px;
    float: left;
    line-height: 28px;
    background: url("../assets/login_browser.png") no-repeat 5px -29px;
  }

  p,
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  input:focus {
    outline: none;
    outline: 0;
  }

  input {
    outline: none;
  }

  .login-area li a {
    color: #000;
    text-decoration: none;
  }

  ::-moz-placeholder {
    color: #fff;
  }

  ::-webkit-input-placeholder {
    color: #fff;
  }

  :-ms-input-placeholder {
    color: #fff;
  }

</style>
