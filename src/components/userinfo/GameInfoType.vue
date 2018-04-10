<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户管理&gt;彩种信息</span>
    </div>
    <div class="con_box">
    <div class="form-box">
        <span>
            彩种：
            <select name="gameID" data-bind="event:{change:gameEvent}" style="width:auto;">
                    <option value="1">香港六合彩 [信]</option>
                    <option value="4">广东11选5 [信]</option>
                    <option value="5">广东快十 [信]</option>
                    <option value="6">广西快十 [信]</option>
                    <option value="7">重庆时时彩 [信]</option>
                    <option value="10">新疆时时彩 [信]</option>
                    <option value="13">幸运农场 [信]</option>
                    <option value="15">北京PK拾 [信]</option>
                    <option value="26" selected="selected">重庆时时彩 [官]</option>
                    <option value="28">北京快乐8 [官]</option>
                    <option value="29">北京PK拾 [官]</option>
                    <option value="30">福彩3D [官]</option>
                    <option value="32">山东11选5 [官]</option>
                    <option value="40">新疆时时彩 [官]</option>
                    <option value="44">排列三、五 [官]</option>
                    <option value="45">广东11选5 [官]</option>
                    <option value="46">江西11选5 [官]</option>
                    <option value="50">黑龙江11选5 [官]</option>
                    <option value="51">韩式1.5分彩 [官]</option>
                    <option value="53">韩式1.5分彩 [信]</option>
                    <option value="55">北京时时彩 [信]</option>
                    <option value="56">北京时时彩 [官]</option>
                    <option value="59">台湾宾果 [官]</option>
                    <option value="60">加拿大3.5分 [信]</option>
                    <option value="61">加拿大3.5分 [官]</option>
                    <option value="62">江苏11选5 [官]</option>
                    <option value="63">江苏11选5 [信]</option>
                    <option value="64">澳洲快乐8 [官]</option>
                    <option value="68">澳洲3分彩 [官]</option>
                    <option value="69">澳洲3分彩 [信]</option>
                    <option value="72">上海11选5 [官]</option>
                    <option value="73">上海11选5 [信]</option>
                    <option value="75">腾讯分分彩 [信]</option>
                    <option value="76">腾讯分分彩 [官]</option>
                    <option value="77">QQ分分彩 [信]</option>
                    <option value="78">QQ分分彩 [官]</option>
                    <option value="79">河北快3 [信]</option>
                    <option value="80">河北快3 [官]</option>
                    <option value="81">上海时时乐 [官]</option>
                    <option value="82">安徽快3 [官]</option>
                    <option value="83">安徽快3 [信]</option>
                    <option value="84">河南快3 [官]</option>
                    <option value="85">河南快3 [信]</option>
                    <option value="86">湖北快3 [官]</option>
                    <option value="87">湖北快3 [信]</option>
                    <option value="88">上海快3 [官]</option>
                    <option value="89">上海快3 [信]</option>
                    <option value="90">广西快3 [官]</option>
                    <option value="91">广西快3 [信]</option>
                    <option value="92">东京1.5分彩 [信]</option>
                    <option value="93">东京1.5分彩 [官]</option>
                    <option value="97">幸运飞艇 [信]</option>
                    <option value="98">幸运飞艇 [官]</option>
                    <option value="101">幸运28 [信]</option>
                    <option value="102">东京28 [信]</option>
                    <option value="104">韩式28 [信]</option>
                    <option value="105">加拿大28 [信]</option>
                    <option value="106">澳洲28 [信]</option>
                    <option value="114">极速六合彩 [信]</option>
                    <option value="115">极速分分彩 [信]</option>
                    <option value="116">极速分分彩 [官]</option>
            </select>
        </span>
    </div>
    <div class="content">
        <div class="table-list">
            <table>
                <thead>
                    <tr>
                            <th>玩法类型</th>
                            <th>玩法分类</th>
                            <th>最高奖金</th>
                            <th>返点</th>
                    </tr>
                </thead>
                <tbody>
                                    <tr>
                                        <td>五星直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>187000</td>
                                        <td>3.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>后三直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>970</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>前三直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>970</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>中三直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>970</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>二星直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>117</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>二星组选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>58.5</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>定位胆&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>19.5</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>三星一码不定胆&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>7.19</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>三星二码不定胆&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>36.11</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>大小单双&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>7.8</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>任二直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>195</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>任二组选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>97.5</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>任三直选&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td>1950</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>四星直选&nbsp;</td>
                                        <td>单式&nbsp;</td>
                                        <td>19500</td>
                                        <td>7.5%&nbsp;</td>
                                    </tr>
                                        <tr>
                                                <td rowspan="4">四星组合&nbsp;</td>
                                            <td>二等奖_三星&nbsp;</td>
                                            <td>1950 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>三等奖_二星&nbsp;</td>
                                            <td>195 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>四等奖_一星&nbsp;</td>
                                            <td>19.5 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>一等奖_四星&nbsp;</td>
                                            <td>19500 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="5">五星组合&nbsp;</td>
                                            <td>二等奖_四星&nbsp;</td>
                                            <td>180 </td>
                                            <td>0%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>三等奖_三星&nbsp;</td>
                                            <td>18 </td>
                                            <td>0%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>四等奖_二星&nbsp;</td>
                                            <td>1.8 </td>
                                            <td>0%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>五等奖_一星&nbsp;</td>
                                            <td>0.18 </td>
                                            <td>0%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>一等奖_五星&nbsp;</td>
                                            <td>20000 </td>
                                            <td>0%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="4">特殊&nbsp;</td>
                                            <td>好事成双&nbsp;</td>
                                            <td>23.93 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>三星报喜&nbsp;</td>
                                            <td>227.8 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>四季发财&nbsp;</td>
                                            <td>4239.13 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>一帆风顺&nbsp;</td>
                                            <td>4.76 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="2">后三组选&nbsp;</td>
                                            <td>组六&nbsp;</td>
                                            <td>285 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组三&nbsp;</td>
                                            <td>570 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="2">前三组选&nbsp;</td>
                                            <td>组六&nbsp;</td>
                                            <td>285 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组三&nbsp;</td>
                                            <td>570 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="2">中三组选&nbsp;</td>
                                            <td>组六&nbsp;</td>
                                            <td>285 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组三&nbsp;</td>
                                            <td>570 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="2">任三组选&nbsp;</td>
                                            <td>组六&nbsp;</td>
                                            <td>325 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组三&nbsp;</td>
                                            <td>650 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="6">五星组选&nbsp;</td>
                                            <td>组选10&nbsp;</td>
                                            <td>19300 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选120&nbsp;</td>
                                            <td>1608.33 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选20&nbsp;</td>
                                            <td>9650 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选30&nbsp;</td>
                                            <td>6433.33 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选5&nbsp;</td>
                                            <td>38600 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选60&nbsp;</td>
                                            <td>3216.66 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                                <td rowspan="4">四星组选&nbsp;</td>
                                            <td>组选12&nbsp;</td>
                                            <td>1625 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选24&nbsp;</td>
                                            <td>812.5 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选4&nbsp;</td>
                                            <td>4875 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>组选6&nbsp;</td>
                                            <td>3250 </td>
                                            <td>7.5%&nbsp;</td>
                                        </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }

  },
  methods: {
    
  }
}

</script>
<style scoped>
.main-head {
  /*background: #fff;*/
  border-bottom: 1px solid #d0d0d0;
  text-align: left;
  line-height: 49px;
  margin-left: 20px;
}

.main-head span {
  font-size: 16px;
  display: inline-block;
  height: 49px;
  border-bottom: 2px solid #b62929;
}

/*彩种信息css*/
.con_box {
    background: #ededed;
        float: left;
    width: 100%;
    font-size: 14px;
}
.form-box {
    padding: 10px 20px;
    text-align: left;
}
.form-box span {
       padding: 0 10px;
    line-height: 25px;
    display: inline-block;
}

.form-box span select {
    width: 122px;
    height: 25px;
}

.content {
    background: #fff;
        padding: 0 0 20px 0;
}

.content .table-list {
    padding: 0;
}

table {
    border-left: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
        width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

.table-list tr th {
    font-size: 16px;
}
.content th {
    border-bottom: 1px solid #cdcdcd;
}

th {
    background: #c7c7c7;
        padding: 5px;
    line-height: 30px;
    font-weight: 500;
    font-size: 15px;
}

.content td {
    border-left: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
}
td {
    border-bottom: 1px solid #cdcdcd;
    background: #fff;
        padding: 8px;
    text-align: center;
}
</style>
