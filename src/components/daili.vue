<template>
<div>
    <headervue></headervue>
    <ssheader></ssheader>
    <div class="daili_bg" style=" color: #fff;">
    <div style="width: 1030px; margin: 0 auto;">
        <table border="0" cellspacing="0" cellpadding="0" style="float:left;margin-top: 50px;width: auto;">
                <tbody>
                <tr>
                <td><img src="../../static/img/1.png"></td>
                </tr>
                    <tr>
                <td> <router-link to="/live"><img src="../../static/img/2.png"></router-link></td>
                </tr>
                    <tr>
                <td> <router-link to="/moregame"><img src="../../static/img/3.png"></router-link> </td>
                </tr>
                    <tr>
                <td> <router-link to="/lottery/Cqssc"><img src="../../static/img/4.png"></router-link> </td>
                </tr>
                    <tr>
                <td> <router-link to="/Activity"><img src="../../static/img/5.png"></router-link> </td>
                </tr>
                    <tr>
                <td> <router-link to="/register"><img src="../../static/img/6.png"></router-link> </td>
                </tr>
                    <tr>
                <td><img src="../../static/img/7.png"></td>
                </tr>
            </tbody>
        </table>
        <div style="width: 754px; float: right; margin-right: 0px;background-color: #1a0f0c;margin-top: 50px;">
            <div style="width: 714px; margin: 0 auto; padding: 10px;">
                <div>
                    <ul id="lskdfldkjflsdf" class="mtab-menual">
                        <li flag="Agent1" @click="isShow(1)" :class="{mtab:1 == index}">联盟方案</li>
                        <li flag="Agent2" class="" @click="isShow(2)" :class="{mtab:2 == index}">联盟协议</li>
                        <li><a href="http://88888hq.com/agent/agent_login.php" target="_blank">代理登录</a></li>
                    </ul>
                    <div class="agent-panel" id="Agent1" v-show="fangan" >
                        <p> <strong>联盟方案</strong> </p>
                        <p> <font face="微软雅黑" size="2">环球娱乐，合法注册于英国之博彩公司，使用国际认证知名品牌六大平台，拥有多元化的产品，提供会员最公平、公正、公开的游戏与稳定的系统。在市场上的众多博彩网站中，我们自豪的提供会员最优惠的回馈，给予代理最优势的营利回报! 
                            无论您拥有的是网络资源或是人脉资源，都欢迎您来加入环球娱乐代理的行列，无须支出任何手续费用及押金，就能让您月入百万。环球娱乐，绝对是您最聪明的选择!<br>
                            <br>
                            <b><font color="#ffd855">代理申请：</font></b><br>
                            <br>
                            请点击<font color="#ffd855">【代理注册】</font>线上提出申请或联系客服，并确实填写各项资料(一定要确实留下有效电子邮箱）。我们会评估审核联盟申请讯息，3日内由专员与您联系开通，并提供您的注册帐号、密码及推广连结。</font> </p>
                        <p><b><font face="微软雅黑" size="2" color="#ffd855">代理佣金方案 ：</font></b></p>
                        <font color="#000000"> </font>
                        <table border="5" cellpadding="1" cellspacing="1" style="border-collapse: collapse; border-spacing: 2px; display: table; color: rgb(255, 255, 255); font-family: STHeiti, 'Microsoft YaHei', 微软雅黑, SimSun, 宋体, arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; height: 166px; width: 630px; border-width: 1px" id="table3">
                            <tbody style="display: table-row-group; vertical-align: middle">
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; margin: 0px; padding: 0px"><p style="line-height: 22px; display: block; text-align: center; margin: 0px; padding: 0px"> <font color="#ffd855"> <strong style="font-style: normal; font-weight: bolder">当月盈利</strong> </font></p></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder">最低有效会员</strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder">真人,运动,机率</strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder">体育投注</strong></td>
                                </tr>
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#fff">1~50000</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">3</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">30%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"> 10%</td>
                                </tr>
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#fff">50001~300000</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">5</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">35%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">10%</td>
                                </tr>
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#fff">300001~500000</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">20</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">40%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">10%</td>
                                </tr>
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#fff">500001~1000000</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">30</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">45%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">10%</td>
                                </tr>
                                <tr>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#fff">1000001以上</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">50</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">50%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">10%</td>
                                </tr>
                            </tbody>
                        </table>
                        <ul>
                            <li><font color="#ffd855"> <span style="font-family: STHeiti, 'Microsoft YaHei', 微软雅黑, SimSun, 宋体, arial; font-size: 12px; letter-spacing: normal">注：请谨记任何使用不诚实方法骗取佣金将会永久冻结账户，佣金一律不发还！环球娱乐保留上述条例之最终更改权！</span></font></li>
                        </ul>
                        <p> <font face="微软雅黑" size="2"><font color="#ffd855"><b>回馈/佣金计算:</b></font><br>
                            <br>
                            ◆请注意：<br>
                            <br>
                            视讯、球类、机率等项目，以报表中【派彩】字段，扣除相应费用后，依照上表门坎 X 佣金百分比。彩票项目以报表中【实际投注】字段，扣除相应费用后 X 0.1% 
                            佣金百分比。<br>
                            <br>
                            ◆当月联盟体系【派彩/投注量/总额公点金额】，依照：视讯、球类、机率、彩票等顺序扣除相应费用。<br>
                            <br>
                            ◆相应费用包括: 为会员优惠、存/取款相应费用(请留意：会员重复出款￥手续费/未达100%投注出款的手续费由会员吸收，不纳入计算)。<br>
                            <br>
                            ◆【当月最低有效会员】定义为，在月结区间内进行过最少500RMB有效下注的会员，如联盟体系当月未达【当月最低有效会员】最低门坎3人，则该月无法领取佣金回馈。联盟体系当月营利达到标准，而【当月最低有效会员】人数未达相应最低门坎，则该月佣金比例依照【当月最低有效会员】人数所达门坎相应的百分比进行退佣。<br>
                            ◆例：体系当月营利为￥50001，而当月有效会员人数为3人，联盟虽达到营利为￥50001，却未达到有效会员5人以上，故依照联盟有效会员人数3人的门坎的退佣比例核算。</font> </p>
                        <table border="5" cellpadding="1" cellspacing="1" style="border-collapse: collapse; border-spacing: 2px; display: table; color: rgb(255, 255, 255); font-family: STHeiti, 'Microsoft YaHei', 微软雅黑, SimSun, 宋体, arial; font-size: 12px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: normal; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; width: 300px; border-width: 1px" id="table4">
                            <tbody style="display: table-row-group; vertical-align: middle">
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder"> <font color="#ffd855">视讯</font></strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder"> <font color="#ffd855">BB体育</font></strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder"> <font color="#ffd855">机率</font></strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder"> <font color="#ffd855">彩票</font></strong></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><strong style="font-style: normal; font-weight: bolder"> <font color="#ffd855">BB彩票</font></strong></td>
                                </tr>
                                <tr style="display: table-row">
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px"><font color="#000000">30%</font></td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">30%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">30%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">30%</td>
                                    <td style="display: table-cell; vertical-align: inherit; text-align: center; margin: 0px; padding: 0px">0.1%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p> <font size="2" face="微软雅黑">◆例： 
                            联盟体系当月最低有效会员达12人，当月派彩：视讯￥300000，球类￥-120000，机率￥20000，彩票有效投注￥800000。如联盟体系当月相应费用统计为￥14000，则佣金计算方式为：<br>
                            <br>
                            <b><font color="#ffd855">当月佣金计算：</font></b><br>
                            <br>
                            (总派彩金额￥200000，退佣百分比为30%)<br>
                            <br>
                            (￥800000 彩票投注 x 0.1% 返点百分比) - ￥14000 相应费用= -13200<br>
                            <br>
                            (-13200+￥200000派彩)*30%=￥56040佣金<br>
                            <br>
                            *佣金百分比，依未扣除相应费用前之"各项派彩"金额为准。<br>
                            <br>
                            *假若本月可获得佣金为负数﹐ 派彩及费用将会带到下个月继续累计至可获得佣金为正数即可领取。<br>
                            <br>
                            <font color="#ffd855"><b>回馈/佣金支付：</b></font><br>
                            联盟佣金计算，结算区间为本月第一个礼拜一至下月第一个礼拜一前的周日，将会员盈利，以联盟方案分红公式计算，扣除联盟体系会员相应的优惠、行政费用后，佣金由代理客服于每个月的第一个礼拜四开始与代理核对佣金后，在每个月的第一个礼拜日以前将佣金直接汇入代理联盟指定之银行帐号。每月代理联盟业绩于结算后归零重新开始。</font> </p>
                        <br class="Apple-interchange-newline">
                        <p></p>
                    </div>

                    <div class="agent-panel"  id="Agent2" v-show="xieyi">
                        <p> <strong>联盟协议</strong> </p>
                        <p> <font face="微软雅黑" size="2"><font color="#ffd855">一、环球娱乐对代理联盟的权利与义务</font><br>
                            <br>
                            1.环球娱乐的客服部会登记联盟的会员并会观察他们的投注状况。联盟及会员必须同意并遵守环球娱乐的会员条例，政策及操作程式。环球娱乐保留拒绝或冻结联盟/会员帐户权利<br>
                            2.代理联盟可随时登入介面观察旗下会员的下注状况及会员在网站的活动概况。环球娱乐的客服部会根据代理联盟旗下的会员计算所得的佣金。<br>
                            3.环球娱乐保留可以修改合约书上的任何条例，包括: 
                            现有的佣金范围、佣金计划、付款程式、及参考计划条例的权力，环球娱乐会以电邮、网站公告等方法通知代理联盟。 
                            代理联盟对于所做的修改有异议，代理联盟可选择终止合约，或洽客服人员反映意见。 如修改后代理联盟无任何异议，便视作默认合约修改，代理联盟必须遵守更改后的相关规定。<br>
                            <br>
                            <font color="#ffd855">二、代理联盟对环球娱乐的权力及义务</font><br>
                            <br>
                            1.代理联盟应尽其所能，广泛地宣传、销售及推广环球娱乐，使代理本身及环球娱乐的利润最大化。代理联盟可在不违反法律下，以正面形象宣传、销售及推广环球娱乐，并有责任义务告知旗下会员所有环球娱乐的相关优惠条件及产品。<br>
                            2.代理联盟选择的环球娱乐推广手法若需付费，则代理应承担该费用。<br>
                            3.任何环球娱乐相关资讯包括: 标志、报表、游戏画面、图样、文案等，代理联盟不得私自复制、公开、分发有关材料，环球娱乐保留法律追诉权。 
                            如代理在做业务推广有相关需要，请随时洽环球娱乐。<br>
                            <br>
                            <font color="#ffd855">三、规则条款</font><br>
                            <br>
                            1.各阶层代理联盟不可在未经环球娱乐许可情况下开设双/多个的代理帐号，也不可从环球娱乐帐户或相关人士赚取佣金。请谨记任何阶层代理不能用代理帐户下注，环球娱乐有权终止并封存帐号及所有在游戏中赚取的佣金。<br>
                            2.为确保所有环球娱乐会员账号隐私与权益，环球娱乐不会提供任何会员密码，或会员个人资料。各阶层代理联盟亦不得以任何方式取得会员资料，或任意登入下层会员账号，如发现代理联盟有侵害环球娱乐会员隐私行为，环球娱乐有权取消代理联盟红利，并取消代理联盟账号。<br>
                            3.代理联盟旗下的会员不得开设多于一个的帐户。环球娱乐有权要求会员提供有效的身份证明以验证会员的身份，并保留以IP判定是否重复会员的权利。如违反上述事项，环球娱乐有权终止玩家进行游戏并封存帐号及所有于游戏中赚取的佣金<br>
                            4.代理联盟不可为自己或其他联盟下的有效投注会员,只能是公司直属下的有效投注会员, 
                            代理每月需有５个下线有效投注会员（每月至少上线3次进行正常投注），如有违反联盟协议环球娱乐有权终止并封存帐号及所有在游戏中赚取的佣金。<br>
                            5.如代理联盟旗下的会员因为违反条例而被禁止享用环球娱乐的游戏，或环球娱乐退回存款给会员，环球娱乐将不会分配相应的佣金给代理联盟。如代理联盟旗下会员存款用的信用卡、银行资料须经审核，环球娱乐保留相关佣金直至审核完成。<br>
                            6.合约内的条件会以环球娱乐通知接受代理联盟加入后开始执行。环球娱乐及代理联盟可随时终止此合约，在任何情况下，代理联盟如果想终止合约，都必须以书面/电邮方式提早于七日内通知环球娱乐。 
                            代理联盟的表现会3个月审核一次，如代理联盟已不是现有的合作成员则本合约书可以在任何时间终止。如合作伙伴违反合约条例，环球娱乐有权立即终止合约。<br>
                            7.在没有环球娱乐许可下，代理联盟不能透露及授权环球娱乐相关密资料，包括代理联盟所获得的回馈、佣金报表、计算等;代理联盟有义务在合约终止后仍执行机密档及资料的保密。<br>
                            8.在合约终止后，代理联盟及环球娱乐将不须要履行双方的权利及义务。终止合约并不会解除代理联盟于终止合约前应履行的义务。</font> </p>
                    </div>
                </div>
            </div>
    <table cellspacing="1" cellpadding="1" border="0" style="height: 35px; width: 100%">
        <tbody>
            <tr>
                <td style="text-align: center; background-color: rgb(204, 102, 0);"><span style="font-size: 14px"><strong><span style="color: rgb(255, 255, 255)">环球娱乐真诚欢迎您的加入您的满意是我们最大的荣幸！</span></strong></span></td>
            </tr>
        </tbody>
    </table>
        </div>
    </div>
    </div>
    <footervue></footervue>
</div>
</template>

<script>
import headervue from '@/components/Header'
import footervue from '@/components/Footer'
import ssheader from '@/components/ssheader'
export default {
    components: {
        headervue,
        footervue,
        ssheader
    },
    data (){
        return {
            fangan: true,
            xieyi: false,
            index:'1'
        }
    },
    methods: {
        isShow (i) {
            if(i == 1){
                this.index = 1;
                this.fangan = true;
                this.xieyi = false;
            }else if(i == 2){
                this.index = 2;
                this.xieyi = true;
                this.fangan = false;
            }
        }
    }
}
</script>

<style scoped>
.mtab-menual a{
    color: #ffefb0;
    text-decoration: none;
}
.mtab-menual a:hover{
    color: #be7660;
}
.agent-panel{
    padding-top:25px;
}
#Agent2 p{
    line-height: 30px;
    font-size: 14px;
}
.daili_bg{
    background:url('../../static/img/nybg1.jpg') ;
    background-repeat: repeat-x;
    background-color: #2c1d16;
    background-position: 0px 0px;
    min-height: 1345px;
    text-align: left;
}
.mtab-menual {
    padding: 3px 0;
    height: 24px;
}
.mtab-menual li {
    float: left;
    font-size: 15px;
    line-height: 24px;
    height: 24px;
    cursor: pointer;
    padding: 0 8px;
    border-radius: 3px;
}
.mtab {
    background: #808080;
    color: #fff;
}
#articles p {
    font-size: 14px;
    line-height: 30px;
}
p strong {
    display: block;
    font-weight: bold;
    padding: 5px 0;
}
</style>
