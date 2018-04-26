<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户管理&gt;银行卡列表</span>
    </div>
    <div v-if="isShowCardList">
      <div class="search-box">
        <span>
        <a href="javascript:void(0)" class="btn" @click="newCard(1)">新增</a>
      </span>
      </div>
      <!-- 表格 -->
      <div class="table-list">
        <table>
          <thead>
            <tr>
              <th>开户名</th>
              <th>开户行</th>
              <th>卡号</th>
              <th>状态</th>
              <th>绑定时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="5">暂无数据</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="add-card" v-else>
      <p>提示:<span class="colorf00">*</span>为必填信息，如需要删除请联系客服提供银行卡照片和充值截图进行处理！</p>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>开户银行:</li>
        <li>
          <select name="bank">
            <option value="1">中国工商银行</option>
            <option value="2">中国农业银行</option>
            <option value="3">中国民生银行</option>
            <option value="4">中国建设银行</option>
            <option value="5">中国招商银行</option>
            <option value="6">中国银行</option>
            <option value="7">中国交通银行</option>
            <option value="8">中国邮政银行</option>
            <option value="9">中国兴业银行</option>
            <option value="10">华夏银行</option>
            <option value="11">浦发银行</option>
            <option value="12">广州银行</option>
            <option value="13">BEA东亚银行</option>
            <option value="14">广州农商银行</option>
            <option value="15">顺德农商银行</option>
            <option value="16">北京银行</option>
            <option value="17">平安银行</option>
            <option value="18">杭州银行</option>
            <option value="19">温州银行</option>
            <option value="20">上海农商银行</option>
            <option value="21">尧都信用社</option>
            <option value="22">中国光大银行</option>
            <option value="23">中信银行</option>
            <option value="24">渤海银行</option>
            <option value="25">浙商银行</option>
            <option value="26">晋商银行</option>
            <option value="27">汉口银行</option>
            <option value="28">浙江稠州商业银行</option>
            <option value="29">上海银行</option>
            <option value="30">广发银行</option>
            <option value="32">东莞银行</option>
            <option value="33">宁波银行</option>
            <option value="34">南京银行</option>
            <option value="36">北京农商银行</option>
            <option value="37">重庆银行</option>
            <option value="38">广西壮族自治区农村信用社</option>
            <option value="40">江苏银行</option>
            <option value="41">吉林银行</option>
            <option value="42">成都银行</option>
            <option value="46">农村信用社</option>
            <option value="47">晋城银行</option>
            <option value="48">邯郸银行</option>
            <option value="49">郑州银行</option>
            <option value="50">九江银行</option>
            <option value="51">财付通</option>
            <option value="52">盛京银行</option>
            <option value="53">安徽农村信用合作社</option>
            <option value="54">甘肃银行</option>
            <option value="55">甘肃农村信用社</option>
            <option value="56">东莞农村商业银行</option>
            <option value="57">广东农村商业银行</option>
            <option value="58">Payoneer</option>
            <option value="59">NETELLER </option>
            <option value="60">Skrill</option>
            <option value="61">PayPal</option>
            <option value="62">其它银行</option>
            <option value="63">锦州银行</option>
            <option value="64">齐鲁银行</option>
            <option value="65">QQ钱包</option>
            <option value="66">贵阳银行</option>
            <option value="67">深圳农商银行</option>
            <option value="68">贵州省农村信用社</option>
            <option value="69">樱花银行</option>
            <option value="70">京东钱包</option>
            <option value="71">甘肃银行</option>
            <option value="72">兰州银行</option>
            <option value="73">浙江农村信用社</option>
            <option value="74">霜夏银行</option>
            <option value="75">云南省农村信用社</option>
            <option value="76">云南省农村信用社</option>
            <option value="77">莱商银行</option>
            <option value="78">南京銀行</option>
            <option value="79">海南农村信用社</option>
            <option value="80">三亚农村信用社</option>
            <option value="81">贵州农村信用社</option>
            <option value="82">福建农村信用社</option>
            <option value="83">海南省农村信用社</option>
            <option value="84">永州市农村信用社</option>
            <option value="85">东莞农村商业银行</option>
            <option value="86">江西信用社</option>
            <option value="87">上海农村商业银行</option>
            <option value="88">北京农村商业银行</option>
            <option value="89">南洋商业银行</option>
            <option value="90">河北银行</option>
            <option value="91">泰隆银行</option>
          </select>
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>开户人姓名:</li>
        <li>
          <input type="text" placeholder="填写银行卡真实姓名">
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>银行卡号:</li>
        <li>
          <input type="text" placeholder="只能输入13-19个数字">
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>确认卡号:</li>
        <li>
          <input type="text" placeholder="再次输入银行卡卡号">
        </li>
      </ul>
      <div class="item btns">
        <button>下一步</button>
        <button @click="newCard(2)">返回</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowCardList: true
    }
  },
  methods: {
    newCard (index) {
      if (index === 1) {
        this.isShowCardList = false
      }
      if (index === 2) {
        this.isShowCardList = true
      }
    }
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

.search-box {
  line-height: 47px;
  font-size: 14px;
  padding-left: 30px;
  text-align: left;
  margin-top: 10px;
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
  padding: 8px 20px;
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

.colorf00 {
  color: #F00!important;
}

td {
  border-bottom: 1px solid #cdcdcd;
  background: #fff;
  padding: 5px;
  text-align: center;
}

/*新增银行卡*/

.add-card {
  background-color: #fff;
  font-size: 14px;
  line-height: 50px;
}

.add-card p {
  text-align: left;
  margin: 0;
  padding: 0 20px;
  border-bottom: 1px solid #ededed;
}

.add-card .item input {
  height: 24px;
  border: 1px #ccc solid;
  width: 200px;
  border-radius: 4px;
  padding-left: 4px;
}

.add-card .item select {
  height: 28px;
  border: 1px #ccc solid;
  width: 206px;
  border-radius: 4px;
  padding-left: 4px;
}

input:focus {
  outline: none;
  outline: 0;
}

.add-card .item input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}

.add-card .item {
  overflow: hidden;
  padding: 0 10px;
  border-bottom: 1px solid #ededed;
}

.add-card .item li {
  float: left;
  width: 200px;
}

.add-card .item button {
  background-color: #b62929;
  padding: 8px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
}

.add-card .item.btns {
  text-align: left;
  padding-left: 180px;
}

.add-card .item button:hover {
  background-color: #e34343;
}

.add-card .item li.title {
  text-align: right;
}
</style>
