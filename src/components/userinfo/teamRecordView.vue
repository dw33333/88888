<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;代理管理&gt;团队总览</span>
    </div>
    <div class="search-box">
      时间:
      <input type="text">至
      <input type="text">
      <span>
        <a href="javascript:void(0)" class="btn" data-bind="click:searchData">查询</a>
      </span>
    </div>
    <!-- 表格 -->
    <div class="acc">
      <ul>
         <li>
          <span>总团队人数:</span>
          <p>1人</p>
          <span>时间范围内注册人数:</span>
          <p>0人</p>
        </li>
        <li>
          <span>余额:</span>
          <p>0元</p>
          <span>提现:</span>
          <p>0元</p>
        </li>
        <li>
          <span>充值:</span>
          <p>0元</p>
          <span>中奖金额:</span>
          <p>0元</p>
        </li>
        <li>
          <span>投注金额:</span>
          <p>0元</p>
          <span>打和返款:</span>
          <p>0元</p>
        </li>
        <li>
          <span>投注返点:</span>
          <p>0元</p>
        </li>
        <li>
          <span>代理返点:</span>
          <p>0元</p>
        </li>
        <li>
          <span>净盈利:</span>
          <p>0元</p>
          <div>净盈利=中奖金额+打和返款+投注返点+代理返点-投注金额</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

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

.search-box {
  line-height: 47px;
  font-size: 14px;
  padding-left: 30px;
  text-align: left;
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
  padding: 6px 10px;
  border: none;
  color: #fff;
  background: #b62929;
  border-radius: 4px;
  line-height: 1;
  display: inline-block;
  text-decoration: none;
}





/*表格*/

ul,li,p {
    list-style: none;
    margin:0;
    padding: 0;
}
.acc {
  background: #fff;
  border-left: 1px solid #cdcdcd;
  border-top: 1px solid #cdcdcd;
  margin: 10px 20px;
  font-size: 14px;
}

.acc li {
  border-bottom: 1px solid #cdcdcd;
  border-right: 1px solid #c3c3c3;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.acc li span {
  background: #e2e2e2;
  color: #222;
  text-align: right;
  width: 170px;
  padding: 0 4px;
  height: 40px;
  float: left;
}

.acc li p {
  border-right: 1px solid #cdcdcd;
  width: 155px;
  height: 40px;
  float: left;
  padding: 0 10px;
  text-align: left;
}

p {
  font-size: 14px;
  color: #666;
}

.acc li p {
  border-right: 1px solid #cdcdcd;
}

.acc li p:nth-child(4) {
  border: none;
}

.acc li div {
  padding: 0 5px;
  float: left;
}

</style>
