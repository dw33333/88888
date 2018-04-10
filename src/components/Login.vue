<template>
  <div class="login-area">
    <div class="login_area_box">
      <div class="mainloginbox" id="LOGIN-FORM">
        <div class="site-logo">
          <div class="logo-items">
            <embed width="340" height="150" class="logo_none" autostart="true" loop="true" src="/Content/mapping/biying/images/logo.swf" quality="high" wmode="Transparent" type="application/x-shockwave-flash" param="transparent" id="swfNav">
          </div>
        </div>
        <div class="login_tit">
          <h1>用户登陆</h1>
          <!--<a href="#">线路选择</a> -->
        </div>
        <form class="login-form" action="/Home/Login" autocomplete="off" method="post" data-bind="submit:submit">
          <input type="text" style="visibility:hidden;position:absolute;z-index:-999;">
          <input type="password" style="visibility:hidden;position:absolute;z-index:-999;">
          <ul>
            <li>
              <label for="ph1523347205303" style="display: block;">帐号</label>
              <input type="text" class="fieldWithIcon2" value="" data-bind="textinput:fields.username,placeholder:'帐号'" needed="" id="ph1523347205303">
            </li>
            <li>
              <label for="ph1523347205304" style="display: block;">密码</label>
              <input type="password" class="fieldWithIcon3" value="" data-bind="textinput:fields.password,placeholder:'密码'" needed="" id="ph1523347205304">
            </li>
            <li class="codewrap">
              <label for="ph1523347205305" style="display: block;">验证码</label>
              <input type="text" class="codeipt" data-bind="textinput:fields.validateCode,placeholder:'验证码'" needed="" id="ph1523347205305">
              <span class="codeBox"><img src="/Home/ValidateCode?1523347205302" data-bind="attr:{src:'/Home/ValidateCode?'+random()},click:refreshCode"><a class="a_hidden" href="javascript:;" data-bind="click:refreshCode"></a></span>
            </li>
            <li class="loginbtn">
              <input type="submit" title="登录" class="btn btn_login" value="" data-bind="visible:!isSubmitting()">
              <span data-bind="visible:isSubmitting" style="display: none;">正在登录中，请稍后...</span>
            </li>
            <li class="loginbtn">
              <a title="免费开户" class="btn btn_register" href="/Register?Intr="></a>
            </li>
            <li class="login_others">
              <a href="javascript:void(0)" id="forgetBtn" class="login_forgetpassword" style="line-height:40px;color:#eaeaec;display:inline-block;">忘记密码?</a>
              <span class="separate">|</span>
              <!--<a href="javascript:;" class="authentication" style="display:inline-block;">域名验证</a>
                                <span class="separate">|</span> -->
              <a href="https://tb.53kf.com/code/client/10172705/1" target="_blank" class="online_service" style="text-align:right;margin-top: 12px;color:#eaeaec;text-decoration:underline;font-size:14px;text-decoration:none;display:inline-block;">在线客服</a>
              <span class="separate separate_hidden">|</span>
            </li>
            <li class="browser_hidden">
              <p>推荐使用浏览器：</p>
              <a href="http://rj.baidu.com/soft/detail/14744.html?ald" class="chrome_icon">Chrome</a>
              <a href="http://rj.baidu.com/soft/detail/11843.html" class="firefox_icon">Firefox</a>
            </li>
          </ul>
        </form>
        <div clsas="clear_both"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
	.login-area {
    height: 495px;
    width: 930px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    background: url('../assets/login-bg.png') no-repeat;
    margin-top: 4%;
}
</style>