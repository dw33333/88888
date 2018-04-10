<template>
  <div class="pages-con">
    <div class="registration-c" id="REG-FORM">
      <h1>注册本公司账户</h1>
      <div class="line1"></div>
      <form action="/Home/Register" method="post" autocomplete="off" data-bind="submit:submit">
        <table border="0" cellspacing="5" cellpadding="5" class="regTab">
          <tbody>
            <tr>
              <td width="160">
                &nbsp;
              </td>
              <td>
                如果您已拥有本公司账户，<a href="/Login">点击此处登录</a>
              </td>
            </tr>
            <tr>
              <td class="right">
                &nbsp;<span style="color:red;">*</span>&nbsp;登录账号：
              </td>
              <td>
                <input class="inp" type="text" data-bind="textinput:fields.account" maxlength="15" needed="">
              </td>
              <td>
                <a href="javascript:;" data-bind="click:generateAccount" class="regi-btn regi-btn1">点击生成账号</a>&nbsp;&nbsp;
                <font color="#ce8b00">
                  *账号规则：账号只能是数字和字母，长度为3-15位
                </font>
              </td>
            </tr>
            <tr>
              <td class="right">
                &nbsp;<span style="color:red;">*</span>&nbsp;登录密码：
              </td>
              <td>
                <input class="inp" type="password" data-bind="textinput:fields.password" maxlength="18" needed="">
              </td>
              <td>
                <font color="#ce8b00">
                  *密码规则：密码由6-13个数字或字母组成
                </font>
              </td>
            </tr>
            <tr>
              <td class="right">
                &nbsp;<span style="color:red;">*</span>&nbsp;确认密码：
              </td>
              <td>
                <input class="inp" type="password" data-bind="textinput:fields.repassword" maxlength="18" needed="">
              </td>
              <td>
                <font color="#ce8b00">
                </font>
              </td>
            </tr>
            <tr>
              <td class="right">
                &nbsp;
              </td>
              <td colspan="2">
                <input class="agree-check" type="checkbox" data-bind="checked:agree">
                <label>
                  同意并愿意遵守本公司<a href="javascript:void(0);" @click="showAgreement" class="wns-kaihu">用户协议</a>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              <td colspan="2">
                <a href="javascript:void(0);" class="regi-btn" style="position:relative"><span data-bind="text:isSubmitting()?'正在注册中...':'立即注册'">立即注册</span>
                                <input type="submit" value=" " style="position:absolute;left:0;top:0;width:170px;height:36px;filter:alpha(opacity=0);opacity:0;">
                            </a>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    <!-- 遮罩 -->
    <div tabindex="0" v-if="isShowAgreement" style="opacity: 0.7; background: rgb(0, 0, 0); position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; overflow: hidden; user-select: none; z-index: 1025;" class="ui-popup-backdrop"></div>
    <!-- 弹出框 -->
    <div tabindex="-1" v-if="isShowAgreement" style="position: fixed; outline: 0px; left: 90px; top: 223px; z-index: 1025;" aria-labelledby="title:alert" aria-describedby="content:alert" class="ui-popup ui-popup-modal ui-popup-show ui-popup-focus" role="alertdialog">
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
                    <li>1、在开户后进行一次有效存款，恭喜您成为本公司有效会员！ </li>
                    <li>2、存款免手续费，开户最低入款金额100人民币。</li>
                    <li>3、本公司严禁会员有重复申请账号行为，每位玩家、每一住址 、每一电子邮箱、每一电话号码、相同支付卡/信用卡号码，及共享计算机环境(例如网吧、其他公共用计算机等)只能拥有一个帐户数据。</li>
                    <li>4、本公司是提供互联网投注服务的机构。请会员在注册前参考当地政府的法律，在博彩不被允许的地区，如有会员在本公司注册、下注，为会员个人行为，本公司不负责、承担任何相关责任。</li>
                    <li>5、无论是个人或是团体，如有任何威胁、滥用本公司名义的行为，本公司保留杈利取消、收回玩家账号。</li>
                    <li>6、玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，本公司保留权利要求客户向我们提供充足有效的档，并以各种方式辨别客户是否符合资格享有我们的任何优惠。</li>
                  </ul>
                  <p style="color:#FF0000;padding-bottom:20px">本公司是使用利鑫科技所提供的在线娱乐软件，若发现您在同系统的娱乐场上开设多个会员账户，并进行套利下注；本公司有权取消您的会员账号并将所有下注营利取消！</p>
                </div>
              </td>
            </tr>
            <tr>
              <td i="footer" class="ui-dialog-footer">
                <div i="statusbar" class="ui-dialog-statusbar" style="display: none;"></div>
                <div i="button" class="ui-dialog-button">
                  <button type="button" i-id="ok" autofocus="" @click="hideAgreement" class="ui-dialog-autofocus">确定</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        isShowAgreement:false,
    }
  },
  methods: {
    showAgreement() {
           this.isShowAgreement=true; 
    },
    hideAgreement(){
        this.isShowAgreement=false; 
    }
  }

}

</script>
<style scoped>
.registration-c {
  width: 900px;
  min-height: 228px;
  margin: 60px auto 146px;
  padding-bottom: 50px;
  background: url('../assets/bg_07.png') repeat;
}

.registration-c h1 {
  margin: 0 5px;
  font-size: 24px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-weight: normal;
  color: #FFF;
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
  text-align: right!important;
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
  color: #FFF;
  background: #c42133;
  background: -moz-linear-gradient(top, #c42133 1%, #DB5967 9%, #AF1223 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1%, #c42133), color-stop(9%, #DB5967), color-stop(100%, #AF1223));
  background: -webkit-linear-gradient(top, #c42133 1%, #c42133 9%, #c42133 100%);
  background: -o-linear-gradient(top, #c42133 1%, #DB5967 9%, #AF1223 100%);
  background: -ms-linear-gradient(top, #c42133 1%, #DB5967 9%, #AF1223 100%);
  background: linear-gradient(to bottom, #c42133 1%, #DB5967 9%, #AF1223 100%);
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);
}

.ui-dialog-arrow-a,
.ui-dialog-arrow-b {
  position: absolute;
  display: none;
  width: 0;
  height: 0;
  overflow: hidden;
  _color: #FF3FFF;
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
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d22f3e), to(#a7232f));
  background-image: -moz-linear-gradient(top, #d22f3e, #a7232f);
  background-image: -o-linear-gradient(top, #d22f3e, #a7232f);
  background-image: -webkit-linear-gradient(top, #d22f3e, #a7232f);
  background-image: linear-gradient(to bottom, #d22f3e, #a7232f);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d22f3e', endColorstr='#a7232f')";
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#d22f3e', endColorstr='#a7232f');
  zoom: 1;
}


.ui-dialog-header {
  white-space: nowrap;
  border-bottom: 1px solid #E5E5E5;
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
  text-shadow: 0 1px 0 #FFF;
  opacity: .2;
  filter: alpha(opacity=20);
  cursor: pointer;
  background: transparent;
  _background: #FFF;
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

</style>
