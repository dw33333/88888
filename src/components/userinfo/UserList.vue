<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;代理管理&gt;用户列表</span>
    </div>
    <div class="search-box">
      <ul class="btn-group">
        <li>用户名:
          <input type="text">
        </li>
        <li>余额:
          <input type="text"> 至
          <input type="text">
        </li>
        <li>登录时间:
          <input type="text"> 至
          <input type="text">
        </li>
        <li>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">昨天</a></span>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">今天</a></span>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">上周</a></span>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">本周</a></span>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">上月</a></span>
          <span><a href="javascript:void(0)" class="btn" data-bind="click:searchData">本月</a></span>
          <span><a href="javascript:void(0)" class="btn bggreen" data-bind="click:searchData">查询</a></span>
          <span><a href="javascript:void(0)" class="btn bggreen" data-bind="click:searchData">重置</a></span>
        </li>
      </ul>
      <div style="margin-left:10px;">当前位置：abcdefg</div>
      <div class="table-list">
        <table>
          <thead>
            <tr>
              <th>用户名</th>
              <th>用户类型</th>
              <th>注册时间</th>
              <th>最后登录时间</th>
              <th>余额</th>
              <th>返点级别</th>
              <th>状态</th>
              <th>用户操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                abcdefg </td>
              <td>代理用户</td>
              <td>2018-04-04 13:41:22</td>
              <td style="color:#f00;">在线</td>
              <td>0</td>
              <td>7.5%</td>
              <td>
                <span>启用</span>
              </td>
              <td>
                <a href="/UserCenter/SubUserDetail?accountID=1066589&amp;gameID=0" style="color:blue;">详情</a>
                <router-link to="/teamRecordView" style="color:blue;">团队总览</router-link>
                <router-link to="/AccountChange" style="color:blue;">账变记录</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="page">
          <span class="page-inner"><span class="total">1 个用户 1/1 页</span><span class="current">1</span></span>
        </div>
      </div>
    </div>
    <!-- 表格 -->
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


.search-box span {
  padding: 2px 10px;
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

.search-box .btn-group {
  overflow: hidden;
}

.search-box .btn-group li {
  float: left;
  margin: 0 6px;
}

.search-box .btn-group li input {
  width: 125px;
  height: 28px;
}






/*表格*/

ul,
li,
p {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bggreen {
  background-color: #62ba3b!important;
}


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
}

th {
  background: #c7c7c7;
  padding: 5px;
  line-height: 30px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
}

td {
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid #cdcdcd;
}

.page {
  font: 13px/1.5 verdana, arial;
  height: 22px;
  line-height: 22px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.page .page-inner {
  display: inline-block;
  vertical-align: middle;
}

.page a,
.page .page-inner span,
.pagination span,
.pagination a {
  text-decoration: none;
  line-height: 22px;
  height: 22px;
  overflow: hidden;
  margin: 0 1px;
  padding: 0 7px;
  display: inline-block;
  vertical-align: top;
}

</style>
