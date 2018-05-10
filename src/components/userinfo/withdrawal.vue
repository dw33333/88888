<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;提现</span>
    </div>
    <div class="add-card" v-show="is_loading_car_info&&card" style="color:#B62929;min-height:500px;text-align: center;">
      加载中...
    </div>
    <div class="add-card" v-if="!card"   >
      <p>您还未绑定银行卡，请先填写信息绑定， <span class="colorf00"> * </span>为必填信息。</p>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>真实姓名 :</li>
        <li>
          {{cardInputs.real_name}}
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>取款银行 :</li>
        <li>
          <select v-model="cardInputs.bankname" name="bank">
            <option value="" selected disabled style="display: none;">请选择银行</option>
            <option value="中国工商银行">中国工商银行</option>
            <option value=国农业银行">中国农业银行</option>
            <option value=国民生银行">中国民生银行</option>
            <option value=国建设银行">中国建设银行</option>
            <option value=国招商银行">中国招商银行</option>
            <option value=国银行">中国银行</option>
            <option value=国交通银行">中国交通银行</option>
            <option value=国邮政银行">中国邮政银行</option>
            <option value=国兴业银行">中国兴业银行</option>
            <option value="华夏银行">华夏银行</option>
            <option value="浦发银行">浦发银行</option>
            <option value="广州银行">广州银行</option>
            <option value="BEA东亚银行">BEA东亚银行</option>
            <option value="广州农商银行">广州农商银行</option>
            <option value="顺德农商银行">顺德农商银行</option>
            <option value="北京银行">北京银行</option>
            <option value="平安银行">平安银行</option>
            <option value="杭州银行">杭州银行</option>
            <option value="温州银行">温州银行</option>
            <option value="上海农商银行">上海农商银行</option>
            <option value="尧都信用社">尧都信用社</option>
            <option value="中国光大银行">中国光大银行</option>
            <option value="中信银行">中信银行</option>
            <option value="渤海银行">渤海银行</option>
            <option value="浙商银行">浙商银行</option>
            <option value="晋商银行">晋商银行</option>
            <option value="汉口银行">汉口银行</option>
            <option value="浙江稠州商业银行">浙江稠州商业银行</option>
            <option value="上海银行">上海银行</option>
            <option value="广发银行">广发银行</option>
            <option value="东莞银行">东莞银行</option>
            <option value="宁波银行">宁波银行</option>
            <option value="南京银行">南京银行</option>
            <option value="北京农商银行">北京农商银行</option>
            <option value="重庆银行">重庆银行</option>
            <option value="广西壮族自治区农村信用社">广西壮族自治区农村信用社</option>
            <option value="江苏银行">江苏银行</option>
            <option value="吉林银行">吉林银行</option>
            <option value="成都银行">成都银行</option>
            <option value="农村信用社">农村信用社</option>
            <option value="晋城银行">晋城银行</option>
            <option value="邯郸银行">邯郸银行</option>
            <option value="郑州银行">郑州银行</option>
            <option value="九江银行">九江银行</option>
            <option value="财付通">财付通</option>
            <option value="盛京银行">盛京银行</option>
            <option value="安徽农村信用合作社">安徽农村信用合作社</option>
            <option value="甘肃银行">甘肃银行</option>
            <option value="甘肃农村信用社">甘肃农村信用社</option>
            <option value="东莞农村商业银行">东莞农村商业银行</option>
            <option value="广东农村商业银行">广东农村商业银行</option>
            <option value="Payoneer">Payoneer</option>
            <option value="NETELLER">NETELLER</option>
            <option value="Skrill">Skrill</option>
            <option value="PayPal">PayPal</option>
            <option value="其它银行">其它银行</option>
            <option value="锦州银行">锦州银行</option>
            <option value="齐鲁银行">齐鲁银行</option>
            <option value="QQ钱包">QQ钱包</option>
            <option value="贵阳银行">贵阳银行</option>
            <option value="深圳农商银行">深圳农商银行</option>
            <option value="贵州省农村信用社">贵州省农村信用社</option>
            <option value="樱花银行">樱花银行</option>
            <option value="京东钱包">京东钱包</option>
            <option value="甘肃银行">甘肃银行</option>
            <option value="兰州银行">兰州银行</option>
            <option value="浙江农村信用社">浙江农村信用社</option>
            <option value="霜夏银行">霜夏银行</option>
            <option value="云南省农村信用社">云南省农村信用社</option>
            <option value="云南省农村信用社">云南省农村信用社</option>
            <option value="莱商银行">莱商银行</option>
            <option value="南京銀行">南京銀行</option>
            <option value="海南农村信用社">海南农村信用社</option>
            <option value="三亚农村信用社">三亚农村信用社</option>
            <option value="贵州农村信用社">贵州农村信用社</option>
            <option value="福建农村信用社">福建农村信用社</option>
            <option value="海南省农村信用社">海南省农村信用社</option>
            <option value="永州市农村信用社">永州市农村信用社</option>
            <option value="东莞农村商业银行">东莞农村商业银行</option>
            <option value="江西信用社">江西信用社</option>
            <option value="上海农村商业银行">上海农村商业银行</option>
            <option value="北京农村商业银行">北京农村商业银行</option>
            <option value="南洋商业银行">南洋商业银行</option>
            <option value="河北银行">河北银行</option>
            <option value="泰隆银行">泰隆银行</option>
          </select>
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>取款密码 :</li>
        <li>
          <input type="password" v-model="cardInputs.pwd" placeholder="只能输入取款密码"/>
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>银行卡号 :</li>
        <li>
          <input type="text" v-model="cardInputs.carnum" placeholder="请输入银行卡号"/>
        </li>
      </ul>
      <ul class="item">
        <li class='title'><span class="colorf00">*</span>银行开户地区 :</li>
        <li>
          <select v-model="cardInputs.prov" style="width:150px;margin-right:3px;" @change="(cardInputs.city=0,cardInputs.area=0)">
            <option :value="idx" v-for="it,idx in city_area" :key="idx" :selected="idx==0" >{{it.name}}</option>
          </select><select v-model="cardInputs.city" style="width:150px;margin-right:3px;" v-if="city_area[cardInputs.prov].city.length>0" @change="(cardInputs.area=0)">
          <option :value="idx" v-for="it,idx in city_area[cardInputs.prov].city" :key="idx" :selected="idx==0">
            {{it.name}}
          </option>
        </select>
          <select v-model="cardInputs.area" style="width:150px;margin-right:3px;" v-if="city_area[cardInputs.prov].city[cardInputs.city].area.length>0">
            <option :value="idx" v-for="it,idx in city_area[cardInputs.prov].city[cardInputs.city].area" :key="idx"
                    :selected="idx==0">{{it}}
            </option>
          </select>
        </li>
      </ul>
      <div class="item btns">
        <button @click="addCard">{{is_add_card?"提交中...":"确定"}}</button>
      </div>
    </div>
    <div class="add-card" v-if="card" v-show="!is_loading_car_info">
      <ul class="item">
        <li class='title'>会员卡号 :</li>
        <li>
          {{tixianInputs.card_num}}
        </li>
      </ul>
      <ul class="item">
        <li class='title'>所属银行 :</li>
        <li>
          {{tixianInputs.bank_name}}
        </li>
      </ul>
      <ul class="item">
        <li class='title'>开户地址 :</li>
        <li>
          {{tixianInputs.card_address}}
        </li>
      </ul>
      <!--todo 取款金额限制-->
      <ul class="item">
        <li class='title'>取款金额 :</li>
        <li>
          <input type="text" v-model="tixianInputs.money" :placeholder="`输入取款金额,最低${tixianInputs.min_money}元`"/>
        </li>
      </ul>
      <ul class="item">
        <li class='title'>取款密码 :</li>
        <li>
          <input type="password" v-model="tixianInputs.qkpwd" placeholder="请输入取款密码"/>
        </li>
      </ul>
      <div class="item btns">
        <button @click="tixian">{{is_tixian?"提交中...":"确定提交"}}</button>
      </div>
      <div class="tishi">
        <div>提款须知：</div>
        <div>1 、银行账户持有人姓名必须与在娱乐城输入的姓名一致，否则无法申请提款。</div>
        <div>2 、大陆各银行帐户均可申请提款。</div>
        <div>3 、每个会员账户（北京时间）24小时内只免费提供三次提款。</div>
        <div>4 、买彩后未经全额投注（存款金额一倍流水）提款申请不予受理。</div>
        <div>5 、每位客户只可以使用一张银行卡进行提款,如需要更换银行卡请与客服人员联系.否则提款将被拒绝。</div>
        <div>6 、为保障客户资金安全，娱乐城有可能需要用户提供电话单，银行对账单或其它资料验证，以确保客户资金不会被冒领。 </div>
        <div>到账时间：5-15分钟到账急速到账时间</div>
      </div>
    </div>
  </div>
</template>
<script>
  import city_area from "@/obj/city_area"
  import {mapMutations, mapState} from "vuex"
  import alert from "@/components/base/alert"

  export default {
    data() {
      return {
        card: true,
        cardInputs: {
          prov: 0,
          city: 0,
          area: 0,
          bankname: "",
          real_name: "",
          pwd: "",
          carnum: ""
        },
        tixianInputs: {
          card_num: "",
          bank_name: "",
          card_address: "",
          min_money:100,
          money: "",
          qkpwd: ""
        },
        city_area: city_area,
        is_loading_car_info:true,
        is_add_card:false,
        is_tixian:false
      }
    },
    created() {
      this.cardInputs.real_name = this.userinfo.name;
    },
    computed: {
      ...mapState(["userinfo"]),
    },
    async mounted() {
      let res = await this.$http.get('/api/users/Bankcardcat');
      if (!res) return;
      if (res.status == 200) {
        this.card =!res.data.code;
        if(this.card){
          this.loadCardInfo()
        }
      }
    },
    methods: {
      /*newCard (index) {
        if (index === 1) {
          this.isShowCardList = false
        }
        if (index === 2) {
          this.isShowCardList = true
        }
      }*/
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
      async loadCardInfo(){
        this.is_loading_car_info=true;
        let res = await this.$http.get('/api/money/getUserBankInfo');
        this.is_loading_car_info=false;
        if (!res) return;
        this.tixianInputs.min_money=res.data.min_money;
        this.tixianInputs.card_num = res.data.pay_num;
        this.tixianInputs.bank_name = res.data.pay_bank;
        this.tixianInputs.card_address = res.data.pay_address;
      },
      async addCard() {
        if (!this.cardInputs.bankname) {
          this.alert("提示", "请选择取款银行");
          return;
        } else if (!this.cardInputs.pwd) {
          this.alert("提示", "请填写取款密码");
          return;
        } else if (this.cardInputs.pwd.length < 4 || isNaN(this.cardInputs.pwd)) {
          this.alert("提示", "取款密码必须是4-6位数字");
          return;
        } else if (!this.cardInputs.carnum) {
          this.alert("提示", "请输入银行卡号");
          return;
        } else if (this.cardInputs.carnum.length < 13 || this.cardInputs.carnum.length > 18 || isNaN(this.cardInputs.carnum)) {
          this.alert("提示", "银行卡号填写错误");
          return;
        }
        this.is_add_card=true;
        let res = await this.$http.post('/api/users/Bankcardsave', {
          qk_pass: this.cardInputs.pwd,
          pay_name: this.cardInputs.real_name,
          pay_bank: this.cardInputs.bankname,
          pay_num: this.cardInputs.carnum,
          pay_address: city_area[this.cardInputs.prov].name + city_area[this.cardInputs.prov].city[this.cardInputs.city].name + city_area[this.cardInputs.prov].city[this.cardInputs.city].area[this.cardInputs.area]
        });
        this.is_add_card=false;
        if (!res) return
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.card = true;
        this.loadCardInfo();
      },
      async tixian() {
        // /money/withdrawals
        if(!this.tixianInputs.money){
          this.alert("提示", "请输入取款金额");
          return;
        }else if(this.tixianInputs.money<this.tixianInputs.min_money){
          this.alert("提示", `取款金额不能小于${this.tixianInputs.min_money}`);
          return;
        }else if(!this.tixianInputs.qkpwd){
          this.alert("提示", "请输入取款密码");
          return;
        }else if(this.tixianInputs.qkpwd.length<4||isNaN(this.tixianInputs.qkpwd)){
          this.alert("提示", "取款密码必须是4-6位数字");
          return;
        }
        this.is_tixian=true;
        let res = await this.$http.post('/api/money/withdrawals',{
          order_value:this.tixianInputs.money,
          qk_pass:this.tixianInputs.qkpwd
        });
        this.is_tixian=false;
        if(!res)return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.alert("提示", "取款申请成功！");
      }
    }
  }

</script>
<style scoped lang="less">
  .tishi {
    text-align: left;
    margin-top: 10px;
    padding-left: 150px;
    color: #999;
    div {
      line-height: 1.7em;
    }
  }
  .main-head {
    background: #fff;
    border-bottom: 1px solid #d0d0d0;
    text-align: left;
    line-height: 49px;
    padding-left: 20px;
  }

  .main-head span {
    font-size: 16px;
    display: inline-block;
    height: 49px;
    border-bottom: 2px solid #b62929;
  }

  .search-box {
    line-height: 47px;
    font-size: 14px;
    padding-left: 30px;
    text-align: left;
    margin-top: 10px;
  }

  .search-box .checkbox {
    padding: 2px 10px;
    line-height: 25px;
    padding-left: 35px;
    background: url('../../assets/base-ico.png') 4px -186px no-repeat;
  }

  .search-box span {
    padding: 0 10px;
    line-height: 25px;
    display: inline-block;
  }

  .btn {
    padding: 8px 20px;
    border: none;
    color: #fff;
    background: #b62929;
    border-radius: 4px;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
  }

  /*表格*/
  .table-list {
    padding: 10px 0 10px 20px;
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
    text-align: center;
  }

  .colorf00 {
    color: #F00 !important;
  }

  td {
    border-bottom: 1px solid #cdcdcd;
    background: #fff;
    padding: 5px;
    text-align: center;
  }

  /*新增银行卡*/

  .add-card {
    background-color: #fff;
    font-size: 14px;
    line-height: 50px;
    padding: 20px 0px;
  }

  .add-card p {
    text-align: left;
    margin: 0;
    padding: 0 20px;
    border-bottom: 1px solid #ededed;
  }

  /*.add-card .item input {
    height: 24px;
    border: 1px #ccc solid;
    width: 200px;
    border-radius: 4px;
    padding-left: 4px;
  }

  .add-card .item select {
    height: 28px;
    border: 1px #ccc solid;
    width: 206px;
    border-radius: 4px;
    padding-left: 4px;
  }

  input:focus {
    outline: none;
    outline: 0;
  }*/

  .add-card .item input:focus {
    border-color: rgba(198, 33, 51, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
  }

  .add-card .item {
    overflow: hidden;
    padding: 0 10px;
    border-bottom: 1px solid #ededed;
  }

  .add-card .item li {
    float: left;

  }

  .add-card .item button {
    background-color: #b62929;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 0 10px;
    cursor: pointer;
  }

  .add-card .item.btns {
    text-align: left;
    padding-left: 180px;
  }

  .add-card .item button:hover {
    background-color: #e34343;
  }

  .add-card .item li.title {
    text-align: right;
    width: 200px;
    margin-right: 10px;
  }
</style>
