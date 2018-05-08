<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;短信公告&gt;网站公告</span>
    </div>
    <!-- 公告 -->
    <div class="msg-box">
      <div class="head">公告</div>
      <div class="item">
        <!-- <div class="title">{{notice.addtime}}</div> -->
        <p class="content">{{sitesInfos.Msg}} </p>
      </div>
      <!--  <div class="item">
        <div class="title">1.温馨提示：银行卡更新通告 【 2018-03-23 20:09:07 】</div>
        <p class="content">银行卡更新通告：因公司需要，银行卡入款.微信入款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！</p>
      </div> -->
    </div>
    <!-- <div>共 {{total}} 条记录 {{total}}/1页 1</div> -->
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed:{
    ...mapState(["sitesInfos"])
  },
  data () {
    return {
      Msg: '',
      total: 0
    }
  },

  mounted () {
    /*this.$http.get('/api/site/info').then((res) => {
      this.Msg = res.data.Msg;
      // this.total = this.noticeArr.length
    }).catch((error) => {
      console.log(error)
    })*/
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

/*公告列表*/
.msg-box {
  margin: 10px 20px;
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
}

.msg-box .head {
  font-size: 16px;
  line-height: 40px;
  padding-left: 20px;
  text-align: left;
  font-weight: bold;
  background-color: #c7c7c7;
}

.msg-box .item {
  /*border-left: 1px solid #cdcdcd;*/
  /*border-right: 1px solid #cdcdcd;*/
  border-bottom: 1px solid #cdcdcd;

}
.msg-box .item:last-child{
   border-bottom:none;
}
.msg-box .item .title {
  padding-left: 20px;
  color: #f00;
  line-height: 40px;
  text-align: left;
}

.msg-box .item .content {
  margin: 0;
  line-height: 40px;
  text-align: left;
  padding-left: 35px;
}

.activecolor {
  color: #f00;
}

.activeblock {
  display: block!important;
}

.item:hover{
  background-color: #ddd;
}
</style>
