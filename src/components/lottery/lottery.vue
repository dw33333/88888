<template>
  <div class="container" id="container">
    <!-- 头部 -->
    <div class="head">
      <div class='logo'><img src="../../assets/GD11X5.png" height="97" width="97" alt="">
      </div>
      <div class="pull-left">
        <div class="game_mane">
          <span class="">广东11选5</span>
        </div>
        <div class="openinfo">
          <div class="pull-left">
            第 <span class="colorff8400">2018041145</span> 期
            <br/> 距离开盘时间
          </div>
          <div class="time">00:00:00</div>
        </div>
      </div>
      <div class="currentnum">
        <ul class="nums">
          <li>1</li>
          <li>10</li>
          <li>7</li>
          <li>5</li>
          <li>2</li>
        </ul>
        <div class="text">第 2018041145 期 开奖结果
          <a href="javascript:void(0);" class="volume"></a>
          <div class="Ringtone select-box">
            <div class="select-current">
              <span>铃声二</span><i></i>
            </div>
            <select class="select-list">
              <option value="1">默认音效</option>
              <option value="2">铃声一</option>
              <option value="3">铃声二</option>
              <option value="4">铃声三</option>
              <option value="5">铃声四</option>
            </select>
          </div>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li class="games" @mouseover="showAllgame" @mouseout="hideAllgame">
            <a href="javascript:void(0);">游戏大厅
                        </a>
          </li>
          <li class="home">
            <router-link to="/">返回首页
            </router-link>
          </li>
          <li class="service">
            <a href="javascript:void(0);">在线客服
                        </a>
          </li>
          <li class="rules">
            <a href="javascript:void(0);">规则说明
                        </a>
          </li>
          <li class="layout">
            <a href="javascript:void(0);">登出账号
                        </a>
          </li>
        </ul>
      </div>
      <!-- 下拉菜单开始 -->
      <div class="menu-child" @mouseover="showAllgame" @mouseout="hideAllgame" v-show="isShowMenu" id="lot_sec_menu">
        <div>
          <div class="gamelist clear">
            <div class="official_play">
              <div class="gamelist_tit clear">
                <h1 class="red_style">官方玩法</h1>
              </div>
              <div class="high_wrap">
                <div class="gamelist_l">
                  <ul data-bind="foreach:official">
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/26">
                        <font data-bind="text:FGameName">重庆时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/28">
                        <font data-bind="text:FGameName">北京快乐8</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/29">
                        <font data-bind="text:FGameName">北京PK拾</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/30">
                        <font data-bind="text:FGameName">福彩3D</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/40">
                        <font data-bind="text:FGameName">新疆时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/44">
                        <font data-bind="text:FGameName">排列三、五</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/45">
                        <font data-bind="text:FGameName">广东11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/50">
                        <font data-bind="text:FGameName">黑龙江11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/56">
                        <font data-bind="text:FGameName">北京时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/78">
                        <font data-bind="text:FGameName">QQ分分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/81">
                        <font data-bind="text:FGameName">上海时时乐</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/80">
                        <font data-bind="text:FGameName">河北快3</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/51">
                        <font data-bind="text:FGameName">韩式1.5分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/62">
                        <font data-bind="text:FGameName">江苏11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/68">
                        <font data-bind="text:FGameName">澳洲3分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/72">
                        <font data-bind="text:FGameName">上海11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_26" data-bind="attr:{href:'/OffcialOtherGame/Index/'+FGameID}" href="/OffcialOtherGame/Index/76">
                        <font data-bind="text:FGameName">腾讯分分彩</font>
                      </a>
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
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/six/index/1">
                        <font data-bind="text:FGameName">香港六合彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/4">
                        <font data-bind="text:FGameName">广东11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/6">
                        <font data-bind="text:FGameName">广西快十</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/7">
                        <font data-bind="text:FGameName">重庆时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/10">
                        <font data-bind="text:FGameName">新疆时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/13">
                        <font data-bind="text:FGameName">幸运农场</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/15">
                        <font data-bind="text:FGameName">北京PK拾</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/55">
                        <font data-bind="text:FGameName">北京时时彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/77">
                        <font data-bind="text:FGameName">QQ分分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/63">
                        <font data-bind="text:FGameName">江苏11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/69">
                        <font data-bind="text:FGameName">澳洲3分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/73">
                        <font data-bind="text:FGameName">上海11选5</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/79">
                        <font data-bind="text:FGameName">河北快3</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/53">
                        <font data-bind="text:FGameName">韩式1.5分彩</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/101">
                        <font data-bind="text:FGameName">幸运28</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/5">
                        <font data-bind="text:FGameName">广东快十</font>
                      </a>
                    </li>
                    <li>
                      <a class="game_1" data-bind="attr:{href:FBaseGameId==1?'/six/index/'+FGameID:'/OtherGame/Index/'+FGameID}" href="/OtherGame/Index/75">
                        <font data-bind="text:FGameName">腾讯分分彩</font>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="triangles_back"></div>
        </div>
      </div>
      <!-- 下拉菜单结束 -->
    </div>
    <!-- 主体部分 -->
    <div class="main-body">
      <!-- 主体部分左边 -->
      <div class="left-bar">
        <div class="userbox">
          <div class="account">账号:{{username}}</div>
          <div class="balance">余额:{{user_money}}</div>
        </div>
        <div class="userinfo">
          <router-link to="/UserCenter" class="recharge">
            充值
          </router-link>
          <a href="javascript:void(0);" class="withdraw">提现</a>
          <a href="javascript:void(0);" class="acc-record">帐变记录</a>
          <a href="javascript:void(0);" class="game-record">游戏记录</a>
          <a href="javascript:void(0);" class="acc-manage">账户管理</a>
          <a href="javascript:void(0);" class="usercenter">会员中心</a>
        </div>
        <div class="status-toggle">
          <div :class="{result:true,active:isShow}" @click="showOpenMsg(1);">开奖结果</div>
          <div :class="{ontime:true,active:!isShow}" @click="showOpenMsg(2);">本期投注</div>
        </div>
        <div class="overdue-wrap" v-if="isShow">
          <ul class="overdue-nums">
            <li class="serial-num">1</li>
            <li class="issue ">041160</li>
            <li class="result-num">9,10,6,3,7</li>
          </ul>
          <ul class="overdue-nums">
            <li class="serial-num ">2</li>
            <li class="issue ">041160</li>
            <li class="result-num ">9,1,6,3,7</li>
          </ul>
          <ul class="overdue-nums">
            <li class="serial-num">3</li>
            <li class="issue ">041160</li>
            <li class="result-num">9,1,6,3,7</li>
          </ul>
          <ul class="overdue-nums">
            <li class="serial-num ">4</li>
            <li class="issue ">041160</li>
            <li class="result-num">9,1,6,3,7</li>
          </ul>
          <ul class="overdue-nums ">
            <li class="serial-num">5</li>
            <li class="issue ">041160</li>
            <li class="result-num">9,1,6,3,7</li>
          </ul>
          <div class="more-result ">
            更多开奖结果
          </div>
        </div>
        <div class="overdue-wrap " v-if="!isShow ">
          <table>
            <tr>
              <th>时间</th>
              <th>赔率</th>
              <th>金额</th>
            </tr>
            <tr>
              <td colspan="3 " class="colorred ">暂无最新注单信息</td>
            </tr>
          </table>
        </div>
        <div class="side-menu">
          <div class="lottery">
            <div :class="{item:true,active:showIndex==1}" @click="leftBarfolding(1);">
              <span class="logo dipin"></span> 低频彩
            </div>
            <ul class="item-list" v-if="showIndex==1">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==2}" @click="leftBarfolding(2);">
              <span class="logo ssc"></span> 时时彩
            </div>
            <ul class="item-list" v-if="showIndex==2">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==3}" @click="leftBarfolding(3);">
              <span class="logo ffc"></span> 分分彩
            </div>
            <ul class="item-list" v-if="showIndex==3">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==4}" @click="leftBarfolding(4);">
              <span class="logo pk"></span> PK拾
            </div>
            <ul class="item-list" v-if="showIndex==4">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==5}" @click="leftBarfolding(5);">
              <span class="logo pc"></span> PC蛋蛋
            </div>
            <ul class="item-list" v-if="showIndex==5">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==6}" @click="leftBarfolding(6);">
              <span class="logo kuai"></span> 快乐彩
            </div>
            <ul class="item-list" v-if="showIndex==6">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==7}" @click="leftBarfolding(7);">
              <span class="logo shiyi"></span> 11选5
            </div>
            <ul class="item-list" v-if="showIndex==7">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
          <div class="lottery">
            <div :class="{item:true,active:showIndex==8}" @click="leftBarfolding(8);">
              <span class="logo san"></span> 快三
            </div>
            <ul class="item-list" v-if="showIndex==8">
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
              <li>
                <span class="icon"></span> 香港六合彩
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 主体部分右边 -->
      <div class="content ">
        <ul class="title">
          <li :class="{act:titleindex==showIndex}" :key='titleindex' v-for="(item,titleindex) in titleArr" @click="selectType(titleindex);"><a href="javascript:void(0);">{{item}}</a></li>
          <!-- <li class="active1"><a href="javascript:void(0);">特码</a></li> -->
          <!--  <li><a href="javascript:void(0);">正码一</a></li>
                    <li><a href="javascript:void(0);">正码二</a></li>
                    <li><a href="javascript:void(0);">正码三</a></li>
                    <li><a href="javascript:void(0);">正码四</a></li>
                    <li><a href="javascript:void(0);">龙虎斗</a></li> -->
        </ul>
        <div class="guanpaly">
        </div>
        <img class="new" src="../../assets/new-ico.gif" alt="">
        <div class="tables">
          <div class="pull-left" style="width:901px">
            <div class="title">
              <span class="dollar"></span>
              <span class="text">1.6%</span>
              <span class="minus"></span>
              <span class="plus"></span>
              <span class="range"><input type="range" step="0.01" min="0" max="5" value="0"></span>
              <ul class="btns">
                <li>一般</li>
                <li>快捷</li>
                <li>快选金额</li>
              </ul>
            </div>
            <table>
              <tr>
                <th colspan="3" class="bgred">特码</th>
                <th colspan="3" class="bgred">正码一</th>
                <th colspan="3" class="bgred">正码二</th>
                <th colspan="3" class="bgred">正码三</th>
                <th colspan="3" class="bgred">正码四</th>
                <th colspan="3" class="bgred">总和</th>
              </tr>
              <tr class="graybg">
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
                <td><span class="bordertight">号码</span></td>
                <td><span class="bordertight">赔率</span></td>
                <td class="bdr"><span>金额</span></td>
              </tr>
              <tr class="bdb">
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
              </tr>
              <tr class="bdb">
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
                <td class="bold">特大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
              </tr>
              <tr class="bdb">
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td class="bold">总尾大</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
              </tr>
              <tr class="bdb">
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td></td>
                <td></td>
                <td class="bdr"></td>
                <td class="bold">总尾小</td>
                <td class="bold colorcf">封盘</td>
                <td class="bdr">
                  <input type="text">
                </td>
              </tr>
              <tr>
                <td colspan="9" style="text-align:right;">
                  <span class="sure"></span>
                </td>
                <td colspan="9" style="text-align:left;">
                  <span class="cancle"></span>
                </td>
              </tr>
            </table>
          </div>
          <div class="right-content">
            <div class="btnss">
              <div :class="{outnum:true,active:isShow2}" @click="selectRange(1);">出码排行</div>
              <div :class="{leftnum:true,active:!isShow2}" @click="selectRange(2);">遗漏排行</div>
            </div>
            <!-- 出码排行 -->
            <table v-if="isShow2">
              <tr>
                <td>次数:</td>
                <td>
                  <select>
                    <option value="">2期</option>
                    <option value="">3期</option>
                    <option value="">4期</option>
                    <option value="">5期</option>
                    <option value="">6期</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
            </table>
            <!-- 遗漏排行 -->
            <table v-if="!isShow2">
              <tr>
                <td>分类:</td>
                <td>
                  <select>
                    <option value="">2期</option>
                    <option value="">3期</option>
                    <option value="">4期</option>
                    <option value="">5期</option>
                    <option value="">6期</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
              <tr>
                <td>总和单双@总双</td>
                <td>2期</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: sessionStorage.getItem('username'),
      user_money: '',
      isShow: true,
      showIndex: 0,
      titleArr: [
        '两面盘',
        '特码',
        '正码一',
        '正码二',
        '正码三',
        '正码四',
        '龙虎斗'
      ],
      isShow2: true,
      isShowMenu: false
    }
  },
  mounted () {
    // >获取用户余额
    this.$http.get('/json/center/?r=Money').then((res) => {
      this.user_money = res.data.data.user_money
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    selectType (index) {
      this.showIndex = index
    },
    leftBarfolding (index) {
      console.log(index)
      this.showIndex = index
    },
    showOpenMsg (index) {
      if (index === 1) {
        this.isShow = true
      }
      if (index === 2) {
        this.isShow = false
      }
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
  width: 1342px;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  /*overflow: hidden;*/
  position: relative;
}

/*头部*/
.head {
  height: 116px;
  background-color: #b62929;
}

.head .logo {
  width: 97px;
  height: 87px;
  margin-left: 25px;
  padding-top: 10px;
  float: left;
}

.game_mane {
  width: 262px;
  height: 50px;
  margin-left: 10px;
  padding-top: 9px;
}

.game_mane span {
  display: inline-block;
  float: left;
  height: 50px;
  padding: 0 9px 0 5px;
  font-weight: bold;
  font-size: 27px;
  font-style: italic;
  color: #fff;
  letter-spacing: 2px;
}

.head .openinfo {
  width: 250px;
  height: 36px;
  line-height: 15px;
  padding: 7px 8px 3px;
  font-size: 12px;
  margin-left: 10px;
  background: url(../../assets/base-ico.png) no-repeat;
  background-position: 0 -780px;
  overflow: hidden;
  color: #fff;
  text-align: center;
}

.pull-left {
  float: left;
}

.colorff8400 {
  color: #ff8400;
}

.head .openinfo .time {
  font-size: 32px;
  line-height: 30px;
}

.head .currentnum {
  overflow: hidden;
  float: left;
  width: 522px;
}

.head .currentnum .nums {
  overflow: hidden;
  margin-top: 16px;
  margin-left: 100px;
}

.head .currentnum .nums li {
  float: left;
  height: 47px;
  width: 47px;
  background: url("../../assets/ball_b_1.png") no-repeat 0 0;
  line-height: 44px;
  font-size: 20px;
  color: #b62929;
  text-align: center;
  font-weight: bold;
  margin: 0 8px;
  text-shadow: 0 1px 1px #5e5a5a;
}

.head .currentnum .text {
  text-align: center;
  line-height: 53px;
  color: #fff;
  font-size: 14px;
}

.head .currentnum .text .volume {
  width: 20px;
  height: 26px;
  display: inline-block;
  margin: 0 5px;
  vertical-align: middle;
  background: url("../../assets/volume-ico.png") 0 0 no-repeat;
}

.text .select-list {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  line-height: 26px;
  height: 26px;
  opacity: 0;
}

.Ringtone {
  border-radius: 5px;
  height: 26px;
  vertical-align: middle;
  background: rgba(255, 255, 255, 0.65);
  width: 82px;
  display: inline-block;
}

.Ringtone .select-current {
  height: 100%;
  line-height: 26px;
  padding-left: 10px;
  text-align: left;
}

.Ringtone .select-current span {
  color: #000;
  background: none;
}

.select-box {
  position: relative;
  display: inline-block;
  z-index: 99;
}

.Ringtone .select-current i {
  border: none;
  background: none;
}

.select-box div i {
  position: absolute;
  right: 0;
  top: 1px;
  width: 29px;
  height: 23px;
}

.Ringtone .select-current i:before {
  border-top: 6px solid #000;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}

.Ringtone .select-current i:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: -3px;
  margin-right: -3px;
}

.Ringtone .select-current i:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: -3px;
  margin-right: -3px;
}

.head .nav {
  /*width: 400px;*/
  /*height: 88px;*/
  float: left;
  margin-top: 18px;
}

.head .nav ul {
  overflow: hidden;
  padding-bottom: 12px;
}

.head .nav ul li {
  background-color: #000;
  float: left;
  font-size: 12px;
  padding-top: 48px;
  width: 52px;
  margin: 0 12px;
  cursor: pointer;
  text-align: center;
  background: url("../../assets/top_menu_icos.png") no-repeat;
}

.head .nav ul li a {
  padding-top: 48px;
  color: #fff;
  text-decoration: none;
  padding-bottom: 12px;
}

.head .nav ul li.games {
  background-position: 6px -500px;
}

.head .nav ul li.home {
  background-position: 6px 0;
}

.head .nav ul li.service {
  background-position: 6px -100px;
}

.head .nav ul li.rules {
  background-position: 6px -200px;
}

.head .nav ul li.layout {
  background-position: 6px -300px;
}

.head .nav ul li.games:hover {
  background-position: -47px -500px;
}

.head .nav ul li.home:hover {
  background-position: -47px 0;
}

.head .nav ul li.service:hover {
  background-position: -47px -100px;
}

.head .nav ul li.rules:hover {
  background-position: -47px -200px;
}

.head .nav ul li.layout:hover {
  background-position: -47px -300px;
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
  width: 50%;
  line-height: 33px;
  height: 33px;
  float: left;
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

.overdue-wrap {
  height: 196px;
  width: 100%;
  font-size: 13px;
}

.overdue-wrap .overdue-nums {
  overflow: hidden;
  border-bottom: 1px solid #e4e1e1;
}

.overdue-wrap .overdue-nums li {
  float: left;
  line-height: 32px;
  height: 32px;
  margin: 0 15px;
  text-align: center;
}

.overdue-wrap .overdue-nums .serial-num {
  /*padding: 0 10px;*/
  width: 20px;
  height: 20px;
  background-color: #463e3e;
  text-align: center;
  line-height: 20px;
  border-radius: 4px;
  margin: 5px;
  color: #fff;
}

.overdue-wrap .overdue-nums .result-num {
  font-weight: bold;
}

.overdue-wrap .more-result {
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: #c42133;
}

/*本期投注*/
.overdue-wrap table {
  width: 100%;
}
.overdue-wrap table tr {
  text-align: center;
}
.overdue-wrap table th,
.overdue-wrap table td {
  height: 26px;
  width: 33%;
  text-align: center;
  border-bottom: 1px solid #e4e1e1;
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
  text-indent: 45px;
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
.content>.title {
  height: 45px;
  margin-left: -1px;
  overflow: hidden;
  background-color: #e2e0dd;
}

.content>.title li {
  float: left;
}
.content>.title li a {
  color: #4d4d4d;
  text-decoration: none;
  padding: 0 20px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
}
.content>.title li.act a {
  background-color: #e95959;
  color: #fff;
}
.content .guanpaly {
  width: 101px;
  height: 32px;
  position: absolute;
  right: 5px;
  top: 6px;
  background: url(../../assets/base-ico.png) 0 -731px no-repeat;
}
.content .new {
  position: absolute;
  top: -0;
  right: -0;
}
.content .tables {
  position: relative;
}
.content .tables .title {
  height: 41px;
}
.content .tables .title span {
  background: url(../../assets/base-ico.png) no-repeat;
}

.content .tables .title .dollar {
  width: 27px;
  height: 27px;
  display: inline-block;
  background-position: 0 -232px;
  position: absolute;
  left: 25px;
  top: 7px;
}

.content .tables .title .text {
  background-image: none;
  position: absolute;
  top: 8px;
  left: 80px;
}
.content .tables .title .minus {
  width: 22px;
  height: 22px;
  display: inline-block;
  background-position: 0 -90px;
  position: absolute;
  top: 8px;
  left: 120px;
}

.content .tables .title .plus {
  width: 22px;
  height: 22px;
  display: inline-block;
  background-position: 0 -112px;
  position: absolute;
  top: 8px;
  left: 358px;
}

.content .tables .title .range {
  background-image: none;
  position: absolute;
  left: 150px;
  top: 7px;
}

.content .tables table {
  text-align: center;
  border-collapse: collapse;
  border-spacing: 1;
  border-spacing: 0;
  width: 100%;
}

.bgred {
  background-color: #b62929;
}

.content .tables table tr {
  height: 33px;

  font-size: 13px;
}

.content .tables table th {
  color: #fff;
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  border-right: 1px solid #fff;
}

.content .tables table .graybg {
  background: url(../../assets/nav-bg.png) 0 -35px repeat-x;
}

.content .tables table span {
  padding: 0 8px;
  font-weight: bold;
}

.bordertight {
  border-right: 1px solid #a4a4a4;
}

.content .tables table input {
  width: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
  border: 1px solid #bfbfbf;
  height: 20px;
  padding-left: 2px;
}

.bdr {
  border-right: 1px solid #c9c7c7;
}

.bdb {
  border-bottom: 1px solid #c9c7c7;
}

.bold {
  font-weight: bold;
}

.colorcf {
  color: #cfcfcf !important;
}

.pull-left {
  float: left;
}

.content .tables table .sure {
  width: 65px;
  height: 24px;
  background: url("../../assets/btn_ok.png") no-repeat;
  display: inline-block;
  padding: 0 2px;
  margin-top: 15px;
  margin-right: 25px;
  cursor: pointer;
}

.content .tables table .cancle {
  background: url("../../assets/btn_ok.png") no-repeat;
  height: 24px;
  width: 65px;
  display: inline-block;
  background-position: -76px 0;
  padding: 0 2px;
  margin-top: 15px;
  margin-left: 25px;
  cursor: pointer;
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
