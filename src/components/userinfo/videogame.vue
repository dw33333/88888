<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;视讯</span>
    </div>
    <!-- 日期列表 -->
    <div class="table-list" v-if="tabIndex==1">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>下注金额</th>
            <th>有效投注</th>
            <th>结果</th>
            <th>用户操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='week in liveWeekDatas'>
            <td>{{week.date}}</td>
            <td>{{week.bet_money_total}}</td>
            <td>{{week.val_money_total}}</td>
            <td>{{week.win_total}}</td>
            <td><a href="javascript:void(0)" @click="selectOneDayLive(week.date)">查看详情</a></td>
          </tr>
          <tr>
            <td>总计</td>
            <td>{{totalLivemoney}}</td>
            <td>{{totalLivevalmoney}}</td>
            <td>{{totalLiveresultmoney}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 日期详情列表 -->
    <div class="table-list" v-if="tabIndex==2">
      <div class="text">{{dayTime}} <a href="javascript:void(0);" @click="isShowDetailFn();">返回</a></div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>订单号</th>
            <th>下注时间</th>
            <th>游戏类型</th>
            <th>投注内容</th>
            <th>投注金额</th>
            <th>有效投注</th>
            <th>输赢结果</th>
            <th>游戏平台</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='live in liveDayDatas'>
            <td>{{type.i}}</td>
            <td>{{type.order_num}}</td>
            <td>{{type.order_time}}</td>
            <td>{{type.live_type}}</td>
            <td>{{type.bet_info}}</td>
            <td>{{type.bet_money}}</td>
            <td>{{type.VALIDBETAMOUNT}}</td>
            <td>{{type.live_win}}</td>
            <td>{{type.game_type}}</td>
          </tr>
          <tr v-if='liveDayDatas.length<=0'>
            <td colspan="9">暂时没有下注信息</td>
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
      tabIndex: 1,
      totalLivemoney: '',
      totalLivevalmoney: '',
      totalLiveresultmoney: '',
      liveWeekDatas: [],
      dayTime: '',
      liveDayDatas: [],

    }
  },
  mounted() {
    this.videoGameFn();
  },
  methods: {
    videoGameFn() {
      // 真人视讯
      this.$http.get('/json/center/?r=LiveRecord').then((res) => {
        if (res.data.code === 0) {
          this.totalLivemoney = res.data.data.bet_money_total
          this.totalLivevalmoney = res.data.data.val_money_total
          this.totalLiveresultmoney = res.data.data.bet_win_total
          this.liveWeekDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 真人日报表
    selectOneDayLive(date) {
      this.tabIndex = 2;
      this.dayTime = date;
      this.$http.get('/json/center/?r=LiveRecordDetails&date=' + date).then((res) => {
        console.log(res.data.data.InfoList)
        if (res.data.code === 0) {
          this.liveDayDatas = res.data.data.InfoList;
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    // 返回按钮点击
    isShowDetailFn() {
      this.tabIndex = 1;
    }
  }
};

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

.table-list .text a {
  background-color: #e34343;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
}

.table-list .text span {
  margin: 0 20px;
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
  padding: 5px;
  text-align: center;
}


.table-list tr:hover {
  background-color: #ddd;
}

</style>
