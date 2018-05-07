<template>
<div class="mobile-BG">
  <headervue></headervue>
  <div class="mabile-main">
      <div class="main_top">
          <div class="main_style">
              <div class="mobile_icon">
              </div>
              <div class="download_s">
                  <h2>移动互联网时代，机会一手把握</h2>
                  <div class="mobile_p">
                      <p>全面支持苹果APP 安卓APP 手机全部浏览器</p>
                      <p>移动技术领走在行业尖端</p>
                  </div>
                  <div class="down">
                      <span class="apple">
                          <a href=""></a>
                      </span>
                      <span class="android">
                          <a href=""></a>
                      </span>
                      <span class="browser">
                          <a href=""></a>
                      </span>
                  </div>
                  <div class="d_s">
                      <span class="line"></span>
                      <p>下载方式</p>
                      <span class="line"></span>
                  </div>
                  <div class="mobile_erweima">
                      <!-- <img src="" alt=""> 二维码图片-->
                  </div>
              </div>
          </div>
      </div>
      <div class="main_bottom">
          <div class="main_characteristic">
              <div class="characteristic_matter">
                  <div class="matter_box">
                      <div class="icon_1"></div>
                          <h2>更稳定</h2>
                          <p>实力站点，致力于打造一个</p>
                          <p>公平、诚信、共赢的娱乐平台</p>
                  </div>
                  <div class="matter_box">
                      <div class="icon_2"></div>
                      <h2>更便捷</h2>
                      <p>7X24小时服务</p>
                      <p>随时随地 轻松畅玩</p>
                  </div>
                  <div class="matter_box">
                      <div class="icon_3"></div>
                      <h2>更优秀</h2>
                      <p>平台会员稳定增长，至今已拥有</p>
                      <p>超过85万的会员，累计为用户</p>
                      <p>兑换现金超680万元人民币</p>
                  </div>
                  <div class="matter_box">
                      <div class="icon_4"></div>
                      <h2>更安全</h2>
                      <p>实力保障 让你安心游戏</p>
                  </div>
              </div>
              <div class="characteristic_icon">

              </div>
          </div>
      </div>
  </div>
  <footervue></footervue>
</div>
</template>
<script>
import headervue from '@/components/Header'
import footervue from '@/components/Footer'
export default {
  name:'mobile',
  components: {
    headervue,
    footervue  
  },
  data () {
      return {
          
      }
  }
}
</script>
<style>
.characteristic_icon{
    width: 560px;
    height: 580px;
    float: left;
    display: inline-block;
    background: url('../../static/img/characteristic_icon.png') no-repeat;
    margin-top: 94px;
}
.mobile_erweima{
    width: 274px;
    text-align: center;
}
.mobile-BG{
    background-color: #3c4045;
    background-position: center top;
    background: url('../../static/img/mobile_bg.png') repeat!important;
}
.matter_box h2 {
    font-size: 26px;
    font-weight: normal;
    line-height: 26px;
    color: #080808;
    float: left;
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 28px;
    margin-bottom: 6px;
}
.matter_box p {
    font-size: 14px;
    line-height: 14px;
    color: #868686;
    float: left;
    text-align: center;
    width: 100%;
    margin-top: 4px;
    margin-bottom: 0;
}

.icon_1 {
    background-position: 0 -309px;
    margin-left: 51px;
    margin-right: 22px;
    margin-top: 66px;
}
.icon_1, .icon_2, .icon_3, .icon_4 {
    width: 158px;
    height: 158px;
    float: left;
    background: url('../../static/img/mobile_download_icon.png') no-repeat;
    margin-left: 51px;
}
.matter_box {
    width: 260px;
    height: 364px;
    float: left;
}
.characteristic_matter {
    width: 520px;
    height: 100%;
    display: inline-block;
    margin-left: 230px;
    vertical-align: top;
    float: left;
}
.main_characteristic {
    width: 1314px;
    height: 728px;
    margin: 0 auto;
}
.main_bottom {
    width: 100%;
    height: 728px;
    display: inline-block;
}
.d_s p {
    font-size: 18px;
    color: #fefefe;
    display: inline-block;
}
.d_s .line {
    width: 92px;
    height: 1px;
    background: #fefefe;
    display: inline-block;
    vertical-align: super;
}
.d_s {
    width: 268px;
    margin: 8px auto 0;
}
 .apple {
    width: 86px;
    height: 86px;
    margin-right: 22px;
    float: left;
    background: url('../../static/img/mobile_download_icon.png') no-repeat;
}
 .android {
    width: 86px;
    height: 86px;
    margin-right: 22px;
    float: left;
    background: url('../../static/img/mobile_download_icon.png') no-repeat;
}
.browser{
     width: 86px;
    height: 86px;
    margin-right: 22px;
    float: left;
    background: url('../../static/img/mobile_download_icon.png') no-repeat;
}
.download_s .down {
    margin: 24px auto 0;
    width: 302px;
    height: 86px;
}

.mobile_p p {
    color: #fff;
    font-size: 14px;
    margin-top: 4px;
    text-align: center;
    margin-bottom: 0;
}
.download_s h2 {
    font-size: 24px;
    font-family: 'Microsoft YaHei';
    color: #fff;
    display: block;
    font-weight: normal;
    line-height: 24px;
    margin-top: 46px;
    margin-bottom: 38px;
    text-align: center;
}
.download_s {
    width: 410px;
    height: 510px;
    float: left;
    background: url('../../static/img/download_s_bg.png') no-repeat;
    display: inline-block;
    vertical-align: top;
    margin-top: 40px;
    margin-left: 38px;
}
.main_top {
    width: 100%;
    height: 689px;
    background: url('../../static/img/main_top_bg.jpg') no-repeat;
    float: left;
}
.main_style {
    width: 1014px;
    height: 618px;
    margin: 42px auto 0;
}
.mobile_icon {
    width: 542px;
    height: 634px;
    float: left;
    background: url('../../static/img/mobile_icon.png') no-repeat;
    margin-left: 20px;
}
.icon_1 {
    background-position: 0 -309px;
}
.icon_2 {
    background-position: 0 -508px;
    margin-top: 66px;
}
.icon_3 {
    background-position: 0 -707px;
    margin-top: 22px;
}
.icon_3 {
    background-position: 0 -707px;
    margin-top: 22px;
}
.icon_4 {
    background-position: 0 -906px;
     margin-top: 22px;
}
.apple{
    background-position: 0 0 ;
}
.android {
    background-position: 0 -103px;
}
.browser {
    background-position: 0 -206px;
    margin-right: 0;
}
</style>

