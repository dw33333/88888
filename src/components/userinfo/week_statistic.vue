<template>
  <div class="week_statistic">
    <div class="header"><span class="mbx">用户中心 / 报表管理 / 报表统计</span></div>
    <div class="cont">
      <div class="clearfix">
        <div class="tab_type clearfix">
          <div class="item" :key="idx"  v-for="it,idx in types" @click="(types.forEach(v=>v.cur=false),it.cur=true,curType=it,typeClick())" :class="{cur:it.cur}">{{it.tit}}</div>
        </div>
        <div class="search_box" style="float:left;">
          时间 ：
          <!--<select class="short" v-model="curDate" >
            <option :value="it.value" v-for="it in dates">{{it.tit}}</option>
          </select>-->
          <el-select v-model="curDate" clearable size="small">
            <el-option
              v-for="it in dates"
              :value="it.value"
              :label="it.tit"
              :key="it.value"
            >
            </el-option>
          </el-select>
          <!--&emsp;&emsp;&emsp;订单号
          : <input class="short" type="text"/>-->
          <div  class="btn_search" @click="search">查询</div>
        </div>
      </div>
      <table class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>总笔数</th>
          <th>总投注</th>
          <th>日期</th>
          <th>有效下注</th>
          <th>结果</th>
        </tr>
        <tr class="tbody_tr" v-for="it,idx in records" :key="idx" @click="rowClick(it)">
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
    name: "week_statistic",
    components: {
    },
    data() {
      return {
        records: [],
        is_loading:false,
        curDate:"cur",
        curType:undefined,
        types:[{
          tit:"彩票",
          value:1,
          cur:true
        },{
          tit:"六合彩",
          value:2,
          cur:false
        }],
        dates:[{
          tit:"本周",
          value:"cur",
          cur:true
        },{
          tit:"上周",
          value:"before",
          cur:false
        }],
      }

    },
    created(){
      this.curType=this.types[0];
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
      typeClick(){
        this.loadRecords();
      },
      search(){
        this.loadRecords();
      },
      async loadRecords() {
        this.records=[];
        let url='/api/users/weekStatistic';
        let data={
          op:this.curDate
        };
        if(data.op=="cur") delete data.op;
        if(this.curType&&this.curType.value==2){
          url="/api/users/lhcWeekStatistic";
        }
        this.is_loading=true;
        let res = await this.$http.post(url,data);
        this.is_loading=false;
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.records = res.data.data;
      },
      rowClick(item){
        this.$router.push({name:"bet_record",params:{date:item.y+'-'+item.date}});
      }
    }
  }
</script>

<style lang="less">
  .week_statistic {
    font-size:14px;
    .el-input {
      input {
        /*padding-left: 30px;*/
        width: 220px;
        height: 35px;
        line-height: 40px;
      }
    }
    .tb{
      cursor:pointer;
      .tbody_tr:hover{
        background-color:#e8e5e5;
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
          line-height: 30px;
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
