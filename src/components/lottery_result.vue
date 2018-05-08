<template>
  <div class="lottery_result">
    <div class="search_box">
      <div class="item">
        游戏 :
        <select name="" id="" v-model="gameTypeIdx">
          <option value="-1"  disabled selected style="display:none;" >{{is_loading_lottery_type?"加载中...":"请选择游戏"}}</option>
          <option :value="idx" v-for="it,idx in gameTypes" :key="idx">{{it.short_name}}</option>
        </select>
      </div>
      <div class="item">
        范围 :
        <date-picker
          v-model="date_range"
          type="daterange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </date-picker>
      </div>
      <div class="item">
        期数 :
        <input type="text"/>
      </div>
      <div class="btn_search">查询</div>
    </div>
    <div class="cont">
      <table class="tb">
        <tr>
          <th rowspan="2">期数</th>
          <th rowspan="2">开奖时间</th>
          <th colspan="6">彩球号码</th>
          <th rowspan="2">总和</th>
          <th rowspan="2">总单双</th>
          <th rowspan="2">总大小</th>
          <th colspan="7">特码</th>
        </tr>
        <tr>
          <th>正码一</th>
          <th>正码二</th>
          <th>正码三</th>
          <th>正码四</th>
          <th>正码五</th>
          <th>特码</th>
          <th>单双</th>
          <th>大小</th>
          <th>合单双</th>
          <th>合大小</th>
          <th>合尾大小</th>
          <th>家禽野兽</th>
          <th>波段</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {DatePicker} from "element-ui"
  import {mapMutations} from "vuex"
  import alert from "@/components/base/alert"
  export default {
    name: "lottery_result",
    components: {
      DatePicker
    },
    async created(){
      this.initDateRange();
      await this.initGameType();
      //加载数据;
    },
    data() {
      return {
        date_range: '',
        gameTypes:[],
        gameTypeIdx:-1,
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        is_loading_lottery_type:false,
      }
    },
    methods:{
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
      async initGameType(){
        this.is_loading_lottery_type = true;
        let res = await this.$http.get('/api/lottery/basic/LotteryGroup');
        this.is_loading_lottery_type = false;
        if (!res) return;
        let resArr=[{short_name: "香港六合彩", name: "Xglhc"}];
        res.data.forEach(v=>{
          resArr=resArr.concat(v.type);
        });
        let idx=resArr.findIndex(v=>{
          return v.name==this.$route.params.game_name;
        });
        this.gameTypeIdx=idx;
        this.gameTypes=resArr;
      },
      initDateRange(){
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);//默认最近一个月
        this.date_range=[start,end];
      }
    }
  }
</script>

<style scoped lang="less">
  .lottery_result {
    textarea {
      line-height: 1.5em;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 3px 3px;
      padding-left: 10px;
      color: #999;
      position: relative;
      top: 3px;
      font-family: "Microsoft YaHei";
      box-sizing: border-box;
    }
    select, input[type=text], input[type=password], input[type=number] {
      line-height: 30px;
      height: 36px;
      width: 150px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 3px 3px;
      padding-left: 10px;
      color: #999;
      vertical-align: middle;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      outline: 0;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: rgba(255, 255, 255, 1);;
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
    }

    @-webkit-keyframes autofill { //去除chrome浏览器自动填充表单的黄色背景
      to {
        color: rgba(255, 255, 255, 1);
        background: transparent;
      }
    }

    @-webkit-keyframes autofill2 { //去除chrome浏览器自动填充表单的黄色背景
      to {
        color: #aaa;
        background: transparent;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-text-fill-color: #aaa;
      -webkit-animation-name: autofill2;
      -webkit-animation-fill-mode: both;
      color: #aaa !important;
    }

    .search_box {
      padding: 10px 0px;
      line-height: 35px;
      .item {
        display: inline-block;
        margin-right: 10px;
      }
      .btn_search {
        vertical-align: middle;
        background-color: #b62929;
        color: #fff;
        display: inline-block;
        line-height: 34px;
        min-width: 60px;
        text-align: center;
        border-radius: 3px 3px;
        cursor: pointer;
      }
    }
    table.tb {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #ccc;
      text-align: center;
      tr {
        border: 1px solid #ccc;
      }
      th {
        background-color: #C7C7C7;
        padding: 8px 0;
        font-weight: 200;
        border: 1px solid #fff;
      }
      td {
        background-color: #fff;
        padding: 8px 0;
      }
    }
    .pager {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      > .item {
        margin: 0 2px;
        display: inline-block;
        padding: 7px 10px;
        cursor: pointer;
        line-height: 1.2;
        border: 1px solid #ccc;
        background-color: #fff;
        &:hover {
          color: #B62929;
          border: 1px solid #b62929;
        }
        &.cur {
          color: #B62929;
          border: 1px solid #b62929;
        }
        &.sl {
          &:hover {
            border: none;
            background: none;
          }
          border: none;
          background: none;
        }
      }
    }
    text-align: left;
    min-width: 1170px;
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
  }

</style>
