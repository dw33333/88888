<template>
  <div style="padding-top:26px;">
    <div class="login-area">
      <div class="login_area_box">
        <div class="mainloginbox" id="LOGIN-FORM">
          <div class="site-logo">
            <div class="logo-items">
              <embed width="340" height="150" class="logo_none" autostart="true" loop="true" src="../assets/logo.swf" quality="high" wmode="Transparent" type="application/x-shockwave-flash" param="transparent" id="swfNav">
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
                <input type="text" class="code" v-model="code"><img @click='codeImgFn' class="code-img" :src="codeImg" alt="">
              </li>
              <li class="loginbtn" @click="loginFn">
                <input type="submit" title="登录" class="btn btn_login" value="">
              </li>
              <li class="loginbtn">
                <router-link title="免费开户" class="btn btn_register" to="/register"></router-link>
              </li>
              <li class="login_others">
                <a href="javascript:void(0)" id="forgetBtn" class="login_forgetpassword" style="line-height:40px;color:#eaeaec;display:inline-block;">忘记密码?</a>
                <span class="separate">|</span>
                <!--<a href="javascript:;" class="authentication" style="display:inline-block;">域名验证</a>
                                <span class="separate">|</span> -->
                <a href="https://tb.53kf.com/code/client/10172705/1" target="_blank" class="online_service" style="text-align:right;margin-top: 12px;color:#eaeaec;text-decoration:underline;font-size:14px;text-decoration:none;display:inline-block;">在线客服</a>
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
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user_name: '',
      pass_word: '',
      ifopen: false,
      content: '',
      codeImg:'',
      temcodeToken:'',
      code:''
    }
  },
  mounted(){
    this.codeImgFn()
  },
  methods: {
    codeImgFn(){
      this.$http.get('http://192.167.9.166/site/captcha').then((res) => {
        
          if (res.status === 200) {
            console.log(res.data.codeToken)

              this.codeImg=res.data.src
              this.temcodeToken=res.data.codeToken
              // this.mytoast(res.data.msg)
            
             this.getUserToken(this.temcodeToken)

          }
        }).catch((error) => {
          console.log(error)
        })
    },
    // 封装提示信息函数
    mytoast (msg) {
      this.ifopen = true
      // let instance = Toast(msg);
      this.content = msg
      setTimeout(() => {
        // instance.close();
        this.ifopen = false
        // clearTimeout();
      }, 1500)
    },

    loginFn () {
      let data = {
        // action: 'login',
        username: this.user_name,
        password: this.pass_word,
        code:this.code,
        codeToken:this.codeToken
      }
      
      this.$http.post('http://192.167.9.112/user/login', data).then((res) => {
        
        // console.log("登录-----:"+JSON.stringify(res.data.data.money))
          this.mytoast(res.data.msg)
        if (res.status === 200 && res.data.code === 0) {
        console.log("登录-----:"+JSON.stringify(res))

          // this.usermoney = res.data.data.user_money
          // sessionStorage.setItem('username', this.username)
          // sessionStorage.setItem('isShow', this.username)
          
          // this.$store.dispatch('UserLogin', this.username)
          // this.$store.dispatch('SET_userMoney', this.mymoney)

          this.changeUserName(this.user_name)
          this.changeUserMoney(res.data.data.money)

           setTimeout(() => {      
              this.$router.push('/')
          }, 1500)


          this.codeImgFn()
        }
      }).catch((error) => {
        // this.mytoast(res.dada.msg)
        this.codeImgFn()
        console.log('err:'+error)
      })
    },
    ...mapMutations(['changeUserName','changeUserMoney','getUserToken']),
  },
  components: {
    footervue,
    maskLayer
  },
  computed: {
    ...mapState(['codeToken'])
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
}
.code{
  width: 180px!important;
}
.code-img{
  position: absolute;
  top:10px;
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
