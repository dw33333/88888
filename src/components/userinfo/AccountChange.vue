<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;报表管理&gt;帐变报表</span>
    </div>
    <div class="search-box">
      时间:
      <input type="text">至
      <input type="text"> 用户名：
      <input type="text">
      <span class="checkbox select">包含下级</span>
      <span>
        <a href="javascript:void(0)" class="btn" data-bind="click:searchData">查询</a>
      </span>
    </div>
    <!-- 类型 -->
    <div class="form-box">
      <div class="alltype">
        类型：
        <label>
          <input type="checkbox" name="cktype" value="0" id="checkAllType">所有类型</label>
        <div id="typeItems">
          <span class="red">收入：</span>
          <label style="padding:0 5px;" v-for="(income,incomeIndex) in incomeArr">
            <input type="checkbox" name="cktype" :value="income">{{income}}
          </label>
          <!-- <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="2">线上支付
          </label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="3">人工存入</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="8">给予返水</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="17">活动优惠</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="26">彩票派彩</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="27">彩票返水</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="28">退佣(分红)</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="31">撤单返款
          </label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="33">追号返款</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="34">系统奖励</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="35">提款失败</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="36">代理返点</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="37">代理日工资</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="41">代理扶持</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="42">其他充值</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="43">打和返款</label> -->
          <br>
          <span class="red">支出：</span>
          <label style="padding:0 5px;" v-for="(spend,spendIndex) in spendingArr">
            <input type="checkbox" name="cktype" :value="spend">{{spend}}
          </label>

          <!-- <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="5">用户提款</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="7">人工提出</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="9">冲销返水</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="10">彩票下注</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="30">转账充值</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="32">追号扣款</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="39">优惠扣除</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="40">其他扣除</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="44">冲销派奖</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="45">分红转账</label>
          <label style="padding:0 5px;">
            <input type="checkbox" name="cktype" value="46">日工资转账</label> -->
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table-list">
      <table>
        <thead>
          <tr>
            <th>用户名</th>
            <th>时间</th>
            <th>帐变类型</th>
            <th>支出</th>
            <th>收入</th>
            <th>余额</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="7">该条件下查询不到符合条件的内容</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style="font-weight:bold">
            <td colspan="3">小计0笔</td>
            <td>
              <font color="red">
                总支出:0(0)
              </font>
            </td>
            <td>
              总收入:0(0)
            </td>
            <td colspan="2"></td>
          </tr>
          <tr style="font-weight:bold">
            <td colspan="3">总计0笔</td>
            <td>
              <font color="red">总支出:0(0)</font>
            </td>
            <td>总收入:0(0)</td>
            <td colspan="2"></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="tips">
      <p>备注：本页资金变动为所有用户资金变动之和</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      incomeArr: ['公司入款', '线上支付', '人工存入', '给予返水', '活动优惠', '彩票派彩', '彩票返水', '退佣(分红)', '撤单返款', '追号返款', '系统奖励', '提款失败', '代理返点', '代理日工资', '代理扶持', '其他充值', '打和返款'],
      spendingArr: ['出款扣除', '用户提款', '人工提出', '冲销返水', '彩票下注', '转账充值', '追号扣款', '优惠扣除', '其他扣除', '冲销派奖', '分红转账', '日工资转账']
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





/*类型*/

.form-box {
  padding: 10px 20px;
}

.form-box>.alltype {
  padding: 5px 10px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #d4d4d4;
  margin: 10px 0 0 0;
  line-height: 2;
  text-align: left;
  font-size: 14px;
}

.red {
  color: #ea3146 !important;
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
  text-align: left;
}

td {
  border-bottom: 1px solid #cdcdcd;
  background: #fff;
  padding: 5px;
  text-align: center;
}

</style>
