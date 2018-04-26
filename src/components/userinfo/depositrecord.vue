<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;存取款</span>
    </div>
    <div class="btns platform">
      <div :class='{recharge:true,ag:true,active:tabIndex==1}' @click="selectType(1);">
        在线存款记录
      </div>
      <div :class='{remittance:true,ag:true,active:tabIndex==2}' @click="selectType(2);">
        汇款记录
      </div>
      <div :class="{withdraw:true,ds:true,active:tabIndex==3}" @click="selectType(3);">
        取款记录
      </div>
    </div>
    <!-- 存款记录 -->
    <div class="table-list" v-if='tabIndex==1'>
      <table>
        <thead>
          <tr>
            <th>存款流水号</th>
            <th>存款时间</th>
            <th>存款金额</th>
            <th>存款状态</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(deposit,index) in onlineDepositDatas" :key='index'>
            <td>{{deposit.order_num}}</td>
            <td>{{deposit.update_time}}</td>
            <td>{{deposit.order_value}}</td>
            <td>{{deposit.statusString}}</td>
            <td>{{deposit.about}}</td>
          </tr>
          <tr v-if='onlineDepositDatas.length<=0'>
            <td colspan="5">暂时没有存款信息记录</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 汇款记录 -->
    <div class="table-list" v-if='tabIndex==2'>
      <table>
        <thead>
          <tr>
            <th>汇款流水号</th>
            <th>汇款时间</th>
            <th>汇款金额</th>
            <th>汇款银行</th>
            <th>汇款方式</th>
            <th>汇款状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bank,index) in bankDepositDatas" :key='index'>
            <td>{{bank.order_num}}</td>
            <td>{{bank.update_time}}</td>
            <td>{{bank.order_value}}</td>
            <td>{{bank.pay_card}}</td>
            <td>{{bank.manner}}</td>
            <td>{{bank.statusString}}</td>
          </tr>
          <tr v-if='onlineDepositDatas.length<=0'>
            <td colspan="6">暂时没有汇款信息记录</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 取款记录 -->
    <div class="table-list" v-if='tabIndex==3'>
      <table>
        <thead>
          <tr>
            <th>取款流水号</th>
            <th>取款时间</th>
            <th>取款金额</th>
            <th>取款状态</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(draw,index) in drawDatas" :key='index'>
            <td>{{draw.order_num}}</td>
            <td>{{draw.update_time}}</td>
            <td>{{draw.order_value}}</td>
            <td>{{draw.statusString}}</td>
            <td>{{draw.about}}</td>
          </tr>
          <tr v-if='onlineDepositDatas.length<=0'>
            <td colspan="5">暂时没有取款信息记录</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 在线存款
      onlineDepositDatas: [],
      // 在线汇款
      bankDepositDatas: [],
      // 取款
      drawDatas: [],
      tabIndex: 1
    }
  },
  mounted () {
    // 在线存款记录
    this.$http.get('/json/center/?r=ChaCkOnline').then((res) => {
      if (res.data.code === 0) {
        this.onlineDepositDatas = res.data.data
      }
    }).catch((error) => {
      console.log(error)
    })

    // 银行汇款记录
    this.$http.get('/json/center/?r=ChaHuiKuan').then((res) => {
      if (res.data.code === 0) {
        this.bankDepositDatas = res.data.data
      }
    }).catch((error) => {
      console.log(error)
    })

    // 取款记录
    this.$http.get('/json/center/?r=ChaQuKuan').then((res) => {
      if (res.data.code === 0) {
        this.drawDatas = res.data.data
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    selectType (index) {
      if (index === 1) {
        this.tabIndex = 1
      }
      if (index === 2) {
        this.tabIndex = 2
      }
      if (index === 3) {
        this.tabIndex = 3
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
  margin-right: 20px;
}

.main-head span {
  font-size: 16px;
  display: inline-block;
  height: 49px;
  border-bottom: 2px solid #b62929;
}

/*表格*/
.table-list {
  padding: 10px 20px 10px 20px;
}

.platform {
  padding-top: 20px;
}

.btns {
  overflow: hidden;
}

.btns .recharge,
.btns .remittance,
.btns .withdraw {
  padding: 0 22px;
  border: none;
  background: none;
  display: inline-block;
  background-color: #ededed;
  border: 1px solid #b62929;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  float: left;
}

.btns .ag,
.btns .ds {
  height: 40px;
  line-height: 40px;
}
.btns .recharge {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-left: 20px;
  border-right: none;
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

table {
  border-left: 1px solid #cdcdcd;
  border-top: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 5px;
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
  padding: 5px;
  text-align: center;
}

.table-list tr:hover {
  background-color: #ddd;
}

</style>
