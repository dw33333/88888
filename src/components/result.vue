<template>
    <div class="xx_lottery">

        <div class="result-box clearfix">
            <div class="refresh-btn-area">
                <button @click="getHistory"><i class="iconfont icon-icon--"></i></button>
            </div>
            <!--ssc--> <!--sfc-->
            <div class="ssc-h history" v-if="czType==1 || czType==4 || czType==7">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">大小</span>
                    <span :class="currP==3?'active':''" @click="currP=3">单双</span>
                    <span :class="currP==4?'active':''" @click="currP=4" v-if="isId ==200">质合</span>
                    <span :class="currP==5?'active':''" @click="currP=5" v-if="isId ==200">棋牌</span>
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                                <th v-if="isId!=206">第四</th>
                                <th v-if="isId!=206">第五</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="vv in v.data.split(',')"><span>{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                                <th v-if="isId!=206">第四</th>
                                <th v-if="isId!=206">第五</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td v-if="isId==201"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(85)">({{v.data | filterSumDx(85)}})</i></td>
                                <td v-if="isId==202"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(31)">({{v.data | filterSumDx(31)}})</i></td>
                                <td v-if="isId==200"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(23)">({{v.data | filterSumDx(23)}})</i></td>
                                <td v-if="isId==206"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(14)">({{v.data | filterSumDx(14)}})</i></td>
                                <td v-if="isId==210"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(56)">({{v.data | filterSumDx(56)}})</i></td>
                                <td v-for="vv in v.data.split(',')"><span :class="vv | filterColor(4)">{{vv | filterDx(4)}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==3">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                                <th v-if="isId!=206">第四</th>
                                <th v-if="isId!=206">第五</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="vv in v.data.split(',')"><span :class="vv | filterDsbg">{{vv | filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==4">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                                <th>第四</th>
                                <th>第五</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="vv in v.data.split(',')"><span :class="vv | filterDsbg">{{vv | filterZh}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==5">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <!--<th>百家乐</th>-->
                                <th>三公</th>
                                <th>龙虎</th>
                                <th>牛牛</th>
                                <th>梭哈</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <!--<td><span :class="v.data.split(',') | filterSg | filterSgColor">{{v.data.split(',') | filterBjl}}</span></td>-->
                                <td><span :class="v.data.split(',') | filterSg | filterSgColor">{{v.data.split(',') | filterSg}}</span></td>
                                <td><span :class="v.data.split(',') | filterLh | filterSgColor">{{v.data.split(',') | filterLh}}</span></td>
                                <td><span :class="v.data.split(',') | filterniu | filterSgColor">{{v.data.split(',') | filterniu}}</span></td>
                                <td ><span :class="v.data.split(',') | filterSh | filterSgColor">{{v.data.split(',') | filterSh}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                 <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>
            <!--pk10-->
            <div class="pk10-h history" v-if="czType==2">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">大小</span>
                    <span :class="currP==3?'active':''" @click="currP=3">单双</span>
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>冠</th>
                                <th>亚</th>
                                <th>季</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>七</th>
                                <th>八</th>
                                <th>九</th>
                                <th>十</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td v-for="(vv,i) in v.data.split(',')" class="ball"><span :class="'ball'+vv">{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>冠</th>
                                <th>亚</th>
                                <th>季</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>七</th>
                                <th>八</th>
                                <th>九</th>
                                <th>十</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td v-for="(vv,i) in v.data.split(',')" class="ball"><span :class="vv | filterColor(5)">{{vv | filterDx(5)}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==3">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>冠</th>
                                <th>亚</th>
                                <th>季</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>七</th>
                                <th>八</th>
                                <th>九</th>
                                <th>十</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td v-for="(vv,i) in v.data.split(',')" class="ball"><span :class="vv | filterDsbg">{{vv | filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                    <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>

            <!--k10-->
            <div class="k10-h history" v-if="czType==3">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">大小</span>
                    <span :class="currP==3?'active':''" @click="currP=3">单双</span>
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th v-if="this.childId!='Gxklsf'">六</th>
                                <th v-if="this.childId!='Gxklsf'">七</th>
                                <th v-if="this.childId!='Gxklsf'">八</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="(vv,i) in v.data.split(',')"><span>{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th v-if="this.childId!='Gxklsf'">六</th>
                                <th v-if="this.childId!='Gxklsf'">七</th>
                                <th v-if="this.childId!='Gxklsf'">八</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(85)">({{v.data | filterSumDx(85)}})</i></td>
                                <td v-for="(vv,i) in v.data.split(',')"><span :class="vv | filterColor(10)">{{vv |filterDx(10)}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==3">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th v-if="this.childId!='Gxklsf'">六</th>
                                <th v-if="this.childId!='Gxklsf'">七</th>
                                <th v-if="this.childId!='Gxklsf'">八</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="(vv,i) in v.data.split(',')"><span :class="vv | filterDsbg">{{vv |filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                    <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>

            <!--3d  td-h-->
            <div class="td-h history" v-if="czType==5">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">大小</span>
                    <span :class="currP==3?'active':''" @click="currP=3">单双</span>
                    <span :class="currP==4?'active':''" @click="currP=4" v-if="isId==207">长牌/短牌/豹子</span>
                    <!--<span :class="currP==5?'active':''" @click="currP=5" v-if="isId==207">短牌</span>-->
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="vv in v.data.split(',')"><span>{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td v-if="isId==207"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(11)">({{v.data | filterSumDx(11)}})</i></td>
                                <td v-if="isId!=207"><span>{{v.data | filterSum}}</span><i :class="v.data | filterSumColor(14)">({{v.data | filterSumDx(14)}})</i></td>
                                <td v-for="vv in v.data.split(',')"><span :class="vv | filterColor(4)">{{vv | filterDx(4)}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==3">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>第一</th>
                                <th>第二</th>
                                <th>第三</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td v-for="vv in v.data.split(',')"><span :class="vv | filterDsbg">{{vv | filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==4">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>结果</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td>{{v.data}}</td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td><span :class="v.data.split(',') | filterCd | filterCdColor">{{v.data.split(',') | filterCd}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                    <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>

            <!-- klc-->
            <div class="klc-h history" v-if="czType==6">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">总和</span>
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>号码</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td class="w20">{{v.issue}}</td>
                                <td><span v-for="(vv,i) in v.data.split(',')" :class="parseInt(vv)>40?'bgd':'bgx'">{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>开奖号码</th>
                                <th>总</th>
                                <th>总大小</th>
                                <th>总单双</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td>{{v.issue}}</td>
                                <td><span v-for="(vv,i) in v.data.split(',')" :class="parseInt(vv)>40?'bgd':'bgx'">{{vv}}</span></td>
                                <td><span>{{v.data | filterSum}}</span></td>
                                <td><span>{{v.data | filterSum | filterDx(810)}}</span></td>
                                <td><span>{{v.data | filterSum | filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                    <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>
            <!--six-->
            <div class="six-h history" v-if="childId=='six'">
                <div class="tab-title">
                    <span :class="currP==1?'active':''" @click="currP=1">号码</span>
                    <span :class="currP==2?'active':''" @click="currP=2">生肖</span>
                    <span :class="currP==3?'active':''" @click="currP=3">大小</span>
                    <span :class="currP==4?'active':''" @click="currP=4">单双</span>
                </div>
                <div class="tab-container">
                    <div class="tab-content num-box" v-if="currP==1">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>正一</th>
                                <th>正二</th>
                                <th>正三</th>
                                <th>正四</th>
                                <th>正五</th>
                                <th>正六</th>
                                <th>特码</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td class="w20">{{v.qishu}}</td>
                                <td v-for="(vv,i) in v.ball.split(',')"><span :class="vv | filterBall ">{{vv}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content sx-box" v-if="currP==2">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>正一</th>
                                <th>正二</th>
                                <th>正三</th>
                                <th>正四</th>
                                <th>正五</th>
                                <th>正六</th>
                                <th>特码</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td class="w20">{{v.qishu}}</td>
                                <td  v-for="(vv,i) in v.ball.split(',')"><span class="sixsx">{{vv | filterA}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content dx-box" v-if="currP==3">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>正一</th>
                                <th>正二</th>
                                <th>正三</th>
                                <th>正四</th>
                                <th>正五</th>
                                <th>正六</th>
                                <th>特码</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td class="w20">{{v.qishu}}</td>
                                <td v-for="(vv,i)  in v.ball.split(',')"><span :class="vv | filterColor(25)">{{vv | filterDx(25)}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content ds-box" v-if="currP==4">
                        <table cellpadding="0" cellspacing="0">
                            <thead>
                            <tr>
                                <th>期数</th>
                                <th>正一</th>
                                <th>正二</th>
                                <th>正三</th>
                                <th>正四</th>
                                <th>正五</th>
                                <th>正六</th>
                                <th>特码</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="v in ballData">
                                <td class="w20">{{v.qishu}}</td>
                                <td v-for="(vv,i)  in v.ball.split(',')"><span :class="vv | filterDsbg">{{vv | filterDs}}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="xx_link-result">
                    <a href="javascript:;" @click="($router.push({name:'lottery_result',params:{game_name:childId}}))">查看更多</a>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import Init from '../config/lottery_init.js';
    import R from '../config/lottery_rule';
    export default{
        data(){
            return {
                czType:null,
                currP:1,
                ballData:'',
                load:null,
                isId:'',
                fdata:{
                    p:1,
                    ps:10,
                    t:''
                }
            }
        },
        methods:{
            getHistory(){
                if(!this.$route.path.includes('lottery')) return;
                let api = this.childId=='six'?'/api/lhc/LhcInfo/kaiJiangHistory':'/api/lottery-v1/'+this.childId+'/history';
                this.$http.post(api,this.fdata).then(response => {
                  if(!response)return;
                    this.ballData = response.data.list;
//                    console.log('23333',this.ballData);
                }, response => {
                })
            },
            getczType(){
                this.isId =  Init.getTitle(this.childData, this.childId);
                let i = this.isId;
                if(i == 200||i == 206||i == 208){
                    this.czType = 1;
                }else if(i == 204){
                    this.czType = 2;
                } else if(i == 201){
                    this.czType = 3;
                }else if( i==209){
                    this.czType = 5;
                }else if(i == 205||i == 207 ){
                    this.czType = 5;
                }else if(i == 203){
                    this.czType = 6;
                }else if(i == 202||i==210){
                    this.czType = 7;
                }else if(i == "six"){
                    this.czType = 8;
                }
            },
        },
        created(){
            this.getczType();
            this.getHistory();
        },
        props: {
            childId: String,
            childData: null,
        },
        filters:{
            filterSum(arr){
                return R.getSum(arr);
            },
            filterDx(n,s){
                if(n>s) return '大'
                else return '小'
            },
            filterBall(n){
                let ballColor = "";
                if(parseInt(n));ballColor = "ballbg "+Init.getSb(n);
                return ballColor;

            },
            filterColor(n,s){
                if(s==4){  //ssc大小
                    if(n>s) return 'blue'
                    else return 'green'
                }else if(s==5){ //pk10大小
                    if(n>s) return 'blue'
                    else return 'green'
                }else if(s==10){ //k10大小
                    if(n>s) return 'red'
                    else return 'blue'
                } else if(s==25){ //k10大小
                    if(n>s) return 'blue'
                    else return 'green'
                }

            },
            filterSumDx(arr,num){
               return R.SumDx(arr,num)
            },
            filterSumColor(arr,num){
                let sum = R.getSum(arr);
                if(sum >= num) return 'blue';
                else return 'green';
            },
            filterDs(n){
                if(n%2==0) return '双'
                else return '单'
            },
            filterZh(n){
                if(n==0||n==4||n==6||n==8||n==9) return '合'
                else return '质'
            },
            filterDsbg(n){
                if(n%2==0) return 'zbg'
                else return 'lbg'
            },
            filterA:function (n) {
                return Init.getA(n);
            },
            filterSg:function (arr) {
             return R.ResultSg(arr);
            },
            filterBjl:function (arr) {
             return R.ResultBjl(arr);
            },
            filterLh:function (arr) {
               if(arr[0]- 0>arr[4]- 0) return '龙';
               else if(arr[0]- 0<arr[4]- 0) return '虎';
               else return '和'
            },
            filterSh:function (Array) {
                return R.getSh(Array,1)
            },
            filterCd:function (Array) {
                return R.getSh(Array,2)
            },
            filterSgColor:function (n) {
                if(n=='庄' || n=='龙' || n=='杂六') return 'blue';
                 else if(n=='闲' ||n=='虎'|| n.indexOf('无')<=-1 || n=='一对' ||n=='两对' || n=='三张' || n=='葫芦' || n=='豹子' || n=='四张') return 'red';
                 else return 'green'
            },
            filterCdColor:function (n) {
                if(n.indexOf('长牌')>-1) return 'blue';
                else if(n.indexOf('短牌')>-1) return 'red';
                else  return 'green';
            },
            filterniu:function (arr) {
              return R.fiterniuniu(arr);
            }
        }
    }
</script>
<style scope lang="less">
@import "../assets/css/common.less";
    .history{position: absolute;top: 90px;z-index: 99;
        width: 100%;
        height: 87%;
        font-size: 14px;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ccc;
        border: 1px solid rgba(0,0,0,.15);
        box-shadow: 0 6px 12px rgba(0,0,0,.175);

    }
    .refresh-btn-area{
        position: absolute;
        z-index: 22;
        text-align: right;
        top: 50px;
        width: 100%;
        background: #f8f8f8;
        padding: 6px 12px;
        border-bottom: 1px solid #ccc;
    }
    .refresh-btn-area>button{
        cursor: pointer;
        padding: 3px 5px;
        background: #646464;
        color: #fff;
        font-size: 14px;
        border-radius: 4px;
    }
    .tab-title{border-bottom: 1px solid #e5e5e5;text-align: center;background: #fff;padding: 10px 0}
    .tab-title span{display: inline-block; background:#ddd;border-radius: 4px;
        box-shadow: 0 0 1px #6f6f6f;    border: 1px solid transparent; padding: 0 10px; height: 30px;line-height:30px;
        font-size: 14px;color: #72a5d0;cursor: pointer}
    .tab-title span.active{background:#428bca;border-radius: 4px; box-shadow: 0 0 1px #153a6f;  color: #fff!important;}
    .tab-title span.active:hover{background:#357ebd;}
    .tab-container table{width: 100%;text-align: center;font-size: .38rem;}
    .tab-container table thead th{padding:10px 0;background: #fff;font-size: 14px;border:none;border-bottom: 1px solid #e5e5e5;font-weight:700;color: #ff9b39; }
    .tab-container table thead th:nth-child(-n+2){color: #666;font-weight: 400}
    .tab-container table tbody{background: #fff;}
    .tab-container table tbody td{padding: 10px 5px;border: none;border-bottom: 1px solid #e5e5e5;font-size: 14px;color: #666;text-align: center;}
    .tab-container table tbody td.w20{padding:10px 20px;}

    .ssc-h .num-box td span,
    .six-h .num-box td span,
    .k10-h .num-box td span,
    .td-h .num-box td span,
    .k10-h .tab-container>div td:nth-of-type(3) span,
    .ssc-h .dx-box td:nth-of-type(3) span,
    .ssc-h .ds-box td:nth-of-type(3) span,
    .td-h .dx-box td:nth-of-type(3) span,
    .td-h .ds-box td:nth-of-type(3) span
    {background: url("../assets/images/red-ball-sm.png") center no-repeat;background-size: contain;
        display: block; width:24px;height:24px;font-size: 12px; line-height:24px;color: #fff;display: inline-block}

    .ssc-h .dx-box td:nth-of-type(3) span,
    .ssc-h .ds-box td:nth-of-type(3) span,
    .td-h .dx-box td:nth-of-type(3) span,
    .td-h .ds-box td:nth-of-type(3) span
    {display: inline-block}

    .ssc-h .ds-box td span,
    .ssc-h .dx-box td span,
    .pk10-h td.ball span,
    .k10-h td span,
    .td-h td span
    {border-radius: 50%; display: inline-block !important;line-height: .6rem; text-align: center;}

    /*ssc*/
    .blue{color: rgb(36, 0, 252) !important;font-weight: bold}
    .red{color: rgb(230, 19, 0) !important;font-weight: bold;background: none!important;}
    .green{color: rgb(0, 114, 36) !important;font-weight: bold}
    .zbg{    color: rgb(255, 0, 0)!important;font-weight: 700}
    .lbg{color: rgb(180, 72, 216)!important;font-weight: 700}
    .sixsx{color: #ff9b39;font-weight: 600}

    /*pk10*/
    .pk10-h td.ball span{color: #fff; display: inline-block;width: 26px;height: 26px;line-height: 26px;}
    .pk10-h th,.k10-h th{color: #e61300}
    .pk10-h th:first-of-type,.k10-h th:first-of-type{color: #333;}
    .ball01,.ball02,.ball03,.ball04,.ball05,.ball06,.ball07,.ball08,.ball09,.ball10{border-radius: 0!important;border: 1px solid #000}
    .ball01{background: #ffff02;  color: #000!important;}
    .ball02{background: #0088fe;}
    .ball03{background: #000;}
    .ball04{background: #ff7300;}
    .ball05{background: #81fffe; color: #000!important;}
    .ball06{background: #5300ff;}
    .ball07{background: #e3e3e3; color: #000!important;}
    .ball08{background: #f20000;}
    .ball09{background: #710000;}
    .ball10{background: #229600;}
    .blueBg{background: #638ff4;}
    .orangeBg{background: #ff8949;}

    /*k1c 快乐8*/
    .klc-h td span{display: inline-block; width: 25px; height: 26px; line-height: 25px; text-align: center; font-weight: bold;}
    .klc-h td span.bgd{background-image: url(../assets/images/ball-sm.png);  background-repeat: no-repeat;  background-position: 0 -31px;color: #333}
    .klc-h td span.bgx{background-image: url(../assets/images/ball-sm.png);  background-repeat: no-repeat;  background-position: 0 -92px;}
    @media screen and (max-width: 400px){.w20{width: 27% !important}}
    @media screen and (max-width: 420px) { .w20{width: 34%} }
    @media screen and (max-width: 360px) { .w20{width: 25%}}
    @media screen and (max-width: 320px) {.w20{width: 17% !important} }

    /*波色*/
    .ballbg{
        border-radius: 50%!important;
    }
    .rColor{
        background: -webkit-gradient(linear, left top, left bottom, from(#F05190), to(#E74231))!important;
        background: -webkit-linear-gradient(#F05190,#E74231)!important;
        background: linear-gradient(#F05190,#E74231)!important;
    }
     .gColor{
        background: -webkit-gradient(linear, left top, left bottom, from(#5d5), to(#8BC34A))!important;
        background: -webkit-linear-gradient(#5d5, #8BC34A)!important;
        background: linear-gradient(#5d5, #8BC34A)!important;
    }
    .bColor{
        background: -webkit-gradient(linear, left top, left bottom, from(#59e), to(#0E4FC3))!important;
        background: -webkit-linear-gradient(#59e, #0E4FC3)!important;
        background: linear-gradient(#59e, #0E4FC3)!important;
    }
     .fl {float: left;}
    .fr {float: right;}
    .clearfix:before, .clearfix:after {content: "";  display: table;}
    .clearfix:after {clear: both;}
    .clearfix { *zoom: 1;}
    /*查看更多*/
    .xx_link-result{
        margin-top: 20px;
    }
    .xx_link-result a{
        color: #333;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
   }
  .xx_link-result a:hover{
      border: 1px solid #ccc;
       background: #eee;
 }
</style>
