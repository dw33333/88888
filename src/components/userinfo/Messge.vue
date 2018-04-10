<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;短信公告&gt;站内短信</span>
    </div>
    <div class="user-data">
      <div class="btns">
        <div :class='{recharge:true,active:isShow}' @click="selectType(1)">收件箱</div>
        <div :class="{withdraw:true,active:!isShow}" @click="selectType(2)">发件箱</div>
      </div>
      <!-- 奖金选择设置 -->
      <div class="content-select" v-if="isShow">
        <table>
          <thead>
            <tr>
              <th style="width:490px;">收件人短信列表</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <!--
                            <tr>
                                <td colspan="7">该条件下查询不到符合条件的内容</td>
                            </tr>
                        -->
          </thead>
          <tbody data-bind="foreach:list" id="have_data"></tbody>
          <tbody id="no_data" class="dn">
            <tr>
              <td colspan="7">暂无数据</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="others table-list" v-if="!isShow">
        <table>
          <thead>
            <tr>
              <th style="width:490px;">推广渠道链接</th>
              <th>访问量</th>
              <th>注册人数</th>
              <th>开户类型</th>
              <th>状态</th>
              <th>生成时间</th>
              <th>操作</th>
            </tr>
            <!--
                            <tr>
                                <td colspan="7">该条件下查询不到符合条件的内容</td>
                            </tr>
                        -->
          </thead>
          <tbody data-bind="foreach:list" id="have_data"></tbody>
          <tbody id="no_data" class="dn">
            <tr>
              <td colspan="7">暂无数据</td>
            </tr>
          </tbody>
        </table>
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




.btns {
  /*padding: 10px;*/
  overflow: hidden;
  /*background-color: #e6e4e4;*/
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
  /*margin-left: 40px;*/
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

.content-select {
  /*border-radius: 10px;*/
  margin-top: 10px;
  padding: 10px 0;
  /*background-color: #fff;*/
  /*padding-left: 20px;*/
}







/*推广链接*/








/*推广管理*/

.table-list {
  /*border-radius: 5px;*/
  padding: 10px 0 10px 0;
}

table {
  border-radius: 5px;
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
}

td {
  border-bottom: 1px solid #cdcdcd;
}



</style>
