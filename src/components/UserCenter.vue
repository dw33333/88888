<template>
  <div class='container'>
    <div class="header">
      <img class="logo" src="../assets/logo1.png" height="82" width="136" alt="">
      <ul class="nav">
        <li class='game' @mouseover="showAllgame" @mouseout="hideAllgame"><a href="#">游戏大厅</a>
            
        </li>
        <li class="home"><router-link to="/">返回首页</router-link></li>
        <li class="server"><a href="#">在线客服</a></li>
        <li class="rules"><a href="#">规则说明</a></li>
        <li class="help"><a href="#">游戏帮助</a></li>
        <li class="layout"><a href="#">登出账号</a></li>
      </ul>

      <!-- 下拉游戏选择 -->
        <div class="menu-child" v-if="isShowMenu" id="lot_sec_menu">
                <div class="gamelist clear">
                        <div class="official_play">
                            <div class="gamelist_tit clear">
                                <h1 class="red_style">官方玩法</h1>
                            </div>
                            <div class="high_wrap">
                                <div class="gamelist_l">
                                    <ul data-bind="foreach:official">
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/26"><font data-bind="text:FGameName">重庆时时彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/28"><font data-bind="text:FGameName">北京快乐8</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/29"><font data-bind="text:FGameName">北京PK拾</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/30"><font data-bind="text:FGameName">福彩3D</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/40"><font data-bind="text:FGameName">新疆时时彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/44"><font data-bind="text:FGameName">排列三、五</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/45"><font data-bind="text:FGameName">广东11选5</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/50"><font data-bind="text:FGameName">黑龙江11选5</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/56"><font data-bind="text:FGameName">北京时时彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/78"><font data-bind="text:FGameName">QQ分分彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/81"><font data-bind="text:FGameName">上海时时乐</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/80"><font data-bind="text:FGameName">河北快3</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/51"><font data-bind="text:FGameName">韩式1.5分彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/62"><font data-bind="text:FGameName">江苏11选5</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/68"><font data-bind="text:FGameName">澳洲3分彩</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/72"><font data-bind="text:FGameName">上海11选5</font></a>
                                        </li>
                                    
                                        <li>
                                            <a class="game_26" data-bind="attr:{href:groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):('/OffcialOtherGame/Index/' + FGameID)}" href="/OffcialOtherGame/Index/76"><font data-bind="text:FGameName">腾讯分分彩</font></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="cut-line"></div>
                        <div class="credit_play">
                            <div class="gamelist_tit clear">
                                <h1 class="orange_style">信用玩法</h1>
                            </div>
                            <div class="high_wrap">
                                <div class="gamelist_r">
                                    <ul data-bind="foreach:credit">
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/Six/Index/1"><font data-bind="text:FGameName">香港六合彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/4"><font data-bind="text:FGameName">广东11选5</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/6"><font data-bind="text:FGameName">广西快十</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/7"><font data-bind="text:FGameName">重庆时时彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/10"><font data-bind="text:FGameName">新疆时时彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/13"><font data-bind="text:FGameName">幸运农场</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/15"><font data-bind="text:FGameName">北京PK拾</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/55"><font data-bind="text:FGameName">北京时时彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/77"><font data-bind="text:FGameName">QQ分分彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/63"><font data-bind="text:FGameName">江苏11选5</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/69"><font data-bind="text:FGameName">澳洲3分彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/73"><font data-bind="text:FGameName">上海11选5</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/79"><font data-bind="text:FGameName">河北快3</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/53"><font data-bind="text:FGameName">韩式1.5分彩</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/101"><font data-bind="text:FGameName">幸运28</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/5"><font data-bind="text:FGameName">广东快十</font></a>
                                        </li>
                                      
                                    
                                        <li>
                                            <a class="game_1" data-bind="attr:{href: groupName === 'VR'?('/VRGame/VRPCIndex/' + FGameID):(FBaseGameId == '1' ? '/Six/Index/'+ FGameID:'/OtherGame/Index/' + FGameID)}" href="/OtherGame/Index/75"><font data-bind="text:FGameName">腾讯分分彩</font></a>
                                        </li>
                                      
                                    </ul>

                                </div>
                            </div>
                        </div>
                </div>
                <div class="triangles_back"></div>
            </div>
      <!-- 下拉游戏选择 -->

    </div>
    <div class="main-body">
    	
    
    <div class='select'>
      <div class="account">
        账号: <span>abcde</span>
      </div>
      <div class="balance">
        余额: <span>9999</span>
      </div>
      <div class="money">
        <div class="recharge">
          <span>充值</span>
        </div>
        <div class="withdraw">
          <span>提现</span>
        </div>
      </div>
      <!-- 折叠菜单 -->
      <div class="sidebar">
        <div class="sidebar-menu">
          <div class="item" @click="isShow(1)">
            <a href="javascript:void(0);">投注记录</a>
          </div>
          <ul class='list-item' v-if="isDisplay10">
            <li><router-link to="/buyrecord">购彩查询</router-link></li>
            <li><router-link to="/track">追号查询</router-link></li>
          </ul>
          <div class="item" @click="isShow(2)">
            <a href="javascript:void(0);">报表管理</a>
          </div>
          <ul class="list-item" v-if="isDisplay20">
            <li><router-link to="/ChargeRecord">充值记录</router-link></li>
            <li><router-link to="/AccountChange">帐变报表</router-link></li>
            <li><router-link to="/privateRecord">个人报表</router-link></li>
            <li><router-link to="/teamRecord">团队报表</router-link></li>
            <li><router-link to="/UserJoinActivity">优惠活动详情</router-link></li>
          </ul>
          <div class="item" @click="isShow(3)">
            <a href="javascript:void(0);">账户管理</a>
          </div>
          <ul class='list-item' v-if="isDisplay30">
            <li><router-link to="/UserInfo">个人总览</router-link></li>
            <li><router-link to="/PasswordManagement">密码管理</router-link></li>
            <li><router-link to="/CardsList">银行卡管理</router-link></li>
            <li><router-link to="/UserData">用户资料</router-link></li>
            <li><router-link to="/GameInfoType">彩种信息</router-link></li>
            <li><router-link to="/GameLimits">彩种限额</router-link></li>
          </ul>
          <div class="item" @click="isShow(4)">
            <a href="javascript:void(0);">代理管理</a>
          </div>
          <ul class='list-item' v-if="isDisplay40">
            <li><router-link to="/teamRecordView">团队总览</router-link></li>
            <li><router-link to="/UserList">用户列表</router-link></li>
            <li><router-link to="/RegisterManage">注册管理</router-link></li>
            <li><router-link to="/AdRegister">推广注册</router-link></li>
          </ul>
          <div class="item" @click="isShow(5)">
            <a href="javascript:void(0);">短信公告</a>
          </div>
          <ul class='list-item' v-if="isDisplay50">
            <li><router-link to="/Messge">站内短信</router-link></li>
            <li><router-link to="/Notice">网站公告</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <router-view class="content">
    </router-view>
    </div>
  </div>
</template>
<script>
export default {


  data() {
    return {
      isDisplay10: false,
      isDisplay20: false,
      isDisplay30: false,
      isDisplay40: false,
      isDisplay50: false,
      lock10: true,
      lock20: true,
      lock30: true,
      lock40: true,
      lock50: true,
      isShowMenu:false

    }
  },
  methods: {
    showAllgame(){
        this.isShowMenu=true;
    },
    hideAllgame(){

        this.isShowMenu=false;
    },
    isShow(index) {

      console.log(index)

      if (index == 1) {

        if (this.lock10) {
          this.isDisplay10 = true;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock10 = false;
        } else {
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock10 = true;
        }

      };

      if (index == 2) {

        if (this.lock20) {

          this.isDisplay20 = true;
          this.isDisplay10 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock20 = false;
        } else {
          this.isDisplay20 = false;
          this.isDisplay10 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock20 = true;

        }
      }



      if (index == 3) {
        if (this.lock30) {
          this.isDisplay30 = true;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock30 = false;
        } else {
          this.isDisplay30 = false;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay40 = false;
          this.isDisplay50 = false;
          this.lock30 = true;
        }

      }
      if (index == 4) {
        if (this.lock40) {
          this.isDisplay40 = true;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay50 = false;
          this.lock40 = false;
        } else {
          this.isDisplay40 = false;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay50 = false;
          this.lock40 = true;
        }

      };

      if (index == 5) {
        if (this.lock50) {
          this.isDisplay50 = true;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.lock50 = false;
        } else {
          this.isDisplay50 = false;
          this.isDisplay10 = false;
          this.isDisplay20 = false;
          this.isDisplay30 = false;
          this.isDisplay40 = false;
          this.lock50 = true;
        }

      }

    },
  }
}

</script>
<style scoped>
body {
  background-image: none;
}

.container {
  height: 100%;
  overflow-y:scroll;
}

.container::-webkit-scrollbar {
    display: none;
}


.header {
  background-color: #363636;
  /*height: 18px;*/
  overflow: hidden;
}

.header .logo {
  float: left;
  margin: 14px 0 0 36px;
}

.header .nav {
  float: right;
  color: #fff;
  text-align: center;
  margin-right: 30px;
}

.header .nav li {
  background: url(../assets/top_menu_icos.png) no-repeat;
  float: left;
  height: 18px;
  padding-top: 78px;
  margin: 0 10px;
  padding-bottom: 10px;
  cursor: pointer;
}

.header .nav li a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  padding-top: 78px;
}

.header .nav li.game {
  background-position: 8px -470px;
}

.header .nav li.game:hover {
  background-position: -45px -470px;
}

.header .nav li.game:hover .menu-child{
  display: block;
}

.header .nav li.home {
  background-position: 8px 30px;
}

.header .nav li.home:hover {
  background-position: -45px 30px;
}

.header .nav li.server {
  background-position: 8px -71px;
}

.header .nav li.server:hover {
  background-position: -45px -71px;
}

.header .nav li.rules {
  background-position: 8px -172px;
}

.header .nav li.rules:hover {
  background-position: -45px -172px;
}

.header .nav li.help {
  background-position: 8px -372px;
}

.header .nav li.help:hover {
  background-position: -45px -372px;
}

.header .nav li.layout {
  background-position: 8px -274px;
}

.header .nav li.layout:hover {
  background-position: -45px -274px;
}


/*下拉游戏选择*/

.menu-child {
    position: absolute;
    zoom: 1;
    top: 104px;
    right: 50px;
    width: 780px;
    background: url('../assets/nav_bg.png') repeat;
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
    background: url('../assets/icon51.png') no-repeat center left;
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
    background: url('../assets/icon52.png') no-repeat center left;
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
    background: url('../assets/top_menu_icos.png') no-repeat;
}

a{
  text-decoration: none;
}










.main-body{
	overflow: hidden;
	height: 100%;
}


/*左边区域*/

.container .select {
  float: left;
  background-color: #363636;
  color: #fff;
  width: 200px;
  font-size: 14px;
  height: 100%;
}

.container .select .account,
.container .select .balance {
  padding-top: 10px;
  width: 197px;
  height: 31px;
  line-height: 28px;
  background: url('../assets/base-ico2.png') no-repeat;
}

.container .select .account {
  background-position: -89px -36px;
}

.container .select .balance {
  background-position: -89px -83px;
  margin-top: 16px;
}


.container .select .money {
  padding-top: 10px;
  width: 197px;
  height: 41px;
  line-height: 28px;
  margin-top: 20px;
}

.container .select .money div {
  float: left;
  width: 26%;
  padding-left: 40px;
  line-height: 55px;
  background: url('../assets/user-btn.png') no-repeat;
}

.container .select>div {
  margin: 0 auto;
  padding-top: 20px;
}

.container .select .money div span {
  margin-left: 10px;
}

.container .select .money div.recharge {
  background-position: 10px 10px;
}

.container .select .money div.withdraw {
  background-position: 10px 10px;
}

.sidebar {
  margin-top: 20px;
}

.sidebar-menu .item {
  text-align: left;
  padding-left: 20px;
  cursor: pointer;
  line-height: 40px;
  /* height: 40px; */
  width: 172px;
  margin: 5px auto;
  background: url(../assets/base-ico.png) 0 -579px no-repeat;
}

.sidebar-menu .item a {
  text-decoration: none;
  color: #fff;
  padding: 11px 0;
  padding-right: 102px;
  background: url(../assets/base-ico.png) 128px -12px no-repeat;
}

.sidebar-menu .list-item {
  font-size: 14px;
  line-height: 30px;
  width: 95%;
  margin: 0 auto;
}

.sidebar-menu .list-item li {
  cursor: pointer;
  text-align: left;
  margin-top: 2px;
  width: 100%;
}

.sidebar-menu .list-item li a {
  color: #fff;
  text-decoration: none;
  text-indent: 1rem;
  display: inline-block;
  height: 100%;
  width: 100%;
}

.sidebar-menu .list-item li a:hover {
  color: #000;
  background-color: #fff;
}


.sidebar-menu .list-item li .router-link-exact-active.router-link-active{
	color: #000;
  background-color: #fff;

}


/*右边区域*/

.container .content {
  /*width: 1600px;*/
  /*height: 100%;*/
margin-left: 0px;
/*margin-left: 213px;*/
    min-height: 900px;
    min-width: ;
  background-color: #ededed;
}

</style>
