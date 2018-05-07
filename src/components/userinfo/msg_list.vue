<template>
  <div class="msg_list">
    <div class="header"><span class="mbx">用户中心>消息中心>站内短信</span></div>
    <div class="cont">
      <table class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>标题</th>
          <th>时间</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        <tr v-for="it,idx in records" :key="idx">
          <td>{{it.msg_title}}</td>
          <td>{{it.msg_time}}</td>
          <td>{{it.islook?"已读":"未读"}}</td>
          <td>
            <div class="btn" @click="(detail(it.msg_id),detailid=it.msg_id)">{{is_loading_detail&&detailid==it.msg_id?"加载中...":"查看详情"}}</div>
            <div class="btn" @click="(del(it.msg_id),delid=it.msg_id)">{{is_deleting&&delid==it.msg_id?"删除中...":"删除"}}</div>
          </td>
        </tr>
      </table>
      <div style="text-align: center;padding:10px;" v-show="records.length<1&&!is_loading_msg">暂无数据</div>
      <div class="pager">
        <div class="item" @click="pageClick(it.page)" v-for="it,idx in pages" :key="idx"
             :class="{cur:it.cur,sl:it.page==-1}">{{it.txt}}
        </div>
        <div style="display: inline-block;color:#B62929;" v-show="is_loading_msg">加载中...</div>
        <div style="display: inline-block;color:#B62929;opacity:0" v-show="!is_loading_msg">加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations,mapState} from "vuex"
  import alert from "@/components/base/alert"

  export default {
    name: "bet_record",
    components: {},
    computed:{
      ...mapState(["loading"])
    },
    data() {
      return {
        pageSize: 2,
        pages: [],
        curPage: 1,
        records: [],
        delid:"",
        detailid:"",
        is_loading_msg:false,
        is_deleting:false,
        is_loading_detail:false,
      }

    },
    async mounted() {
      this.loadMsg(1);
    },
    methods: {
      ...mapMutations(["ROOTBOX","LOADING"]),
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
              _this.ROOTBOX({
                open: false
              });
              if (fn) fn();
            },
            close() {
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      confirm(tit, msg, fn, msgStyle) {
        let _this = this;
        this.ROOTBOX({
          open: true,
          compt: alert,
          props: {
            tit: tit,
            msg: msg,
            msgstyle: msgStyle,
            confirm: true
          },
          handles: {
            confirm() {
              _this.ROOTBOX({
                open: false
              })
              if (fn) fn();
            },
            close() {
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      setPager(page, pageCount) {
        this.pages = [];
        if (pageCount < 1) return;
        this.curPage = page;
        if (page - 1 > 0) {
          this.pages.push({
            page: 1,
            txt: "首页"
          });
          this.pages.push({
            page: page - 1,
            txt: "上一页"
          });
        }
        let begin = 1, end = pageCount;
        if (page - 3 > 1) {
          begin = page - 3;
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 3 <= pageCount) {
          end = page + 3;
        }
        for (let i = begin; i <= end; i++) {
          this.pages.push({
            page: i,
            txt: i,
            cur: i == page
          })
        }
        if (end != pageCount) {
          this.pages.push({
            page: -1,
            txt: "..."
          });
        }
        if (page + 1 <= pageCount) {
          this.pages.push({
            page: page + 1,
            txt: "下一页"
          });
          this.pages.push({
            page: pageCount,
            txt: "末页"
          });
        }
      },
      async loadMsg(page) {
        if(this.is_loading_msg||this.is_deleting||this.is_loading_detail) return;
        this.is_loading_msg=true;
        // this.LOADING(true);
        let res = await this.$http.post('/api/users/MassageList', {
          p: page,
          ps: this.pageSize
        });
        this.is_loading_msg=false;
        // this.LOADING(false);
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.records = res.data.list;
        if (page > res.data.page) {
          page = this.curPage = res.data.page;
          this.loadMsg(page);
          return;
        }
        this.setPager(page, res.data.page);
      },
      async detail(id) {
        if(this.is_loading_msg||this.is_deleting||this.is_loading_detail) return;
        this.is_loading_detail=true;
        //this.LOADING(true);
        let res = await this.$http.post('/api/users/MsgContent', {
          id: id
        })
        this.is_loading_detail=false;
        // this.LOADING(false);
        if (!res) return;
        if (res.data.code != 0) {
          this.alert("提示", res.data.msg);
          return;
        }
        this.alert("消息详情", res.data.data, () => {
          this.loadMsg(this.curPage);
        });
      },
      del(id) {
        if(this.is_loading_msg||this.is_deleting||this.is_loading_detail) return;
        this.confirm("确认", "确认删除吗?", async () => {
          this.is_deleting=true;
          // this.LOADING(true);
          let res = await this.$http.post('/api/users/MsgDelete', {
            id: id
          });
          this.is_deleting=false;
          // this.LOADING(true);
          if (!res) return;
          if (res.data.code != 0) {
            this.alert("提示", res.data.msg);
            return;
          }
          this.alert("提示", "删除成功", () => {
            console.log("成功")
            this.loadMsg(this.curPage);
          })
        });
      },
      pageClick(page) {
        if (page == -1) return;
        this.loadMsg(page);
      }
    }
  }
</script>

<style lang="less">
  .msg_list {
    .el-input {
      input {
        padding-left: 30px;
        width: 220px;
        height: 40px;
        line-height: 40px;
      }
    }
    text-align: left;
    .header {
      background-color: #fff;
      padding-left: 10px;
      .mbx {
        line-height: 51px;
        display: inline-block;
        border-bottom: 2px solid #B62929;
      }
    }
    .cont {
      padding: 20px;
      .btn {
        padding: 0 8px;
        min-width:60px;
        display: inline-block;
        background-color: #B62929;
        color: #fff;
        border-radius: 3px 3px;
        line-height: 35px;
        cursor: pointer;
      }

    }
  }
</style>
