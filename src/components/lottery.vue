<template>
    <div>
    <home-header >
      <div slot="lottery_result" class="items result" style="cursor:pointer;" @click="($router.push({name:'lottery_result',params:{game_name:$route.params.id}}))">
        开奖结果
      </div>
    </home-header>
    <div class="lottery-r-box w">
        <vue-result v-if="showResult" :child-id="fc_type" :child-data="this.menusData"></vue-result>
        <vue-note v-if="showNote" :child-id="currI"></vue-note>
        <div>
            <div class="lottery-header w">
                <div class="lottery-header-top w">
                    <div class="lottery-nav">
                        <ul class="clearfix">
                            <li  v-for="(v,index) in menus" @click="change(v.name,index)" :class="fc_type==v.name?'active':''" v-if="index<=10">
                                    <router-link :to="{name:'lottery',params:{id:v.name}}">
                                        {{v.short_name}}
                                    </router-link>
                            </li>
                            <li @mouseover="isMenu=true" @mouseout="isMenu=false"   v-for="(v,index) in menus"  v-if="index==10" :class="more!='更多玩法'?'active':''">
                                <a href="javascript:;" class="moreNav ">
                                    {{more}}
                                    <span class="caret"></span>
                                </a>
                                <ul v-if="isMenu" class="dropdown-menu" @mouseover="isMenu=true" @mouseout="isMenu=false" >
                                    <li  v-for="(v,index) in menus" @click="change(v.name,index);more=v.short_name" :class="fc_type==v.name?'active':''" v-if="index>10">
                                        <router-link :to="{name:'lottery',params:{id:v.name}}">
                                            {{v.short_name}}
                                        </router-link>
                                    </li>
                                </ul>
                            </li>

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
                                <span v-for="(v,key) in result">{{key}}</span>
                                <span class="current-issue-tip">期</span>
                            </p>
                            <!--<p>开奖选项</p>-->
                        </div>
                        <div class="result-no" v-if="currT==200"  v-for="(v,key) in result" >
                            <i class="redball"  v-for="vv in v" v-if="vv">{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div >
                        <div class="result-no"  v-if="currT==204" v-for="(v,key) in result">
                            <i class="redball" v-for="vv in v" v-if="vv">{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
                        </div>
                           <div class="result-no" v-if="currT==201"v-for="(v,key) in result">
                               <i class="redball kl" v-for="vv in v" v-if="vv" :class="'fruit_'+v"  >{{vv}}</i>
                               <p  v-else>暂无开奖结果！</p>
                           </div>
                        <div class="result-no" v-if="currT==203 ||currT==209" v-for="(v,key) in result">
                            <i class="redball" v-for="vv in v" v-if="vv" >{{vv}}</i>
                            <p  v-else>暂无开奖结果！</p>
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
                            <span class="daac36 awardNum t">{{inFo.number}}
                                <span class="daac360 current-issue-tip">期</span>
                            </span>
                            <!--<span >{{closeT}}</span>-->
                            <div id="betTime">{{countDTime}} <span v-if="countDTime==''">00:00:00</span> </div>
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
                    <div class="result-more t" @click="linkMoney">
                        <a href="javascript:;"> <i class="iconfont icon-weibiaoti8"></i>额度转换</a>
                    </div>
                    <div class="result-more z" @click="showNote=!showNote">
                        <i class="iconfont icon-search"></i>
                        <a href="javascript:;"> 注单查询</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="lottery-box w clearfix">
            <div class="bet-box">
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
                                    <li class="cm1" @click="editMount+=10"><span>10</span></li>
                                    <li class="cm2"@click="editMount+=50"><span>50</span></li>
                                    <li class="cm3"@click="editMount+=100"><span>100</span></li>
                                    <li class="cm4"@click="editMount+=500"><span>500</span></li>
                                    <li class="cm5" @click="editMount+=1000"><span>1000</span></li>
                                    <li class="cm6"@click="editMount+=5000"><span>5000</span></li>
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
                                      <div class="item-container" v-for="(v,k,i) in jiNav" :data-index="i" >
                                          <h4 >{{k}}</h4>
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
                        <li class="cm1" @click="editMount+=10"><span>10</span></li>
                        <li class="cm2" @click="editMount+=50"><span>50</span></li>
                        <li class="cm3" @click="editMount+=100"><span>100</span></li>
                        <li class="cm4" @click="editMount+=500"><span>500</span></li>
                        <li class="cm5" @click="editMount+=1000"><span>1000</span></li>
                        <li class="cm6" @click="editMount+=5000"><span>5000</span></li>
                    </ul>
                    <div class="right pull-right">
                        <!--5秒-->
                    </div>
                </div>
                <el-form-item :label-width="formLabelWidth">
                      <table cellspacing="0" cellpadding="0" class="table-confirm" >
                    <thead>
                    <tr >
                        <th>选项</th>
                        <th>赔率</th>
                        <th >金额</th>
                        <th >确认</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(v,i) in arrTicket">
                        <td ><i v-if="v.title">{{v.title}}</i> &nbsp;{{v.content_name}}</td>
                        <td >{{v.odds}}</td>
                        <td ><input type="number" oninput="if(value.length>6)value=value.slice(0,6)"  v-model="v.money"  v-on:input="inputB()" class="inputB b" ></td>
                        <td ><input type="checkbox" checked="checked" class="check-send" :data-id="v.id" :data-guoup="v.gid" :data-playd_info="v.playd_info" :data-money="v.money" :data-odd="v.odds" @click="removeList($event);"></td>
                    </tr>
                    </tbody>
                </table>
                </el-form-item>
                <el-form-item>
                    <table cellspacing="0" cellpadding="0" >
                        <tbody>
                        <tr>
                            <td >组数 {{oddLen}}</td>
                            <td v-if="isTab && currBall!=9&& ifCofm &&fc_type=='six'">
                                总金额{{oddLen*editMount | filterNumber}}
                            </td>
                            <td v-if="currBall!=6">总金额{{moneyBox | filterNumber}}</td>
                            <td v-if="currBall==6">金额{{editMount | filterNumber}}</td>
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
</template>
<script>
    import Init from '../config/lottery_init.js';
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
                menusData:'',
                allTime:'',
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
            // 获取当期开奖结果
            timer_30(){
                if (window.timer_30) clearInterval(window.timer_30);
                window.timer_30 = setInterval(() => {
                    this.getBall(2);
                }, 60000);
            },
            //获取玩法导航
            getMenus(){
               this.$http.get("/api/lottery/basic/LotteryGroup").then(res=>{
                   if (!res.data) return  window.top.wAlert('网络超时，请重新刷新');
                   this.menusData = res.data;
                   let arr = [];
                    for(let i =0;i<res.data.length;i++){
                        arr = arr.concat(res.data[i].type);
//                        this.typeName.push(res.data[i].name);
                    }
                   this.menus  =arr;
                   if(this.fc_type=='six') return this.currT=2;
                   this.currT = Init.getTitle(this.menusData, this.fc_type);
                   this.currI = Init.getId(this.menusData, this.fc_type);

               },res => {
                   return  window.top.wAlert('网络超时，请重新刷新');
               })
            },
            getBall(n){
                if(n!=2){
                    this.isLoading2 = true;
                    this.result = '';
                }
//                this.showResult = false;
//                this.showNote = false;
                let api = "/api/lottery-v1/"+this.fc_type+"/opentime";
                this.$http.get(api).then(response => {
                        if(response.data){
//                        this.result =response.data;
                        this.inFo = response.data;
                        if(window.timer_5) clearInterval(window.timer_5);
                        this.timer_5();
                        if(window.timer1) clearInterval(window.timer1);
                        this.timer();
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
                        if(this.inFo.opentime==0) {
                            this.closeT = '距离截止时间';
                            this.isCloseLoading=false;
                            this.getOdds();
                        }
                        if(!this.inFo) return;
                        if(this.inFo.opentime<0) return;

                    }
                    this.countDTime = this.fc_type =='six'?L.count(this.sixInfo.closeTime--,this):L.count(this.inFo.opentime--,this);
                },1000);
            },
            //5s自动刷新一次时间赔率
            timer_5(){
                if (window.timer_5) clearInterval(window.timer_5);
                window.timer_5 = setInterval(() => {
//                    this.changeOdds();
                    this.getBall(2);
                    this.getUserInfo();
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
                          v.money = n
                      })
                  }
                }else if(n){
                    if(this.arrTicket) {
                        this.arrTicket.forEach((v, i) => {
                            v.money = n
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
                this.$http.get("/api/lottery-v1/"+this.fc_type+"/odds/").then(res => {
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
                if(this.isCloseLoading)   window.top.wAlert('封盘中！！');
                this.ifCofm =true;
                if(this.currBall=='正码过关'||this.currBall==16||this.currBall=='连肖'||this.currBall=='连尾'||this.currBall==15||this.currBall==6) this.ifCofm =false;
                let nod =  document.querySelectorAll('.warning .input_money');
                let parent =  document.querySelectorAll('.warning');
                let arr = [];
                this.moneyBox = 0;
                this.editMount = this.editMount-0;
                for(let i =0;i<nod.length;i++){
                    // 判断最小，最大下注金额
                     let min = nod[i].dataset.min;
                     let max = nod[i].dataset.max;
                    if(nod[i].value-0<min-0 || nod[i].value-0>max-0) return   window.top.wAlert("下注金额在"+min+" - "+max+"之间");
                    let obj = {};
                    if(nod[i].value&&nod[i].value!=0 || !this.ifCofm || this.currBall=='正肖' ||this.currBall=='特码生肖'|| this.currBall=='一肖'|| this.currBall=='半半波'){
                        if(this.currBall==6) obj.money =this.editMount;
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
                            if(this.currBall=='正肖' || this.currBall=='特码生肖'|| this.currBall=='一肖' || this.currBall=='半半波')this.moneyBox += this.editMount
                            else this.moneyBox += (nod[i].value-0);
                        }
                        arr.push(obj);
                    }
                }
                if(arr.length&&this.editMount!=0&&parent.length ){
                        this.arrTicket =[];
                        this.arrTicket = arr;
                    this.oddLen = this.arrTicket.length;
                    this.dialogFormVisible = true;
                }else{
                  if(this.editMount==0){
                      window.top.wAlert("请选择下注金额！");
                  }else{
                      window.top.wAlert("请选择投注内容！")
                  }
               }
            },
            isAct(e,name,odds,vv,i){
                    if(this.fc_type=='six'){
                        let len;
                        if(this.currBall == 6) {
                            if (e.currentTarget.className.indexOf('warning')>-1){
                                e.currentTarget.classList.remove('warning');
                                len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                                if (this.isZhong == 1) {
                                    if(len==0){ this.CurrHxOdds = '';return}
                                    if(len==1){  this.CurrHxOdds = "中赔率" + this.mainData[0].odds;return;}
                                    this.CurrHxOdds = "中赔率" + this.mainData[len-1].odds;

                                } else {
                                    if(len==0){ this.CurrHxOdds = '';return}
                                    if(len==1){  this.CurrHxOdds = "不中赔率" + this.mainData[10].odds;return}
                                    this.CurrHxOdds = "不中赔率" + this.mainData[11-len].odds;

                                }
                            } else {
                                len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                                if (this.isZhong == 1) {
                                    if (len > 10) return  window.top.wAlert("最多只能选11个");
                                    this.CurrHxOdds = "中赔率" + this.mainData[len].odds;
                                } else {
                                    if (len > 9) return   window.top.wAlert("最多只能选10个");
                                    this.CurrHxOdds = "不中赔率" + this.mainData[10-len].odds;
                                }
                                e.currentTarget.classList.add('warning');
                                this.orderProcessHx();

                            }
                        }else if(this.currBall == "连肖"||this.currBall == 15||this.currBall == 16||this.currBall == "连尾"){
                            this.arrTicket = [];
                            if (e.currentTarget.className.indexOf('warning')>-1){
                                e.currentTarget.classList.remove('warning');
                                for(let i=0,len=this.arrName.length;i<len;i++){
                                    if(name == this.arrName[i]) this.arrName.splice(i,1)
                                }
                            }else {
                                 if(!this.check(true)) return;
                                 e.currentTarget.classList.add('warning');
                                this.arrName.push(name);
                            }
                        }else if(this.currBall == "正码过关"){
                            P.removeAllwarning(P.getSiblings(e.currentTarget));
                            e.currentTarget.classList.add('warning');
                        }else{
                            this.showResult = false;
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

                    }else{
                        this.showResult = false;
                        let enev = e.currentTarget;
                        enev.classList.toggle('warning')
                        let nodeList = enev.children[2].children[0];
                        let  len = document.querySelectorAll(".table-bet-top .select>li.warning").length;
                        if(enev.className.indexOf('warning')<= -1){
                            nodeList.value = '';
                        }else{
                            if(this.editMount!=0)nodeList.value = this.editMount;
                        }
                    }

            },
            getOdds(){
                this.getBall();
                if(this.$route.path.indexOf('lottery')<=-1) return;
                this.countDTime = '';
                this.isLoading = true;
                this.getOddsData()
            },
            //获取赔率
            getOddsData(){
                this.mainData = [];
                let agent = window.localStorage.getItem('agent_id');
                let api = "/api/lottery-v1/"+this.fc_type+"/odds/";
                if(this.fc_type=='six') api = "/api/lhc/LhcInfo/odds/";
                this.$http.get(api+'?agent_id='+agent).then(res => {
                        if(!res.data.playd) return  window.top.wAlert('网络超时，请重新刷新');
                        if(res.data.playd.length==0) {this.mainData=[]; return  window.top.wAlert('请选择其他彩种下注！')}
                        this.allData = L.data_demo_do(res.data.playd);
                        this.topNav = res.data.group;//玩法类型
                        this.currBall = res.data.group[0].id;//当前玩法id
                        this.currN = res.data.group[0].group_name;//当前玩法名字
                        this.mainData = this.allData[res.data.playd[0].playd_guoup_id];//当前数据
                       this.jiNav = Init.getjx[this.currT][this.currN];
                       this.isLoading = false;

                }, res => {
                    this.isLoading = false;
                    this.isLoading3 = false;
                })
            },
            //跳转到个人中心额度转换
            linkMoney(){
                parent.location.href = window.location.origin+'/moneymanagemen';
            },
            resetD(n){
                this.currCz = n;
            },
            resetSix(){
                P.removeAllactive(document.querySelectorAll("#data-play>div"));
                this.orderObj = {};
                this.CurrHxOdds = '';
            },
            changeCurrBall(v,name){
                this.moreA=false;
                this.currBall = v;
                this.currN = name;
                this.isTopNav = false;
            },
            reset(){
                this.orderObj = {};
                this.editMount = '';
                this.arrName =[];
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
                  //彩票
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
                     this.orderObj.money = money;
                    this.orderObj.source = 1;
                    let api = this.fc_type=='six'?'/api/lhc/LhcInfo/Bet':'/api/lottery/order/bet/';
//                this.isLoading =  true;
                this.dataLoding =false;
                this.$http.post(api,this.orderObj).then(response=> {
                        this.dataLoding =true;
                        this.isLoadingS =false;
                        if(response.data.code ==0){
                            window.top.wAlert(response.data.msg);
                            this.getUserMoney();
                            this.reset();
                         } else if(response.data.code ==1){
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
            change(k,i){
                this.showResult =false;
                this.showNote =false;
                this.fc_type = k;
                if(i<=10) this.more='更多玩法';
                this.$router.push('/lottery/'+k+'');
                if(window.top.cwvue) window.top.cwvue.$router.push({path:'/lottery/'+k+'',params:{nload:true}});
                this.currT = Init.getTitle(this.menusData , this.fc_type);
                this.currI = Init.getId(this.menusData, this.fc_type);
                this.init();
            },
            //登陆   用户测试下注
            login(){
//                this.$http.defaults.headers.source =2;
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
//                        console.log(res.data);
//                        alert(res.data.msg);
//                        parent.location.href = window.location.origin;
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
                this.$http.get("/api/users/info").then(response => {
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
                    this.$http.get("/api/users/balance").then(response => {
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
        },
        watch:{
            "currBall":function(n,o){
                this.mainData = this.allData[n];
                this.jiNav = Init.getjx[this.currT][this.currN];
                this.currBall = n;
                this.reset();
            },
            "fc_type":function(n,o){
                this.resetD(n);
            },
            "editMount":function (n) {
                    this.editMount = n-0;
                 let pod =  document.querySelectorAll('.warning');
                    if(pod){
                        for(let i =0;i<pod.length;i++){
                            pod[i].children[pod[i].children.length-1].children[0].value =  n
                        }
                        if(this.currBall!='合肖') this.inputB(n);
                    }
            },
            "countDTime":function () {

            },
            '$route':'getOdds'
        },
        filters:{
            filterNumber:function (n) {
                n = n-0
                return  n.toFixed(3);
            },
        },
        components:{
            vueLoading,
            vueResult,
            vueNote,
            HomeHeader
        },
        mounted () {
            document.getElementById('nav').style.display = "none";
            document.getElementById('backhide').style.display = "none";
            document.getElementById('backPage').style.display = "block";
            document.getElementById('presonInput').style.display = "none";
            document.getElementById('presonInput2').style.display = "none";
            document.getElementById('showId').style.display = "block";
        },

    }
</script>
<style scope>
  @import "../assets/css/lottery.css";
</style>