<template>
  <div>
    <div class="top-wrap">
      <div class="top-box">
        <div class="bar-left">
          <span>PLAY RESPONSIBLY</span>
        </div>
        <div class="bar-right">
          <div class="preson-info">
            账号：xxxxxx
          </div>
          <div class="preson-balance">
            余额:11233322
          </div>
          <div class="recharge">
            充值
          </div>
          <div class="withdraw">
            提款
          </div>
          <div class="login-out">
            退出
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div class="nav">
      	
        <img class="logo" src="../assets/base-ico2.png" alt="">
        <ul>
          <li>
            <div>购彩中心</div>
            <span>LOTTERY</span>
          </li>
          <li>
            <div>用户中心</div>
            <span>USERCENTER</span>
          </li>
          <li>
            <div>优惠活动</div>
            <span>ACTIVITY</span>
          </li>
          <li>
            <div>平台公告</div>
            <span>ANNOUNCEMENT</span>
          </li>
          <li>
            <div>彩种信息</div>
            <span>GAMEINFORMATION</span>
          </li>
          <li>
            <div>手机下注</div>
            <span>MOBILE</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
  float: right;
  overflow: hidden;

  line-height: 48px;
}

.bar-right div {
  margin-right: 10px;
}

.preson-info,
.preson-balance,
.recharge,
.withdraw,
.login-out {
  float: left;

  background: url(../assets/base-ico2.png) no-repeat;
}

.preson-info {
  padding: 0 50px;

  background-position: 0 -593px;
}

.preson-balance {
  padding: 0 50px;

  background-position: 0 -634px;
}

.recharge {
  padding-left: 40px;

  background-position: -108px -677px;
}

.withdraw {
  padding-left: 40px;

  background-position: 0 -677px;
}

.login-out {
  padding-left: 40px;

  background-position: -201px -677px;
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

.nav ul>li {
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

.nav ul>li:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);

  background-color: #f14a4a;
}

</style>
