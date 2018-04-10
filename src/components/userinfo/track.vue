<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注记录&gt;追号查询</span>
    </div>
    <div class="search-box">
      时间:
      <input type="text">至
      <input type="text"> 用户名：
      <input type="text"> 彩种：
      <select>
        <option value="0">所有游戏</option>
        <option value="1">香港六合彩 [信]</option>
        <option value="4">广东11选5 [信]</option>
        <option value="5">广东快十 [信]</option>
        <option value="6">广西快十 [信]</option>
        <option value="7">重庆时时彩 [信]</option>
        <option value="10">新疆时时彩 [信]</option>
        <option value="13">幸运农场 [信]</option>
        <option value="15">北京PK拾 [信]</option>
        <option value="26">重庆时时彩 [官]</option>
        <option value="28">北京快乐8 [官]</option>
        <option value="29">北京PK拾 [官]</option>
        <option value="30">福彩3D [官]</option>
        <option value="40">新疆时时彩 [官]</option>
        <option value="44">排列三、五 [官]</option>
        <option value="45">广东11选5 [官]</option>
        <option value="50">黑龙江11选5 [官]</option>
        <option value="51">韩式1.5分彩 [官]</option>
        <option value="53">韩式1.5分彩 [信]</option>
        <option value="55">北京时时彩 [信]</option>
        <option value="56">北京时时彩 [官]</option>
        <option value="62">江苏11选5 [官]</option>
        <option value="63">江苏11选5 [信]</option>
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
        <option value="101">幸运28 [信]</option>
      </select>
      玩法:
      <select name="gamePlayID" data-bind="value:gamePlayID,options: gamePlayList, optionsText: 'Name',optionsValue: 'ID'">
        <option value="0">所有玩法</option>
        <option value="2795">五星</option>
        <option value="2796">后四</option>
        <option value="2797">后三码</option>
        <option value="2798">前三码</option>
        <option value="2799">中三码</option>
        <option value="2800">二码</option>
        <option value="2801">定位胆</option>
        <option value="2802">不定胆</option>
        <option value="2803">大小单双</option>
        <option value="2804">趣味</option>
        <option value="2805">任选二</option>
        <option value="2806">任选三</option>
        <option value="2807">前四</option>
        <option value="2808">任选四</option>
      </select>
      状态:
      <select name="setResult">
        <option value="-1">全部</option>
        <option value="1">未开奖</option>
        <option value="2">已中奖</option>
        <option value="0">未中奖</option>
      </select>
      <span class="checkbox select">包含下级</span>
      <span>
        <a href="javascript:void(0)" class="btn" data-bind="click:searchData">查询</a>
      </span>
    </div>
    <div class="table-list">
      <table>
        <thead>
          <tr>
            <th>注单编号</th>
            <th>投注时间</th>
            <th>用户</th>
            <th>彩种</th>
            <th>玩法</th>
            <th>投注内容</th>
            <th>投注期号</th>
            <th>投注金额</th>
            <th>投注返点</th>
            <th>奖金</th>
            <th>开奖号码</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="12">该条件下查询不到符合条件的内容</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tips">
        <p>备注：点击“注单编号”可查看购彩详情</p>
    </div>
  </div>
</template>
<script>
export default {

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

.search-box {
  line-height: 47px;
  font-size: 14px;
      padding-left: 30px;
}

.search-box select {
  width: 122px;
  height: 25px;
}

.search-box .checkbox {
  padding: 2px 10px;
  line-height: 25px;
  padding-left: 35px;
  background: url('../../assets/base-ico.png') 4px -186px no-repeat;
}

.search-box span {
  padding: 0 10px;
  line-height: 25px;
  display: inline-block;
}

.btn {
  padding: 6px 10px;
  border: none;
  color: #fff;
  background: #b62929;
  border-radius: 4px;
  line-height: 1;
  display: inline-block;
  text-decoration: none;
}


/*表格*/

.table-list {
  padding: 10px 0 10px 20px;
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
  font-size: 16px;
  background: #c7c7c7;
  padding: 5px;
  line-height: 30px;
  font-weight: 500;
  color: #000;
}

.table-list tr td {
  border-bottom: 1px solid #cdcdcd;
  background: #fff;
  padding: 5px;
  text-align: center;
}
.tips {
    padding: 0 10px;
    height: 35px;
    line-height: 35px;
}
.tips p {
    line-height: 20px;
        font-size: 14px;
    color: #666;
    text-align:left;
}
</style>
