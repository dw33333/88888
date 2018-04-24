<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;短信公告&gt;站内短信({{mailLength}})</span>
    </div>
    <!-- 公告 -->
    <div class="msg-box">
      <div class="title">
        <div>日期</div>
        <div>标题</div>
        <div>状态</div>
        <div>用户操作</div>
      </div>
     <!--  <div class="content-box">
        <ul class="title">
          <li>"2018-04-20 18:44:23"</li>
          <li>"97uj66u5"</li>
          <li>已读</li>
          <li>删除</li>
        </ul>
        <p>银行卡通告：因公司需要，银行卡入款.微信入款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！银行最新入款账号，存入过期账号概不负责！银行卡更新通告：因公司需要，银行卡入款.微款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！银行卡更新通告：因公行卡入款.微信入款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！

        </p>
      </div> -->
      <div class="content-box" v-for="(msg,index) in msgArr">
        <ul class="title" @click='read(msg, index)'>
          <li>{{msg.msg_time}}</li>
          <li>{{msg.msg_title}}</li>
          <li>{{msg.islook === '0' ? '未读' : '已读'}}</li>
          <li><a @click='deleteMsg(msg,index)' href="javascript:void(0);">删除</a></li>
        </ul>
        <p v-if='looking && msgContentIndex === index'>{{msgContent}}</p>
      </div>
    </div>
   <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>

import maskLayer from '../base/mask-layer'

export default {
  data() {
    return {
      
      total: 0,
      mailLength: 0,
      msgArr: [],
      ifopen: false,
      content:'',
      looking: false,
      msgContent: '',
      lookState: '未读',
      msgContentIndex: -1
    }
  },

  mounted() {
    this.getMsg();

  },
  components:{
    maskLayer
  },
  methods: {
    // 封装提示信息函数
    mytoast(msg) {
      this.ifopen = true;
      // let instance = Toast(msg);
      this.content = msg;
      setTimeout(() => {
        // instance.close();
        this.ifopen = false;
        clearTimeout();
      }, 1000);
    },
    // 获取站内信
    getMsg(item,index) {
      this.$http.get('/json/center/?r=Msg').then((res) => {
        console.log(res.data.data)
        this.msgArr = res.data.data;

        this.msgArr.forEach((item, index) => {
          if (item.islook === '0') {
            this.mailLength = this.mailLength + 1
          }
        });


      }).catch((error) => {
        console.log(error)
      });
    },
    // 阅读站内邮件
    read(item, index) {
      this.$http.get('/json/center/?r=MsgOne&msgid=' + item.msg_id).then((res) => {
        this.msgContent = res.data.data.content;
       
        item.islook = 1;
        this.looking = !this.looking;
        this.msgContentIndex = index;
        // this.mailLength = 0;
        this.getMsgs(item, index)
      }).catch((error) => {
        console.log(error)
      })
    },
    // 删除站内邮件
    deleteMsg(item, index) {
      this.$http.get('/json/center/?r=MsgDel&msgid=' + item.msg_id).then((res) => {
        if (res.data.code === 0) {
          this.mailLength = 0
          this.mytoast(res.data.msg)
          setTimeout(() => {
            
            clearTimeout()
          }, 1500)


          this.msgArr.splice(index,1);
          this.getMsgs(item, index);
        }
      }).catch((error) => {
        console.log(error)
      })
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


a{
  text-decoration:none;
}



/*公告列表*/

p{
  margin: 0;
  padding: 0;
}
.msg-box {
  margin: 10px 20px;
  /*border-bottom: 1px solid #cdcdcd;*/
  background-color: #fff;
}
.content-box{
  border-bottom: 1px solid #cdcdcd;
}
.content-box .title{
  background-color: #fff;
}
.title{
  display: flex;
  justify-content:space-around;
  height: 40px;
  font-size: 16px;
  background-color: #c7c7c7;
  align-items:center;
}
.title li,.title div{
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.content-box p{
  line-height: 30px;
  padding:0 20px;
  text-align: justify;
  word-wrap:break-word;
  word-break:break-all;
}
</style>
