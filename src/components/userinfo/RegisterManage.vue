<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;代理管理&gt;注册管理</span>
    </div>
    <div class="user-data">
      <ul class="item">
        <li class='title'>用户类型：</li>
        <li>
          <select name="" id="">
            <option value="代理">代理</option>
            <option value="会员">会员</option>
          </select>
        </li>
      </ul>
      <ul class="item">
        <li class='title'>用户昵称：</li>
        <li>
          <input type="text" placeholder="2-6个字符">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>登录账户：</li>
        <li>
          <input type="text" placeholder="3-15个字符(数字+字母)">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>登录密码：</li>
        <li>
          <input type="text" placeholder="6-15个字符(数字+字母)">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>重复密码：</li>
        <li>
          <input type="text" placeholder="再次输入密码">
        </li>
      </ul>
      <p>该下级及其下线出款是否需要通知：
        <input type="radio" name="1">是
        <input type="radio" name="1">否
      </p>
      <div class="btns">
        <div :class='{recharge:true,active:isShow}' @click="selectType(1)">配额奖金组</div><div :class="{withdraw:true,active:!isShow}" @click="selectType(2)">其他奖金组</div>
      </div>

      <!-- 奖金选择设置 -->
      <div class="content-select">
        <div class="quota" v-if="isShow">
          
        </div>
        <div class="others" v-else>
          <div class="bonus-tips">
                <span>设置奖金:</span>
                    <select data-bind="event:{change:otherRate}">
                        <option value="-1">选择其他奖金组</option>
                            <option value="0.074" data-rate="968">7.4% ----- 968</option>
                            <option value="0.073" data-rate="966">7.3% ----- 966</option>
                            <option value="0.072" data-rate="964">7.2% ----- 964</option>
                            <option value="0.071" data-rate="962">7.1% ----- 962</option>
                            <option value="0.07" data-rate="960">7% ----- 960</option>
                            <option value="0.069" data-rate="958">6.9% ----- 958</option>
                            <option value="0.068" data-rate="956">6.8% ----- 956</option>
                            <option value="0.067" data-rate="954">6.7% ----- 954</option>
                            <option value="0.066" data-rate="952">6.6% ----- 952</option>
                            <option value="0.065" data-rate="950">6.5% ----- 950</option>
                            <option value="0.064" data-rate="948">6.4% ----- 948</option>
                            <option value="0.063" data-rate="946">6.3% ----- 946</option>
                            <option value="0.062" data-rate="944">6.2% ----- 944</option>
                            <option value="0.061" data-rate="942">6.1% ----- 942</option>
                            <option value="0.06" data-rate="940">6% ----- 940</option>
                            <option value="0.059" data-rate="938">5.9% ----- 938</option>
                            <option value="0.058" data-rate="936">5.8% ----- 936</option>
                            <option value="0.057" data-rate="934">5.7% ----- 934</option>
                            <option value="0.056" data-rate="932">5.6% ----- 932</option>
                            <option value="0.055" data-rate="930">5.5% ----- 930</option>
                            <option value="0.054" data-rate="928">5.4% ----- 928</option>
                            <option value="0.053" data-rate="926">5.3% ----- 926</option>
                            <option value="0.052" data-rate="924">5.2% ----- 924</option>
                            <option value="0.051" data-rate="922">5.1% ----- 922</option>
                            <option value="0.05" data-rate="920">5% ----- 920</option>
                            <option value="0.049" data-rate="918">4.9% ----- 918</option>
                            <option value="0.048" data-rate="916">4.8% ----- 916</option>
                            <option value="0.047" data-rate="914">4.7% ----- 914</option>
                            <option value="0.046" data-rate="912">4.6% ----- 912</option>
                            <option value="0.045" data-rate="910">4.5% ----- 910</option>
                            <option value="0.044" data-rate="908">4.4% ----- 908</option>
                            <option value="0.043" data-rate="906">4.3% ----- 906</option>
                            <option value="0.042" data-rate="904">4.2% ----- 904</option>
                            <option value="0.041" data-rate="902">4.1% ----- 902</option>
                            <option value="0.04" data-rate="900">4% ----- 900</option>
                            <option value="0.039" data-rate="898">3.9% ----- 898</option>
                            <option value="0.038" data-rate="896">3.8% ----- 896</option>
                            <option value="0.037" data-rate="894">3.7% ----- 894</option>
                            <option value="0.036" data-rate="892">3.6% ----- 892</option>
                            <option value="0.035" data-rate="890">3.5% ----- 890</option>
                            <option value="0.034" data-rate="888">3.4% ----- 888</option>
                            <option value="0.033" data-rate="886">3.3% ----- 886</option>
                            <option value="0.032" data-rate="884">3.2% ----- 884</option>
                            <option value="0.031" data-rate="882">3.1% ----- 882</option>
                            <option value="0.03" data-rate="880">3% ----- 880</option>
                            <option value="0.029" data-rate="878">2.9% ----- 878</option>
                            <option value="0.028" data-rate="876">2.8% ----- 876</option>
                            <option value="0.027" data-rate="874">2.7% ----- 874</option>
                            <option value="0.026" data-rate="872">2.6% ----- 872</option>
                            <option value="0.025" data-rate="870">2.5% ----- 870</option>
                            <option value="0.024" data-rate="868">2.4% ----- 868</option>
                            <option value="0.023" data-rate="866">2.3% ----- 866</option>
                            <option value="0.022" data-rate="864">2.2% ----- 864</option>
                            <option value="0.021" data-rate="862">2.1% ----- 862</option>
                            <option value="0.02" data-rate="860">2% ----- 860</option>
                            <option value="0.019" data-rate="858">1.9% ----- 858</option>
                            <option value="0.018" data-rate="856">1.8% ----- 856</option>
                            <option value="0.017" data-rate="854">1.7% ----- 854</option>
                            <option value="0.016" data-rate="852">1.6% ----- 852</option>
                            <option value="0.015" data-rate="850">1.5% ----- 850</option>
                            <option value="0.014" data-rate="848">1.4% ----- 848</option>
                            <option value="0.013" data-rate="846">1.3% ----- 846</option>
                            <option value="0.012" data-rate="844">1.2% ----- 844</option>
                            <option value="0.011" data-rate="842">1.1% ----- 842</option>
                            <option value="0.01" data-rate="840">1% ----- 840</option>
                            <option value="0.009" data-rate="838">0.9% ----- 838</option>
                            <option value="0.008" data-rate="836">0.8% ----- 836</option>
                            <option value="0.007" data-rate="834">0.7% ----- 834</option>
                            <option value="0.006" data-rate="832">0.6% ----- 832</option>
                            <option value="0.005" data-rate="830">0.5% ----- 830</option>
                            <option value="0.004" data-rate="828">0.4% ----- 828</option>
                            <option value="0.003" data-rate="826">0.3% ----- 826</option>
                            <option value="0.002" data-rate="824">0.2% ----- 824</option>
                            <option value="0.001" data-rate="822">0.1% ----- 822</option>
                            <option value="0" data-rate="820">0% ----- 820</option>
                    </select>

                奖金组一旦上调后则无法降低，请谨慎操作
            </div>
        </div>
      </div>

      <div class="reg">
        <div class="regBtn">注册</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    }

  },
  methods: {
    selectType(index) {
      if (index == 1) {
        this.isShow = true;
      };
      if (index == 2) {
        this.isShow = false;
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
}

.main-head span {
  font-size: 16px;
  display: inline-block;
  height: 49px;
  border-bottom: 2px solid #b62929;
}



/*用户资料*/

.user-data {
  font-size: 14px;
  line-height: 36px;
  padding: 20px 24px;
  color: #000;
  overflow: hidden;
}

.user-data p {
  text-align: left;
  margin: 0;
  padding: 0 20px;
  border-bottom: 1px solid #ededed;
}

input:focus {
  outline: none;
  outline: 0;
}
.user-data .item input,.user-data .item select{
  height: 24px;
  border: 1px #ccc solid;
  width: 220px;
  border-radius: 4px;
  padding-left: 4px;
}
.user-data .item select{
  height: 28px;
  width: 226px;
}



.user-data .item input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}



.user-data .item {
  overflow: hidden;
  padding: 0 10px;
  /*border-bottom:1px solid #ededed;*/
}

.user-data .item li {
  float: left;
  width: 100px;
}

.user-data .item button {
  background-color: #b62929;
  padding: 8px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
}

.user-data .item.btns {
  text-align: left;
  padding-left: 180px;
}

.user-data .item button:hover {
  background-color: #e34343;
}

.user-data .item li.title {
  text-align: right;
}


.btns {
  padding: 10px;
  overflow: hidden;
  background-color: #e6e4e4;
}

.btns .recharge,
.btns .withdraw {
  padding: 0 22px;
  border: none;
  background: none;
  display: inline-block;
  background-color: #ededed;
  border: 1px solid #b62929;
  cursor: pointer;
      float: left;
}

.btns .recharge {
    margin-left: 40px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.btns .withdraw {
  border-left: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.btns>.active {
  background-color: #b62929;
  color: #fff;
}

/*奖金选择设置*/
.content-select{
  padding:10px;
  background-color: #fff;
}

.bonus-tips {
    /*padding: 50px 0 0 50px;*/
    text-align: left;
}

.user-data .reg{
  background-color: #62ba3b;
  width: 150px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  margin:10px auto;
  border-radius: 5px;
  cursor:pointer;
}
</style>
