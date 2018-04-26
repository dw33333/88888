<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户充值</span>
    </div>
    <div class="btns">
      <div class="wallet">请选择所转入的钱包</div>
      <div :class='{item:true,active:typeIndex==1}' @click="selectType(1);">
        我的钱包
        <br> ¥ {{user_money}}
      </div>
      <div :class='{item:true,active:typeIndex==2}' @click="selectType(2);">
        AG平台
        <br> ¥ {{ag_money}}
      </div>
      <div :class='{item:true,active:typeIndex==3}' @click="selectType(3);">
        DS平台
        <br> ¥ {{ds_money}}
      </div>
    </div>
    <div class="btns border-bottom-none">
      <div class="wallet">请选择支付方式</div>
      <div v-for="(re,reindex) in rechargeModeArr" :key='reindex' :class='{item:true,payway:true,active:tabIndex==reindex}' @click="selectPayWay(reindex);">
        {{re}}
      </div>
      <!--  <div :class='{item:true,payway:true,active:typeIndex==2}' @click="selectType(2);">
        AG平台
      </div>
      <div :class='{item:true,payway:true,active:typeIndex==3}' @click="selectType(3);">
        DS平台
      </div> -->
    </div>
    <div class="title">入款信息</div>
    <div class="table-list" v-for='(item,index) in bankNumArr' :key='index'>
      <table>
        <tbody>
          <tr>
            <td class="name">卡号:</td>
            <td class="text">{{item.bank_number}}</td>
          </tr>
          <tr>
            <td class="name">银行名称:</td>
            <td class="text">{{item.bank_name}}</td>
          </tr>
          <tr>
            <td class="name">开户名:</td>
            <td class="text">{{item.bank_xm}}</td>
            <!--  <td>0</td>
            <td></td> -->
          </tr>
          <tr>
            <td class="name">开户城市:</td>
            <td class="text">{{item.bank_city}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pay-info">选择银行:
      <select v-model="bankSelected" class="select">
        <option value="" selected="selected">请选择转入银行</option>
        <option :value="bank.card_bankName" v-for="(bank, index) in bankArr" :key="index">{{bank.card_bankName}}</option>
      </select>
    </div>
    <div class="pay-info">汇款时间: {{currentTime}}</div>
    <div class="pay-info">汇款方式:
      <select v-model="modeSelected">
        <option value="" selected="selected">选择汇款方式</option>
        <option :value="bank" v-for="(bank, index) in huikuanMode" :key="index">{{bank}}</option>
      </select>
    </div>
    <div class="pay-info">请输入充值金额:
      <input type="text" placeholder="入款金额,单笔下限100" @input="moneyInput" v-model="inputMoney">
      <!-- <input type="number" placeholder="入款金额,单笔下限100" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'> -->
    </div>
    <div class="pay-info">备注:
      <input type="text" v-model="bankName" placeholder="请备注帐号/姓名、微信支付请留言备注">
    </div>
    <div class="pay-info">
      <button @click='submitRecharge'>提交</button>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>
import maskLayer from '../base/mask-layer'

export default {
  data () {
    return {
      ifopen: false,
      content: '',
      user_money: '', // 用户余额
      ag_money: '', // AG真人余额
      ds_money: '', // DS真人余额
      realname: '', // 真实姓名
      bankCardNum: '', // 银行卡号
      bankName: '', // 银行卡姓名
      typeIndex: 1, // 1 银行汇款  2 AG平台  3 DS平台
      tabIndex: 0,
      rechargeModeArr: ['银行汇款'],
      huikuanMode: ['银行柜台', 'ATM现金', 'ATM卡转', '网银转账', '支付宝', '微信'],
      modeSelected: '',
      bankArr: '',
      bankNumArr: '',
      bankSelected: '',
      inputMoney: null
    }
  },

  methods: {
    // 提交银行汇款
    submitRecharge () {
      // if (this.modeSelectingIndex === 0) {
      if (!this.bankSelected) {
        this.mytoast('请选择转入银行')
        setTimeout(() => {
          // instance.close()
          clearTimeout()
        }, 500)
      } else if (!this.modeSelected) {
        this.mytoast('请选择汇款方式')
        setTimeout(() => {
          // instance.close()
          clearTimeout()
        }, 1500)
      } else if (!this.inputMoney) {
        this.mytoast('请输入汇款金额')
        setTimeout(() => {
          // instance.close()
          clearTimeout()
        }, 1500)
      } else if (this.inputMoney && this.inputMoney < 100) {
        this.mytoast('最低存款100元')
        setTimeout(() => {
          // instance.close()
          clearTimeout()
        }, 1500)
      } else if (!this.bankName) {
        this.mytoast('请输入备注内容')
        setTimeout(() => {
          // instance.close()
          clearTimeout()
        }, 1500)
      } else {
        let data = {}
        data['IntoBank'] = this.bankSelected
        data['v_amount'] = this.inputMoney
        data['v_Name'] = this.bankName
        data['InType'] = this.modeSelected
        data['IntoType'] = this.modeSelected
        this.$http.post('/json/center/?r=HuikuanDo', data).then((res) => {
          // this.ifopen = !this.ifopen;
          if (res.data.code === 0) {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              // instance.close()
              this.ifopen = false
              this.$router.push('/')
              clearTimeout()
            }, 1500)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      // }

      // if (this.modeSelectingIndex === 2) {
      //   let data = {}
      //   data['InType'] = '支付宝'
      //   data['IntoType'] = '支付宝'
      //   data['v_amount'] = this.alipayMoney
      //   data['v_Name'] = this.alipayAccount
      //   if (!this.alipayMoney) {
      //     this.mytoast('请输入汇款金额')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 1500)
      //   } else if (this.alipayMoney && this.alipayMoney < 100) {
      //     this.mytoast('最低存款100元')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 1500)
      //   } else if (!this.alipayAccount) {
      //     this.mytoast('请输入支付宝帐号')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 1500)
      //   } else {
      //     this.$http.post('/api/json/center/?r=HuikuanDo', data).then((res) => {}).catch((error) => {
      //       console.log(error)
      //     })
      //   }
      // }
      // if (this.modeSelectingIndex === 3) {
      //   let data = {}
      //   data['InType'] = '微信'
      //   data['IntoType'] = '微信'
      //   data['v_amount'] = this.wechatMoney
      //   data['v_Name'] = this.weixinAccount
      //   if (!this.wechatMoney) {
      //     this.mytoast('请输入汇款金额')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 500)
      //   } else if (this.wechatMoney && this.wechatMoney < 100) {
      //     this.mytoast('最低存款100元')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 500)
      //   } else if (!this.weixinAccount) {
      //     this.mytoast('请输入微信帐号')
      //     setTimeout(() => {
      //       // instance.close()
      //       clearTimeout()
      //     }, 500)
      //   } else {
      //     this.$http.post('/api/json/center/?r=HuikuanDo', data).then((res) => {}).catch((error) => {
      //       console.log(error)
      //     })
      //   }
      // }
    },
    // 网银、第三方汇款提交
    // onlineSubmit(index) {
    //   if (!this.radioValue) {
    //     this.mytoast('请选择汇款方式')
    //     setTimeout(() => {
    //       // instance.close()
    //       clearTimeout()
    //     }, 1500)
    //   } else if (this.onlineMoney < parseInt(this.paylowest)) {
    //     this.mytoast('最低充值金额为：' + this.paylowest + '元')
    //     setTimeout(() => {
    //       // instance.close()
    //       clearTimeout()
    //     }, 1000)
    //   } else {
    //     this.$refs.onlineform[index].submit()
    //   }
    // },
    // 金额框限制输入整数跟两位小数
    moneyInput () {
      // 先把非数字的都替换掉，除了数字和.
      this.inputMoney = this.inputMoney.replace(/[^\d.]/, '')
      // 必须保证第一个为数字而不是.
      this.inputMoney = this.inputMoney.replace(/^\./g, '')
      // 保证只有出现一个.而没有多个.
      this.inputMoney = this.inputMoney.replace(/\.{2,}/g, '.')
      // 保证.只出现一次，而不能出现两次以上
      this.inputMoney = this.inputMoney.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
      if (this.inputMoney !== '') {
        let re = /^\d+\.{0,1}\d{0,2}$/
        if (!re.test(this.inputMoney)) {
          this.inputMoney = this.inputMoney.substring(0, this.inputMoney.length - 1)
          return false
        }
      }
      return this.inputMoney
    },

    // 获取个人信息
    getuserinfo () {
      // 获取银行
      this.$http.get('/json/center/?r=HuikuanInfo').then((res) => {
        this.bankArr = res.data.data.bank
        this.bankNumArr = res.data.data.InfoList
      }).catch((error) => {
        console.log(error)
      })

      // 获取个人信息
      this.$http.get('/json/center/?r=UsrInfo').then((res) => {
        this.realname = res.data.data.pay_name
        this.bankCardNum = res.data.data.pay_num
        this.bankName = res.data.data.pay_bank
      }).catch((error) => {
        console.log(error)
      })

      // >获取AG真人余额
      this.$http.get('/json/center/?r=AginMoney').then((res) => {
        this.ag_money = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })

      // >获取DS真人余额：
      this.$http.get('/json/center/?r=DsMoney').then((res) => {
        this.ds_money = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })

      // >获取用户余额
      this.$http.get('/json/center/?r=Money').then((res) => {
        this.user_money = res.data.data.user_money
      }).catch((error) => {
        console.log(error)
      })

      // 在线网银
      this.$http.get('/json/api.php?r=wap').then((res) => {
        // if (res.data.data.length === 0) {
        //   this.modeWidth = '100%'
        // } else {
        //   this.modeWidth = this._calWidth(res.data.data.length)
        // }
        // this.rechargemodeWidth = (res.data.data.length + 1) * 1.6 + 'rem'
        // this.rechargeCons = res.data.data;

        res.data.data.forEach((item, index) => {
          this.rechargeModeArr.push(item.name)
          this.userUid = item.uid
          this.paylowest = item.pay_Lowest
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    selectType (index) {
      if (index === 1) {
        this.typeIndex = 1
      }
      if (index === 2) {
        this.typeIndex = 2
      }
      if (index === 3) {
        this.typeIndex = 3
      }
    },
    selectPayWay (index) {
      // alert(1)
      this.tabIndex = index
    },
    // 封装提示信息函数
    mytoast (msg) {
      this.ifopen = true
      // let instance = Toast(msg);
      this.content = msg
      setTimeout(() => {
        // instance.close();
        this.ifopen = false
        clearTimeout()
      }, 1500)
    }

  },
  components: {
    maskLayer
  },
  mounted () {
    this.getuserinfo()
  },
  computed: {
    currentTime () {
      let Y = new Date().getFullYear()
      let M = new Date().getMonth() + 1
      let D = new Date().getDate()
      let H = new Date().getHours()
      let m = new Date().getMinutes() < 10 ? 0 + new Date().getMinutes() : new Date().getMinutes()
      return `${Y}年${M}月${D}日${H}时${m}分`
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

.wallet {
  line-height: 50px;
  height: 50px;
  text-align: left;
  /*padding-left: 20px;*/
}

.title {
  line-height: 25px;
  height: 25px;
  text-align: left;
  padding-left: 20px;
}

.pay-info select,
.pay-info input {
  line-height: 30px;
  height: 36px;
  width: 200px;
}

.pay-info input {
  line-height: 30px;
  height: 30px;
  width: 300px;
  padding-left: 5px;
}

.pay-info {
  line-height: 50px;
  height: 50px;
  text-align: left;
  padding-left: 20px;
}

.btns {
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #d0d0d0;
}

.border-bottom-none {
  border-bottom: none;
}

.payway {
  line-height: 50px!important;
}

.btns .item {
  padding: 0 22px;
  border: none;
  background: none;
  display: inline-block;
  background-color: #ededed;
  border: 1px solid #b62929;
  cursor: pointer;
  height: 50px;
  line-height: 25px;
  float: left;
  border-right: none;
}

.btns>.item:nth-child(2) {
  /*border-radius: 10px;*/
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.btns .item:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right: 1px solid #b62929;
}

.btns>.active {
  background-color: #b62929;
  color: #fff;
}

/*表格*/
.table-list {
  padding: 10px 20px 10px 20px;
  width: 800px;
}

.table-list .text {
  line-height: 30px;
  height: 30px;
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
  background: #fff;
  padding: 5px;
  /*text-align: center;*/
}

.name {
  width: 100px;
  text-align: right;
  border-right: 1px solid #cdcdcd;
}

input[type=text]::-webkit-input-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: red;
}

input[type=text]:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: red;
}

input[type=text]::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: red;
}

input[type=text]:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: red;
}

input:focus {
  border: none;
  outline: none;
}

input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
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
