<template>
  <div class="bet_record">
    <div class="header"><span class="mbx">用户中心 / 报表管理 / 下注记录</span></div>
    <div class="cont">
      <div class="tab_type clearfix">
        <div class="item" :style="{borderRight:idx!=bet_types.length-1?'3px solid #B62929':'none'}" :key="idx" v-for="it,idx in bet_types" @click="(bet_types.forEach(v=>v.cur=false),it.cur=true,bet_type=it,typeClick())" :class="{cur:it.cur}">{{it.tit}}</div>
      </div>
      <div class="search_box" style="float:left;">
        时间 ：
        <date-picker
          v-model="curDate"
          type="date"
          size="small"
          placeholder="全部日期"
          value-format="yyyy-MM-dd"
          :picker-options="dpStartPickerOptions"
        >
        </date-picker>&emsp;&emsp;<span v-show="bet_type.val==1">彩种 ：
       <!-- <select name="" id="" class="short" v-model="curLotteryType">
          <option :value="-1" disabled selected style="display:none;">{{is_loading_lottery_type?"加载中...":"请选择彩种"}}
          </option>
          <option :value="idx" v-for="it,idx in lotteryTypes" :key="idx">{{it.title}}</option>
        </select>-->
        <el-select v-model="curLotteryType" clearable size="small"
                   :placeholder="is_loading_lottery_type?'加载中...':'请选择彩种'">
          <el-option
            v-for="it,idx in lotteryTypes"
            :key="idx"
            :label="it.title"
            :value="idx"
          >
          </el-option>
        </el-select>
        </span>
        <div class="btn_search" @click="search">查询</div>
        <!--<div style="display: inline-block;color:#B62929;" v-show="">加载中...</div>-->
      </div>
      <table class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>订单号</th>
          <th>期数</th>
          <th>赔率</th>
          <th>反水</th>
          <th>下注金额</th>
          <th>下注内容</th>
          <th>彩种名称</th>
          <th>玩法名称</th>
          <th>结果</th>
          <th>状态</th>
        </tr>
        <tr v-for="it,idx in records" :key="idx">
          <td>{{it.order_id}}</td>
          <td>{{it.bet_issue}}</td>
          <td>{{it.bet_odds}}</td>
          <td>{{it.back_amt}}</td>
          <td>{{it.bet_amt}}</td>
          <td>{{it.name }}</td>
          <td>{{it.title }}</td>
          <td>{{it.type_name }}</td>
          <td>{{it.net_amt }}</td>
          <td>{{it.status==1?"已结算":"未结算"}}</td>
        </tr>
      </table>
      <div style="text-align: center;padding:10px;" v-show="records.length<1&&!is_loading_records">暂无数据</div>

      <div class="pager">
        <div class="item" v-show="pages.length>1" @click="pageClick(it.page)" v-for="it,idx in pages" :key="idx"
             :class="{cur:it.cur,sl:it.page==-1}">{{it.txt}}
        </div>
        <div style="display: inline-block;color:#B62929;" v-show="is_loading_records">加载中...</div>
        <div style="display: inline-block;color:#B62929;opacity:0" v-show="!is_loading_records">加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import alert from "@/components/base/alert"
  /*import {DatePicker} from "element-ui"*/

  export default {
    name: "bet_record",
    /*components: {
      DatePicker
    },*/
    data() {
      return {
        pageSize: 10,
        pages: [],
        curDate: "",
        lotteryTypes: [],
        curLotteryType: null,//index
        dpStartPickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() || time.getTime() < Date.now() - 30 * 24 * 60 * 60 * 1000;
          }
        },
        records: [],
        is_loading_lottery_type: false,
        is_loading_records: false,
        bet_type:null,
        bet_types:[{tit:"彩票",val:1,cur:true},{tit:"香港六合彩",val:2,cur:false,hasborder:true}]
      }
    },
    created(){
      this.bet_type=this.bet_types[0];
      this.curDate=this.$route.params.date?this.$route.params.date:"";
      console.log(this.$route.params.type);
      if(this.$route.params.type){
        this.bet_type=this.bet_types[this.bet_types.findIndex(v=>{
          return
        })];
        this.bet_types.forEach(v=>{
          v.cur=false;
          if(this.$route.params.type==v.val){
            this.bet_type=v;
            v.cur=true;
          };
        })
      }
    },
    async mounted() {
      await this.initLotteryType();
      this.loadRecords(1);
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
      setPager(page, pageCount) {
        this.pages = [];
        if (pageCount < 1) return;
        if (page - 1 > 0) {
          this.pages.push({
            page: 1,
            txt: "首页"
          });
          this.pages.push({
            page: page - 1,
            txt: "上一页"
          });
        }
        let begin = 1, end = pageCount;
        if (page - 3 > 1) {
          begin = page - 3;
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 3 <= pageCount) {
          end = page + 3;
        }
        for (let i = begin; i <= end; i++) {
          this.pages.push({
            page: i,
            txt: i,
            cur: i == page
          })
        }
        if (end != pageCount) {
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 1 <= pageCount) {
          this.pages.push({
            page: page + 1,
            txt: "下一页"
          });
          this.pages.push({
            page: pageCount,
            txt: "末页"
          });
        }
      },
      async initLotteryType() {
        this.is_loading_lottery_type = true;
        let res = await this.$http.get('/api/lottery/basic/LotteryList/');
        this.is_loading_lottery_type = false;
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        res.data.data.unshift({id: -1, title: "全部"});
        this.lotteryTypes = res.data.data;
        this.curLotteryType = 0;
      },
      async loadRecords(page) {
        if (this.is_loading_lottery_type || this.is_loading_records) {
          //!this.lotteryTypes[this.curLotteryType] ||
          return;
        }
        let url = '/api/users/betRecord';
        let data = {
          p: page,
          ps: this.pageSize,
          lot_id: this.lotteryTypes[this.curLotteryType].id==-1?"":this.lotteryTypes[this.curLotteryType].id,
          d:this.curDate
        }
        let method = "POST";
        if (this.bet_type.val==2) {//香港六合彩
          url = "/api/lhc/Lhcinfo/betRecord/";
          data = {
            page: page,
            ps: this.pageSize,
            d: this.curDate
          }
          method = "POST";
        }
        this.is_loading_records = true;
        let res = await this.$http({
          method: method,
          url: url,
          data: method == "POST" ? data : undefined,
          params: method == "GET" ? data : undefined
        });
        this.is_loading_records = false;
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.records = res.data.list;
        this.setPager(page, res.data.page);
      },
      search() {
        this.loadRecords(1);
      },
      typeClick(){
        this.loadRecords(1);
      },
      pageClick(page) {
        if (page == -1) return;
        this.loadRecords(page);
        //todo 初始日期
      }
    }
  }
</script>

<style lang="less">
  .bet_record {
    font-size: 14px;
    .el-date-editor {
      input[type=text], input[type=password] {
        padding-left: 30px;
        height: 35px;
        line-height: 35px;
      }
    }
    .el-input__icon {
      line-height: 35px;
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
        float:left;
        border: 3px solid #B62929;
        border-radius: 3px 3px;
        margin: 10px 0;
        margin-right: 25px;
        > .item {
          display: inline-block;
          line-height: 2.2em;
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
