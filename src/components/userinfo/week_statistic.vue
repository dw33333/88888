<template>
  <div class="week_statistic">
    <div class="header"><span class="mbx">用户中心 / 报表管理 / 报表统计</span></div>
    <div class="cont">
      <table class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>总笔数</th>
          <th>总投注</th>
          <th>日期</th>
          <th>有效下注</th>
          <th>结果</th>
        </tr>
        <tr v-for="it,idx in records" :key="idx">
          <td>{{it.all_bet}}</td>
          <td>{{it.amt_bet}}</td>
          <td>{{it.date}}</td>
          <td>{{it.vaild_bet}}</td>
          <td>{{it.win_bet}}</td>
        </tr>
      </table>
      <div style="text-align: center;padding:10px;" v-show="records.length<1&&!is_loading">暂无数据</div>
      <div style="text-align: center;padding:10px;color:#B62929;" v-show="is_loading">加载中...</div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import alert from "@/components/base/alert"

  export default {
    name: "bet_record",
    components: {
    },
    data() {
      return {
        records: [],
        is_loading:false
      }

    },
    async mounted() {
      this.loadRecords();
    },
    methods: {
      ...mapMutations(["ROOTBOX"]),
      alert(tit, msg, fn, msgStyle) {
        let _this = this;
        this.ROOTBOX({
          open: true,
          compt: alert,
          props: {
            tit: tit,
            msg: msg,
            msgstyle: msgStyle
          },
          handles: {
            confirm() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      async loadRecords() {
        this.is_loading=true;
        let res = await this.$http.get('/api/users/weekStatistic');
        this.is_loading=false;
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.records = res.data.data;
      }
    }
  }
</script>

<style lang="less">
  .week_statistic {
    font-size:14px;
    .el-input {
      input {
        padding-left: 30px;
        width: 220px;
        height: 40px;
        line-height: 40px;
      }
    }
    text-align: left;
    .header {
      background-color: #fff;
      padding-left: 20px;
      .mbx {
        line-height: 51px;
        display: inline-block;
        border-bottom: 2px solid #B62929;
      }
    }
    .cont {
      padding: 20px;
      .short {
        width: 150px;
      }
      .tab_type {
        float: left;
        border: 3px solid #B62929;
        border-radius: 3px 3px;
        margin: 10px 0;
        margin-right: 35px;
        > .item {
          display: inline-block;
          line-height: 1.9em;
          width: 80px;
          cursor: pointer;
          text-align: center;
          &.cur {
            color: #fff;
            background-color: #b62929;
          }
        }
      }

    }
  }
</style>
