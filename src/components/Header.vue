<template>
  <div>
    <div class="head">
      <div class="top">
        <div class="logo">
          <embed src="../../static/img/logo (1).swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="375" height="110" wmode="transparent">
        </div>
        <div class="fr">
          <div class="divSetHome">
            <ul class="ul1" style="margin-top:5px;">
					<li><a href="javascript:;" @click="paly_try" target="_blank" v-if="true" id="textGlitter1" class="js-article-color">真人试玩</a></li>
					<li>|</li>
					<li><router-link to="/fjc" target="_blank">DNS劫持教程</router-link></li>
					<li>|</li>
					<li><a @click="alert('提示','抱歉,您的浏览器无法完成此操作 <br>请使用Ctrl+D进行添加')" href="javascript:void(0)">加入收藏</a></li>
					<li>|</li>
					<li><a href="javascript:void(0)" @click="alert('提示','抱歉,您的浏览器不支持,请按照下面步骤操作: <br> 1.打开浏览器设置<br>2.点击设置网页<br>3.输入:http://easy.sibo9999.com/点击确定')">设为首页</a></li>
					<li>|</li>
					<li>|</li>
					<li><a>选择语言</a></li>
					<li>
						<select id="selYY">
							<option>中文</option>
						</select>
					</li>
				</ul>
          </div>
          <div style="float:right;">
            <div class="divLogin" v-if="!easysecret">
              <ul class="ulLogin" >
                <li class="liUid">
                  <input type="text" v-model="user_name" tabindex="1" style="width: 114px;color:#fff;" name="username" id="username" class="login-input" maxlength="16" size="16" onfocus="if(this.value=='账号')this.value=''" onblur="if(this.value =='') this.value ='账号'">
                </li>
                <li class="liPwd">
                  <input name="passwd" v-model="pass_word" tabindex="2" id="passwd" style="width: 114px;" type="password" class="login-input" size="16" maxlength="16"  onfocus="if(this.value=='密码123')this.value=''" onblur="if(this.value =='') this.value ='密码123'" value="密码123">
                </li>
                <li class="liChe">
                  <div class="yanzheng">
                    <input type="text" class="login-input" tabindex="3" v-model="code" style="float:left;width:70px;" @focus="(codeImgFn())" >
                    <img :src="codeImg" @click='codeImgFn' class="code" alt="" title="点击更换" style="float:left;margin-top:5px;">
                  </div>
                </li>
                <li style="height:30px;">
                  <ul class="ul2">
                    <li style="margin-top:0px; height:30px;" @click="loginSubmit">
                      <a> 
                        <img class="login-submit inputsubmit" src="../../static/img/login4.png">
                      </a> 
                    </li>
                    <li><a href="javascript:;" @click="Go_forget_pwd();" class="login-forget-pwd inputsubmit" style="color:#ffefb0;">忘记密码</a></li>
                  </ul>
                </li>
              </ul>
              <div class="divReg inputsubmit">
              <ul>
                <li><a target="mem_index" href="javascript:void(0);" @click="regis"><img src="../../static/img/login5.png"></a></li>
              </ul>
            </div>  
            </div>
              <div v-else>
                <div class="loginedAcc">
                  <span style="float: left; padding-left: 23px;">账号&nbsp;:</span>
                  <span style="float: left; width: 90px;text-align: left;">{{userinfo.username}}</span>
                <ul class="floatL" style="margin-left: 15px; float: left;">
                  <li><span>账户余额：{{userinfo.money}}<strong class="logged-data" id="user_money"></strong></span> </li>
                </ul>
                </div>
                <div class="SU-Menual" id="SU-Menual">
                  <ul class="login-Menual">
                    <li><a href="javascript:;" @click='enterUserCenter();'>会员中心</a>  &nbsp;|&nbsp;</li>
                    <li> <router-link to="/moneymanagemen"> 额度转换</router-link> &nbsp;|&nbsp;</li>
                    <li> <router-link to="/recharge">线上存款</router-link>  &nbsp;|&nbsp; </li>
                    <li> <router-link to="/withdrawal"> 线上取款</router-link> &nbsp;|&nbsp; </li>
                    <!-- <li><a id="su-msg" href="javascript:void(0);" onclick="javascript:menu_url(9);return false" title="未读讯息">未读讯息<span>(</span><span id="msg_num">0</span><span>)</span> </a> </li> -->
                    <li><a id="su-account" href="javascript:void(0);" @click="daili" title="代理申请" class="nLink"> 代理申请 </a> &nbsp;|&nbsp; </li>
                    <li><a href="javascript:void(0);" @click="loginout()">退出</a>&nbsp;</li>
                  </ul>
                </div>   
              </div>
          </div>
        </div>
      </div>
      <div class="topMenu">
        <ul class="topMenu">
          <li><router-link to="/">首页</router-link></li>
          <li v-if="!easysecret"><a href="javascript:;" @click="alert('提示','请先登录！！！')">彩票游戏</a></li>
          <li v-else><router-link href="javascript:;" to="/lottery/Tjssc">彩票游戏</router-link></li>
          <li><a target="mem_index" href="javascript:void(2);" @click="alert('提示','暂未开放！尽请期待！')">体育赛事</a></li>
          <li><router-link to="/live">真人娱乐</router-link></li>
          <li><router-link to="/Games">电子游艺</router-link></li>
          <li v-if="!easysecret"><a target="mem_index" href="javascript:void(0);" @click="alert('提示','请先登录！！！')">六合彩</a></li>
          <li v-else><router-link to="/lottery/six">六合彩</router-link></li>
          <li><router-link to="/Activity">优惠活动</router-link></li> 
          <li><a href="http://m.hq.sibo9999.com" target="_blank">手机下注</a></li>
          <li><a target="mem_index" class="js-article-color" href="javascript:void(0);" @click="trial" id="freePlay">免费试玩</a></li>
          <li><a :href="this.sitesInfos.SiteService" target="_blank">在线客服</a></li>
        </ul>
      </div>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>
  import maskLayer from './base/mask-layer'
  import {mapState, mapMutations} from 'vuex'
  import alert from "@/components/base/alert"

  export default {
    name: 'Header',
    props:["inlottery"],
    data() {
      return {
        backPage: false,
        nowTime: '',
        user_name: '账号',
        pass_word: '密码123',
        content: '',
        ifopen: false,
        codeImg: '',
        temcodeToken: '',
        code: '',
        showMenu: false,
        headersArry: [],
        menuVideo: false,
        menugame: false,
        Msg: '',
        siteInfo: '',
        menugame: false,
        is_login: false
      }
    },
    updated () {
     
    },
    mounted() {
      this.codeImgFn();
      this.clockon();
      if(!cwvue.toggleColor1){
        cwvue.toggleColor1=new toggleColor("textGlitter1", ['#00FF00', '#FFFF00'], 600);
      }
      if(!cwvue.toggleColor2)
      cwvue.toggleColor2=new toggleColor("freePlay", ['#f7ee18', '#f32d20'], 600);
    },
    computed: {
      ...mapState(['money', 'username', 'codeToken', 'headerArry', 'easysecret', 'sitesInfos','userinfo','agent_id'])
    },
    created() {
      this.getArry();
      this.Msg = this.sitesInfos.Msg;
    },
    methods: {
      paly_try () {
      this.trial()
        this.alert('提示','恭喜！您获得2000元试玩金额！ 注意：试玩金额仅限于体验游戏，不可提款');
      },
      daili () {
        this.$router.push('/daili');
      },
      regis () {
        this.$router.push('/register');
      },
      Go_forget_pwd () {
        this.alert("提示", '请联系在线客服寻求帮助!');
        return;
      },
      GoMg() {
        this.$router.push('/Games')
      },
      backPageclick() {
        this.$router.push('/')
      },
      async trial() {
        if (this.easysecret) {
          return
        };
        let res = await this.$http({
          method: "post",
          url: '/api/user/regsterVirtual',
          data:{agent_id:this.agent_id},
          headers: {EasySecret: ""}
        });
        this.is_login = false;
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.msg);
          return;
        }
        this.$http.defaults.headers.EasySecret = res.headers.easysecret;
        this.EASYSECRET(res.headers.easysecret);
        this.mytoast("登录成功");
        await this.getuserinfo(res.data.virtual == 1 ? 1 : undefined);
      },
      goVideo() {
        this.$router.push('/live1');
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
      getArry() {
        this.$http.get('/api/lottery/basic/LotteryGroup/').then((res) => {
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
        this.$http.get('/api/site/captcha/').then((res) => {
          if(!res){return;}
          if (res.status === 200) {
            this.codeImg = res.data.src
            this.temcodeToken = res.data.codeToken
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
              if (fn) fn();
            },
            close() {
              
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      enterUserCenter() {
        if(this.userinfo && this.userinfo.virtual ==1){
          this.$router.push('/bet_record');
        }else{
          this.$router.push('/recharge');
        }
      },
      async getuserinfo(virtual) {
        let res = await this.$http.get('/api/users/info/');
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        let userinfo = {
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
        if (virtual) userinfo.virtual = virtual;
        this.USERINFO(userinfo);
        this.getUserRealName(res.data.data.Name);
        this.changeUserMoney(res.data.data.Money);
        this.changeUserName(res.data.data.UserName);
      },
      // 登录提交
      loginSubmit() {
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
          this.is_login = true;
          this.$http({
            method: "post",
            url: '/api/user/login',
            data: data,
            headers: {EasySecret: ""}
          }).then(async (res) => {
            if(!res)return;
            this.is_login = false;
            if (res.data.code === 0) {
              this.$http.defaults.headers.EasySecret = res.headers.easysecret;
              this.EASYSECRET(res.headers.easysecret);
              this.mytoast(res.data.msg);
              await this.getuserinfo();
            } else {
              this.alert("提示", res.data.msg);
              this.is_login=false;
            }
          }).catch((error) => {
            this.is_login = false;
            console.log(error)
          })
        }
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
        sessionStorage.clear();
        this.$http.defaults.headers.EasySecret = undefined;
        this.$router.push("/");
      },
      ...mapMutations(['changeUserName', 'getUserRealName', 'changeUserMoney', 'getUserToken', 'userLoginOut', "EASYSECRET", "ROOTBOX", "USERINFO", 'GETDATA']),
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
a{
  font-size: 12px;
  text-decoration: none;
}
  /* 平台公告 */
  .head {
    width: 100%;
    height: 151px;
    background-image: url('../../static/img/topBg.jpg');
}
.top {
    width: 1001px;
    margin: 0px auto;
    background-image: url('../../static/img/yiji.png');
    background-repeat: no-repeat;
    background-position: 372px 32px;
    height: 117px;
}
.logo {
    float: left;
    height: 117px;
}
.fr {
    float: right;
}
.divSetHome {
    height: 30px;
}
.divLogin {
    float: left;
}
.ulLogin {
    width: 294px;
    float: left;
}
.ulLogin li {
    float: left;
    margin-right: 5px;
    margin-top: 5px;
}
.liUid {
    width: 142px;
    height: 31px;
    background-image: url('../../static/img/login1.png');
}
.liPwd {
    width: 142px;
    height: 31px;
    background-image: url('../../static/img/login2.png');
}
.liChe {
    width: 142px;
    height: 31px;
    background-image: url('../../static/img/login3.png');
}
.ul1 {
    float: right;
}
.ul1 li {
    float: left;
    color: #be7660;
    margin-left: 5px;
}
.ul1 li a{
  color: #be7660;
  text-decoration: none;
  font-size: 12px;
}
.login-input{
  border: none;
  outline:none;
  background-color:transparent;
  padding:0;
  margin: 8px 0px 0px 8px;
  color: #fff;
}
.ul2 li{
  float: left;
  line-height: 31px;
  cursor: pointer;
}
.divReg{
  float: left;
  margin-top: 5px;
}
.topMenu {
    width: 1001px;
    margin: 0px auto;
}
.topMenu li {
    float: left;
    height: 34px;
}
.topMenu li a {
    color: #ffefb0;
    font-size: 15px;
    font-family: "微软雅黑";
    color: #ffefb0;
    line-height: 33px;
    height: 33px;
    display: block;
    margin: 0px 21px;
}
.topMenu li a:hover {
    color: #e80000;
    background-image: url('../../static/img/menuLine.jpg');
    background-repeat: repeat-x;
    background-position: 0px 31px;
}
.loginedAcc {
    color: #fff;
    font-size: 12px;
    margin-top: 0px;
    float: right;
    margin-right: 0px;
    width: 362px;
    height: 28px;
    line-height: 28px;
}
#SU-Menual {
    float: left;
    font-size: 12px;
    margin-top: 5px;
    height: 40px;
    padding-left: 12px;
    clear: both;
}
#SU-Menual ul li {
    color: #fffcb7;
    float: left;
    height: 18px;
    padding-right: 3px;
    white-space: nowrap;
}
#SU-Menual ul li a {
    text-decoration: none;
    color: #ffefb0;
}
#SU-Menual ul li a:hover {
    color: #ff3;
}
</style>
