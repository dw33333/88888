<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户充值</span>
    </div>
    <div class="cont">
      <div class="tab_type clearfix">
        <div class="item" v-for="it,idx in typeList" :key="idx"
             :class="{'cur':it.selected,'bank':it.id==-1,'other':it.id!=-1}"
             @click="(typeList.forEach(v=>v.selected=false),it.selected=true,curType=it)">{{it.name}}
        </div>
        <!--<div class="item other">微信</div>-->
      </div>
      <div class="bank_content" v-if="curType&&curType.id==-1">
        <div class="step">
          <div class="tit"><i>1</i>请选择入款银行账号：</div>
          <div class="det">
            <ul class="cards clearfix">
              <li class="card" :class="{'cur':it.selected}" v-for="it,idx in curType.bankList" :key="idx"
                  @click="(curType.selectedBankId=it.id,curType.bankList.forEach(v=>v.selected=false),it.selected=true)">
                <div>开户银行 : {{it.bank_name}}</div>
                <div>开户网点 : {{it.bank_city}}</div>
                <div>收款账户 : {{it.bank_number}}</div>
                <div>收&ensp;款&ensp;人 : {{it.bank_xm}}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="step">
          <div class="tit"><i>2</i>填写转账资料：</div>
          <div class="det">
            <div class="ipt_item"><span>存入金额 : </span><input type="number" v-model="curType.money"
                                                             placeholder="入款金额,单笔下限100"
            ></div>
            <div class="ipt_item"><span style="vertical-align: middle;">备&emsp;&emsp;注 : </span>
              <textarea name="" cols="30" rows="3" v-model="curType.about" placeholder="请备注账号/姓名、微信支付请留言备注"></textarea>
            </div>
            <div class="ipt_item"><span>转账类型 : </span><select name="" id="" v-model="curType.type" >
              <option value="" disabled selected style='display:none;'>请选择转账类型</option>
              <option :value="it" v-for="it,idx in huikuanMode" :key="idx">{{it}}</option>
            </select></div>
            <div class="btn_next" @click="submit">提交</div>
          </div>
        </div>
        <div class="tishi">
          <div>温馨提示</div>
          <div>一、请在金额转出之后务必填写网页下方的汇款信息表格，以便我们财务人员能及时为您确认添加金额到您的会员账户。</div>
          <div>二、本公司最低汇款金额为100元，公司赠送银行汇款红利给会员（例:汇款金额10万元赠送1%即1000元，按百赠送）。</div>
          <div>三、如您是跨行转帐，请您在转帐时选择跨行快速汇款或跨行加急汇款（避免公司不能及时查收您的款项）。</div>
        </div>
      </div>
      <div class="other_content" v-if="curType&&curType.id!=-1">
        <div class="title">请选择通道:</div>
        <div class="online_paytypes clearfix">
          <div class="item" v-for="it,idx in curType.bankList" :key="idx" :class="{'cur':it.selected}" @click="(curType.selectedBankValue=it.value,curType.bankList.forEach(v=>{v.selected=false;}),it.selected=true)">{{it.name}}</div>
        </div>
        <div class="ipt">充值金额: <input type="number" v-model="curType.money" style="width:150px;" placeholder="请输入充值金额"/>&emsp;&emsp;&emsp;<span
          style="color:#ea3146;">*单笔最低存款金额{{curType.pay_lowest}}元,最高存款金额{{curType.pay_height}}元</span></div>
        <div class="btn_next" @click="submit">提交</div>
        <div class="tishi">
          <div>在线支付说明：</div>
          <div>(1).请按表格填写准确的在线冲值信息,确认提交后会进入选择的支付通道进行在线付款!</div>
          <div>(2).交易成功后，返回支付网站可以查看您的订单信息!</div>
          <div>(3).如有任何疑问,您可以联系 在线客服为您提供365天×24小时不间断的友善和专业客户咨询服务!</div>
        </div>
      </div>
    </div>
    <!--<maskLayer :ifopen="ifopen" :content='content'></maskLayer>-->
  </div>
</template>
<script>
  import maskLayer from '../base/mask-layer'
  import {mapState, mapMutations} from 'vuex'
  import alert from "@/components/base/alert"

  export default {
    data() {
      return {
        ifopen: false,
        huikuanMode: ['银行柜台', 'ATM现金', 'ATM卡转', '网银转账', '支付宝', '微信'],
        typeList: [],
        curType: null,
      }
    },

    methods: {
      ...mapMutations(['ROOTBOX']),
      alert(tit,msg,fn,msgStyle){
        let _this=this;
        this.ROOTBOX({
          open:true,
          compt:alert,
          props:{
            tit:tit,
            msg:msg,
            msgstyle:msgStyle
          },
          handles:{
            confirm(){
              if(fn)fn();
              _this.ROOTBOX({
                open:false
              })
            },
            close(){
              _this.ROOTBOX({
                open:false
              });
            }
          }
        });
      },
      async submit(){
        if(this.curType&&this.curType.id==-1){
          if(this.curType.selectedBankId==-1){
            this.alert("提示","请选择银行卡");
            return;
          }else if(!this.curType.money){
            this.alert("提示","请填写转账金额");
            return;
          }else if(parseFloat(this.curType.money)<100){
            this.alert("提示","转账金额不能低于100元");
            return;
          }else if(!this.curType.about){
            this.alert("提示","请填写备注")
            return;
          }else if(!this.curType.type){
            this.alert("提示","请选择转账类型")
            return;
          }
          let res= await this.$http.post("/api/money/deposit",{
            id:this.curType.selectedBankId,
            order_value:this.curType.money,
            about:this.curType.type+this.curType.about,
            source:1
          });
          if(!res)return
          if(res.status === 200 ){
            if(res.data.code === 0){
              this.alert("提示","提交成功！",()=>{
                this.$router.push("depositrecord");
              });
            }else{
              this.alert("提示",res.data.msg);
            }
          }else{
            console.error(res);
          }
        }else if(this.curType&&this.curType.id!=-1){
          if(!this.curType.selectedBankValue){
            this.alert("提示","请选支付通道");
            return;
          }else if(!this.curType.money){
            this.alert("提示","请填写支付金额");
            return;
          }else if(parseFloat(this.curType.money)<parseFloat(this.curType.pay_lowest)){
            this.alert("提示",`支付金额不能低于${this.curType.pay_lowest}元`);
            return;
          }else if(parseFloat(this.curType.money)>parseFloat(this.curType.pay_height)){
            this.alert("提示",`支付金额不能高于${this.curType.pay_height}元`);
            return;
          }
        }
      }
    },
    components: {
      maskLayer
    },
    async mounted() {
      let res = await this.$http.get('/api/pay/mobilelist');
      if (!res) return;
      if (res.status === 200 ) {
        if(res.data.code !== 0){
          this.alert("提示",res.data.msg);
          return;
        }
        let bp = {id: -1, name: "银行卡转账", selected: true, selectedBankId: -1, money: "", about: "", type: ""};
        let inBankRes = await this.$http.get('/api/HuikuanList/showBank');
        if (!inBankRes) return;
        if (inBankRes.status === 200 ) {
          if(inBankRes.data.code !== 0){
            this.alert("提示",inBankRes.data.msg);
            return;
          }
          bp.bankList = inBankRes.data.data;
          bp.bankList.forEach(v => {
            v.selected = false;
          });
        } else {
          console.error(inBankRes);
        }
        let list = res.data.data;
        list.forEach(v => {
          v.selected = false;
          v.selectedBankValue="";
          v.bankList.forEach(vv=>{
            vv.selected=false;
          })
        });
        list.unshift(bp);
        this.typeList = list;
        this.curType = this.typeList[0];
      } else {
        console.error(res);
      }
    },

    computed: {
      currentTime() {
        let Y = new Date().getFullYear()
        let M = new Date().getMonth() + 1
        let D = new Date().getDate()
        let H = new Date().getHours()
        let m = new Date().getMinutes() < 10 ? 0 + new Date().getMinutes() : new Date().getMinutes()
        return `${Y}年${M}月${D}日${H}时${m}分`
      },
      ...mapState(['usermoney', 'agmoney', 'dsmoney'])
    }
  }

</script>
<style scoped lang="less">
  .main-head {
    background-color: #fff;
    border-bottom: 1px solid #d0d0d0;
    text-align: left;
    line-height: 49px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .main-head span {
    font-size: 16px;
    display: inline-block;
    height: 49px;
    border-bottom: 2px solid #b62929;
  }

  .cont {
    margin: 10px;
    color: #666;
    min-height:400px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
    background-color: #fff;
    padding: 30px 25px;
    font-size: 13px;
    .btn_next {
      display: inline-block;
      width: 88px;
      height: 36px;
      margin-top: 10px;
      background: #ea3146;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
    .tab_type {
      border-bottom: 1px solid #ebebeb;
      > .item {
        float: left;
        margin-left: 3px;
        width: 156px;
        border-left: 1px solid #ebebeb;
        border-top: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
        border-bottom: 1px solid #fff;
        box-sizing: border-box;
        position: relative;
        bottom: -1px;
        height: 51px;
        line-height: 51px;
        background-color: #F0EEEE;
        color: #777777;
        cursor: pointer;
        padding-left: 53px;
        &.cur {
          border-top: 3px solid #EA3146;
          background-color: #fff;
          color: #000;
        }
        &:hover {
          border-top: 3px solid #EA3146;
          background-color: #fff;
          color: #000;
        }
        &.bank {
          background-image: url(/static/rbank.png?2c434f8684);
          background-repeat: no-repeat;
          background-position: 10px 0;
        }
        &.other {
          background-image: url(/static/rbank.png?2c434f8684);
          background-repeat: no-repeat;
          background-position: 10px -400px;
        }
      }
    }
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
    select, input {
      line-height: 30px;
      height: 36px;
      width: 300px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 3px 3px;
      padding-left: 10px;
      color: #999;
    }
    .other_content {

      color: #666;
      font-size: 13px;
      text-align: left;
      padding-top: 20px;
      > .title {
        font-size: 16px;
      }
      .online_paytypes {
        margin: 10px 0px;
        > .item {
          float: left;
          box-sizing: border-box;
          text-align: center;
          border: 1px dashed #CACACA;
          padding: 12px;
          position: relative;
          margin: 5px 0;
          margin-right: 15px;
          div {
            word-wrap: break-word;
            word-break: break-all;
          }
          cursor: pointer;
          &.cur {
            border: 1px solid #EA3146;
            &:after {
              content: " ";
              display: block;
              position: absolute;
              right: 0;
              bottom: 0;
              width: 16px;
              height: 17px;
              margin: 0;
              background: url(/static/rbank-icon.png) no-repeat;
              background-position: 0 -63px;
            }
          }
          &:hover {
            border: 1px solid #EA3146;
          }
        }
      }
      .tishi {
        margin-top: 10px;
        padding-left: 10px;
        color: #999;
        div {
          line-height: 1.7em;
        }
      }
    }
    .bank_content {
      text-align: left;
      .tishi {
        margin-top: 10px;
        padding-left: 10px;
        color: #999;
        div {
          line-height: 1.7em;
        }
      }
      .step {

        > .tit {
          margin: 20px 0;
          font-weight: normal;
          font-size: 16px;
          color: #666;
          line-height: 18px;
          > i {
            float: left;
            width: 18px;
            height: 18px;
            margin-right: 5px;
            text-align: center;
            line-height: 18px;
            color: #fff;
            background: #ea3146;
            border-radius: 9px;
            font-style: normal;
          }
        }
        > .det {
          padding-left: 50px;
          .ipt_item {
            padding: 5px 0;
          }
          .cards {
            .card {
              float: left;
              box-sizing: border-box;
              width: 280px;
              border: 1px dashed #CACACA;
              padding: 12px 12px 12px 80px;
              min-height: 80px;
              position: relative;
              margin: 5px 0;
              margin-right: 15px;
              div {
                word-wrap: break-word;
                word-break: break-all;
              }
              cursor: pointer;
              &.cur {
                border: 1px solid #EA3146;
                &:after {
                  content: "";
                  display: block;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  width: 16px;
                  height: 17px;
                  margin: 0;
                  background: url(/static/rbank-icon.png) no-repeat;
                  background-position: 0 -63px;
                }
              }
              &:hover {
                border: 1px solid #EA3146;
              }
            }
            .card:before {
              content: " ";
              display: block;
              position: absolute;
              background-image: url(/static/rbank-icon.png);
              background-repeat: no-repeat;
              background-position: 0 -555px;
              width: 50px;
              height: 45px;
              left: 20px;
              top: 18px;
            }
          }
        }
      }
    }
  }

 /* input[type=text]::-webkit-input-placeholder {
    !* Mozilla Firefox 4 to 18 *!
    color: #e53935;
  }

  input[type=text]:-moz-placeholder {
    !* Mozilla Firefox 4 to 18 *!
    color: #e53935;
  }

  input[type=text]::-moz-placeholder {
    !* Mozilla Firefox 19+ *!
    color: #e53935;
  }

  input[type=text]:-ms-input-placeholder {
    !* Internet Explorer 10+ *!
    color: #e53935;
  }

  textarea::-webkit-input-placeholder {
    !* Mozilla Firefox 4 to 18 *!
    color: #e53935;
  }

  textarea:-moz-placeholder {
    !* Mozilla Firefox 4 to 18 *!
    color: #e53935;
  }

  textarea::-moz-placeholder {
    !* Mozilla Firefox 19+ *!
    color: #e53935;
  }

  textarea:-ms-input-placeholder {
    !* Internet Explorer 10+ *!
    color: #e53935;
  }
*/
  input:focus {
    outline: none;
  }

  textarea:focus {
    border-color: rgba(198, 33, 51, 0.8);
  }

  input:focus {
    border-color: rgba(198, 33, 51, 0.8);
    /*-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);*/
  }

  .pay-info button {
    border: none;
    background-color: #fff;
    outline: none;
    height: 50px;
    line-height: 50px;
    width: 200px;
    background-color: #ef4f4f;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    margin-left: 200px;
    margin-top: 20px;
    cursor: pointer;
  }
</style>
