<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;报表管理&gt;充值记录</span>
    </div>
    <div class="search-box">
      <div class="btns">
        <div :class='{recharge:true,active:isShow}' @click="selectType(1)">充值记录</div><div :class="{withdraw:true,active:!isShow}" @click="selectType(2)">提现记录</div>
      </div>
      <div>
        时间:
        <input type="text">至
        <input type="text"> 订单号:
        <input type="text">
        <span>
        <a href="javascript:void(0)" class="search" data-bind="click:searchData">查询</a>
      </span>
      </div>
    </div>
    <!-- 充值记录 -->
    <div class="table-list" v-if="isShow">
      <table>
        <thead>
          <tr>
            <th>订单号</th>
            <th>充值时间</th>
            <th>充值金额</th>
            <th>充值方式</th>
            <th>入款手续费</th>
            <th>优惠</th>
            <th>充值状态</th>
            <th>充值实际金额</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="12">该条件下查询不到符合条件的内容</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 提现记录 -->
    <div class="table-list" v-else>
      <table>
        <thead>
          <tr>
            <th>订单号</th>
            <th>提现时间</th>
            <th>提现金额</th>
            <th>手续费</th>
            <th>提现银行</th>
            <th>银行卡尾数</th>
            <th>提现状态</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="12">该条件下查询不到符合条件的内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow:true
    }
  },
  methods: {
    selectType (index) {

      if (index == 1) {
        this.isShow = true;
      };
      if (index == 2) {
        this.isShow = false;
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
  line-height: 34px;
  font-size: 14px;
  padding-left: 30px;
  text-align: left;
}





.search-box span {
  padding: 0 10px;
  line-height: 25px;
  display: inline-block;
}

.search {
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


.btns {
  margin: 10px;
}

.btns .recharge,
.btns .withdraw {
  padding: 0 22px;
  border: none;
  background: none;
  display: inline-block;
  background-color: #ededed;
  border: 1px solid #b62929;
  cursor: pointer;
}

.btns .recharge {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.btns .withdraw {
  border-left: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btns>.active {
  background-color: #b62929;
  color: #fff;
}

</style>
