<template>
    <div>
      <vue-header></vue-header>

        <div class="lottery-box w clearfix">
            <vue-left></vue-left>
            <div class="bet-box">
                <div class="bet-box-top">
                    <div class="lotteryBetMethod">
                        <ul class="twoNav clearfix left" style="max-width: 720px;">
                            <li v-for="v in topNav"><a href="javascript:;" :class="v==currBall?'active':''" @click="currBall=v">{{v}}</a></li>
                        </ul>
                        <div class="result-more right">
                            <a href="">前十期开奖结果</a>
                        </div>
                    </div>
                </div>
                <div class="bet-box-content">
                    <div class="bar-bet clearfix">
                        <div class="left checkbox w50">
                            <label>
                                <input type="checkbox">
                                &nbsp;
                                预设
                            </label>

                        </div>
                        <div class="bet-add w150 left input-group">
                      <span class="input-group-addon ">
                          金额
                      </span>
                            <input type="text" class="form-control">
                        </div>
                        <button type="button" class="btn btn-danger fl bet-add reset">重置
                        </button>
                        <button type="button" class="btn btn-danger fl bet-add ">提交注单</button>
                        <ul class="flex-flow-row left">
                            <li class="cm1"><span>10</span></li>
                            <li class="cm2"><span>50</span></li>
                            <li class="cm3"><span>100</span></li>
                            <li class="cm4"><span>500</span></li>
                            <li class="cm5"><span>1000</span></li>
                            <li class="cm6"><span>5000</span></li>
                        </ul>
                        <div class="right pull-right">
                            5秒
                        </div>
                    </div>
                    <!--// 投注内容-->
                    <div class="table-bet-top clearfix" v-for="(v,index) in mainData" :class="index>0?'secondMb':''" v-if="currBall=='整合'||currBall=='龙虎和'">
                        <p v-if="currBall=='整合'">{{v.title}}</p>
                        <div v-else="">
                            <ul>
                                <li>
                                    <span >号码</span>
                                    <span >赔率</span>
                                    <span>金额</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span >号码</span>
                                    <span >赔率</span>
                                    <span>金额</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span >号码</span>
                                    <span >赔率</span>
                                    <span>金额</span>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span >号码</span>
                                    <span >赔率</span>
                                    <span>金额</span>
                                </li>
                            </ul>
                        </div>
                        <ul class="clearfix">
                            <li v-for="(vv,i) in v.data" :data-id="vv.content_id">
                                <span :class="i<=9?'active':''"><i>{{vv.content_name}}</i></span>
                                <span class="ff9b39" >{{vv.odds}}</span>
                                <span><input type="text" name=""></span>
                            </li>
                        </ul>
                    </div>
                    <div class="table-bet-top clearfix ssc-other-mb"  v-for="(v,index) in mainData" v-if="currBall!='整合'&& currBall!='龙虎和'">
                        <ul>
                            <li>
                                <span >号码</span>
                                <span >赔率</span>
                                <span>金额</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span >号码</span>
                                <span >赔率</span>
                                <span>金额</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span >号码</span>
                                <span >赔率</span>
                                <span>金额</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span >号码</span>
                                <span >赔率</span>
                                <span>金额</span>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span >号码</span>
                                <span >赔率</span>
                                <span>金额</span>
                            </li>
                        </ul>

                        <ul>
                            <li v-for="(vv,i) in v.data" :data-id="vv.content_id">
                                <span :class="i<=9?'active':''"><i>{{vv.content_name}}</i></span>
                                <span class="ff9b39" >{{vv.odds}}</span>
                                <span><input type="text" name=""></span>
                            </li>
                        </ul>
                    </div>





                    <div class="bar-bet clearfix">
                        <div class="left checkbox w50">
                            <label>
                                <input type="checkbox">
                                &nbsp;
                                预设
                            </label>

                        </div>
                        <div class="bet-add w150 left input-group">
                      <span class="input-group-addon ">
                          金额
                      </span>
                            <input type="text" class="form-control">
                        </div>
                        <button type="button" class="btn btn-danger fl bet-add reset">重置
                        </button>
                        <button type="button" class="btn btn-danger fl bet-add ">提交注单</button>
                        <ul class="flex-flow-row left">
                            <li class="cm1"><span>10</span></li>
                            <li class="cm2"><span>50</span></li>
                            <li class="cm3"><span>100</span></li>
                            <li class="cm4"><span>500</span></li>
                            <li class="cm5"><span>1000</span></li>
                            <li class="cm6"><span>5000</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import Init from '../config/lottery_init.js';
    import L from '../controller/lottery.js';
    import VueHeader from './common/header'
    import VueLeft from './common/left'
    export default{
        data(){
            return {
                mainData:'',
                currBall:'',//当前头部玩法导航的名字
                fc_id:0,//测试中
                topNav:'',//玩法导航
                currType:'',//当前玩法系列 ssc pk10等
                allData:'',//当前彩种处理好的所有数据
                isTopNav:false,//是否显示头部玩法下拉
                orderObj:{},//下注信息
            }
        },
        created(){
            this._loading();
        },
        methods:{
            _loading(){
//                this.fc_id=this.$route.params.id;
                this.resetD(this.fc_id);
                this.getOdds();
                this.topNav = Init.playNav[this.currType];
            },
            getOdds(){
                this.$http.get("/api/member/lottery/odds.php?gType="+this.fc_id).then(response => {
                    if(this.currType == "klc") this.mainData = L.doKlcOdds(response.data.oddslist.ball,this)[this.currBall];
                    else this.mainData = L.doOdds(response.data.oddslist.ball,this)[this.currBall];
                    console.log(this.mainData);
                }, response => {
                    // error callback
                })
            },
            resetD(n){
                let c = Init.getPlayType(n);
                this.currBall = Init.playNav[c][0];
                this.currType = c;
            },
            changeCurrBall(v){
                this.currBall = v;
                this.isTopNav = false;
            },
            reset(){

            },
            back(){ this.$router.go(-1);},
            selectBall(id){
                this.orderObj[id] = 10;
                console.log(this.orderObj);
            },
            sendOrder(){
                this.$http.post(this.config.host+'/member/lottery/order_lottery.php?gType='+this.fc_id, this.orderObj)
                    .then(response=> {
                        console.log(response);
                    })
                    .catch(error=>{

                    });
            },
            //登陆   用户测试下注
            login(){
                this.$http.post(this.config.host+"/json/api.php?r=login",{
                    action:"login",
                    password :"123456",
                    username:"rose222"
                }).then(res=>{
                    console.log(res);
                }).catch(error=>{

                })
            }
        },
        watch:{
            "currBall":function(n,o){
                this.mainData = this.allData[n];
                console.log(this.mainData);
            },
            "fc_id":function(n,o){
                this.resetD(n);
            }
        },
        filters:{
            filterName:function(id){
                return Init.getName[id-0];
            }
        },
        components:{
            VueHeader,
            VueLeft
        }

    }
</script>
<style scope>
    @import "../assets/css/lottery.css";
    @import  '../assets/css/common.css';
</style>