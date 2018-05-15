<template>
  <div class="more_game_wrap">
    <div class="more_game">
      <div class="hotgame">
        <div class="title">

        </div>
        <!-- 官方玩法 -->
        <ul class="guantype" v-for="item in this.headerArry" :key="item.id">
          <li class="border-top ov padbottom" v-for="items in item.type" :key="items.id">
            <router-link tag="div" class="item cursor" :to="{path:'/lottery/'+items.name}"><span>{{items.short_name}}</span></router-link>
          </li>
        </ul>
      </div>
      <div class="hottype">
        <div class="title"></div>
        <ul>
          <router-link tag="li" :to="{path:'/lottery/' +item.name}" class="cursor" v-for="item in lotteryHot" :key="item.id">
            <div>{{item.short_name}}</div>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 下载指导 -->
    <div class="download">
      <div class="item">
        <img class="QrcodeImage" src="../assets/QrcodeImage.png" alt="">
      </div>
      <div class="item">
        <div class="ios" @click="downloadApp"></div>
        <div class="android" @click="downloadApp"></div>
      </div>
      <div class="item">
        <img class="address" src="../assets/download-item-tit.png" alt="" />
        <br>
        <img class="step" src="../assets/download-item-con.png" alt="" />
      </div>
    </div>
    <!-- 优势帮助 -->
    <div class="others">
      <div class="advantages">
        <h2></h2>
        <div>
          <span class="color56">存款</span>
          <br /> 到账平均时间 <span class="pull-right font30 color56">23<span class="font12 colorgrey padding-left8">秒</span></span>
        </div>
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <div>
          <span class="color56">取款</span>
          <br /> 到账平均时间 <span class="pull-right font30 color56">2'02<span class="font12 colorgrey padding-left8">分</span></span>
        </div>
        <div class="progress">
          <div class="progress-bar2"></div>
        </div>
      </div>
      <div class="mobdown">
        <h2></h2>
        <p>移动互联网时代，机会一手把握</p>
        <p>全面支持苹果APP 安卓APP 手机全部浏览器</p>
        <ul>
          <li @click="downloadApp"></li>
          <li @click="downloadApp"></li>
          <li @click="downloadApp"></li>
        </ul>
      </div>
      <div class="help">
        <h2></h2>
        <ul>
          <router-link to="/Deposit" tag="li">存款问题</router-link>
          <router-link to="/Generalq" tag="li">游戏帮助</router-link>
          <router-link tag="li" to="/Teller"> 取款问题</router-link>
          <li> <a id="a" style="color: #808080;text-decoration: none;" :href="this.sitesInfos.SiteService" target="_blank">联系客服</a> </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
  name: 'Moregame',
  data () {
    return {
      lotteryHot: [],
      // LotteryGroupArry: []
  }
  },
   computed: {
    ...mapState(['headerArry','sitesInfos'])
  },
  created () {
    this.LotteryHot();
    // this.LotteryGroup();
  },
  methods: {
    downloadApp () {
      this.$router.push('/mobile')
    },
    selectType (index) {
      this.tabIndex = index
    },
    // LotteryGroup () {
    //   this.$http.get('/api/lottery/basic/LotteryGroup').then((res) => {
    //   this.LotteryGroupArry = res.data;
    //   this.getData(this.LotteryGroupArry)
    //   })
    // },
    LotteryHot () {
    this.$http.get('/api/lottery/basic/LotteryHot').then((res)=>{
      this.lotteryHot = res.data;
      })
    },
  }
}

</script>
<style scoped>
/*更多游戏*/
#a:hover{
  color: #000 !important;
}
.cursor{
  cursor: pointer;
}
.more_game_wrap {
  background: url('../../static/img/middle_min_bg.png') no-repeat top center;
  border-top: 56px solid #b62929;
  height: 868px;
}

.more_game {
  width: 1050px;
  margin: 0 auto;
}

.hotgame,
.hottype {
  width: 50%;
  float: left;
  height: 304px;
  background-color: #8e2020;
}

.hotgame .title {
  height: 56px;
  margin-top: -56px;
  background: url(../assets/game_tit.png) 24px 20px no-repeat;
  background-color: #8e2020;
}

.hottype .title {
  height: 56px;
  margin-top: -56px;
  background: url(../assets/game_tit.png) 24px -30px no-repeat;
  background-color: #000;
}

.hotgame .title span {
  float: right;
  /*line-height: 56px;*/
  padding: 6px 15px;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
  background-color: #000;
}

.hotgame .title .guan {
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin-right: 10px;
}

.hotgame .title .xin {
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}

.active {
  background-color: #631616!important;
}

.hotgame .guantype {
  background-color: #b62929;
  color: #fff;
}

.hotgame .guantype li {
  float: left;
}

.hotgame .guantype span {
  color: #fff;
  padding: 4px;
  border-radius: 8px;
  margin-left: 8px;
}

.font16 {
  font-size: 16px;
}

.hotgame .guantype .item {
  line-height: 30px;
}

.border-top {
  border-top: 2px solid #9f2222;
}

.lh40 {
  line-height: 40px;
}

.ov {
  overflow: hidden;
}

.padbottom {
  padding: 10px 0;
}

/*热门类型*/
.hottype ul {
  overflow: hidden;
  background-color: #302f2f;
}

.hottype ul li {
  float: left;
  background-image: url('../../static/img/bjl_icon.png');
  background-repeat: no-repeat;
  width: 106px;
  height: 106px;
  margin: 23px 34px;
  color: #b8b5b5;
}

.hottype ul li:nth-child(1) {
  background-position: 0 0;
}

.hottype ul li:nth-child(2) {
  background-position: 0 -132px;
}

.hottype ul li:nth-child(3) {
  background-position: 0 -265px;
}

.hottype ul li:nth-child(4) {
  background-position: 0 -400px;
}

.hottype ul li:nth-child(5) {
  background-position: 0 -533px;
}

.hottype ul li:nth-child(6) {
  background-position: 0 -666px;
}

.hottype ul li div {
  text-align: center;
  margin-top: 106px;
  font-size: 14px;
}

/*游戏下载 二维码*/

.download {
  height: 280px;
  width: 1050px;
  background: url('../../static/img/index-downlogo-bg.jpg');
  margin: 0 auto;
  margin-top: 304px;
}

.download .item {
  float: left;
}

.QrcodeImage {
  width: 199px;
  height: 199px;
  margin: 40px 75px 0 36px;
}

.android,
.ios {
  width: 230px;
  height: 66px;
  background-image: url('../../static/img/index-down-btn.jpg');
  background-repeat: no-repeat;
  margin-top: 20px;
  cursor: pointer;
}

.ios {
  margin-top: 66px;
}

.android {
  background-position: 0 -66px;
}

.address {
  margin-top: 45px;
  margin-left: 80px;
}

.step {
  margin-top: 30px;
  margin-left: 80px;
}

.advantages {
  text-align: left;
  padding: 0 15px;
  font-size: 12px;
}

.pull-right {
  float: right;
}

.font30 {
  font-size: 30px;
}

.font12 {
  font-size: 12px;
}

.color56 {
  color: #565656;
}

.advantages {
  line-height: 26px;
  color: #c9c6c6;
}

.advantages div {
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 10px;
}

.colorgrey {
  color: #c9c6c6;
}

.advantages,
.mobdown,
.help {
  padding-top: 32px;
  float: left;
}

.advantages h2,
.mobdown h2,
.help h2 {
  background: url('../../static/img/others_all.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 312px;
  height: 36px;
}

.mobdown h2 {
  background-position: 0 -75px;
}

.help h2 {
  background-position: 0 -153px;
}

.color56 {
  color: #565656;
}

/*服务优势*/

.others {
  background-color: #fff;
  ;
  width: 1050px;
  height: 280px;
  margin: 0 auto;
  margin-top: -20px;
}

.padding-left8 {
  padding-left: 8px;
}

.progress {
  position: relative;
  height: 6px;
  background-color: #EDEBE9;
  border-radius: 10px;
  margin-top: 10px;
}

.progress-bar {
  height: 6px;
  background-color: #FFDF01;
  position: absolute;
  top: 0;
  left: 0;
  width: 112px;
  border-radius: 10px;
}

.progress-bar2 {
  height: 6px;
  background-color: #e35050;
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  border-radius: 10px;
}

.mobdown p {
  font-size: 12px;
  text-align: left;
  margin-top: 8px;
  color: #858585;
}

/*移动端下载*/
.mobdown ul {
  overflow: hidden;
}

.mobdown ul li {
  width: 79px;
  height: 79px;
  background-image: url('../../static/img/others_all.png');
  background-repeat: no-repeat;
  float: left;
  margin: 16px;
  cursor: pointer;
}

.mobdown ul li:nth-child(1) {
  background-position: 0px -334px;
}

.mobdown ul li:nth-child(2) {
  background-position: 0px -427px;
}

.mobdown ul li:nth-child(3) {
  background-position: 0px -520px;
}

.mobdown ul li:nth-child(1):hover {
  background-position: -167px -334px;
}

.mobdown ul li:nth-child(2):hover {
  background-position: -167px -427px;
}

.mobdown ul li:nth-child(3):hover {
  background-position: -167px -520px;
}

/*帮助中心*/
.help ul {
  overflow: hidden;
  margin-top: 10px;
  font-size: 12px;
}

.help ul li {
  text-align: left;
  cursor: pointer;
  color: #808080;
  /*vertical-align: middle;*/
  margin: 10px 0;
  line-height: 25px;
  float: left;
  padding-left: 34px;
  background-image: url('../../static/img/others_all.png');
  background-repeat: no-repeat;
  background-position: 0 -295px;
  width: 29%;
}

.help ul li:nth-child(1):hover {
  color: #000;
  background-position: -130px -295px;
}

.help ul li:nth-child(2):hover {
  color: #000;
  background-position: -130px -295px;
}

.help ul li:nth-child(3):hover {
  color: #000;
  background-position: -130px -295px;
}

.help ul li:nth-child(4):hover {
  color: #000;
  background-position: -130px -295px;
}

</style>
