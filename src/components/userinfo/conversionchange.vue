<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;额度转换</span>
    </div>
    <!-- 日期列表 -->
    <div class="table-list">
      <table>
        <thead>
          <tr>
            <th>转账时间</th>
            <th>订单号</th>
            <th>游戏类型</th>
            <th>转账类型</th>
            <th>转账金额</th>
            <th>结果反馈</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quota,index) in quotaWeekDatas" :key='index'>
            <td>{{quota.do_time}}</td>
            <td>{{quota.order_num}}</td>
            <td>{{quota.live_type}}</td>
            <td>{{quota.zz_type}}</td>
            <td>{{quota.zz_money}}</td>
            <td>{{quota.result}}</td>
          </tr>
          <tr v-if="quotaWeekDatas.length<=0">
            <td colspan="6">暂时没有相关信息</td>
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
      quotaWeekDatas: [],
      inliveMoney: '',
      outliveMoney: ''
    }
  },
  mounted () {
    // 额度转换
    this.$http.get('/json/center/?r=ChangeHistory/').then((res) => {
      console.log(res.data)
      if (res.data.code === 0) {
        this.quotaWeekDatas = res.data.data.InfoList || []
        this.inliveMoney = res.data.data.in_normal_total
        this.outliveMoney = res.data.data.out_normal_total
      }
    }).catch((error) => {
      console.log(error)
    })
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

.table-list .text {
  line-height: 50px;
  height: 50px;
  text-align: left;
  text-indent: 10px;
}

.table-list .text span {
  background-color: #e34343;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
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
  /*background: #fff;*/
  padding: 5px;
  text-align: center;
}

.table-list tr:hover {
  background-color: #ddd;
}

</style>
