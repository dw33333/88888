<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;报表管理&gt;用户参加优惠活动信息</span>
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
    <div class="table-list">
      <table>
        <thead>
          <tr>
            <th>活动名称</th>
            <th>有效投注流水</th>
            <th>所需流水</th>
            <th>活动状态</th>
            <th>备注</th>
            <th>创建时间</th>
            <th>操作</th>            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="10">该条件下查询不到符合条件的内容</td>
          </tr>
        </tbody>
     
      </table>
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



td {
  border-bottom: 1px solid #cdcdcd;
  background: #fff;
  padding: 5px;
  text-align: center;
}

</style>
