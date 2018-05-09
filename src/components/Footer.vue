<template>
  <footer>
    <div class="footer-wrap">
      <div class="bottom-info">
        <div class="new-box">
          <h1>
                                    <em>银行卡类型</em>
                                    <span>Bank card type</span>
                                </h1>
          <div class="new-con clear">
            <div class="footer_bank"></div>
          </div>
        </div>
      </div>
      <div class="bottom-info">
        <div class="new-box">
          <h1><em>使用帮助</em><span>Guide</span></h1>
          <div class="new-con">
            <ul>
              <router-link tag="li" to="/Generalq">关于我们</router-link>
              <li><a :href="this.sitesInfos.SiteService" target="_blank" style="color:#fff;">联络我们</a></li>
              <router-link tag="li" to="/Generalq">合作伙伴</router-link>
              <router-link tag="li" to="/Deposit">存款帮助</router-link>
              <router-link tag="li" to="/Teller">取款帮助</router-link>
              <router-link tag="li" to="/Generalq">常见问题</router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-info">
        <div class="new-box">
          <h1><em>推荐浏览器</em><span>Browser</span></h1>
          <div class="new-con">
            <div class="clear">
              <ul class="browser-list commonlist notitle clear">
                <li>
                  <a target="_blank" href="https://support.microsoft.com/zh-tw/help/17621/internet-explorer-downloads"><i class="icon icon-browser icon-browserIE"></i><span>IE新版下载</span></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.google.cn/intl/zh-CN/chrome/?brand=CHBD&gclid=CjwKCAjwlcXXBRBhEiwApfHGTQW5ANvOW-CpXX8s5fmgSeGzzkFpAJPSGb6pFCUUt4ex2PMZqNHQ8xoCyLQQAvD_BwE"><i class="icon icon-browser icon-browserFF"></i><span>Chrome浏览器</span></a>
                </li>
                <li>
                  <a target="_blank" href="http://www.firefox.com.cn/download/"><i class="icon icon-browser icon-browserGL"></i><span>Firefox浏览器</span></a>
                </li>
              </ul>
              <div class="browser-tip">
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['sitesInfos'])
  },
}
</script>

<style scoped>
footer {
  background: url('../assets/footer_bg.jpg') no-repeat center -2px;
  height: 267px;
  padding-top: 110px;
  margin: 0 auto;
  width: 100%;
  border-top: 4px solid #b62929;
}

.footer-wrap {
  width: 1010px;
  margin: 0 auto;
}

.footer-wrap .bottom-info {
  float: left;
  width: 32%;
  padding-left: 10px;
}

.new-box {
  border-right: 1px solid hsla(0, 0%, 100%, .5);
  padding-top: 2px;
  text-align: left;
  height: 128px;
}

.new-box h1 {
  color: #fff;
  margin: 0;
  height: 30px;
  line-height: 30px;
  font-weight: normal;
}

.new-box h1>em {
  font-size: 16px;
  font-style: normal;
  display: inline-block;
  vertical-align: bottom;
}

.new-box h1>span {
  font-size: 12px;
  margin: 0 5px;
  display: inline-block;
  vertical-align: bottom;
  line-height: 30px;
  font-weight: normal;
  text-align: left;
}

.new-box .new-con {
  padding: 5px 0;
}

.footer_bank {
  margin-left: 10px;
  height: 80px;
  background: url(../assets/footer-bank-img.png) no-repeat center left;
}

.new-box ul {
  overflow: hidden;
}

.new-box ul li {
  float: left;
  color: #fff;
  line-height: 30px;
  font-size: 12px;
  width: 45%;
  cursor: pointer;
  text-align: center;
}
.browser-list.notitle {
    float: none;
}
.browser-list.notitle li {
    float: left;
    width: 30%;
    text-align: center;
    margin-right: 6px;
    padding-bottom: 46px;
}
a {
    color: #555;
    text-decoration: none !important;
    outline: none !important;
}
.browser-list .icon {
    margin-right: 7px;
}
.icon-browser {
    width: 46px;
    height: 49px;
}
.icon, .btn {
    display: inline-block;
    vertical-align: middle;
}
.icon-browser{
  background: url('../../static/img/home-ico.png') no-repeat;
}
.icon-browserIE {
  background-position: 0 -948px;
}
.icon-browserIE:hover{
  background-position: 0 -899px;
}
.icon-browserFF{
  background-position: -46px -948px;
}
.icon-browserFF:hover{
  background-position: -46px -899px;
}
.icon-browserGL{
  background-position: -91px -948px;
}
.icon-browserGL:hover{
  background-position: -91px -899px;
}
.browser-list.notitle li span {
  color: #fff;
  display: block;
  margin-top: 8px;
  bottom:10px;
}
</style>
