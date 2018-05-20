<template>
<div style="background:#e8e8e8;min-height:100%;">
    <div class="xx_lottery">
    <home-header  class="xx_lottery_hheader" :inlottery="true">
      <div slot="lottery_result" class="items result" style="cursor:pointer;" @click="($router.push({name:'lottery_result',params:{game_name:$route.params.id}}))">
        开奖结果
      </div>
      <div slot="game_introduce" class="items result" style="cursor:pointer;" @click="($router.push({name:$route.params.id}))">
        玩法介绍
      </div>
    </home-header>
    <div class="lottery-r-box w ">
        <vue-result v-if="showResult" :child-id="fc_type" :child-data="this.menusData"></vue-result>
        <vue-note v-if="showNote" :child-id="currI"></vue-note>
        <div>
            <div class="lottery-header w">
                <div class="lottery-header-top w">
                    <div class="lottery-nav">
                        <ul class="clearfix">
                            <li @click="change('six',2);" :class="fc_type=='six'?'active':''">
                                <a href="javascript:;">
                                    香港六合彩
                                </a>
                            </li>
                            <li  v-for="(v,index) in menus" @click="change(v.name,index)" :class="fc_type==v.name?'active':''" v-if="index<=9">
                                <router-link :to="{name:'lottery',params:{id:v.name}}">
                                    {{v.short_name}}
                                </router-link>
                            </li>
                            <li @mouseover="isMenu=true" @mouseout="isMenu=false"   v-for="(v,index) in menus"  v-if="index==9" :class="more!='更多玩法'?'active':''">
                                <a href="javascript:;" class="moreNav ">
                                    {{more}}
                                    <span class="caret"></span>
                                </a>
                            </li>
                            <ul v-show="isMenu" class="dropdown-menu" @mouseover="isMenu=true" @mouseout="isMenu=false" >
                                <li  v-for="(v,index) in menus" @click="change(v.name,index);more=v.short_name" :class="fc_type==v.name?'active':''" v-if="index>9">
                                    <router-link :to="{name:'lottery',params:{id:v.name}}">
                                        {{v.short_name}}
                                    </router-link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div class="prompt w clearfix">
                    <!--<div id="lotteryLogo" class="BJSCbg" :class="'fc_'+fc_id"></div>-->
                    <div class="result-no-info cpssc  " >
                        <!--<div class="iskjjg" v-if="this.result==''">-->
                        <!--<p class="daac36">暂无开奖结果！</p>-->
                        <!--</div>-->
                        <div id="awardNum" class="result-no-info-label awardNum"  >
                            <p>
                                <span v-if="fc_type=='six'&&resultLh" >{{resultLh.qishu}}</span>
                                <span  v-if="fc_type!='six'" v-for="(v,key) in result">{{key}}</span>
                                <span class="current-issue-tip">期</span>
                            </p>
                            <!--<p>开奖选项</p>-->
                        </div>
                        <div class="result-no" v-if="currT==200"  v-for="(v,key) in result" >
                            <i class="redball"  v-for="vv in v" v-if="vv">{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div >
                        <div class="result-no lh " v-if="currT==2&&this.resultLh!=''" v-cloak >
                            <p >
                                <i class="redball kl" v-for="(vv,i) in resultLh.ball.split(',')" v-if="i<6" :class="vv | filterBall(currBall)">{{vv}}</i>
                                <i v-for="(vv,i) in resultLh.ball.split(',')" v-if="i==6" class="block">&nbsp;&nbsp;+&nbsp;&nbsp;</i>
                                <i class=" redball kl" v-for="(vv,i) in resultLh.ball.split(',')" v-if="i==6" :class="vv | filterBall(currBall)">{{vv}}</i>
                            </p>
                        </div>
                        <div class="result-no"  v-if="currT==204" v-for="(v,key) in result">
                            <i class="redball" v-for="vv in v" v-if="vv">{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                        <div class="result-no" v-if="currT==201"v-for="(v,key) in result">
                            <i class="redball kl" v-for="vv in v" v-if="vv" :class="'fruit_'+v"  >{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                        <div class="result-no" v-if="currT==203 " v-for="(v,key) in result">
                            <i class="redball" v-for="vv in v" v-if="vv" >{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                        <div class="result-no" v-if="currT==209" v-for="(v,key) in result">
                           <div v-if="v.length!=1">
                              <span>
                                  <i class="redball" v-for="(vv,index) in v" v-if="index==0" >{{vv}}</i>
                                  <i class="block">+</i>
                              </span>
                               <span>
                                  <i class="redball" v-for="(vv,index) in v" v-if="index==1" >{{vv}}</i>
                                  <i class="block">+</i>
                              </span>
                               <span>
                                  <i class="redball" v-for="(vv,index) in v" v-if="index==2" >{{vv}}</i>
                                  <i class="block">=</i>
                              </span>
                               <i class="redball"  >{{v | filterSum}}</i>
                           </div>
                            <p  v-else>暂无开奖结果！</p>
                            <!--<i class="redball" >{{1}}</i>-->
                            <!--<i class="redball">{{2}}</i><-->
                            <!--<i class="redball" >{{3}}</i>-->
                        </div>
                        <div class="result-no"   v-if="currT==205||currT==206||currT==207" v-for="(v,key) in result">
                            <i class="redball"v-for="vv in v" v-if="vv" >{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                        <div class="result-no" v-if="currT==202"  v-for="(v,key) in result">
                            <i class="redball" v-for="vv in v" v-if="vv"  >{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                        <div class="result-more right">
                            <a href="javascript:;" @click="showResult=!showResult;isCloseLoading=false">前十期开奖结果</a>
                            <!--<button @click="login">登录</button>-->
                        </div>
                        <!--loading-->
                        <div v-if="isLoading2==true" class="vue-loading-two">
                            <vue-loading class="vue-loading"  type="beat" color="#fac092" :size="{ width: '20px', height: '20px' }" ></vue-loading>
                        </div>

                    </div>
                    <div id="lotteryTime clearfix" class="lotteryTime">
                        <div id="betPeriod">
                            <!--<span>2018-03-17</span>-->
                            <span class="daac36 awardNum t" v-if="fc_type=='six'">{{resultLhp}}
                                <span class="daac360 current-issue-tip">期</span>
                            </span>
                            <span class="daac36 awardNum t" v-else>{{inFo.number==-1?'':inFo.number}}
                                <span class="daac360 current-issue-tip">期</span>
                            </span>
                            <!--<span >{{closeT}}</span>-->
                            <div id="betTime">{{countDTime}}
                                <span v-if="countDTime==''">00:00:00</span>
                            </div>
                        </div>
                        <div  class="vue-loading-three" v-if="isLoading3==true" >
                            <vue-loading class="vue-loading"  type="bubbles" color="#fac092" :size="{ width: '50px', height: '50px' }" ></vue-loading>
                        </div>


                    </div>

                </div>
            </div>
        </div>
        <!--导航-->
        <div class="bet-box-top w">
            <div class="lotteryBetMethod clearfix">
                <ul class="twoNav clearfix left">
                    <li v-for="(v,i) in topNav"><a href="javascript:;" :class="v.id==currBall?'active':''" @click="changeCurrBall(v.id,v.group_name)" >{{v.group_name}}</a>
                    </li>
                </ul>
                <!--右侧额度转换/注单查询-->
                <div class="note clearfix">
                    <!--<div class="result-more t" @click="linkMoney">-->
                        <!--&lt;!&ndash;<a href="javascript:;">&ndash;&gt;-->
                            <!--&lt;!&ndash;<i class="iconfont icon-weibiaoti8"></i>&ndash;&gt;-->
                            <!--&lt;!&ndash;额度转换&ndash;&gt;-->
                        <!--&lt;!&ndash;</a>&ndash;&gt;-->
                    <!--</div>-->
                    <div class="result-more z" @click="showNote=!showNote">
                        <i class="iconfont icon-search"></i>
                        <a href="javascript:;"> 注单查询</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="lottery-box w clearfix">
            <div class="bet-box" v-show="!showResult&&!showNote">
                <!--主要内容-->
                <div class="bet-box-content">
                    <!--// 投注内容-->
                    <!--ssc-->
                    <div class="ssc clearfix" v-if="currT==200">
                        <div class="table-bet-top clearfix ssc-other-mb"  v-for="(v,index) in mainData" >
                            <p>{{v[0].playd_type_name}}</p>
                            <div class="ul-width">
                                <ul :class="{'cl-os-3':v.length==3,'cl-os-5':v.length==2}">
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul :class="{'cl-os-3':v.length==3,'cl-os-5':v.length==2}">
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul :class="{'cl-os-3':v.length==3,'cl-os-5':v.length==2}" v-if="v.length!=2" >
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul v-if="v.length!=3&&v.length!=2" >
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                            </div>
                            <ul class="select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" @click="isAct($event);" :class="{'cl-os-3':v.length==3,'cl-os-5':v.length==2}">
                                    <span :class="v.length==10||v.length==28?'active':''"><i >{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span>   <input type="number"class="input_money" :data-min="vv.min_charge" :data-max="vv.max_charge" :data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info" :data-name="vv.name" :data-odds="vv.odds" v-on:input="parentAct($event)"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--6hc-->
                    <div class="lhc clearfix " v-if="currT==2">
                        <p v-if="currBall==6" class="hx-p">
                            <i :class="isZhong==1?'active':''" @click="selectZ(1,$event)">中</i>
                            <i :class="isZhong==2?'active':''" @click="selectZ(2,$event)">不中</i>
                            <span>{{CurrHxOdds}}</span>
                        </p>
                        <div class="data-play animail clearfix" v-if="currN=='合肖'">
                            <div v-for="v in hxSelect" @click="selectAimail(v,$event)"><span>{{v}}</span></div>
                        </div>
                        <div class="data-play animail clearfix" v-if="currN=='正码1-6'||currN=='正码特'||currN=='连肖连尾'">
                            <div v-if="currN=='连肖连尾'"  v-for="(v,k) in ZmData":class="{'active':currTabId==k}" @click="changePlay(k)"><span>{{k}}</span></div>
                            <div v-if="currN!='连肖连尾'" v-for="(v,index) in ZmSelect":class="{'active':currTabNav==v.name,'col-16':currN!='连肖连尾'}" @click="changePlay(v.name,index,v.id)"><span>{{v.name}}</span></div>
                        </div>
                        <div v-if="!isTab" class="table-bet-top  l clearfix "  :class="currBall=='半半波'?'active':''">
                            <!--{{v}}-->
                            <!--<p>{{v[0].playd_type_name}}</p>-->
                            <div v-if="currBall!=6" class="ul-width">
                                <ul>
                                    <li :class="currN=='连肖连尾'?'cl-os-5':''">
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span v-if="currN!='连肖连尾'">金额</span>
                                        <span v-if="currN=='连肖连尾'">号码</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li :class="currN=='连肖连尾'?'cl-os-5':''">
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span v-if="currN!='连肖连尾'">金额</span>
                                        <span v-if="currN=='连肖连尾'">号码</span>
                                    </li>
                                </ul>
                                <ul v-if="currN!='连肖连尾'">
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span v-if="currN!='连肖连尾'">金额</span>
                                        <span v-if="currN=='连肖连尾'">号码</span>
                                    </li>
                                </ul>
                                <ul v-if="currN!='连肖连尾'">
                                    <li >
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span v-if="currN!='连肖连尾'">金额</span>
                                        <span v-if="currN=='连肖连尾'">号码</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="ul-width" v-else>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >号码</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >号码</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >号码</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >号码</span>
                                    </li>
                                </ul>
                            </div>
                            <ul class="clearfix select"  v-for="(v,index) in mainData" :class="{'cl-os-5':v.length==2}" v-if="currBall!=6" >
                                <li  @click="isActLhc($event,vv.name);" v-for="vv in v"  :class="{'cl-os-5':v.length==2}" >
                                    <span :class="currBall==6?'cl-os-5':''"><i :class="vv.name | filterBall(currBall)" >{{vv.name}}</i></span>
                                    <span class="ff9b39" v-if="vv.odds" :class="currBall==6?'cl-os-5':''">{{vv.odds}}</span>
                                    <!--<span class="ff9b39" v-if="v.num" :class="v.num?'active':''">{{v.num}}</span>-->
                                    <span>
                                        <input  type="number" name="" v-on:input="parentAct($event)" class="input_money" :data-min="vv.min_charge" :data-max="vv.max_charge"  :data-id="vv.id" :data-guoup="vv.playd_guoup_id" :data-playd_info="vv.playd_info" :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                            <ul class="clearfix select"  v-if="currBall==6">
                                <li  @click="isActLhc($event,v.zodiacname);"  v-for="(v,index) in sxName">
                                    <span class="cl-os-5"><i >{{v.zodiacname}}</i></span>
                                    <span class="ff9b39 cl-os-5">{{v.zodiacdata}}</span>
                                    <!--<span class="ff9b39" v-if="v.num" :class="v.num?'active':''">{{v.num}}</span>-->
                                    <span v-show="currBall!=6">
                                        <input  type="number" class="input_money" ></span>
                                </li>
                            </ul>
                            <ul class="clearfix select"   v-if="currN=='正码特'||currN=='正码1-6'||currN=='连肖连尾'">
                                <li  @click="isActLhc($event,v);" v-for="(v,index) in ZmData[currTabId]" :class="currN=='连肖连尾'?'cl-os-5':''">
                                    <span ><i :class="v.name | filterBall(currBall)" >{{currN=='连肖连尾'?v.playd_info:v.name}}</i></span>
                                    <span class="ff9b39" v-if="v.odds" :class="currBall==6?'cl-os-5':''">{{v.odds}}</span>
                                    <span class="ff9b39" v-if="currN=='连肖连尾'">{{v.playd_info | filterHm(sxName,currTabId)}}</span>
                                    <!--<span><i></i></span>-->
                                    <span v-show="currN!='连肖连尾'">
                                        <input  type="number" name="" v-on:input="parentAct($event)" class="input_money" :data-min="v.min_charge" :data-max="v.max_charge"  :data-id="v.id" :data-guoup="currBall" :data-playd_info="v.playd_info" :data-name="v.name" :data-odds="v.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>

                                </li>
                            </ul>
                        </div>
                        <div  v-if="currN=='自选不中'" class="data-play clearfix"  v-for="(v,index) in mainData">
                            <div v-for="(vv,index) in v" :class="currTabNav==vv.name?'active':''" @click="changePlay(vv.name,index,vv.id)"><span>{{vv.name}}</span></div>
                        </div>

                        <div v-if="currN=='连码'" class="data-play clearfix">
                            <div v-for="(v,index) in mainData" :class="currTabId==v.id?'active':''" @click="currTabId=v.id;changePlay(v.name,index,v.id);"><span>{{v.name | filterNavName(v.playd_type)}}</span></div>
                        </div>

                        <div v-if="isTab" class="table-bet-top  l clearfix " >
                            <div class="ul-width">
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >赔率</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >赔率</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >赔率</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span class="cl-os-5">选项</span>
                                        <span class="cl-os-5" >赔率</span>
                                    </li>
                                </ul>
                            </div>
                            <ul class="clearfix select">
                                <li v-for="v in tabData" :data-id="currTabNavID"  @click="isActLhc($event,v,currOdds);">
                                    <span class="cl-os-5"><i :class="v | filterBall(currBall)">{{v}}</i></span>
                                    <span class="ff9b39 cl-os-5" :class="isTab&&currBall != '正码特'?'active':''">{{currOdds}}</span>
                                    <span v-show="currBall == 99">
                                        <input type="text" name="" class="input_money" ></span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!--pk10-->
                    <div class="pk10 clearfix" v-if="currT==204">
                        <div class="table-bet-top "  v-for="(v,index) in mainData " :class="currN=='单号1-10'?'fl':''">
                            <p >{{v[0].playd_type_name}}</p>
                            <div v-if="v[0].playd_type_name=='冠亚和'">
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                            </div>
                            <ul class="select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" v-if="i<=16 && vv.odds!=null" @click="isAct($event);">
                                    <span :class="v.length==10?'active'+i:''" ><i :class="v.length==10?'active':''">{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span> <input type="number" name="" class="input_money" v-on:input="parentAct($event)" :data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info" :data-name="vv.name"  :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                            <ul class="clearfix select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" v-if="i>16" @click="isAct($event);">
                                    <span ><i>{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span> <input type="text" name="" class="input_money" :data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info"  :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <!--快乐十分-->
                    <div class="kl0 clearfix" v-if="currT==201||currT==210">
                        <div class="table-bet-top "  v-for="(v,index) in mainData "  :class="currBall=='整合'?'secondk10':''" v-cloak>
                            <p >{{v[0].playd_type_name}}</p>
                            <ul  class="select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" v-if=" vv.odds!=null" @click="isAct($event);" :class="{'col-xs-5':v.length==2,'col-xs-3':v.length==3}">
                                    <span :class="v.length==20||v.length==21?'active':''" ><i>{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span> <input type="number" name="" class="input_money" v-on:input="parentAct($event)":data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info"  :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--快乐8-->
                    <div class="klc clearfix" v-if="currT==203 ||currT ==209">
                        <div class="table-bet-top clearfix " v-for="(v,index) in mainData" v-cloak>
                            <p>{{v[0].playd_type_name}}</p>
                            <ul class="select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" @click="isAct($event);" :class="{'cl-os-3':v.length==3,'cl-os-10':v.length==1}">
                                    <span :class="currN=='正码'?'active':''"><i >{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span><input type="number" name="" class="input_money" v-on:input="parentAct($event)" :data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info" :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--福彩3D-->
                    <div class="fc3 clearfix"  v-if="currT==205||currT==206||currT==207">
                        <div class="table-bet-top ssc-other-mb clearfix" v-for="(v,index) in mainData" :class="index>0?'secondMb':''" v-cloak>
                            <p >{{v[0].playd_type_name}}</p>
                            <div>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span >选项</span>
                                        <span >赔率</span>
                                        <span>金额</span>
                                    </li>
                                </ul>
                            </div>
                            <ul class="clearfix select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" @click="isAct($event);">
                                    <span :class="vv.name<=9&&currT!=207?'active':''"><i>{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span><input type="number" name="" class="input_money" v-on:input="parentAct($event)" :data-id="vv.play_id" :data-title="vv.playd_type_name" :data-playd_info="vv.playd_info" :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--十一选五-->
                    <div class="shiyixuanwu clearfix" v-if="currT==202">
                        <div class="table-bet-top clearfix "  v-for="(v,index) in mainData" :class="index>=1?'shiyixuanwu-mb':''" v-cloak>
                            <p>{{v[0].playd_type_name}}</p>
                            <ul class="select">
                                <li v-for="(vv,i) in v" :data-id="vv.play_id" @click="isAct($event);" :class="{'col-xs-5':v.length==2,'col-xs-3':v.length==3}">
                                    <span :class="v.length==11?'active':''"><i >{{vv.name}}</i></span>
                                    <span class="ff9b39" >{{vv.odds}}</span>
                                    <span><input type="number" name="" class="input_money" v-on:input="parentAct($event)" :data-id="vv.play_id" :data-title="vv.playd_type_name":data-playd_info="vv.playd_info" :data-name="vv.name" :data-odds="vv.odds" onkeyup="value=value.replace(/[^\d]/g,'') " maxlength="5"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--666666-->
                    <div class="loading-box" v-if="isCloseLoading==true">
                        <p>封盘中</p>
                    </div>
                </div>


                <!--lodaing-->
                <div class="loading-box" v-if="isLoading==true">
                    <vue-loading class="vue-loading"  type="spiningDubbles" color="#fac092" :size="{ width: '50px', height: '50px' }" v-if="isCloseNoGame==true" ></vue-loading>
                </div>

            </div>
            <div>
                <div class="personal-box">
                    <div class="personal">
                        <!--个人信息-->
                        <div class="user-info">
                            <div class="user-line aside-block-top">
                                <i class="iconfont icon-tubiao211"></i>
                                <span class="ff9b39">{{userName}}</span>

                            </div>
                            <div class="user-line aside-block-bottom">
                                <i class="iconfont icon-iconmoney"></i>
                                <span class="ff9b39">{{userMoney}}</span>
                                <i class="iconfont icon-icon--" v-if="getuser" @click="getUserInfo"></i>

                            </div>
                        </div>
                        <!--选择金额-->
                        <div class="bar-bet clearfix">
                            <ul class="nav-tabs">
                                <li>快捷注单</li>
                            </ul>
                            <label for="">
                                快捷金额：
                            </label>
                            <div class="bet-add  left input-group">
                                <input type="number" class="form-control" oninput="if(value.length>6)value=value.slice(0,6)" v-model="editMount">
                                <ul class="flex-flow-row ">
                                    <li class="cm1" @click="getotleMoney(10)"><span>10</span></li>
                                    <li class="cm2" @click="getotleMoney(50)"><span>50</span></li>
                                    <li class="cm3" @click="getotleMoney(100)"><span>100</span></li>
                                    <li class="cm4" @click="getotleMoney(500)"><span>500</span></li>
                                    <li class="cm5" @click="getotleMoney(1000)"><span>1000</span></li>
                                    <li class="cm6" @click="getotleMoney(5000)"><span>5000</span></li>
                                </ul>
                                <div class="item-container ">
                                    <div class="rand-btn left" @click="jixuan();">
                                        <span class="select-item">
                                            机选
                                        </span>
                                    </div>
                                    <div class="select-btn left" @click="jixuan(2)">
                                        <div class="select-item" >
                                            全选
                                        </div>
                                    </div>
                                </div>

                                <!--快选-->
                                <div class="advanced-quick-bet-area">
                                    <div class="item-container" v-for="(v,k,i) in jiNav" :data-index="i">
                                        <h4 >{{fc_type!='six'?k:''}}</h4>
                                        <div class="col-xs-3" v-for="vv in v" @click="kuaixuan($event,i,vv)">
                                            {{vv}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-danger fl bet-add reset" @click="reset">重置</button>
                            <button type="button" class="btn btn-danger fl bet-add "@click="submitTicket()">下注</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!-- Form -->
        <el-dialog title="下注明细(请确认注单)" :visible.sync="dialogFormVisible">
            <el-form >
                <div class="bar-bet clearfix">
                    <div class="bet-add  left input-group">
                      <span class="input-group-addon ">
                          金额
                      </span>
                        <input type="number" class="form-control" oninput="if(value.length>6)value=value.slice(0,6)"  v-model="editMount">
                    </div>
                    <button type="button" class="btn btn-danger fl bet-add " @click="reset">清空 </button>
                    <ul class="flex-flow-row left">
                        <li class="cm1" @click="getotleMoney(10)"><span>10</span></li>
                        <li class="cm2" @click="getotleMoney(50)"><span>50</span></li>
                        <li class="cm3" @click="getotleMoney(100)"><span>100</span></li>
                        <li class="cm4" @click="getotleMoney(500)"><span>500</span></li>
                        <li class="cm5" @click="getotleMoney(1000)"><span>1000</span></li>
                        <li class="cm6" @click="getotleMoney(5000)"><span>5000</span></li>
                    </ul>
                    <div class="right pull-right">
                        <!--5秒-->
                    </div>
                </div>
                <el-form-item :label-width="formLabelWidth">
                    <table cellspacing="0" cellpadding="0" class="table-confirm" >
                        <thead>
                        <tr v-if="ifCofm || currN=='正码特'" >
                            <th>选项</th>
                            <th>赔率</th>
                            <th >金额</th>
                            <th >确认</th>
                        </tr>
                        <tr v-else>
                            <th>选项</th>
                            <th>赔率</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(v,i) in arrTicket" >
                            <td v-if="isTab&&currN=='自选不中'||currN=='连肖连尾'||currN=='连码'">{{currTabNav}} {{v.content}}</td>
                            <!--{{topNav[currBall-1]}}.group_name-->
                            <td v-if="currBall!=6 && (currN=='正码特' || !isTab)"><i v-if="fc_type!='six'">{{v.title}}</i><i v-if="topNav[currBall-1]">{{topNav[currBall-1].group_name}}</i> &nbsp;{{v.content_name}}</td>
                            <td v-if="currBall==6"> {{isZhong==1?'中':'不中'}} {{orderObj.playd_info}}</td>
                            <td v-if="currN!='连肖连尾'">{{currBall==6?CurrHxOdds:v.odds}}</td>
                            <td v-show="ifCofm==true"><input type="number" oninput="if(value.length>6)value=value.slice(0,6)"  v-model="v.money"  v-on:input="inputB()" class="inputB b" ></td>
                            <td v-show="ifCofm==true"><input type="checkbox" checked="checked" class="check-send" :data-id="v.id" :data-guoup="v.gid" :data-playd_info="v.playd_info" :data-money="v.money" :data-odd="v.odds" @click="removeList($event);"></td>
                        </tr>
                        </tbody>
                    </table>
                </el-form-item>
                <el-form-item>
                    <table cellspacing="0" cellpadding="0" >
                        <tbody>
                        <tr>
                            <td >组数 {{oddLen}}</td>
                            <td v-if="isTab&& ifCofm &&fc_type=='six'|| currN=='自选不中'|| currN=='连肖连尾'|| currN=='连码'">
                                总金额{{oddLen*editMount | filterNumber}}
                            </td>
                            <td v-if="currN!='合肖'&&currN!='自选不中'&&currN!='连肖连尾'&&currN!='连码'">总金额{{moneyBox | filterNumber}}</td>
                            <td v-if="currN=='合肖'">金额{{editMount | filterNumber}}</td>
                        </tr>
                        </tbody>
                    </table>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelSend();">取 消</el-button>
                <el-button type="primary" @click="submitSend();">确 定</el-button>
            </div>
        </el-dialog>
        <!--lodaing-->
        <div class="loading-box" v-if="isLoadingS==true">
            <vue-loading class="vue-loading-b"  type="spiningDubbles" color="#fac092" :size="{ width: '50px', height: '50px' }" v-if="isCloseNoGame==true" ></vue-loading>
        </div>
    </div>
    </div>
</div>

</template>
<script>
    import Init from '../config/lottery_init.js';
    import R from '../config/lottery_rule';
    import P from '../config/lottery_public.js';
    import L from '../controller/lottery.js';
    import Or from '../controller/order.js';
    import vueLoading from 'vue-loading-template';
    import vueResult from './result.vue';
    import vueNote from './noteInquiry.vue';
    import HomeHeader from './Header'
    export default{
        data(){
            return {
                mainData:null,
                currBall:'',//当前头部玩法导航的名字
                topNav:'',//玩法导航
                jiNav:'',//机选数据
                allData:'',//当前彩种处理好的所有数据
                isTopNav:false,//是否显示头部玩法下拉
                orderObj:{},//下注信息
                currT:null,
                menus:'',
                currCz:'',
                isLoading:false,
                isLoading2:false,
                result:'',
                showResult:false,
                showNote:false,
                userName:'', //用户名
                userMoney:'', // 用户余额
                inFo:{},
                countDTime:'',//倒计时
                isLoading3:false,
                showRec:true,
                isLogin:false,
                recData:'', //最新注单数据
                dialogFormVisible: false,
                getuser:true,
                formLabelWidth: '',
                editMount:'',
                betMount:'',
                arrTicket:'', // 确认注单信息
                moneyBox:'',//总金额
                oddLen:'',// 组数
                isTab:false,
                currTabNav:'',
                isZhong:1,
                sixInfo:{},//六合彩原始数据
                isMenu:false,
                more:'更多玩法', // 更多玩法
                moreA:false,
                CurrHxOdds:'',
                arrName:[], //六合彩的组合数据
                ifCofm:true ,// 确认弹窗时的显示问题
                isCloseNoGame:true,//是否封盘
                dataLoding:true, //节流阀
                isLoadingS:false, //下注loding
                isCloseLoading:false,
                closeT:'距离截止时间',
                isQ:false,//全选
                number:'',
                resultLh:'',
                resultLhp:'',
                menusData:'',
                allTime:'',
                ZmData:'',
                currI:'',
                currN:'',//当前玩法名字
            }
        },
        created(){
            this._loading();
        },
        methods: {
            _loading(){
//                this.login();
                this.getMenus();
                this.init();
                this.getOdds();
                this.getUserInfo();
                //获取玩法
            },
            init(){
                this.isCloseNoGame = true;
                this.countDTime = '';
                this.fc_type = this.$route.params.id + '';
                this.resetD(this.fc_type);
                this.reset();
            },
            //获取玩法导航
            getMenus(){
                this.$http.get("/api/lottery/basic/LotteryGroup/").then(res=>{
                    if(!res)return;
                    if (!res.data) return  window.top.wAlert('网络超时，请重新刷新');
                    this.menusData = res.data;
                    let arr = [];
                    for(let i =0;i<res.data.length;i++){
                        arr = arr.concat(res.data[i].type);
//                        this.typeName.push(res.data[i].name);
                    }
                    this.menus  =arr;
                    if(this.fc_type=='six') {this.currT=2;this.currI=2; return}
                    this.currT = Init.getTitle(this.menusData, this.fc_type);
                    this.currI = Init.getId(this.menusData, this.fc_type);

                },res => {
                    return  window.top.wAlert('网络超时，请重新刷新');
                })
            },
            addMore(){
                let e = document.querySelector('.dropdown-menu>li.active>a');
//                console.log(e);
                if(e) this.more = e.text;
            },
            getBall(n){
                if(this.$route.path.indexOf('lottery') <= -1) return;
                if(n!=2){
                    this.isLoading2 = true;
                    this.result = '';
                }
                let api = this.fc_type=='six'?"/api/lhc/LhcInfo/newestLhcInfo/":"/api/lottery-v1/"+this.fc_type+"/opentime/";
                this.$http.get(api).then(response => {
                    if(this.fc_type=='six'){
                        if(response.data.list){
                            this.resultLh =response.data.list.kaiJiangNumber;
                            this.resultLhp =response.data.list.qishu;
                            if(!response.data.list.CloseTime){
                                this.isCloseNoGame = false;
                            }else{
                                this.sixInfo.closeTime = response.data.list.CloseTime[1];
                                this.sixInfo.isOpen  = response.data.list.CloseTime[3];
                            }
                            if(window.timer_5) clearInterval(window.timer_5);
                            this.timer_5();
                            if(window.timer1) clearInterval(window.timer1);
                            this.timer();
                        }else{
                            this.resultLh  = '';
                            this.resultLhp  = '';
                        }
                    }else if(response.data){
                        this.result =response.data;
                        if(n!=2){
                            this.countDTime='';
                            this.inFo = response.data;
                            if(this.inFo.number==-1&&!this.inFo.isopen) this.countDTime ='已封盘';
                            if(window.timer1) clearInterval(window.timer1);
                            this.timer();
                        }
                        this.result = {};
                        for(let k in response.data.hmlist){
//                            if(k=="") return ;
                            let v = response.data.hmlist[k].slice(1,response.data.hmlist[k].length-1);
                            this.result[k] = v.split(',');
                        }
                    }
                    this.isLoading2 = false;
                }, response => {
                    // error callback
                    this.isLoading2 = false;
                })
            },
            // 倒计时
            timer(){
                if(window.timer1) clearInterval(window.timer1);
                window.timer1 = setInterval(()=>{
                    this.countDTime ='';
                    if(this.fc_type == 'six'){
                        this.isCloseLoading=false;
                        this.closeT = '距离截止时间';
                        if(this.isCloseNoGame ==false){
                            this.countDTime ='已关盘';
                            this.isCloseLoading=true;
                        }else{
                            this.countDTime =L.count(this.sixInfo.closeTime--,this);
                        }
                        if(this.sixInfo.closeTime==0) {
                            this.getOdds();
                        }
                        if(!this.sixInfo) return;
                        if(this.sixInfo.closeTime<0) return;

                    }else{
                        this.isCloseLoading=false;
                        this.closeT = '距离截止时间';
                        if(this.inFo.endtime--<=0) {
                            if(!this.showResult &&!this.showNote)this.isCloseLoading=true;
                            this.closeT = '距离下期开盘时间';
                        }
                        if(this.inFo.opentime==0&&this.inFo.number!=-1) {
                            this.closeT = '距离截止时间';
                            this.isCloseLoading=false;
                            this.getOdds();
                        }else{
                            this.countDTime ='已封盘';
                        }
                        if(!this.inFo) return;
                        if(this.inFo.opentime<0) return;
                        this.countDTime = L.count(this.inFo.opentime--,this);
                    }

                },1000);
            },
            //5s自动刷新一次时间赔率
            timer_5(){
                if (window.timer_5) clearInterval(window.timer_5);
                window.timer_5 = setInterval(() => {
//                    this.changeOdds();
                    this.getBall(2);
//                    this.getUserInfo();
                }, 60000);
            },
            //取消注单
            removeList(e){
                let id ='';
                id = e.currentTarget.dataset.id;
                let inp =  document.querySelectorAll('.inputB');
                if(e.currentTarget.checked){
                    this.oddLen +=1;
                    this.moneyBox = this.moneyBox-0;
                    let mon = e.currentTarget.dataset.money-0
                    this.moneyBox += mon;
                    this.arrTicket.forEach((v,i)=>{
                        if(id == v.id){
                            inp[i].classList.add('b')
                            v.fl = ''
                        }
                    })
                }else{
                    this.arrTicket.forEach((v,i)=>{
                        if(id == v.id){
                            v.fl = 'fl';
                            inp[i].classList.remove('b')
                            this.moneyBox -=v.money;
                            this.oddLen -=1;
                        }
                    })
                }
            },
            inputB(n){
                let inp =  document.querySelectorAll('.inputB.b');
                this.moneyBox = 0;
                if(n==''){
                    if(this.arrTicket) {
                        this.arrTicket.forEach((v, i) => {
                            v.money = n;
                        })
                    }
                }else if(n){
                    if(this.arrTicket) {
                        this.arrTicket.forEach((v, i) => {
                            v.money = n;
                            if(v.fl!='fl'){
                                this.ifCofm==false?this.moneyBox = this.editMount:this.moneyBox += v.money - 0;
                            }
                        })
                    }
                } else{
                    inp.forEach((v, i) => {
                        this.ifCofm==false?this.moneyBox = this.editMount: this.moneyBox += v.value - 0;
                    })
                }
            },
            changeOdds(){
//                this.getUserMoney();
//                if (!this.$route.path.includes('lottery')) return;
                if(this.fc_type=='six') return this.changeSixOdds();
                this.$http.get("/api/lottery-v1/"+this.fc_type+"/odds/").then(res =>{
                    if(!res)return;
                    if(!res.data.playd) return  window.top.wAlert('网络超时，请重新刷新');
                    if(res.data.playd.length==0) return  window.top.wAlert('请选择其他彩种下注！');
                    this.allData = L.data_demo_do(res.data.playd);
                    this.topNav = res.data.group;//玩法类型
                    this.currBall = res.data.group[0].id;//当前玩法id
                    this.mainData = this.allData[res.data.playd[0].playd_guoup_id];//当前数据
//                    this.getTime(this);
                    this.isLoading = false;

                }, res => {
                    this.isLoading = false;
                    this.isLoading3 = false;
                })
            },
            // input输入后，li选中
            parentAct(e){
//                replace(/^[0]+[0-9]*$/gi,"")'
//                let value = e.currentTarget.value-0;
//                console.log(value.length);
//                value = vaule.replace(/^[0]+[0-9]*$/gi,"");
//                if(value.length>6) value=value.slice(0,6);
                let prn = e.currentTarget.parentNode.parentNode;
                prn.classList.remove('warning')
                if(e.currentTarget.value!=0 && e.currentTarget.value!='') {
                    prn.classList.add('warning')
                }

            },
            //提交注单
            submitTicket(){
                if(this.isCloseLoading)  return window.top.wAlert('封盘中！！');
                this.ifCofm =true;
                if(this.currBall=='正码过关'||this.currN=='连肖连尾'||this.currN=='自选不中'||this.currN=='合肖'||this.currN=='连码') this.ifCofm =false;
                let nod =  document.querySelectorAll('.warning .input_money');
                let parent =  document.querySelectorAll('.warning');
                let arr = [];
                this.moneyBox = 0;
//                this.editMount = this.editMount-0;
                for(let i =0;i<nod.length;i++){
                    // 判断最小，最大下注金额
                    let min = nod[i].dataset.min;
                    let max = nod[i].dataset.max;
                    if(nod[i].value-0<min-0 || nod[i].value-0>max-0) return window.top.wAlert("下注金额在"+min+" - "+max+"之间");
                    let obj = {};
                    if(nod[i].value&&nod[i].value!=0 || this.currBall=='正肖' ||this.currBall=='特码生肖'|| this.currBall=='一肖'){
                        if(this.currN=='合肖') obj.money =this.editMount;
                        if(this.currN=='连肖连尾') this.orderObj.playd_id.push(nod[i].dataset.id);
                        else  obj.money = nod[i].value;
                        obj.content_name = nod[i].dataset.name;
                        obj.id = nod[i].dataset.id;
                        obj.odds = nod[i].dataset.odds;
                        obj.title =nod[i].dataset.title;
                        obj.gid = nod[i].dataset.guoup;
                        if(this.fc_type=='six'?obj.playd_info=obj.content_name:obj.playd_info =nod[i].dataset.playd_info);
                        if(this.ifCofm==false){
                            this.moneyBox = this.editMount
                        }else{
                            if(this.currBall=='正肖' || this.currBall=='特码生肖'|| this.currBall=='一肖')this.moneyBox += this.editMount
                            else this.moneyBox += (nod[i].value-0);
                        }
                        arr.push(obj);
                    }
                }
                if(arr.length&&parent.length || parent.length&&this.editMount!=0){
                    if(this.fc_type == "six" && this.ifCofm){
                        this.arrTicket = arr;
                    }   else if(this.fc_type != "six") {
                        this.arrTicket =[];
                        this.arrTicket = arr
                    }
                    if(this.currN=='合肖') this.arrTicket =  [1] ;
                    if(!this.check()) return;
                    this.oddLen = this.arrTicket.length;
                    this.dialogFormVisible = true;
                }else{
                    if(this.editMount==0){
//                     alert("请选择下注金额！");
                        window.top.wAlert("请选择下注金额！");
                    }else{
                        window.top.wAlert("请选择投注内容！");
//                      alert("请选择投注内容！");
                    }
                }
            },
            //普通彩种选择号码
            isAct(e,name,odds,vv,i){
                let enev = e.currentTarget;
                enev.classList.toggle('warning')
                let nodeList = enev.children[2].children[0];
                let  len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                if(enev.className.indexOf('warning')<= -1){
                    nodeList.value = '';
                }else{
                    if(this.editMount!=0)nodeList.value = this.editMount;
                }
            },
            //六合彩选择号码
            isActLhc(e,v,odds){
                let len;
                if(this.currBall == 6) {
                    if (e.currentTarget.className.indexOf('warning')>-1){
                        e.currentTarget.classList.remove('warning');
                        len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                        if (this.isZhong == 1) {
                            if(len==0){ this.CurrHxOdds = '';return}
                            if(len==1){  this.CurrHxOdds = "中赔率" + this.mainData[13][0].odds;return;}
                            this.CurrHxOdds = "中赔率" + this.mainData[13][len-1].odds;

                        } else {
                            if(len==0){ this.CurrHxOdds = '';return}
                            if(len==1){  this.CurrHxOdds = "不中赔率" + this.mainData[13][10].odds;return}
                            this.CurrHxOdds = "不中赔率" + this.mainData[13][11-len].odds;
                        }
                    } else {
                        len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                        if (this.isZhong == 1) {
                            if (len > 10) return window.top.wAlert("最多只能选11个");
                            this.CurrHxOdds = "中赔率" + this.mainData[13][len].odds;
                        } else {
                            if (len > 9) return window.top.wAlert("最多只能选10个");
                            this.CurrHxOdds = "不中赔率" + this.mainData[13][10-len].odds;
                        }
                        e.currentTarget.classList.add('warning');
                        this.orderProcessHx();

                    }
                }else if(this.currN == '自选不中'||this.currN=='连码'||this.currN == "连肖连尾"){
//                        this.arrTicket = [];
                    if (e.currentTarget.className.indexOf('warning')>-1){
                        e.currentTarget.classList.remove('warning');
                        for(let i=0,len=this.arrName.length;i<len;i++){
                            if(this.currN=='自选不中' || this.currN=='连码'){
                                if(v == this.arrName[i]) this.arrName.splice(i,1)
                            }else if(this.currN=='连肖连尾'){
                                if(v.playd_info == this.arrName[i]) this.arrName.splice(i,1)
                            }
                        }
                    }else {
                        if(!this.check(true)) return;
                        e.currentTarget.classList.add('warning');
                        if(this.currN=='自选不中'||this.currN=='连码'){
                            this.arrName.push(v);
                        }else if(this.currN=='连肖连尾'){
                            this.arrName.push(v.playd_info);
                        }

                    }
                    //组合数据
                    this.orderProcess(odds);
                }else if(this.currBall == "正码过关"){
                    P.removeAllwarning(P.getSiblings(e.currentTarget));
                    e.currentTarget.classList.add('warning');
                }else{
                    let enev = e.currentTarget;
                    enev.classList.toggle('warning')
                    let nodeList = enev.children[2].children[0];
                    len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                    if(enev.className.indexOf('warning')<= -1){
                        nodeList.value = '';
                    }else{
                        if(this.editMount!=0)nodeList.value = this.editMount;
                    }
                }
            },
            //六合彩合肖逻辑
            selectZ(n,e){
                P.removeAllactive(P.getSiblings(e.currentTarget));
                e.currentTarget.classList.add('active');
                this.reset();
                this.resetSix();
                this.isZhong = n;
                //改变赔率
                this.CurrHxOdds = "";
            },
            selectAimail(n,e){
                this.CurrHxOdds = this.isZhong == 1?"中赔率:"+this.mainData[13][5].odds:"不中赔率:"+this.mainData[13][5].odds;
                let allLi = document.querySelectorAll('.table-bet-top .select>li');
                P.removeAllactive(P.getSiblings(e.currentTarget));
                P.removeAllwarning(allLi);
                e.currentTarget.classList.add('active');
                if(n=="野兽"){
                    allLi[0].classList.add('warning');
                    allLi[2].classList.add('warning');
                    allLi[3].classList.add('warning');
                    allLi[4].classList.add('warning');
                    allLi[5].classList.add('warning');
                    allLi[8].classList.add('warning');
                }else if(n=="家禽"){
                    allLi[1].classList.add('warning');
                    allLi[6].classList.add('warning');
                    allLi[7].classList.add('warning');
                    allLi[9].classList.add('warning');
                    allLi[10].classList.add('warning');
                    allLi[11].classList.add('warning');
                }else if(n=="单"){
                    for(let i= 0,len=allLi.length;i<len;i++){
                        if(i%2==0) allLi[i].classList.add('warning');
                    }
                }else if(n=="双"){
                    for(let i= 0,len=allLi.length;i<len;i++){
                        if(i%2!=0) allLi[i].classList.add('warning');
                    }
                }else if(n=="前肖"){
                    for(let i= 0,len=allLi.length;i<len;i++){
                        if(i<6) allLi[i].classList.add('warning');
                    }
                }else if(n=="后肖"){
                    for(let i= 0,len=allLi.length;i<len;i++){
                        if(i>=6) allLi[i].classList.add('warning');
                    }
                }else if(n=="天肖"){
                    allLi[11].classList.add('warning');
                    allLi[1].classList.add('warning');
                    allLi[3].classList.add('warning');
                    allLi[4].classList.add('warning');
                    allLi[6].classList.add('warning');
                    allLi[8].classList.add('warning');
                }else if(n=="地肖"){
                    allLi[2].classList.add('warning');
                    allLi[5].classList.add('warning');
                    allLi[7].classList.add('warning');
                    allLi[9].classList.add('warning');
                    allLi[10].classList.add('warning');
                    allLi[0].classList.add('warning');
                }
                this.orderProcessHx();
            },
            // 六合彩特殊玩法tab切换
            changePlay(k,index,id){
                this.reset();
                if(this.currN=='自选不中'||this.currN=='连码'){
//                    this.tabData =[];
//                    for(let i=1;i<50;i++){
//                        this.tabData.push(i);
//                    }
                    if(this.currN=='自选不中'){
                        this.sixTabNav = L.data_six_do(this.allData)[this.currBall][84];
                        this.currTabNav = this.sixTabNav[index].name;
                        this.currTabNavID = this.sixTabNav[index].id;
                        this.currOdds = this.sixTabNav[index].odds;
                    }else{
//                        this.currTabId =  id;
                        this.currTabNav = this.sixTabNav[index].name;
                        this.currTabNavID = this.sixTabNav[index].id;
                        this.currOdds = this.sixTabNav[index].odds;

                    }
                }else if(this.currN=='正码特'||this.currN=='正码1-6'){
                    this.currTabId = id;
                    this.currTabNav = k;
                }else if(this.currN=='连肖连尾'){
                    this.currTabId = k;
                }

            },
            //合肖
            orderProcessHx(){
                let len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                let arrName = [];
                let arrName2 = [];
                let allLi = document.querySelectorAll('.table-bet-top .select>li');
                for(let i= 0,len=allLi.length;i<len;i++){
                    if(allLi[i].className.includes('warning')) arrName.push(allLi[i].children[0].children[0].innerHTML);
                    else arrName2.push(allLi[i].children[0].children[0].innerHTML);
                }
                if(this.isZhong == 1){
                    this.orderObj.playd_info = [arrName.join(',')];
                }else{
                    this.orderObj.playd_info = [arrName2.join(',')];
                }
                this.orderObj.gid = "NX";
                this.orderObj.playd_group_id = this.currBall;
                this.orderObj.playd_id = [this.mainData[13][len-1].id];
            },
            // 自选不中  / 组合数据
            //组合数据
            orderProcess(odds){
                if(this.currN=='连肖连尾') this.currTabNav= this.currTabId;
                this.arrTicket = [];
                let orders_temp = P.getRank(this.arrName, (this.currTabNav.charAt(0) == '特'||this.currTabNav=='中特') ? 2 : P.num_zh(P.getNumZh(this.currTabId==803?"三":this.currTabNav)));
                let zh_arrName = [];
                for (let j = 0, len = orders_temp.length; j < len; j++) {
                    zh_arrName.push(orders_temp[j]);
                }
                if(this.currN=='自选不中'){
                    this.orderObj.gid ='NI';
                    this.orderObj.playd_id = [this.currTabNavID];
                } else  if(this.currN=='连码') {
                    this.orderObj.playd_id = [this.currTabId];
                    this.orderObj.gid = 'CH';
                }else if(this.currTabId.indexOf('碰')>-1) {
                    this.orderObj.playd_id = [];
                    this.orderObj.gid = 'LF';
                }else  if(this.currN=='连肖连尾') {
                    this.orderObj.playd_id = [];
                    this.orderObj.gid = 'LX';
                }
                this.orderObj.playd_group_id = this.currBall;
                this.orderObj.playd_info = zh_arrName && zh_arrName;
                //确认框数组
                for (let i = 0; i < zh_arrName.length; i++) {
                    let obj = {};
                    obj.content = zh_arrName[i];
                    obj.odds = odds;
                    this.arrTicket.push(obj)
                }
//                console.log('呵呵',this.arrTicket);
            },
            getOdds(){
                if(this.$route.path.indexOf('lottery')<=-1) return;
                this.countDTime = '';
                this.isLoading = true;
                this.getOddsData()
            },
            //获取赔率
            getOddsData(){
                this.getBall();
                this.mainData = [];
                this.jiNav = '';
                let agent = window.sessionStorage.getItem('agent_id');
                let api = "/api/lottery-v1/"+this.fc_type+"/odds/";
                if(this.fc_type=='six') api = "/api/lhc/LhcInfo/odds/";
                this.$http.get(api+'?agent_id='+agent).then(res => {
                    if(this.fc_type!='six'){
                        if(!res.data.playd) return  window.top.wAlert('网络超时，请重新刷新');
                        if(res.data.playd.length==0) {this.mainData=[]; return  window.top.wAlert('请选择其他彩种下注！');}
                        this.allData = L.data_demo_do(res.data.playd);
                        this.topNav = res.data.group;//玩法类型
                        this.currBall = res.data.group[0].id;//当前玩法id
                        this.currN = res.data.group[0].group_name;//当前玩法名字
                        this.mainData = this.allData[res.data.playd[0].playd_guoup_id];//当前数据
                    }else{
                        if(!res.data.list.playd) return alert('网络超时，请重新刷新');
                        if(res.data.list.playd.length==0) {this.mainData=[]; return  window.top.wAlert('请选择其他彩种下注！');}
                        this.allData = res.data.list.playd;
                        this.topNav = res.data.list.group;//玩法类型ok
                        this.currBall = res.data.list.group[0].id;//当前玩法id ok
                        this.mainData = L.data_six_do(this.allData)[1];//当前数据
                        this.currN = res.data.list.group[0].group_name;//当前玩法名字
                        this.hxSelect = Init.getHX;
                        this.sxName = res.data.list.zodias;
                    }
                    this.jiNav = Init.getjx[this.currT][this.currN];
                    this.isLoading = false;
                    if(window.timer_5) clearInterval(window.timer_5)
                    this.timer_5()
                }, res => {
                    this.isLoading = false;
                    this.isLoading3 = false;
                })
            },
            //单独获取正码特/正码1-6数据
            getOddsZmData(pid){
                this.isLoading = true;
                let agent = window.sessionStorage.getItem('agent_id');
                let api= "/api/lhc/LhcInfo/specialOdds/"+'?agent_id='+agent+'&playd_group_id='+pid;
                this.$http.get(api).then(res=>{
                    if(!res.data.list.length) window.top.wAlert('网络超时，请重新刷新');
                    this.ZmSelect = Init.getZmt[pid];
                    this.currTabNav = Init.getZmt[pid][0].name;
                    this.currTabId = Init.getZmt[pid][0].id;
                    this.ZmData = L.data_six_zm_do(res.data.list,'type_name');
                    this.isLoading = false
                },res=>{
                    this.isLoading = false;
                    return  window.top.wAlert('网络超时，请重新刷新');
                })

            },
            //跳转到个人中心额度转换
            linkMoney(){
                parent.location.href = window.location.origin+'/#/moneymanagemen';
            },
            resetD(n){
                this.currCz = n;
            },
            resetSix(){
                P.removeAllactive(document.querySelectorAll(".data-play>div"));
                this.orderObj = {};
                this.CurrHxOdds = '';
            },
            changeCurrBall(v,name){
                if(name=='官方玩法') return window.top.wAlert('官方玩法暂未开发，敬请期待！');
                this.moreA=false;
                this.currBall = v;
                this.currN = name;
                this.isTopNav = false;
                this.isTab = false;
                if(this.currN=='自选不中'||this.currN=='连码') this.isTab = true;
                if(this.currN=='正码特'||this.currN=='正码1-6') this.getOddsZmData(this.currBall);
            },
            reset(){
                this.orderObj = {};
                this.editMount = '';
                this.arrName =[];
                this.arrTicket =[];
                let che = document.querySelectorAll('.check-send');
                let nod = document.querySelectorAll('.input_money');
                let col = document.querySelectorAll('.item-container .col-xs-3.active');
                for(let i=0;i<col.length;i++){
                    col[i].classList.remove('active');
                }
                for(let i =0;i<nod.length;i++){
                    if(nod[i].value){
                        nod[i].value = ''
                    }
                }
                let pod =  document.querySelectorAll('.warning');
                for(let i =0;i<pod.length;i++){
                    pod[i].classList.remove('warning')
                }
                for(let i =0;i<che.length;i++) {
                    che[i].checked = true;
                }

            },
            cancelSend(){
                this.dialogFormVisible = false
                let che = document.querySelectorAll('.check-send');
                for(let i =0;i<che.length;i++) {
                    che[i].checked = true;
                }
            },
            submitSend(){
                if(!this.dataLoding)return;
                if(this.isCloseLoading) return   window.top.wAlert('封盘中！');
                this.dialogFormVisible = false;
                if(this.moneyBox==0) {window.top.wAlert('投注金额为空，请选择！');this.cancelSend();return}
                this.isLoadingS =true;
                let che = document.querySelectorAll('.check-send');
                // 如果是six的情况下
                let pid = [];
                let Info = [];
                let money = [];
                if(this.fc_type=='six'){  //六合彩
                    if(this.currN != '自选不中'&& this.currN != '合肖'&&this.currN!='连肖连尾'&&this.currN!='连码'){
                        this.orderObj = {};
                        for(let i =0;i<che.length;i++){
                            if(che[i].checked){
                                this.orderObj.playd_group_id =che[i].dataset.guoup-0;
                                money.push(che[i].dataset.money-0);
                                pid.push(che[i].dataset.id);
                                Info.push(che[i].dataset.playd_info);
                            }
                            this.orderObj.playd_id = pid;
                            this.orderObj.playd_info = Info;
                        }
                    }else{
                        money= this.editMount;
                    }
                }else{ //彩票
                    this.orderObj = {};
                    for(let i =0;i<che.length;i++){
                        if(che[i].checked){
                            money.push(parseInt(che[i].dataset.money));
                            pid.push(che[i].dataset.id);
                            Info.push(che[i].dataset.playd_info);
                        }
                    }
                    this.orderObj.lot_id = this.currI;
                    this.orderObj.play_id = pid;
                    this.orderObj.play_info = Info;
                    this.orderObj.source = 1;
                }
                this.orderObj.money = money;
                let api = this.fc_type=='six'?'/api/lhc/LhcInfo/Bet':'/api/lottery/order/bet/';
//                this.isLoading =  true;
                this.dataLoding =false;
                this.$http.post(api,this.orderObj).then(response=> {
                  if(!response)return;
                    this.dataLoding =true;
                    this.isLoadingS =false;
                    if(response.data.code ==0){
                        window.top.wAlert(response.data.msg);
                        this.getUserMoney();
                        this.reset();
                    } else if(response.data.code ==1){
                        window.top.wAlert(response.data.msg);
                        let che = document.querySelectorAll('.check-send');
                        for(let i =0;i<che.length;i++) {
                            che[i].checked = true;
                        }
                    }else if (response.data.code==2){
                        window.top.wAlert('请重新登录！', (fn)=>{
                            if(fn){
                                fn();
                            }
                        });

                    }
                })
                    .catch(error=>{
                        window.top.wAlert('下注失败！');
                        this.dialogFormVisible = false;
                        this.dataLoding =true;
                        this.isLoadingS =false;
                    });

            },
            change(k,i,name){
                this.showResult =false;
                this.showNote =false;
                this.fc_type = k;
                if(i<=10) {this.more='更多玩法'}
                else this.more = name;
                this.$router.push('/lottery/'+k+'');
                if(window.top.cwvue) window.top.cwvue.$router.push({path:'/lottery/'+k+'',params:{nload:true}});
                this.currT = Init.getTitle(this.menusData , this.fc_type);
                this.currI = Init.getId(this.menusData, this.fc_type);
                if(this.fc_type=='six') {this.currT=2;this.currI=2}
                this.init();
            },
            //登陆   用户测试下注
            login(){
                this.$http.post("/api/user/login",{
                    password :"123456aa",
                    username:"rose555",
                    codeToken:"11",
                    source:2
                }).then(res=>{
                    if(res.data.code == 0) {
                        window.sessionStorage.setItem('easysecret',res.headers.easysecret);
//                        this.getUserInfo();
                        this.isLogin =true;
                        this.getuser =true;
                    } else {
                        console.log(res.data);
//                        alert(res.data.msg);
//                        window.location.href = 'http://'+window.location.origin;
                        this.userMoney="--";
                        this.isLogin =false;
                        this.getuser =false;
                    }
                }).catch(error=>{

                })
            },
            //获取账户信息
            getUserInfo(){
                this.getuser = false;
//                this.$http.defaults.headers.EasySecret  = this.$cookieStore.getCookie('easysecret');
                this.$http.defaults.headers.EasySecret = window.localStorage.getItem('easysecret');
                this.$http.get("/api/users/info/").then(response => {
                    if(!response)return;
                    if (response.data.code == 0) {
                        this.userMoney = response.data.data.Money;
                        this.userName = response.data.data.UserName;
                        this.isLogin = true;
                        this.getuser = true;
                    } else if(response.data.code == 2) {
                        window.top.wAlert('请重新登录！', (fn)=>{
                            if(fn){
                                fn();
                            }
                        });
                        this.userMoney = "--";
                        this.isLogin = false;
                        this.getuser = false;
                    } else {
                        window.top.wAlert(response.data.msg);
                        this.userMoney = "--";
                        this.isLogin = false;
                        this.getuser = false;
                    }
                }, response => {

                })
            },
            // 获取账户余额
            getUserMoney(){
                this.getuser = false;
                this.$http.get("/api/users/balance/").then(response => {
                  if(!response)return;
                    if (response.data.code == 0) {
                        this.userMoney = response.data.data.money;
                        this.isLogin = true;
                        this.getuser = true;
                    } else if(response.data.code == 2) {
                        window.top.wAlert('请重新登录！', (fn)=>{
                            if(fn){
                                fn();
                            }
                        });
                        this.userMoney = "--";
                        this.isLogin = false;
                        this.getuser = false;
                    }else {
                        window.top.wAlert(response.data.msg);
                        this.userMoney = "--";
                        this.isLogin = false;
                        this.getuser = false;
                    }
                }, response => {
                })
            },
            //快捷选择号码/
            kuaixuan(e,index,name){
//                if(Init.getPlayType(this.fc_id) == 'ssc'&&this.currBall=='整合'||Init.getPlayType(this.fc_id) == '11x5'&&this.currBall=='整合' ||Init.getPlayType(this.fc_id) == '3d'&&this.currBall=='整合' || Init.getPlayType(this.fc_id) == 'sfc'&&this.currBall=='整合'){index++;};

                this.number = this.currT;
                console.log(this.number);
                P.removeAllactive(P.getSiblings(e.currentTarget));
                let box = document.querySelectorAll('.table-bet-top');
                if(e.currentTarget.className.indexOf('active')>-1){
                    e.currentTarget.classList.remove('active');
                    L.getDx(box[index].querySelector('.select').childNodes,name,2);
                }else {
                    e.currentTarget.classList.add('active');
                    L.getDx(box[index].querySelector('.select').childNodes,name,this);
                }
            },
            //机选/全选
            jixuan(n){
                if(n==2) this.isQ =!this.isQ;
                let _this = this;
                let chi = document.querySelectorAll('.input_money');
                let arr = [];
                chi.forEach(function (v,i) {
                    arr.push(v.parentNode.parentNode);
                });
                arr.forEach(function (v,i) {
                    if(n==2){
                        if(_this.isQ){
                            arr[i].classList.add('warning');
                            arr[i].children[arr[i].children.length-1].children[0].value = _this.editMount;
                        } else {
                            arr[i].classList.remove('warning');
                            arr[i].children[arr[i].children.length-1].children[0].value = '';
                        }
                    }else{
                        if(arr[i].className.indexOf('warning')> -1) {
                            arr[i].classList.remove('warning');
                            arr[i].children[arr[i].children.length-1].children[0].value = '';
                        }
                    }
                });
                if(!n){
                    let index  = Math.ceil(Math.random()*arr.length-1);
                    arr[index].classList.add('warning');
                    arr[index].children[arr[index].children.length-1].children[0].value = _this.editMount;
                }
            },
            // 快选金额相加
            getotleMoney(val){
                this.editMount = this.editMount-0;
                this.editMount +=val;
            },
            check(l){
                let len = document.querySelectorAll(".table-bet-top .select>li.warning").length || 0;
                let n;
                if(this.currN=="正码过关"){
                    if(len < 2) {
                        window.top.wAlert('至少选择2组,若只要下一注,请前往正码1-6下注');
                        return false;
                    }else{
                        return true;
                    }
                    this.orderObj.teamcount = len;
//                }
//                else if(this.currBall == 16){
//                    n = P.num_zh(this.currTabNav.charAt(0));
//                    if (this.currTabNav.charAt(0) == '特') n = 2;
//                    if(l) {
//                        if (len >= n + 3) {
//                            this.$layer.alert('请选择' + n + '到' + (n + 3) + '个号码');
//                            return false;
//                        }else{
//                            return true;
//                        }
//                    }else{
//                        if (len < n || len > n + 3) {
//                            this.$layer.alert('请选择' + n + '到' + (n + 3) + '个号码');
//                            return false;
//                        }else{
//                            return true;
//                        }
//                    }
                }else if( this.currN =='自选不中'||this.currN =='连肖连尾'||this.currN =='连码'){
                    if(this.currN=='连肖连尾') n = P.num_zh(P.getNumZh(this.currTabId));
                    else if(this.currN=='自选不中')  n = P.num_zh(P.getNumZh(this.currTabNav));
                    else n =  P.num_zh(P.getNumZh((this.currTabNav.charAt(0) == '特' || this.currTabNav=='中特')?"二":(this.currTabId==803?'三':this.currTabNav)))
                    if(l) {
                        if (len >= n + 3) {
                           window.top.wAlert('请选择' + n + '到' + (n + 3) + '个号码');
                            return false;
                        }else{
                            return true;
                        }
                    }else{
                        if (len < n || len > n + 3) {
                            window.top.wAlert('请选择' + n + '到' + (n + 3) + '个号码');
                            return false;
                        }else{
                            return true;
                        }
                    }
                }else{
                    return true;
                }
            }
        },
        watch:{
            "currBall":function(n,o){
                if(this.fc_type=='six'){
                    this.ZmSelect= '';
                    this.mainData = '';
                    if(n==6){
                        this.mainData =L.data_six_do(this.allData)[6]
                    }else if(n==15 || n==17){
                        this.tabData =[];
                        this.sixTabNav = n==15?L.data_six_do(this.allData)[15]:L.data_six_zm_do(this.allData,'playd_guoup_id')[17];
                        if(n==15){
                            this.currTabNav = this.sixTabNav[84][0].name;
                            this.currTabNavID = this.sixTabNav[84][0].id;
                            this.currOdds = this.sixTabNav[84][0].odds;
                            this.mainData = L.data_six_do(this.allData)[n];
                        }else{
                            this.currTabId = this.sixTabNav[0].id;
                            this.currTabNavID = this.sixTabNav[0].id;
                            this.currTabNav = this.sixTabNav[0].name;
                            this.currOdds = this.sixTabNav[0].odds;
                            this.mainData =this.sixTabNav;
                        }
                        for(let i=1;i<50;i++){
                            this.tabData.push(i);
                        }
                    }else if(n==16) {
                        let a = L.data_six_zm_do(this.allData, 'playd_guoup_id')[n];
                        this.currTabId =  '二连肖';
                        this.ZmData = L.data_six_zm_do(a, 'name');
                    }else {
                        this.mainData = L.data_six_do(this.allData)[n];//当前数据
                    }
                }
                else this.mainData = this.allData[n];
                this.jiNav = Init.getjx[this.currT][this.currN];
                this.currBall = n;
                this.reset();
            },
            "menus":function () {
                this.$nextTick(function () {
                    this.addMore();
                })
            },
            "fc_type":function(n,o){
                this.resetD(n);
            },
            "editMount":function (n) {
//                    this.editMount =  this.editMount-0;
                let pod =  document.querySelectorAll('.warning');
                if(pod){
                    for(let i =0;i<pod.length;i++){
                        pod[i].children[pod[i].children.length-1].children[0].value =  n
                    }
                    if(this.fc_type!='six') this.inputB(n);
                }
            },
            "countDTime":function () {

            },
            '$route':'getOdds'
        },
        computed:{

        },
        filters:{
            filterNavName(name,id){
                if(name=='中二' && id==95) return '三中二/中二'
                if(name=='中三' && id==95) return '三中二/中三'
                if(name=='中特' && id==97) return '二中特/中特'
                if(name=='中二' && id==97) return '二中特/中二'
                else return name
            },
            filterNumber:function (n) {
                n = n-0
                return  n.toFixed(3);
            },
            filterBall:function(n,curr){
                if(curr == 14 || curr == "总肖") return "";
                let ballColor = "";
                if(parseInt(n) && typeof parseInt(n) == "number") ballColor = "ballbg "+Init.getSb(n);
                else ballColor = "";
                return ballColor;
            },
            filterHm:function (n,six,curr) {
                let arr = [];
                if(curr.indexOf('碰')>-1){
                    for(let i =0;i<six.length;i++){
                        let array =  six[i].zodiacdata.split(',');
                        array.forEach(function (v,i) {
                            if(v.indexOf(n,1,1)>-1){
                                arr.push(v);
                            }
                        });
                    }
                }else{
                    for(let i =0;i<six.length;i++){
                        if(six[i].zodiacname==n){
                            arr.push(six[i].zodiacdata);
                        }
                    }
                }
//                let str='';
//                for(let i=0,len=arr.length;i<len;i++){
//                    str+='<i>'+arr[i]+'</i>'
//                 }
//                console.log(232323);
//                console.log(str);
                return arr.join(',');

            },
            filterSum:function (arr) {
                return R.getSum(arr+"");
            }
        },
        components:{
            vueLoading,
            vueResult,
            vueNote,
            HomeHeader
        },
        mounted () {
        },
    }
</script>
<style scope lang="less">
  @import "../assets/css/lottery.less";
  @import "../assets/css/common.less";
  .xx_lottery_hheader .result:hover{
    color:#B62929;
  }
</style>