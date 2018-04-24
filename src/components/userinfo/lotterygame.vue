<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;彩票</span>
    </div>
    <!-- 日期列表 -->
    <div class="table-list" v-if="tabIndex==1">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>下注金额</th>
            <th>结果</th>
            <th>用户操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>2018-04-14</td>
            <td>0</td>
           
            <td>0</td>
            <td><a href="javascript:void(0)" @click="isShowDetailFn(1)">查看详情</a></td>
          </tr> -->
          <tr v-for='(lottery,index) in lotteryWeekDatas' :key="index">
            <td>{{lottery.Date}}</td>
            <td>{{lottery.BetMoney}}</td>
            <td>{{lottery.Win}}</td>
            <td><a href="javascript:void(0)" @click="selectOneDayLottery(lottery.Date)">查看详情</a></td>
          </tr>
          <tr>
            <td>总计</td>
            <td>{{totalLotterymoney}}</td>
            <td>{{totalLotteryresultmoney}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 详情列表 -->
    <div class="table-list" v-if="tabIndex==2">
      <div class="text">{{dayTime}}<a href="javascript:void(0);" @click="isShowDetailFn(1)">返回</a></div>
      <table>
        <thead>
          <tr>
            <th>游戏名称</th>
            <th>下注金额</th>
            <th>未结算</th>
            <th>结果</th>
            <th>用户操作</th>
          </tr>
        </thead>
        <tbody>
          <!--  <tr>
            <td>六合彩</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0</td>
          </tr> -->
          <tr v-for='(days,index) in lotteryDayDatas' :key="index">
            <td>{{days.name}}</td>
            <td>{{days.BetMoney}}</td>
            <td>{{days.NotBetMoney}}</td>
            <td>{{days.Win}}</td>
            <td><a href="javascript:void(0);" @click='selectTypeLottery(days.name,days.gtype,days.date)'>查看订单详情</a></td>
          </tr>
          <tr>
            <td>总计</td>
            <td>{{daytotalLotterymoney}}</td>
            <td>{{daytotalLotterynotmoney}}</td>
            <td>{{daytotalLotteryresultmoney}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 订单详情 -->
    <div class="table-list" v-if="tabIndex==3">
      <div class="text">{{dayTime}}<span>{{typeName}}</span> <a href='javascript:void(0);' @click="isShowDetailFn(2)">返回</a></div>
      <table>
        <thead>
          <tr>
            <th>订单号</th>
            <th>彩票期号</th>
            <th>投注玩法</th>
            <th>投注内容</th>
            <th>投注金额</th>
            <th>返水</th>
            <th>赔率</th>
            <th>输赢结果</th>
            <th>投注时间</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(type,index) in lotteryTypeDatas' :key="index">
            <td>{{type.order_sub_num}}</td>
            <td>{{type.qishu}}</td>
            <td>{{type.rtype_str}}</td>
            <td>{{type.contentName}}</td>
            <td>{{type.bet_money_one}}</td>
            <td>{{type.fs}}</td>
            <td>{{type.bet_rate}}</td>
            <td>{{type.money_result}}</td>
            <td>{{type.bet_time}}</td>
            <td>{{type.status}}</td>
          </tr>
          <tr v-if="lotteryTypeDatas.length<=0">
            <td colspan="10">暂时没有下注信息</td>
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
      totalLotterymoney: '',
      totalLotteryresultmoney: '',
      lotteryWeekDatas: [],
      dayTime: '',
      typeName:'',
      daytotalLotterymoney: '',
      daytotalLotterynotmoney: '',
      daytotalLotteryresultmoney: '',
      lotteryDayDatas: [],
      lotteryTypeDatas:[]
    }
  },
  mounted() {
    // 彩票
    this.$http.get('/json/center/?r=LotteryRecord').then((res) => {
      if (res.data.code === 0) {
        // alert(1)
        this.totalLotterymoney = res.data.data.TotalBetMoney
        this.totalLotteryresultmoney = res.data.data.TotalResultMoney
        this.lotteryWeekDatas = res.data.data.recordList
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // 彩票日报表
    selectOneDayLottery(date) {

      this.tabIndex = 2;
      this.$http.get('/json/center/?r=LotteryRecordOneday&gamedate=' + date).then((res) => {
        if (res.data.code === 0) {
          this.dayTime = date;
          this.lotteryDayDatas = res.data.data.recordList;
          this.daytotalLotterymoney = res.data.data.total_bet_money;
          this.daytotalLotterynotmoney = res.data.data.total_not_bet_money;
          this.daytotalLotteryresultmoney = res.data.data.total_win_money;
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    // 打开彩票种类报表
    selectTypeLottery(type, gtype, date) {
      this.dayTime = date;
      this.typeName = type;
      this.tabIndex = 3;
      if (type === '六合彩') {
        this.$http.get('/json/center/?r=LotteryRecordLhcDetails&gtype=' + gtype + '&gamedate=' + date).then((res) => {
          if (res.data.code === 0) {
            this.lotteryTypeDatas = res.data.data.recordList


          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.$http.get('/json/center/?r=LotteryRecordDetails&gtype=' + gtype + '&gamedate=' + date).then((res) => {
          if (res.data.code === 0) {
            this.lotteryTypeDatas = res.data.data.recordList;
            console.log(this.lotteryTypeDatas)

          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },

    isShowDetailFn(index) {
      if (index == 1) {
        this.tabIndex = 1;

      }

      if (index == 2) {
        this.tabIndex = 2;

      }


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
  /*background: #fff;*/
  padding: 5px;
  text-align: center;
}

.table-list tr:hover {
  background-color: #ddd;
}

</style>
