<template>
  <div>
    <headervue></headervue>
    <div class="pages-con">
      <div class="registration-c" id="REG-FORM">
        <h1>注册本公司账户</h1>
        <div class="line1"></div>
        <!-- <form method="post" autocomplete="off" data-bind="submit:submit"> -->
        <table border="0" cellspacing="5" cellpadding="5" class="regTab">
          <tbody>
          <tr>
            <td width="160">
              &nbsp;
            </td>
            <td>
              如果您已拥有本公司账户，
              <router-link to="/Login">点击此处登录</router-link>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;用户名：
            </td>
            <td class="w280">
              <input class="inp" type="text" placeholder="请输入用户名" maxlength="12"
                     oninput="value=value.replace(/[\W]/g,'')" v-model="username">
              <!-- <input class="inp" type="text" maxlength="15" v-model="username"> -->
            </td>
            <td>
              <font color="#ce8b00">
                *请输入4-12位数字、字母或数字/字母组合
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;登录密码：
            </td>
            <td>
              <input class="inp" type="password" placeholder="请输入密码" maxlength="11" v-model="password">
            </td>
            <td>
              <font color="#ce8b00">
                *请使用6-11字母、数字及组合
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;确认密码：
            </td>
            <td>
              <input class="inp" type="password" placeholder="请输入确认密码" v-model="confirmPassword">
            </td>
            <td>
              <font color="#ce8b00">
                *确认密码不能为空
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;真实姓名：
            </td>
            <td>
              <input class="inp" type="text" placeholder="请输入真实姓名" @input="realTis" v-model="realname" ref="realname">
            </td>
            <td>
              <font color="#ce8b00">
                *必须与银行帐号姓名相同，否则不能出款
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;性别：
            </td>
            <td>
              <label for="male" class="male">
                <input id='male' class="" type="radio" name='' :checked="sex==0" @click='selectSex(0)'> 男
              </label>
              <label for="female" class="female">
                <input class="" id='female' type="radio" :checked="sex==1" @click='selectSex(1)'> 女
              </label>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;手机号：
            </td>
            <td>
              <input class="inp" type="text" placeholder="请输入手机号码" onkeyup="value=value.replace(/[^1234567890-]+/g,'')"
                     v-model="phonenum" ref="phonenum" maxlength="11">
            </td>
            <td>
              <font color="#ce8b00">
                *请输入有效的手机号码
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;QQ：
            </td>
            <td>
              <input class="inp" type="text" placeholder="请输入有效的QQ号码" onkeyup="this.value=this.value.replace(/\D/g,'')"
                     onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="12" size="14" v-model="qq"
                     ref="phonenum">
            </td>
            <td>
              <font color="#ce8b00">
                *请输入有效的QQ号码
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;E-mail：
            </td>
            <td>
              <input class="inp" type="text" placeholder="请输入有效的电子邮箱" v-model="email" ref="phonenum">
            </td>
            <td>
              <font color="#ce8b00">
                *请输入有效的电子邮箱
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;<span style="color:red;">*</span>&nbsp;取款密码：
            </td>
            <td>
              <input class="inp" type="password" oninput='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
                     placeholder="请输入4~6位取款密码" maxlength="6" v-model="bankCode">
            </td>
            <td>
              <font color="#ce8b00">
                *提款认证必须，请务必记住！
              </font>
            </td>
          </tr>
          <tr>
            <td class="right">
              &nbsp;
            </td>
            <td colspan="2">
              <input class="agree-check" type="checkbox" name="agreement" ref="agreementCheck" id="agreement"
                     checked="checked" @click="checkSelect">
              <label>
                同意并愿意遵守本公司<a href="javascript:void(0);" @click="(alert('提示','1、只接受合法博彩年龄的客户申请。同时我们保留要求客户提供其年龄证明的权利。</br>\n'+
'2、在进行注册时所提供的全部信息必须在各个方面都是准确和完整的。</br>'+
'3、在开户后进行一次有效存款，恭喜您成为有效会员！</br>\n'+
'4、存款免手续费，开户最低入款金额10人民币，最高单次入款金额500000人民币。</br>\n'+
'5、成为有效会员后，客户有责任以在线客服、电子邮件、在网站上联系我们，随时向本公司提供最新的个人资料。</br>\n'+
'6、是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在注册、下注，为会员个人行为，不负责、承担任何相关责任。</br>\n'+
'7、无论是个人或是团体，如有任何威胁、滥用优惠的行为，保留杈利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。</br>\n'+
'8、所有的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。</br>\n'+
'9、客户一经注册开户，将被视为接受所有颁布在网站上的规则与条例。',null,{textAlign:'left',fontSize:'14px',width:'600px'}))" class="wns-kaihu">用户协议</a>
                <br/><span style="color:red;margin-left:17px;" v-show="!ifcheck">*请阅读协议</span>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              &nbsp;
            </td>
            <td colspan="2">
              <a href="javascript:void(0);" class="regi-btn" style="position:relative">
                <span>{{is_reg?"正在注册...":"立即注册"}}</span>
                <input type="submit" @click="registerSubmit"
                       style="position:absolute;left:0;top:0;width:170px;height:36px;filter:alpha(opacity=0);opacity:0;">
              </a>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- </form> -->
      </div>
      <!-- 遮罩 -->
      <!--<div tabindex="0" v-if="isShowAgreement"
           style="opacity: 0.7; background: rgb(0, 0, 0); position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; overflow: hidden; user-select: none; z-index: 1025;"
           class="ui-popup-backdrop"></div>
      &lt;!&ndash; 弹出框 &ndash;&gt;
      <div tabindex="-1" v-if="isShowAgreement"
           style="position: fixed; outline: 0px; left: 90px; top: 223px; z-index: 1025;" aria-labelledby="title:alert"
           aria-describedby="content:alert" class="ui-popup ui-popup-modal ui-popup-show ui-popup-focus"
           role="alertdialog">
        <div i="dialog" class="ui-dialog dialog-custom">
          <div class="ui-dialog-arrow-a"></div>
          <div class="ui-dialog-arrow-b"></div>
          <table class="ui-dialog-grid">
            <tbody>
            <tr>
              <td i="header" class="ui-dialog-header">
                <button i="close" class="ui-dialog-close" title="取消" @click="hideAgreement">×</button>
                <div i="title" class="ui-dialog-title" id="title:alert">用户协议</div>
              </td>
            </tr>
            <tr>
              <td i="body" class="ui-dialog-body">
                <div i="content" class="ui-dialog-content" id="content:alert">
                  <ul style="text-align:left;">
                    <p class="agreement-content">
                    <li>1、只接受合法博彩年龄的客户申请。同时我们保留要求客户提供其年龄证明的权利。</li>
                    <li>2、在进行注册时所提供的全部信息必须在各个方面都是准确和完整的。</li>
                    <li>3、在开户后进行一次有效存款，恭喜您成为有效会员！</li>
                    <li>4、存款免手续费，开户最低入款金额10人民币，最高单次入款金额500000人民币。</li>
                    <li>5、成为有效会员后，客户有责任以在线客服、电子邮件、在网站上联系我们，随时向本公司提供最新的个人资料。</li>
                    <li>6、是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在注册、下注，为会员个人行为，不负责、承担任何相关责任。</li>
                    <li>7、无论是个人或是团体，如有任何威胁、滥用优惠的行为，保留杈利取消、收回由优惠产生的红利，并保留权利追讨最高50%手续费。</li>
                    <li>8、所有的优惠是特别为玩家而设，在玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，保留权利要求客户向我们提供充足有效的文件， 并以各种方式辨别客户是否符合资格享有我们的任何优惠。</li>
                    <li>9、客户一经注册开户，将被视为接受所有颁布在网站上的规则与条例。</li>
                  </ul>
                  &lt;!&ndash; <li style="color:#FF0000;padding-bottom:20px">本公司是使用利鑫科技所提供的在线娱乐软件，若发现您在同系统的娱乐场上开设多个会员账户，并进行套利下注；本公司有权取消您的会员账号并将所有下注营利取消！</p> &ndash;&gt;
                </div>
              </td>
            </tr>
            <tr>
              <td i="footer" class="ui-dialog-footer">
                <div i="statusbar" class="ui-dialog-statusbar" style="display: none;"></div>
                <div i="button" class="ui-dialog-button">
                  <button type="button" i-id="ok" autofocus="" @click="hideAgreement" class="ui-dialog-autofocus">确定
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>-->
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
    <footervue></footervue>
  </div>
</template>
<script>
  import headervue from '@/components/Header'
  import footervue from '@/components/Footer'
  import maskLayer from '@/components/base/mask-layer'
  import {mapState, mapMutations} from 'vuex'
  import alert from "@/components/base/alert"
  export default {
    data() {
      return {
        isShowAgreement: false,
        ifopen: false,
        content: '',
        username: '',
        password: '',
        confirmPassword: '',
        realname: '',
        email: '',
        phonenum: null,
        qq: '',
        bankCode: '',
        captcha: '',
        value: [],
        ifcheck: true,
        sex: 0,
        is_reg:false
      }
    },
    methods: {
      ...mapMutations(['changeUserName', 'changeUserMoney','ROOTBOX',"EASYSECRET","AGENT_ID"]),
      selectSex(index) {
        this.sex = index
        // alert(this.sex)
      },
      check(q, auth) {//异步验证
        return new Promise((resolve, reject) => {
          this.$http.post('/api/user/check', {q: q, auth: auth}).then(res => {
            if (res.status === 200 && res.data.code === 0) {
              resolve(res);
            } else {
              reject(res);
            }
          }).catch(err => {
            reject(err);
          });
        }).catch(err => {
          if(err.data){
            this.alert('提示',err.data.msg);
          }else{
            this.alert("提示","验证失败!");
          }
        });
      },
      showAgreement() {
        this.isShowAgreement = true
      },
      hideAgreement() {
        this.isShowAgreement = false
      },

      // 限制真实姓名输入框只能输入中文
      realTis() {
        this.realname = this.realname.replace(/[^\u4e00-\u9fa5]+$/, '')
        return this.realname
      },
      // 封装提示信息函数
      mytoast(msg) {
        this.ifopen = !this.ifopen
        // let instance = Toast(msg);
        this.content = msg
        setTimeout(() => {
          // instance.close();
          this.ifopen = !this.ifopen
          // clearTimeout();
        }, 1500)
      },
      alert(tit,msg,fn,msgStyle){
        let _this=this;
        this.ROOTBOX({
          open:true,
          compt:alert,
          props:{
            tit:tit,
            msg:msg,
            msgstyle:msgStyle
          },
          handles:{
            confirm(){
              if(fn)fn();
              _this.ROOTBOX({
                open:false
              })
            },
            close(){
              _this.ROOTBOX({
                open:false
              });
            }
          }
        });
      },
      // 提交注册
      async registerSubmit() {
        if (!this.username) {
          this.alert('提示','请输入用户名！');
        } else if (this.username.length < 4) {
          this.alert('提示','用户名长度最少4位！')
        } else if (!this.password) {
          this.alert('提示','请输入密码！')
        } else if (this.password.length < 6) {
          this.alert('提示','密码长度最少6位！')
        } else if (!this.confirmPassword) {
          this.alert('提示','请输入确认密码！')
        } else if (this.confirmPassword.length < 6) {
          this.alert('提示','确认密码长度最少6位！')
        } else if (this.password !== this.confirmPassword) {
          this.alert('提示','密码与确认密码不一致！')
        } else if (!this.realname) {
          this.alert('提示','请输入真实姓名！')
        } else if (/[^\u4e00-\u9fa5]+$/.test(this.realname)) {
          this.alert('提示','真实姓名只能为中文！')
        } else if (!this.phonenum) {
          this.alert('提示','请输入手机号码！')
        } else if (!this.qq) {
          this.alert('提示','请输入有效的QQ号码')
        } else if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.email)) {
          this.alert('提示','请输入有效的电子邮箱')
        } else if (this.phonenum.length < 11) {
          this.alert('提示','请输入11位数手机号码！')
        } else if (!this.bankCode) {
          this.alert('提示','请输入取款密码！')
        } else if (this.bankCode.length < 4) {
          this.alert('提示','取款密码最少4位数！')
        } else if (!this.ifcheck) {
          this.alert('提示','请勾选开户协议！')
        } else {
          this.is_reg=true;
          let res = await this.check(this.username, "username");
          if (!res) {this.is_reg=false;return;}
          res = await  this.check(this.phonenum, "tel");
          if (!res)  {this.is_reg=false;return;}
          res = await  this.check(this.realname, "realname");
          if (!res)  {this.is_reg=false;return;}
          res = await  this.check(this.email, "email");
          if (!res)  {this.is_reg=false;return;}
          let data = {
            username: this.username,
            password: this.password,
            real_name: this.realname,
            repassword: this.confirmPassword,
            tel: this.phonenum,
            MultiPwd: this.bankCode,
            qq: this.qq,
            sex: this.sex,
            email: this.email
          }
          if(this.agent_id==-1){//还没写入agent_id
            res = await this.$http({
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
          data.agent_id=this.agent_id;
          this.$http.post('/api/user/regster', data).then(res => {
            this.$http.defaults.headers.EasySecret=res.headers.easysecret;
            this.EASYSECRET(res.headers.easysecret);
            this.mytoast(res.data.msg);
            if(res.data.code === 0) {

              this.changeUserName(this.username)
              this.changeUserMoney('0.00')
              // this.userIsLogin(true)
              this.is_reg=false;
              setTimeout(() => {
                this.$router.push('/')
              }, 1500)
            }else{
              this.alert("提示",res.data.msg);
            }
          })
            .catch(error => {
              this.is_reg=false;
              console.log(error)
            })
        }
      },
      // 点击本人同意
      sureAgreement() {
        this.ifcheck = !this.ifcheck
      },
      // 点击勾选框
      checkSelect() {
        if (this.$refs.agreementCheck.checked) {
          this.ifcheck = true
        } else {
          this.ifcheck = false
        }
      }
    },
    components: {
      ...mapState(['agent_id']),
      headervue,
      footervue,
      maskLayer
    }
  }

</script>
<style scoped>
  .male,
  .female {
    margin-right: 20px;
  }

  .registration-c {
    width: 830px;
    min-height: 228px;
    margin: 60px auto 146px;
    padding-bottom: 50px;
    background: url("../assets/bg_07.png") repeat;
  }

  .registration-c h1 {
    margin: 0 5px;
    font-size: 24px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-weight: normal;
    color: #fff;
  }

  .registration-c table {
    position: relative;
    width: 100%;
    margin: 30px auto 0;
  }

  .registration-c td,
  .registration-c th {
    padding: 8px 10px;
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
    text-align: left;
  }

  .right {
    text-align: right !important;
  }

  .registration-c a {
    color: #ce8b00;
  }

  a {
    color: #555;
    text-decoration: none !important;
    outline: none !important;
  }

  .registration-c .inp {
    color: #666;
    border: 1px solid #d6d6d6;
    padding-left: 5px;
    width: 265px;
    line-height: 36px;
    height: 36px;
    border-radius: 2px;
  }

  .registration-c .regi-btn1 {
    padding: 5px 10px;
  }

  a.regi-btn,
  .btn1 {
    display: inline-block;
    padding: 10px 61px;
    border-radius: 5px;
    zoom: 1;
    color: #fff;
    background: #c42133;
    background: -moz-linear-gradient(top, #c42133 1%, #db5967 9%, #af1223 100%);
    background: -webkit-gradient(linear,
    left top,
    left bottom,
    color-stop(1%, #c42133),
    color-stop(9%, #db5967),
    color-stop(100%, #af1223));
    background: -webkit-linear-gradient(top,
    #c42133 1%,
    #c42133 9%,
    #c42133 100%);
    background: -o-linear-gradient(top, #c42133 1%, #db5967 9%, #af1223 100%);
    background: -ms-linear-gradient(top, #c42133 1%, #db5967 9%, #af1223 100%);
    background: linear-gradient(to bottom, #c42133 1%, #db5967 9%, #af1223 100%);
  }

  .registration-c .agree-check {
    vertical-align: -3px;
  }

  .parcel-wrap {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
  }

  .parcel-box-wrap {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .parcel-box {
    height: 490px;
    width: 402px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -201px;
    margin-top: -245px;
  }

  .parcel-open-controller,
  .parcel-result-win-controller,
  .parcel-result-fail-controller {
    height: 100%;
    width: 100%;
  }

  .dialog-custom .ui-dialog-title {
    color: #fff;
  }

  .ui-popup-modal .ui-dialog {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, 0.3);
  }

  .ui-dialog-arrow-a,
  .ui-dialog-arrow-b {
    position: absolute;
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
    _color: #ff3fff;
    _filter: chroma(color=#FF3FFF);
    border: 8px dashed transparent;
  }

  .ui-popup .ui-dialog-arrow-b {
    top: -16px !important;
  }

  .ui-dialog-grid {
    width: auto;
    margin: 0;
    border: 0 none;
    border-collapse: collapse;
    border-spacing: 0;
    background: #fff;
  }

  .dialog-custom .ui-dialog-header {
    background: #c32b39;
    background-image: -webkit-gradient(linear,
    left top,
    left bottom,
    from(#d22f3e),
    to(#a7232f));
    background-image: -moz-linear-gradient(top, #d22f3e, #a7232f);
    background-image: -o-linear-gradient(top, #d22f3e, #a7232f);
    background-image: -webkit-linear-gradient(top, #d22f3e, #a7232f);
    background-image: linear-gradient(to bottom, #d22f3e, #a7232f);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d22f3e', endColorstr='#a7232f')";
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d22f3e",
    endColorstr="#a7232f");
    zoom: 1;
  }

  .ui-dialog-header {
    white-space: nowrap;
    border-bottom: 1px solid #e5e5e5;
  }

  .ui-dialog-header,
  .ui-dialog-body,
  .ui-dialog-footer {
    padding: 0;
    border: 0 none;
    text-align: left;
    background: transparent;
  }

  .dialog-custom .ui-dialog-close {
    color: #fff;
    opacity: 1;
    /* background: url(/Content/Default/officialGames/images/popup-close.png?87d18ef591) no-repeat center; */
  }

  .ui-dialog-close {
    position: relative;
    _position: absolute;
    float: right;
    top: 13px;
    right: 13px;
    _height: 26px;
    padding: 0 4px;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.2;
    filter: alpha(opacity=20);
    cursor: pointer;
    background: transparent;
    _background: #fff;
    border: 0;
    -webkit-appearance: none;
  }

  .dialog-custom .ui-dialog-title {
    color: #fff;
  }

  .ui-dialog-title {
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

  .dialog-custom .ui-dialog-body {
    padding: 20px;
    text-align: center;
    font-size: 14px;
    min-width: 170px;
  }

  .ui-dialog-content {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
  }

  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ui-dialog-footer {
    padding: 0 20px 20px 20px;
  }

  .dialog-custom .ui-dialog-button {
    float: none;
    text-align: center;
  }

  .ui-dialog-button {
    float: right;
    white-space: nowrap;
  }

  .dialog-custom .ui-dialog-footer button.ui-dialog-autofocus {
    color: #ffffff;
    background-color: #a7232f;
    border-color: #d22f3e;
  }

  .ui-dialog-footer button.ui-dialog-autofocus {
    color: #ffffff;
    background-color: #428bca;
    border-color: #357ebd;
  }

  .ui-dialog-footer button {
    color: #333333;
    background-color: #ffffff;
    border-color: #cccccc;
  }

  .ui-dialog-footer button {
    width: auto;
    overflow: visible;
    display: inline-block;
    padding: 6px 12px;
    _margin-left: 5px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .w280 {
    width: 280px;
  }

</style>
