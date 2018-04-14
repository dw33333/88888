<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;投注报表&gt;视讯</span>
    </div>

    <!-- 日期列表 -->
    <div class="table-list" v-if="isShowDetail">
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>下注金额</th>
            <th>有效投注</th>
            <th>结果</th>
            <th>用户操作</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018-04-14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href="javascript:void(0)" @click="isShowDetailFn(1)">查看详情</a></td>
          </tr>
           <tr>
            <td>2018-04-14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href="javascript:void(0)" @click="isShowDetailFn(1)">查看详情</a></td>
          </tr>
           <tr>
            <td>总计</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>


    <!-- 详情列表 -->
    <div class="table-list" v-if="!isShowDetail">
      <div class="text">2018-04-14  <span @click="isShowDetailFn(2)">返回</span></div>
      <table>
        <thead>
          <tr>
            <th>游戏名称</th>
            <th>下注金额</th>
            <th>未结算</th>
            <th>结果</th>
           
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>足球</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0</td>
            
          </tr>
           <tr>
            <td>篮球</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0</td>
            
          </tr>
           <tr>
            <td>总计</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
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
      isShowDetail:true
    }
  },
  methods:{
    isShowDetailFn(index){
      if(index==1){
      this.isShowDetail=false;
        
      }
       if(index==2){
      this.isShowDetail=true;
        
      }
    }
  }
};
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

/*表格*/

.table-list {
  padding: 10px 20px 10px 20px;
}

.table-list .text{
  line-height: 50px;
  height: 50px;
  text-align: left;
  text-indent: 10px;
}

.table-list .text span{
  background-color:#e34343;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
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
</style>
