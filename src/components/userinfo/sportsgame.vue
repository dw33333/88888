<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;体育</span>
    </div>
    <!-- 日期列表  周报 -->
    <div class="table-list" v-if="tabIndex==1">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>下注金额</th>
            <th>未结算</th>
            <th>结果</th>
            <th>用户操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(sport,index) in sportRecordList' :key='index'>
            <td>{{sport.DateTime}}</td>
            <td>{{sport.BetMoney}}</td>
            <td>{{sport.NotBetMoney}}</td>
            <td>{{sport.ResultMoney}}</td>
            <td><a href="javascript:void(0)" @click="selectOneDaySport(sport.DateTime)">查看详情</a></td>
          </tr>
          <!-- <tr>
            <td>2018-04-14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href="javascript:void(0)" @click="isShowDetailFn(1)">查看详情</a></td>
          </tr> -->
          <tr>
            <td>总计</td>
            <td>{{TotalBetMoney}}</td>
            <td>{{TotalNotbetMoney}}</td>
            <td>{{TotalResultMoney}}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 详情列表  日报 -->
    <div class="table-list" v-if="tabIndex==2">
      <div class="text">{{dayTime}}<a href='javascript:void(0);' @click="isShowDetailFn(1)">返回</a></div>
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
          <!-- <tr>
            <td>足球</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0</td>
          </tr> -->
          <tr v-for="(sports,index) in sportDayDatas" :key='index'>
            <td>{{sports.name}}</td>
            <td>{{sports.BetMoney}}</td>
            <td>{{sports.NotBetMoney}}</td>
            <td>{{sports.ResultMoney}}</td>
            <td><a href="javascript:void(0);" @click='selectTypeSport(sports.name,dayTime);'>查看订单详情</a></td>
          </tr>
          <tr>
            <td>总计</td>
            <td>{{daytotalmoney}}</td>
            <td>{{daytotalnotmoney}}</td>
            <td>{{daytotalresultmoney}}</td>
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
            <th>联赛名</th>
            <th>主客队</th>
            <th>投注信息</th>
            <th>投注金额</th>
            <th>结果</th>
            <th>投注时间</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='(order,index) in sportTypeDatas' :key='index'>
            <td>{{order.order_num}}</td>
            <td>{{order.match_name}}</td>
            <td>{{order.master_guest}}</td>
            <td>{{order.bet_info}}</td>
            <td>{{order.bet_money}}</td>
            <td>{{order.result}}</td>
            <td>{{order.bet_time}}</td>
            <td>{{order.status}}</td>
          </tr>
          <tr v-if='sportTypeDatas.length==0'>
            <td colspan="8">暂时没有下注信息</td>
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
      tabIndex: 1,
      sportRecordList: [],
      TotalBetMoney: '',
      TotalNotbetMoney: '',
      TotalResultMoney: '',
      dayTime: '',
      daytotalmoney: '',
      daytotalnotmoney: '',
      daytotalresultmoney: '',
      sportDayDatas: '',
      sportTypeDatas: '',
      typeName: ''
    }
  },
  mounted () {
    this.getSportRecord()
  },
  methods: {
    // 获取体育注单记录
    getSportRecord () {
      this.$http.get('/json/center/?r=SportRecord').then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          this.sportRecordList = res.data.data.recordList
          this.TotalBetMoney = res.data.data.TotalBetMoney
          this.TotalNotbetMoney = res.data.data.TotalNotbetMoney
          this.TotalResultMoney = res.data.data.TotalResultMoney
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 打开体育日报表
    selectOneDaySport (date) {
      this.$http.get('/json/center/?r=SportRecordOneday&date=' + date).then((res) => {
        if (res.data.code === 0) {
          // this.dayifopen = !this.dayifopen
          this.tabIndex = 2
          this.dayTime = date
          this.daytotalmoney = res.data.data.TotalBetMoney
          this.daytotalnotmoney = res.data.data.TotalNotbetMoney
          this.daytotalresultmoney = res.data.data.TotalResultMoney
          this.sportDayDatas = res.data.data.recordList
        }
      }).catch((error) => {
        console.log(error)
      })
    },

    // 打开体育种类报表
    selectTypeSport (type, date) {
      this.tabIndex = 3
      this.dayTime = date
      this.typeName = type

      if (type === '串关') {
        console.log('chuanguan')
        this.$http.get('/json/center/?r=SportRecordCgDetails&date=' + date + '&gtype=' + type).then((res) => {
          if (res.data.code === 0) {
            this.sportTypeDatas = res.data.data
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        console.log('feichuanguan')
        this.$http.get('/json/center/?r=SportRecordDetails' + '&date=' + date + '&gtype=' + type).then((res) => {
          if (res.data.code === 0) {
            this.sportTypeDatas = res.data.data
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    // 返回按钮点击
    isShowDetailFn (index) {
      if (index === 1) {
        this.tabIndex = 1
      }
      if (index === 2) {
        this.tabIndex = 2
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
