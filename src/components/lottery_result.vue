<template>
  <div class="lottery_result">
    <div class="search_box">
      <div class="item" style="padding-left:10px;">
      </div>
      <div class="item">
        游戏 :
        <select name="" id="" v-model="gameTypeIdx">
          <option value="-1" disabled selected style="display:none;">{{is_loading_lottery_type?"加载中...":"请选择游戏"}}
          </option>
          <option :value="idx" v-for="it,idx in gameTypes" :key="idx">{{it.title}}</option>
        </select>
      </div>
      <div class="item">
        日期 :
        <date-picker
          v-model="date"
          type="date"
          placeholder="日期"
          value-format="yyyy-MM-dd"
          align="right">
        </date-picker>
      </div>
      <!--<div class="item">
        期数 :
        <input type="text" v-model="gameNum"/>
      </div>-->
      <div class="btn_search" @click="search">查询</div>
      <div class="item">
        <span v-for="it in show_types" @click="(show_type=it)" :style="{color:show_type.value==it.value?'#e53935':'inherit'}" style="display: inline-block;padding:0 5px;cursor:pointer;">{{it.tit}}</span>
      </div>
    </div>
    <div class="cont">
      <table class="tb xglhc" v-show="show_type.value=='liangmian'"  v-if="tempParam.typeName=='Xglhc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">彩球号码</th>
          <th rowspan="2">总和</th>
          <th rowspan="2">总单双</th>
          <th rowspan="2">总大小</th>
          <th colspan="7">特码</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>正码六</th>
          <th>特码</th>
          <th>单双</th>
          <th>大小</th>
          <th>合单双</th>
          <th>合大小</th>
          <th>合尾大小</th>
          <th>家禽野兽</th>
          <th>波段</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.qishu}}
          </td>
          <td>
            {{it.datetime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num1.color]}">
              {{it.num1.num}}
            </div>
            <div class="animal">{{it.num1.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num2.color]}">
              {{it.num2.num}}
            </div>
            <div class="animal">{{it.num2.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num3.color]}">
              {{it.num3.num}}
            </div>
            <div class="animal">{{it.num3.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num4.color]}">
              {{it.num4.num}}
            </div>
            <div class="animal">{{it.num4.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num5.color]}">
              {{it.num5.num}}
            </div>
            <div class="animal">{{it.num5.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num6.color]}">
              {{it.num6.num}}
            </div>
            <div class="animal">{{it.num6.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num7.color]}">
              {{it.num7.num}}
            </div>
            <div class="animal">{{it.num7.animal}}</div>
          </td>

          <td>{{it.sum}}</td>
          <td :style="{color:getColors(it.sum_oddoreven)}">{{it.sum_oddoreven}}</td>
          <td :style="{color:getColors(it.sum_overorunder)}">{{it.sum_overorunder}}</td>
          <td :style="{color:getColors(it.spe_oddoreven)}">{{it.spe_oddoreven}}</td>
          <td :style="{color:getColors(it.spe_overorunder)}">{{it.spe_overorunder}}</td>
          <td :style="{color:getColors(it.spe_sum_oddoreven)}">{{it.spe_sum_oddoreven}}</td>
          <td :style="{color:getColors(it.spe_sum_overorunder)}">{{it.spe_sum_overorunder}}</td>
          <td :style="{color:getColors(it.spe_tailnum_overorunder)}">{{it.spe_tailnum_overorunder}}</td>
          <td :style="{color:getColors(it.spe_jiaqingoryeshou)}">{{it.spe_jiaqingoryeshou}}</td>
          <td :style="{color:colors[it.colorkey]}">{{it.color}}</td>
        </tr>
      </table>
      <table class="tb xglhc" v-show="show_type.value=='longhudou'"  v-if="tempParam.typeName=='Xglhc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">彩球号码</th>
          <th colspan="2">上下奇偶</th>
          <th colspan="21">上下奇偶</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>正码六</th>
          <th>特码</th>
          <th>上下</th>
          <th>奇偶</th>
          <th>1v2</th>
          <th>1v3</th>
          <th>1v4</th>
          <th>1v5</th>
          <th>1v6</th>
          <th>1v特</th>
          <th>2v3</th>
          <th>2v4</th>
          <th>2v5</th>
          <th>2v6</th>
          <th>2v特</th>
          <th>3v4</th>
          <th>3v5</th>
          <th>3v6</th>
          <th>3v特</th>
          <th>4v5</th>
          <th>4v6</th>
          <th>4v特</th>
          <th>5v6</th>
          <th>5v特</th>
          <th>6v特</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.qishu}}
          </td>
          <td>
            {{it.datetime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num1.color]}">
              {{it.num1.num}}
            </div>
            <div class="animal">{{it.num1.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num2.color]}">
              {{it.num2.num}}
            </div>
            <div class="animal">{{it.num2.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num3.color]}">
              {{it.num3.num}}
            </div>
            <div class="animal">{{it.num3.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num4.color]}">
              {{it.num4.num}}
            </div>
            <div class="animal">{{it.num4.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num5.color]}">
              {{it.num5.num}}
            </div>
            <div class="animal">{{it.num5.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num6.color]}">
              {{it.num6.num}}
            </div>
            <div class="animal">{{it.num6.animal}}</div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors[it.num7.color]}">
              {{it.num7.num}}
            </div>
            <div class="animal">{{it.num7.animal}}</div>
          </td>

          <td  :style="{color:getColors(it.t_overorunder)}">{{it.t_overorunder}}</td>
          <td  :style="{color:getColors(it.t_oddoreven)}">{{it.t_oddoreven}}</td>
          <td  :style="{color:getColors(it.n1vsn2)}">{{it.n1vsn2}}</td>
          <td  :style="{color:getColors(it.n1vsn3)}">{{it.n1vsn3}}</td>
          <td  :style="{color:getColors(it.n1vsn4)}">{{it.n1vsn4}}</td>
          <td  :style="{color:getColors(it.n1vsn5)}">{{it.n1vsn5}}</td>
          <td  :style="{color:getColors(it.n1vsn6)}">{{it.n1vsn6}}</td>
          <td  :style="{color:getColors(it.n1vssp)}">{{it.n1vssp}}</td>
          <td  :style="{color:getColors(it.n2vsn3)}">{{it.n2vsn3}}</td>
          <td  :style="{color:getColors(it.n2vsn4)}">{{it.n2vsn4}}</td>
          <td  :style="{color:getColors(it.n2vsn5)}">{{it.n2vsn5}}</td>
          <td  :style="{color:getColors(it.n2vsn6)}">{{it.n2vsn6}}</td>
          <td  :style="{color:getColors(it.n2vssp)}">{{it.n2vssp}}</td>
          <td  :style="{color:getColors(it.n3vsn4)}">{{it.n3vsn4}}</td>
          <td  :style="{color:getColors(it.n3vsn5)}">{{it.n3vsn5}}</td>
          <td  :style="{color:getColors(it.n3vsn6)}">{{it.n3vsn6}}</td>
          <td  :style="{color:getColors(it.n3vssp)}">{{it.n3vssp}}</td>
          <td  :style="{color:getColors(it.n4vsn5)}">{{it.n4vsn5}}</td>
          <td  :style="{color:getColors(it.n4vsn6)}">{{it.n4vsn6}}</td>
          <td  :style="{color:getColors(it.n4vssp)}">{{it.n4vssp}}</td>
          <td  :style="{color:getColors(it.n5vsn6)}">{{it.n5vsn6}}</td>
          <td  :style="{color:getColors(it.n5vssp)}">{{it.n5vssp}}</td>
          <td  :style="{color:getColors(it.n6vssp)}">{{it.n6vssp}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='liangmian'"  v-if="tempParam.typeName=='Cqssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="5">球号</th>
          <th rowspan="2">总和</th>
          <th rowspan="2">总单双</th>
          <th rowspan="2">总大小</th>
          <th colspan="2">第一球</th>
          <th colspan="2">第二球</th>
          <th colspan="2">第三球</th>
          <th colspan="2">第四球</th>
          <th colspan="2">第五球</th>
        </tr>
        <tr>
          <th>第一球</th>
          <th>第二球</th>
          <th>第三球</th>
          <th>第四球</th>
          <th>第五球</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td>{{it.sum}}</td>
          <td :style="{color:getColors(it.sum_oddoreven)}">{{it.sum_oddoreven}}</td>
          <td :style="{color:getColors(it.sum_overorunder)}">{{it.sum_overorunder}}</td>
          <td :style="{color:getColors(it.num1_oddoreven)}">{{it.num1_oddoreven}}</td>
          <td :style="{color:getColors(it.num1_overorunder)}">{{it.num1_overorunder}}</td>
          <td :style="{color:getColors(it.num2_oddoreven)}">{{it.num2_oddoreven}}</td>
          <td :style="{color:getColors(it.num2_overorunder)}">{{it.num2_overorunder}}</td>
          <td :style="{color:getColors(it.num3_oddoreven)}">{{it.num3_oddoreven}}</td>
          <td :style="{color:getColors(it.num3_overorunder)}">{{it.num3_overorunder}}</td>
          <td :style="{color:getColors(it.num4_oddoreven)}">{{it.num4_oddoreven}}</td>
          <td :style="{color:getColors(it.num4_overorunder)}">{{it.num4_overorunder}}</td>
          <td :style="{color:getColors(it.num5_oddoreven)}">{{it.num5_oddoreven}}</td>
          <td :style="{color:getColors(it.num5_overorunder)}">{{it.num5_overorunder}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='longhudou'"  v-if="tempParam.typeName=='Cqssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">彩球号码</th>
          <th colspan="10">龙虎斗</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>1v2</th>
          <th>1v3</th>
          <th>1v4</th>
          <th>1v5</th>
          <th>2v3</th>
          <th>2v4</th>
          <th>2v5</th>
          <th>3v4</th>
          <th>3v5</th>
          <th>4v5</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td  :style="{color:getColors(it.n1vsn2)}">{{it.n1vsn2}}</td>
          <td  :style="{color:getColors(it.n1vsn3)}">{{it.n1vsn3}}</td>
          <td  :style="{color:getColors(it.n1vsn4)}">{{it.n1vsn4}}</td>
          <td  :style="{color:getColors(it.n1vsn5)}">{{it.n1vsn5}}</td>
          <td  :style="{color:getColors(it.n2vsn3)}">{{it.n2vsn3}}</td>
          <td  :style="{color:getColors(it.n2vsn4)}">{{it.n2vsn4}}</td>
          <td  :style="{color:getColors(it.n2vsn5)}">{{it.n2vsn5}}</td>
          <td  :style="{color:getColors(it.n3vsn4)}">{{it.n3vsn4}}</td>
          <td  :style="{color:getColors(it.n3vsn5)}">{{it.n3vsn5}}</td>
          <td  :style="{color:getColors(it.n4vsn5)}">{{it.n4vsn5}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='liangmian'"  v-if="tempParam.typeName=='Tjssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="5">球号</th>
          <th rowspan="2">总和</th>
          <th rowspan="2">总单双</th>
          <th rowspan="2">总大小</th>
          <th colspan="2">第一球</th>
          <th colspan="2">第二球</th>
          <th colspan="2">第三球</th>
          <th colspan="2">第四球</th>
          <th colspan="2">第五球</th>
        </tr>
        <tr>
          <th>第一球</th>
          <th>第二球</th>
          <th>第三球</th>
          <th>第四球</th>
          <th>第五球</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td>{{it.sum}}</td>
          <td :style="{color:getColors(it.sum_oddoreven)}">{{it.sum_oddoreven}}</td>
          <td :style="{color:getColors(it.sum_overorunder)}">{{it.sum_overorunder}}</td>
          <td :style="{color:getColors(it.num1_oddoreven)}">{{it.num1_oddoreven}}</td>
          <td :style="{color:getColors(it.num1_overorunder)}">{{it.num1_overorunder}}</td>
          <td :style="{color:getColors(it.num2_oddoreven)}">{{it.num2_oddoreven}}</td>
          <td :style="{color:getColors(it.num2_overorunder)}">{{it.num2_overorunder}}</td>
          <td :style="{color:getColors(it.num3_oddoreven)}">{{it.num3_oddoreven}}</td>
          <td :style="{color:getColors(it.num3_overorunder)}">{{it.num3_overorunder}}</td>
          <td :style="{color:getColors(it.num4_oddoreven)}">{{it.num4_oddoreven}}</td>
          <td :style="{color:getColors(it.num4_overorunder)}">{{it.num4_overorunder}}</td>
          <td :style="{color:getColors(it.num5_oddoreven)}">{{it.num5_oddoreven}}</td>
          <td :style="{color:getColors(it.num5_overorunder)}">{{it.num5_overorunder}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='longhudou'"  v-if="tempParam.typeName=='Tjssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">彩球号码</th>
          <th colspan="10">龙虎斗</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>1v2</th>
          <th>1v3</th>
          <th>1v4</th>
          <th>1v5</th>
          <th>2v3</th>
          <th>2v4</th>
          <th>2v5</th>
          <th>3v4</th>
          <th>3v5</th>
          <th>4v5</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td  :style="{color:getColors(it.n1vsn2)}">{{it.n1vsn2}}</td>
          <td  :style="{color:getColors(it.n1vsn3)}">{{it.n1vsn3}}</td>
          <td  :style="{color:getColors(it.n1vsn4)}">{{it.n1vsn4}}</td>
          <td  :style="{color:getColors(it.n1vsn5)}">{{it.n1vsn5}}</td>
          <td  :style="{color:getColors(it.n2vsn3)}">{{it.n2vsn3}}</td>
          <td  :style="{color:getColors(it.n2vsn4)}">{{it.n2vsn4}}</td>
          <td  :style="{color:getColors(it.n2vsn5)}">{{it.n2vsn5}}</td>
          <td  :style="{color:getColors(it.n3vsn4)}">{{it.n3vsn4}}</td>
          <td  :style="{color:getColors(it.n3vsn5)}">{{it.n3vsn5}}</td>
          <td  :style="{color:getColors(it.n4vsn5)}">{{it.n4vsn5}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='liangmian'"  v-if="tempParam.typeName=='Xjssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="5">球号</th>
          <th rowspan="2">总和</th>
          <th rowspan="2">总单双</th>
          <th rowspan="2">总大小</th>
          <th colspan="2">第一球</th>
          <th colspan="2">第二球</th>
          <th colspan="2">第三球</th>
          <th colspan="2">第四球</th>
          <th colspan="2">第五球</th>
        </tr>
        <tr>
          <th>第一球</th>
          <th>第二球</th>
          <th>第三球</th>
          <th>第四球</th>
          <th>第五球</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
          <th>大小</th>
          <th>单双</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td>{{it.sum}}</td>
          <td :style="{color:getColors(it.sum_oddoreven)}">{{it.sum_oddoreven}}</td>
          <td :style="{color:getColors(it.sum_overorunder)}">{{it.sum_overorunder}}</td>
          <td :style="{color:getColors(it.num1_oddoreven)}">{{it.num1_oddoreven}}</td>
          <td :style="{color:getColors(it.num1_overorunder)}">{{it.num1_overorunder}}</td>
          <td :style="{color:getColors(it.num2_oddoreven)}">{{it.num2_oddoreven}}</td>
          <td :style="{color:getColors(it.num2_overorunder)}">{{it.num2_overorunder}}</td>
          <td :style="{color:getColors(it.num3_oddoreven)}">{{it.num3_oddoreven}}</td>
          <td :style="{color:getColors(it.num3_overorunder)}">{{it.num3_overorunder}}</td>
          <td :style="{color:getColors(it.num4_oddoreven)}">{{it.num4_oddoreven}}</td>
          <td :style="{color:getColors(it.num4_overorunder)}">{{it.num4_overorunder}}</td>
          <td :style="{color:getColors(it.num5_oddoreven)}">{{it.num5_oddoreven}}</td>
          <td :style="{color:getColors(it.num5_overorunder)}">{{it.num5_overorunder}}</td>
        </tr>
      </table>
      <table class="tb cqssc" v-show="show_type.value=='longhudou'"  v-if="tempParam.typeName=='Xjssc'">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="7">彩球号码</th>
          <th colspan="10">龙虎斗</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>1v2</th>
          <th>1v3</th>
          <th>1v4</th>
          <th>1v5</th>
          <th>2v3</th>
          <th>2v4</th>
          <th>2v5</th>
          <th>3v4</th>
          <th>3v5</th>
          <th>4v5</th>
        </tr>
        <tr v-for="it,idx in results">
          <td>
            {{it.issue}}
          </td>
          <td>
            {{it.opentime}}
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num1}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num2}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num3}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num4}}
            </div>
          </td>
          <td>
            <div class="ball" :style="{backgroundColor:colors['blue']}">
              {{it.num5}}
            </div>
          </td>
          <td  :style="{color:getColors(it.n1vsn2)}">{{it.n1vsn2}}</td>
          <td  :style="{color:getColors(it.n1vsn3)}">{{it.n1vsn3}}</td>
          <td  :style="{color:getColors(it.n1vsn4)}">{{it.n1vsn4}}</td>
          <td  :style="{color:getColors(it.n1vsn5)}">{{it.n1vsn5}}</td>
          <td  :style="{color:getColors(it.n2vsn3)}">{{it.n2vsn3}}</td>
          <td  :style="{color:getColors(it.n2vsn4)}">{{it.n2vsn4}}</td>
          <td  :style="{color:getColors(it.n2vsn5)}">{{it.n2vsn5}}</td>
          <td  :style="{color:getColors(it.n3vsn4)}">{{it.n3vsn4}}</td>
          <td  :style="{color:getColors(it.n3vsn5)}">{{it.n3vsn5}}</td>
          <td  :style="{color:getColors(it.n4vsn5)}">{{it.n4vsn5}}</td>
        </tr>
      </table>
      <div v-show="results.length<1&&!is_loading_result" style="text-align: center;padding-top:20px;">暂无数据</div>
      <div v-show="is_loading_result" style="text-align: center;padding-top:20px;color:rgb(229, 57, 53);">加载中...</div>
      <div class="pager" v-show="pages.length>1">
        <div class="item"  @click="pageClick(it.page)" v-for="it,idx in pages" :key="idx"
             :class="{cur:it.cur,sl:it.page==-1}">{{it.txt}}
        </div>
        <div style="display: inline-block;color:#B62929;" v-show="is_loading_result">加载中...</div>
        <div style="display: inline-block;color:#B62929;opacity:0" v-show="!is_loading_result">加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {DatePicker} from "element-ui"
  import {mapMutations} from "vuex"
  import alert from "@/components/base/alert"
  import {six_lottery,cqssc,tjssc,xjssc} from "@/obj/cal_lottery_data"

  export default {
    name: "lottery_result",
    components: {
      DatePicker
    },
    async created() {
      this.date="2018-05-09";
      await this.initGameType();
      //加载数据;
      this.tempParam = {
        date:this.date,
        typeName: this.gameTypes[this.gameTypeIdx].name,
        typeTitle:this.gameTypes[this.gameTypeIdx].title,
        gameNum: ""
      }
      this.loadData(1);
    },
    data() {
      return {
        pages: [],
        date: new Date().format("yyyy-MM-dd"),
        page_size: 10,
        show_types:[],
        show_type:"",
        gameTypes: [],
        gameTypeIdx: -1,
        gameNum: "",
        is_loading_lottery_type: false,
        is_loading_result: true,
        results: [],
        colors:{
          "red": "#e53935",
          "blue": "#039be5",
          "green": "#7cb342"
        },
        tempParam: {
          endDate: "",
          gameNum:"",
          typeName:"",
          typeTitle:"",
          date:""
        }
      }
    },
    methods: {
      ...mapMutations(["ROOTBOX"]),
      alert(tit, msg, fn, msgStyle) {
        let _this = this;
        this.ROOTBOX({
          open: true,
          compt: alert,
          props: {
            tit: tit,
            msg: msg,
            msgstyle: msgStyle
          },
          handles: {
            confirm() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      setPager(page, pageCount) {
        this.pages = [];
        if (pageCount < 1) return;
        if (page - 1 > 0) {
          this.pages.push({
            page: 1,
            txt: "首页"
          });
          this.pages.push({
            page: page - 1,
            txt: "上一页"
          });
        }
        let begin = 1, end = pageCount;
        if (page - 3 > 1) {
          begin = page - 3;
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 3 <= pageCount) {
          end = page + 3;
        }
        for (let i = begin; i <= end; i++) {
          this.pages.push({
            page: i,
            txt: i,
            cur: i == page
          })
        }
        if (end != pageCount) {
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 1 <= pageCount) {
          this.pages.push({
            page: page + 1,
            txt: "下一页"
          });
          this.pages.push({
            page: pageCount,
            txt: "末页"
          });
        }
      },
      async initGameType() {
        this.is_loading_lottery_type = true;
        let res = await this.$http.get('/api/lottery/basic/LotteryList');
        this.is_loading_lottery_type = false;
        if (!res) return;

        //res.data.data.unshift({id: -1, title: "香港六合彩"});
        let resArr = [{id:-1,title: "香港六合彩", name: "Xglhc"}];
        resArr = resArr.concat(res.data.data);
        let idx = resArr.findIndex(v => {
          return v.name == "Cqssc"//todo 根据路由参数 this.$route.params.game_name;
        });
        this.gameTypeIdx = idx;
        this.gameTypes = resArr;
      },
      async loadData(page) {
        if (this.gameTypeIdx == -1) return;
        let url = '/api/lhc/LhcInfo/kaiJiangHistory';
        let data = {
          p: page,
          ps: this.page_size
        }
        if(this.tempParam.typeName!="Xglhc"){
          url=`/api/lottery-v1/${this.tempParam.typeName}/history/`;
          data={
            t:this.tempParam.date,
            p:page,
            ps:this.page_size,
          }
        }
        if(!data.t) delete data.t;
        this.is_loading_result = true;
        let res = await this.$http.post(url, data);
        this.is_loading_result = false;
        if (!res) return;
        this.results = this.setData(res.data.list);
        this.setShowType();
        this.setPager(page, res.data.page);
      },
      pageClick(page) {
        if (page == -1) return;
        this.loadData(page);
      },
      search(){
        this.tempParam = {
          date:this.date,
          typeName: this.gameTypes[this.gameTypeIdx].name,
          typeTitle:this.gameTypes[this.gameTypeIdx].title,
          gameNum: ""
        }
        this.loadData(1);
      },
      getColors(txt){
        let reds=["双","大","家禽","下","偶","龙"];
        let blues=["单","小","野兽","上","奇","虎"];
        if(reds.indexOf(txt)!=-1){
          return this.colors["red"];
        }
        let res="";
        txt.split("").forEach(v=>{
          if(reds.indexOf(v)!=-1){
            res = this.colors["red"];
          }
        });
        if(res)return res;
        if(blues.indexOf(txt)!=-1){
          return this.colors["blue"];
        }
        txt.split("").forEach(v=>{
          if(blues.indexOf(v)!=-1){
            res= this.colors["blue"];
          }
        });
        if(res)return res;
      },
      setData(data) {
        if (this.tempParam.typeName == "Xglhc") {//香港六合彩
          data = data.map(v => {
            return {
              ...v,
              ...six_lottery(v.ball.split(","))
            }
          })
        }else if(this.tempParam.typeName=="Cqssc"){//重庆时时彩
          data = data.map(v => {
            return {
              ...v,
              ...cqssc(v.data.split(","))
            }
          })
        }else if(this.tempParam.typeName=="Tjssc"){//天津时时彩
          data = data.map(v => {
            return {
              ...v,
              ...tjssc(v.data.split(","))
            }
          })
        }else if(this.tempParam.typeName=="Xjssc"){//天津时时彩
          data = data.map(v => {
            return {
              ...v,
              ...xjssc(v.data.split(","))
            }
          })
        }
        return data;
      },
      setShowType(){
        if(this.tempParam.typeName=="Xglhc"){
          this.show_types=[{tit:"两面",value:"liangmian"},{tit:"龙虎斗",value:"longhudou"}];
          this.show_type=this.show_types[0];
        }else if(this.tempParam.typeName=="Cqssc"){
          this.show_types=[{tit:"两面",value:"liangmian"},{tit:"龙虎斗",value:"longhudou"}];
          this.show_type=this.show_types[0];
        }else if(this.tempParam.typeName=="Tjssc"){
          this.show_types=[{tit:"两面",value:"liangmian"},{tit:"龙虎斗",value:"longhudou"}];
          this.show_type=this.show_types[0];
        }else if(this.tempParam.typeName=="Xjssc"){
          this.show_types=[{tit:"两面",value:"liangmian"},{tit:"龙虎斗",value:"longhudou"}];
          this.show_type=this.show_types[0];
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .lottery_result {
    min-height:100%;
    box-sizing: border-box;
    textarea {
      line-height: 1.5em;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 3px 3px;
      padding-left: 10px;
      color: #999;
      position: relative;
      top: 3px;
      font-family: "Microsoft YaHei";
      box-sizing: border-box;
    }
    .el-input{
      .el-input__inner{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height:40px;
        line-height: 40px;
        outline:0;
        padding:0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition:border-color .2s cubic-bezier(.645,.045,.355,1);
        width:100%;
        padding-left: 30px;
      }
    }
    select, input[type=text], input[type=password], input[type=number] {
      line-height: 30px;
      height: 36px;
      width: 150px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 3px 3px;
      padding-left: 10px;
      color: #999;
      vertical-align: middle;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      outline: 0;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: rgba(255, 255, 255, 1);;
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
    }

    @-webkit-keyframes autofill { //去除chrome浏览器自动填充表单的黄色背景
      to {
        color: rgba(255, 255, 255, 1);
        background: transparent;
      }
    }

    @-webkit-keyframes autofill2 { //去除chrome浏览器自动填充表单的黄色背景
      to {
        color: #aaa;
        background: transparent;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: #aaa;
      -webkit-animation-name: autofill2;
      -webkit-animation-fill-mode: both;
      color: #aaa !important;
    }

    .search_box {
      padding: 10px 0px;
      line-height: 35px;
      .item {
        display: inline-block;
        margin-right: 10px;
      }
      .btn_search {
        vertical-align: middle;
        background-color: #b62929;
        color: #fff;
        display: inline-block;
        line-height: 34px;
        min-width: 60px;
        text-align: center;
        border-radius: 3px 3px;
        cursor: pointer;
      }
    }
    table.tb {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #ccc;
      text-align: center;
      tr {
        border: 1px solid #ccc;
      }
      th {
        background-color: #C7C7C7;
        padding: 8px 0;
        font-weight: 200;
        border: 1px solid #d8d8d8;
      }
      td {
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 8px 0;
      }
    }
    .xglhc td,.cqssc td{
      >.ball{
        display: inline-block;
        width:30px;
        height:30px;
        line-height: 30px;
        text-align: center;
        color:#fff;
        border-radius:15px 15px;
      }
      >.animal{
        display: inline-block;
      }
    }
    .pager {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      > .item {
        margin: 0 2px;
        display: inline-block;
        padding: 7px 10px;
        cursor: pointer;
        line-height: 1.2;
        border: 1px solid #ccc;
        background-color: #fff;
        &:hover {
          color: #B62929;
          border: 1px solid #b62929;
        }
        &.cur {
          color: #B62929;
          border: 1px solid #b62929;
        }
        &.sl {
          &:hover {
            border: none;
            background: none;
          }
          border: none;
          background: none;
        }
      }
    }
    text-align: left;
    min-width: 1170px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    .cont {
      min-height: 500px;
    }
  }

</style>
