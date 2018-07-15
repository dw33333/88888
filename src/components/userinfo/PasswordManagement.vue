<template>
  <div class='container passwordManagement'>
    <div class="main-head">
      <span>用户中心 / 账户管理 / 密码修改</span>
    </div>
    <div class="btns">
      <div :class='{recharge:true,active:tabIndex==1}' @click="selectType(1);">修改登录密码</div>
      <div :class="{withdraw:true,active:tabIndex==2}" @click="selectType(2);">修改取款密码</div>
    </div>
    <div class="content-box">
      <!-- 修改密码 -->
      <div class="modify" v-if='tabIndex==1'>
        <p>输入旧登录密码：
          <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="请输入旧密码" v-model="oldPassWord">
        </p>
        <p>输入新登录密码：
          <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="请输入新密码" v-model="newPassWord">
        </p>
        <p>输入新登录密码：
          <input type="password" onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="请输入再次新密码"
                 v-model="againPassWord">
        </p>
      </div>
      <!-- 设置取款密码 -->
      <div class="setPwd" v-if='tabIndex==2'>
        <p>
          提示：取款密码由4位数字组成，在线取款时需要输入取款密码才能进行取款
        </p>
        <p style="padding-left:28px;">请输入旧密码:
          <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="输入旧密码位"
                 v-model="oldPassWord">
        </p>
        <p style="padding-left:28px;">请输入新密码:
          <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="输入新密码"
                 v-model="newPassWord">
        </p>
        <p>请再次输入新密码:
          <input type="password" maxlength="6" onkeyup="this.value=this.value.replace(/\D/g,'')"
                 placeholder="再次输入新密码" v-model="againPassWord">
        </p>
      </div>
      <div class="btn-group" v-if="tabIndex==1">
        <button @click='modifySubmit'>{{is_changing?"修改中...":"修改"}}</button>
        <button @click="resetPwd">重置</button>
      </div>
      <div class="btn-group" v-if='tabIndex==2'>
        <button @click='modifySubmit'>{{is_changing?"修改中...":"修改"}}</button>
        <button click="resetPwd">重置</button>
      </div>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>
  import maskLayer from '../base/mask-layer'
  import alert from '../base/alert'
  import {mapState, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        tabIndex: 1,
        oldPassWord: null,
        newPassWord: null,
        againPassWord: null,
        ifopen: false,
        content: '',
        is_changing: false
      }
    },
    methods: {
      ...mapMutations(['changeUserName', 'changeUserMoney', 'ROOTBOX', "EASYSECRET", "AGENT_ID"]),
      resetPwd() {
        this.oldPassWord = ''
        this.newPassWord = ''
        this.againPassWord = ''
      },
      // 封装提示信息函数
      mytoast(msg) {
        this.ifopen = !this.ifopen;
        // let instance = Toast(msg);
        this.content = msg
        setTimeout(() => {
          // instance.close();
          this.ifopen = !this.ifopen
          // clearTimeout();
        }, 1500)
      },
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
      modifySubmit() {
        if (this.tabIndex === 1) {
          if (!this.oldPassWord) {
            this.mytoast('请输入旧密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (!this.newPassWord) {
            this.mytoast('请输入新密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (!this.againPassWord) {
            this.mytoast('请再次输入新密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else {
            let data = {}
            data['password_old'] = this.oldPassWord
            data['password'] = this.newPassWord
            data['REpassword'] = this.againPassWord
            this.is_changing = true;
            this.$http.post('/api/users/changepwd', data).then((res) => {
              this.is_changing = false;
              this.alert('提示', res.data.msg)
              setTimeout(() => {
                // instance.close()
                clearTimeout()
              }, 1500)
              if (res.data.code === 0) {
                this.oldPassWord = ''
                this.newPassWord = ''
                this.againPassWord = ''
              }
            }).catch((error) => {
              console.log(error);
              this.is_changing = false;
            })
          }
        }
        if (this.tabIndex === 2) {
          if (!this.oldPassWord) {
            this.mytoast('请输入旧密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (!this.newPassWord) {
            this.mytoast('请输入新密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (this.newPassWord.length < 4) {
            this.mytoast('新密码长度最少为4位')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (!this.againPassWord) {
            this.mytoast('请再次输入新密码')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else if (this.againPassWord.length < 4) {
            this.mytoast('确认密码长度最少为4位')
            setTimeout(() => {
              clearTimeout()
            }, 1500)
          } else {
            let data = {}
            data['password_old'] = this.oldPassWord
            data['password'] = this.newPassWord
            data['REpassword'] = this.againPassWord
            this.is_changing = true;
            this.$http.post('/api/users/changeqkpwd', data).then((res) => {
              this.is_changing = false;
              this.alert('信息', res.data.msg)
              setTimeout(() => {
                clearTimeout()
              }, 1500)
              if (res.data.code === 0) {
                this.oldPassWord = ''
                this.newPassWord = ''
                this.againPassWord = ''
              }
            }).catch((error) => {
              this.is_changing = false;
              console.log(error)
            })
          }
        }
      },
      selectType(index) {
        this.tabIndex = index
      }
    },
    components: {
      maskLayer
    }
  }
</script>
<style scoped lang="less">
  .passwordManagement {
    font-size: 14px;
  }

  .main-head {
    /*background: #fff;*/
    border-bottom: 1px solid #d0d0d0;
    text-align: left;
    line-height: 49px;
    padding-left: 20px;
    background-color:#fff;
  }

  .main-head span {
    display: inline-block;
    height: 49px;
    border-bottom: 2px solid #b62929;
  }

  .btns {
    margin: 20px;
    overflow: hidden;
  }

  .btns .recharge,
  .btns .withdraw {
    padding: 0 11px;
    border: none;
    background: none;
    display: inline-block;
    background-color: #ededed;
    border: 1px solid #b62929;
    cursor: pointer;
    height: 35px;
    line-height: 35px;
    float: left;
  }

  .btns .recharge {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    margin-left: 40px;
  }

  .btns .withdraw {
    border-left: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .btns > .active {
    background-color: #b62929;
    color: #fff !important;
  }

  /*修改登录密码*/
  .content-box {
    text-align: left;
    font-size: 14px;
    padding-left: 60px;
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      animation-name: autofill3;
      animation-fill-mode: both;
      color: #aaa !important;
    }
  }

  .content-box input {
    background-color: #fff;
  }

  /*
  input:focus {
    outline: none;
    outline: 0;
  }

  .content-box input:focus {
    border-color: rgba(198, 33, 51, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
  }*/

  .content-box p {
    margin: 10px 0;
  }

  .content-box .btn-group {
    padding-left: 100px;
  }

  .content-box .btn-group button {
    background-color: #b62929;
    padding: 8px 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 0 10px;
  }

  .content-box .btn-group button:hover {
    background-color: #e34343;
  }

</style>
