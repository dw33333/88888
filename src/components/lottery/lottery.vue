<template>
  <div class="container" id="container">
    <!-- 头部 -->
    <!-- 主体部分 -->
    <home-header >
      <div slot="lottery_result" class="items" @click="($router.push({name:'lottery_result'}))">
        开奖结果
      </div>
    </home-header>
    <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=no width="1200"  height="700" :src="src"></iframe>
  </div>
</template>
<script>
import HomeHeader from '../Header'
import SscHeader from './sscHeader'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // username: sessionStorage.getItem('username'),
      // user_money: '',
      showIndex: 0,
      titleindex:0,
      typeIndex:0,
      isShow2: true,
      isShowMenu: false,
      fc_id:'',
      src:'',
    }
  },
  created(){
    this.fc_id = this.$route.params.id;
    this.src = './lottery/index.html#/lottery/'+this.fc_id;
  },
  mounted () {
    // >获取用户余额
    // this.$http.get('/json/center/?r=Money').then((res) => {
    //   this.user_money = res.data.data.user_money
    // }).catch((error) => {
    //   console.log(error)
    // })
    document.getElementById('nav').style.display = "none";
    document.getElementById('backhide').style.display = "none";
    document.getElementById('backPage').style.display = "block";
    document.getElementById('presonInput').style.display = "none";
    document.getElementById('presonInput2').style.display = "none";
    document.getElementById('showId').style.display = "block";
  },
  watch:{
    'fc_id':function(n){
        this.src = './lottery/index.html#/lottery/'+n
    }
  },
  methods: {
    selectType (index) {
      this.titleindex = index
      this.typeIndex = index
    },
    leftBarfolding (index) {
      console.log(index)
      this.showIndex = index
    },
    selectRange (index) {
      if (index === 1) {
        this.isShow2 = true
      }
      if (index === 2) {
        this.isShow2 = false
      }
    },
    showAllgame () {
      this.isShowMenu = true
    },
    hideAllgame () {
      this.isShowMenu = false
    }
  },
  components:{
    HomeHeader,
    SscHeader
  },
  computed: {
    ...mapState(['username','usermoney'])
  }
}

</script>
<style scoped>
html,
body {
  height: 100%;
}

html,
body,
ul,
li,
p,
div,
input,
select {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

body {
  background: url("../../assets/bg1.jpg") center top no-repeat !important;
}

.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /*overflow: hidden;*/
  position: relative;
  background-color:#e8e8e8;
}


/*主体部分左边*/
.main-body {
  width: 100%;
  height: 100%;
}
.main-body .left-bar {
  float: left;
  width: 200px;
  height: 100%;
  border-right: 1px solid #959595;
}
.left-bar .userbox {
  background-color: #f2f2f2;
  padding-top: 10px;
  padding-left: 4px;
  padding-bottom: 8px;
}
.left-bar .account {
  width: 195px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  padding-left: 4px;
  background: url(../../assets/base-ico2.png) no-repeat;
  background-position: -98px -36px;
}
.left-bar .balance {
  width: 195px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  padding-left: 4px;
  background: url(../../assets/base-ico2.png) no-repeat;
  background-position: -98px -80px;
}
.left-bar .userinfo {
  overflow: hidden;
  background-color: #f2f2f2;
}
.left-bar .userinfo a {
  color: #2c3e50;
  float: left;
  width: 33%;
  cursor: pointer;
  height: 22px;
  text-align: center;
  padding-top: 40px;
  font-size: 13px;
  background: url(../../assets/user-btn.png) no-repeat;
  border: 1px solid #fff;
  border-left: none;
}
.left-bar .userinfo .recharge {
  background-position: 7px 3px;
  /*border-right: none;*/
}

.left-bar .userinfo .withdraw {
  background-position: -73px 6px;
}
.left-bar .userinfo .acc-record {
  background-position: -147px 3px;
  border-right: none;
}

.left-bar .userinfo .game-record {
  background-position: 12px -60px;
  border-top: none;
}

.left-bar .userinfo .acc-manage {
  background-position: -70px -60px;
  border-top: none;
}

.left-bar .userinfo .usercenter {
  background-position: -150px -64px;
  border-right: none;
  border-top: none;
}

.left-bar .userinfo .recharge:hover {
  background-color: #c2c2c2;
}

.left-bar .userinfo .withdraw:hover {
  background-color: #c2c2c2;
}

.left-bar .userinfo .acc-record:hover {
  background-color: #c2c2c2;
}

.left-bar .userinfo .game-record:hover {
  background-color: #c2c2c2;
}

.left-bar .userinfo .acc-manage:hover {
  background-color: #c2c2c2;
}

.left-bar .userinfo .usercenter:hover {
  background-color: #c2c2c2;
}

.status-toggle {
  padding-top: 5px;
  color: #fff;
  text-align: center;
  border-bottom: 2px solid #b62929;
  overflow: hidden;
  /*background-color: #B62929;*/
}

.status-toggle div {
  background-color: #484646;
  line-height: 40px;
  height: 40px;
  /*float: left;*/
  cursor: pointer;
  /*margin-top: 5px;*/
}

.status-toggle div.active {
  /*padding-top: 5px;*/
  background-color: #b62929;
  margin-top: -5px;
  padding-bottom: 5px;
  line-height: 40px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}




.colorred {
  color: #c42133;
}
.side-menu {
  width: 196px;
  padding: 0 2px;
  background-color: #fff;
}
.side-menu .lottery {
  width: 100%;
}
.side-menu .lottery .item {
  position: relative;
  cursor: pointer;
  height: 42px;
  line-height: 42px;
  /*text-align: center;*/
  font-size: 14px;
  text-indent: 8px;
  font-weight: bold;
  background: url(../../assets/base-ico.png) 0 -534px no-repeat;
}
.side-menu .lottery .item.active {
  background: url(../../assets/base-ico.png) 0 -576px no-repeat;
  color: #fff;
}
.side-menu .lottery .item span {
  width: 26px;
  height: 28px;
  display: inline-block;
  background: url(../../assets/mem_arr.png) no-repeat;
  position: absolute;
  top: 8px;
  left: 10px;
}
.side-menu .lottery .item-list li {
  width: 177px;
  height: 26px;
  padding-right: 20px;
  text-align: right;
  font-size: 12px;
  line-height: 26px;
  cursor: pointer;
  /*background-color: #666;*/
}
.side-menu .lottery .item-list li .icon {
  padding-right: 20px;
  width: 30px;
  height: 25px;
  float: left;
  background: url(../../assets/menu_ico.png) no-repeat;
  background-position: 0px 0px;
}

.side-menu .lottery .item-list li .text {
  float: left;
  border-radius: 4px;

  /*display: inline-block;*/
}

.side-menu .lottery .item-list li:hover {
  color: #000;
  box-shadow: 42px 0px 0px 0px #b62929 inset;
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
}

.side-menu .lottery .item-list li:hover .icon {
  background-position: 0 -25px;
}

.side-menu .lottery .item .dipin {
  background-position: 0 0;
}

.side-menu .lottery .item.active .dipin {
  background-position: 0 -168px;
}

.side-menu .lottery .item .ssc {
  background-position: 0 -28px;
}

.side-menu .lottery .item.active .ssc {
  background-position: 0 -196px;
}

.side-menu .lottery .item .ffc {
  background-position: 0 0;
}

.side-menu .lottery .item.active .ffc {
  background-position: 0 -168px;
}

.side-menu .lottery .item .pk {
  background-position: 0 -84px;
}

.side-menu .lottery .item .pc {
  background-position: 0 -110px;
}

.side-menu .lottery .item .kuai {
  background-position: 0 -140px;
}

.side-menu .lottery .item .shiyi {
  background-position: 0 0;
}

.side-menu .lottery .item.active .shiyi {
  background-position: 0 -168px;
}

.side-menu .lottery .item .san {
  background-position: 0 0;
}

.side-menu .lottery .item.active .san {
  background-position: 0 -168px;
}

/*主体部分右边*/
.main-body .content {
  margin-left: 202px;
  height: 100%;
  position: relative;
}


/*range*/
/*去除默认样式*/
input[type="range"] {
  -webkit-appearance: none;
  width: 200px;
  border-radius: 10px;
  /*这个属性设置使填充进度条时的图形为圆角*/
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
}

input[type="range"]:focus {
  outline: none;
}

/*滑块样式*/

input[type="range"]::-webkit-slider-runnable-track {
  height: 3px;
  border-radius: 10px;
  /*将轨道设为圆角的*/
  background-color: #cfcfcf;
}

input[type="range"]::-moz-range-track {
  height: 3px;
  border-radius: 10px;
  /*将轨道设为圆角的*/
  background-color: #cfcfcf;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: #b62929;
  border-radius: 50%;
  margin-top: -8px;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 25px;
  width: 25px;
  margin-top: -5px;
  /*使滑块超出轨道部分的偏移量相等*/
  background: #ffffff;
  border-radius: 50%;
  /*外观设置为圆形*/
  border: solid 0.125em rgba(205, 224, 230, 0.5);
  /*设置边框*/
  box-shadow: 0 0.125em 0.125em #3b4547;
  /*添加底部阴影*/
}

/*三个按钮*/
.tables .btns {
  float: right;
  overflow: hidden;
  margin-top: 6px;
}

.tables .btns li {
  width: 60px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  float: left;
  margin: 0 6px;
  cursor: pointer;
  background: url(../../assets/sumBtn2.png) 0 0 no-repeat;
}

.tables .btns li:nth-child(1) {
  background-position: 0 -27px;
}

.content .right-content {
  width: 239px;
  overflow: hidden;
}

.content .right-content btnss {
  overflow: hidden;
  width: 100%;
}

.content .right-content .btnss>div {
  float: left;
  width: 50%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

.content .right-content .btnss div.active {
  background-color: #b62929;
}

.content .right-content table tr {
  border-bottom: 1px solid #c9c7c7;
}

.content .right-content table tr td {
  border-right: 1px solid #c9c7c7;
}

/* 导航部分下拉菜单 */
.menu-child {
  position: absolute;
  zoom: 1;
  top: 80px;
  right: 6px;
  width: 780px;
  background: url('../../assets/nav_bg.png') repeat;
  margin: 2px 0 0;
  height: auto;
  padding: 15px 0;
  border-radius: 5px;
  box-shadow: 0 2px 10px #000;
  z-index: 99;
}

.gamelist {
  position: relative;
  height: 100%;
  width: 100%;
}

.triangles_back {
  display: none;
}

.official_play {
  border-bottom: none;
  width: 50%;
  font-size: 12px;
  float: left;
}

.gamelist_tit {
  width: 370px;
  display: block;
  margin: 8px 0;
  border-bottom: none;
  text-align: left;
}

.menu-child h1.red_style {
  height: 28px;
  background: url('../../assets/icon51.png') no-repeat center left;
}

.menu-child h1 {
  padding: 4px 0 4px 38px;
  margin-left: 30px;
  font-size: 15px;
  font-weight: normal;
  width: 70px;
  height: 20px;
  font-size: 16px;
  display: inline-block;
  color: #fff;
}

.high_wrap {
  float: left;
  border-bottom: none;
  width: auto;
  height: auto;
}

.cut-line {
  position: absolute;
  height: 100%;
  width: 1px;
  left: 50%;
  background: #fff;
  text-align: center;
}

.credit_play {
  font-size: 0;
  float: left;
  width: 50%;
}

.menu-child h1.orange_style {
  height: 28px;
  background: url('../../assets/icon52.png') no-repeat center left;
}

.menu-child ul {
  min-height: 62px;
  float: left;
  margin-left: 30px;
  padding: 0;
}

ul {
  list-style: none;
}

.menu-child li {
  float: left;
  line-height: 28px;
  width: 80px;
  height: 28px;
  margin: 5px 0;
  text-align: left;
  margin-right: 10px;
}

.menu-child li a {
  display: block;
  width: 80px;
  height: 28px;
  color: #fff;
  background: none;
  font-size: 12px;
  margin: 0;
}

.top_menu a {
  width: 52px;
  margin: 0 14px;
  color: #fff;
  background: url('../../assets/top_menu_icos.png') no-repeat;
}

a {
  text-decoration: none;
}

</style>
