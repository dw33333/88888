<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;额度管理</span>
    </div>
    <!-- 日期列表 -->
    <div class="table-list">
      <div class="wallet">我的钱包：<span class="red">¥{{user_money}}</span></div>
    </div>
    <div class="btns paddbottom10">
      <div :class="{recharge:true,active:inOrOut==1}" @click="turnInOrOut(1);">转入</div>
      <div :class="{withdraw:true,active:inOrOut==2}" @click="turnInOrOut(2);">转出</div>
    </div>
    <div class="btns platform">
      <div :class="{recharge:true,ag:true,active:platform==1}" @click="platformSelect(1);">
        AG平台
        <br> ¥{{ag_money}}
      </div>
      <div :class="{withdraw:true,ds:true,active:platform==2}" @click="platformSelect(2);">
        DS平台
        <br> ¥{{ds_money}}
      </div>
    </div>
    <div class="table-list">
      <div class="title">
        选择转账金额:
      </div>
      <ul>
        <li :class="{active:all==10}" @click="selectType(10)">全部</li>
        <li :class="{active:inputMoney==100}" @click="selectType(100)">100</li>
        <li :class="{active:inputMoney==500}" @click="selectType(500)">500</li>
        <li :class="{active:inputMoney==1000}" @click="selectType(1000)">1000</li>
        <li :class="{active:inputMoney==5000}" @click="selectType(5000)">5000</li>
        <li :class="{active:inputMoney==10000}" @click="selectType(10000)">10000</li>
        <li class="bordernone">
          <input type="number" placeholder="输入金额,最低10元" class="input" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="inputMoney">
        </li>
      </ul>
      <div class="btns">
        <button class="reset" @click="selectType(0)">重置</button>
        <button class="submit" @click='submitQuota()'>提交</button>
      </div>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>

import maskLayer from '../base/mask-layer'

export default {
  data () {
    return {
      isShow: true,
      inOrOut: 1,
      platform: 1,
      all: '',
      lock: true,
      inputMoney: '',
      ifopen: false,
      money: '',
      realname: '',
      bankCardNum: '',
      bankName: '',
      ag_money: '',
      ds_money: '',
      user_money: '',
      content: ''

    }
  },
  mounted () {
    this.getuserinfo()
  },
  methods: {
    // 获取个人信息
    getuserinfo () {
      this.$http.get('/json/center/?r=UsrInfo').then((res) => {
        this.realname = res.data.data.pay_name
        this.bankCardNum = res.data.data.pay_num
        this.bankName = res.data.data.pay_bank
      }).catch((error) => {
        console.log(error)
      })

      // >获取AG真人余额
      this.$http.get('/json/center/?r=AginMoney').then((res) => {
        this.ag_money = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })

      // >获取DS真人余额：
      this.$http.get('/json/center/?r=DsMoney').then((res) => {
        this.ds_money = res.data.data.money
      }).catch((error) => {
        console.log(error)
      })

      // >获取用户余额
      this.$http.get('/json/center/?r=Money').then((res) => {
        this.user_money = res.data.data.user_money
      }).catch((error) => {
        console.log(error)
      })
    },

    turnInOrOut (select) {
      this.inOrOut = select
      this.inputMoney = ''
      this.all = ''
      this.lock = true
    },
    platformSelect (plat) {
      this.lock = true
      this.inputMoney = ''
      this.all = ''
      this.platform = plat
    },

    selectType (index) {
      if (index === 10) {
        if (this.lock) {
          this.all = index
          this.lock = false
          // 转入
          if (this.inOrOut === 1) {
            this.inputMoney = this.user_money
          }
          // 转出
          if (this.inOrOut === 2) {
            // AG平台
            if (this.platform === 1) {
              this.inputMoney = this.ag_money
            }

            // DS平台
            if (this.platform === 2) {
              this.inputMoney = this.ds_money
            }
          }
        } else {
          this.all = ''
          this.lock = true
          this.inputMoney = ''
        }
      } else if (index === 0) {
        // 重置按钮
        this.inputMoney = ''
        this.all = ''
      } else {
        this.lock = true
        this.all = ''
        this.inputMoney = index
      }
      console.log(this.inputMoney)
      // 重置按钮
      if (index === 0) {
        this.inputMoney = ''
        this.all = ''
      }
    },
    // 封装提示信息函数
    mytoast (msg) {
      this.ifopen = true
      // let instance = Toast(msg);
      this.content = msg
      setTimeout(() => {
        // instance.close();
        this.ifopen = false
        clearTimeout()
      }, 1000)
    },
    // 提交
    submitQuota () {
      console.log(this.inputMoney)
      if (!this.inputMoney) {
        this.mytoast('请先输入转账金额')
        return
      } else if (this.inOrOut === 1) {
        // 转入
        // 转入到AG平台
        if (this.platform === 1) {
          let data = {}
          data['change_money'] = this.inputMoney
          data['change_type'] = 'd'
          data['change_live'] = 1
          this.$http.post('/json/center/?r=AginTransfer', data).then((res) => {
            if (res.data.code === 0) {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
              this.getuserinfo()
              // this.$store.dispatch('SET_userMoney', res.data.data.money)
              this.inputMoney = ''
              this.all = ''
              // this.fastIndex = 0
            } else if (res.data.code === 2) {
              // MessageBox.confirm('请先登录', '温馨提示').then(() => {
              //   this.$router.push({
              //     path: '/login',
              //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
              //   })
              //   this.$store.dispatch('UserLogout')
              // }, () => {
              //   this.$store.dispatch('UserLogout')
              //   return false
              // })
            } else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
            }
          }).catch((error) => {
            console.log(error)
          })
        }
        // 转入到DS平台
        if (this.platform === 2) {
          let data = {}
          data['change_money'] = this.inputMoney
          data['change_type'] = 'd'
          data['change_live'] = 4
          this.$http.post('/json/center/?r=DsTransfer', data).then((res) => {
            if (res.data.code === 0) {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
              this.getuserinfo()
              // this.$store.dispatch('SET_userMoney', res.data.data.money)
              this.inputMoney = ''
              this.all = ''
            } else if (res.data.code === 2) {
              // MessageBox.confirm('请先登录', '温馨提示').then(() => {
              //   this.$router.push({
              //     path: '/login',
              //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
              //   })
              //   this.$store.dispatch('UserLogout')
              // }, () => {
              //   this.$store.dispatch('UserLogout')
              //   return false
              // })
            } else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      } else if (this.inOrOut === 2) {
        // 转出
        // 转出到AG平台
        if (this.platform === 1) {
          let data = {}
          data['change_money'] = this.inputMoney
          data['change_type'] = 'w'
          data['change_live'] = 1

          this.$http.post('/json/center/?r=AginTransfer', data).then((res) => {
            console.log(res.data.code + 'sdewee')
            if (res.data.code === 0) {
              console.log('res.data.code-----' + res.data.code)
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1500)
              this.getuserinfo()

              this.inputMoney = ''
              this.all = ''
            } else if (res.data.code === 2) {
              // MessageBox.confirm('请先登录', '温馨提示').then(() => {
              //   this.$router.push({
              //     path: '/login',
              //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
              //   })
              //   this.$store.dispatch('UserLogout')
              // }, () => {
              //   this.$store.dispatch('UserLogout')
              //   return false
              // })
            } else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1500)

              this.inputMoney = ''
              this.all = ''
            }
          }).catch((error) => {
            console.log(error)
          })
        }
        // 转出到DS平台
        if (this.platform === 2) {
          let data = {}
          data['change_money'] = this.inputMoney
          data['change_type'] = 'w'
          data['change_live'] = 4
          this.$http.post('/json/center/?r=DsTransfer', data).then((res) => {
            if (res.data.code === 0) {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1500)
              this.getuserinfo()
              this.inputMoney = ''
              this.all = ''
            } else if (res.data.code === 2) {
              // MessageBox.confirm('请先登录', '温馨提示').then(() => {
              //   this.$router.push({
              //     path: '/login',
              //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
              //   })
              //   this.$store.dispatch('UserLogout')
              // }, () => {
              //   this.$store.dispatch('UserLogout')
              //   return false
              // })
            } else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      }

      if (this.changeType === '转出AG') {
        alert(1)
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'w'
        data['change_live'] = 1
        this.$http.post('/api/json/center/?r=AginTransfer', data).then((res) => {
          if (res.data.code === 0) {
            this.mytoast(res.data.msg)
            // setTimeout(() => {

            //   this.ifopen = !this.ifopen
            //   clearTimeout()
            // }, 1000)
            this.getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
            // MessageBox.confirm('请先登录', '温馨提示').then(() => {
            //   this.$router.push({
            //     path: '/login',
            //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            //   })
            //   this.$store.dispatch('UserLogout')
            // }, () => {
            //   this.$store.dispatch('UserLogout')
            //   return false
            // })
          } else {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }

      if (this.changeType === '转出DS') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'w'
        data['change_live'] = 4
        this.$http.post('/api/json/center/?r=DsTransfer', data).then((res) => {
          if (res.data.code === 0) {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
            this.getuserinfo()
            this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.fastIndex = 0
          } else if (res.data.code === 2) {
            // MessageBox.confirm('请先登录', '温馨提示').then(() => {
            //   this.$router.push({
            //     path: '/login',
            //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            //   })
            //   this.$store.dispatch('UserLogout')
            // }, () => {
            //   this.$store.dispatch('UserLogout')
            //   return false
            // })
          } else {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = !this.ifopen
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      if (this.changeType === '转入AG') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'd'
        data['change_live'] = 1
        this.$http.post('/json/center/?r=AginTransfer', data).then((res) => {
          if (res.data.code === 0) {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = false
              clearTimeout()
            }, 1000)
            this.getuserinfo()
            // this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.all = ''
            // this.fastIndex = 0
          } else if (res.data.code === 2) {
            // MessageBox.confirm('请先登录', '温馨提示').then(() => {
            //   this.$router.push({
            //     path: '/login',
            //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            //   })
            //   this.$store.dispatch('UserLogout')
            // }, () => {
            //   this.$store.dispatch('UserLogout')
            //   return false
            // })
          } else {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = false
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      if (this.changeType === '转入DS') {
        this.ifopen = !this.ifopen
        let data = {}
        data['change_money'] = this.inputMoney
        data['change_type'] = 'd'
        data['change_live'] = 4
        this.$http.post('/api/json/center/?r=DsTransfer', data).then((res) => {
          if (res.data.code === 0) {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = false
              clearTimeout()
            }, 1000)
            this.getuserinfo()
            // this.$store.dispatch('SET_userMoney', res.data.data.money)
            this.inputMoney = ''
            this.all = ''
          } else if (res.data.code === 2) {
            // MessageBox.confirm('请先登录', '温馨提示').then(() => {
            //   this.$router.push({
            //     path: '/login',
            //     query: { redirect: this.$route.path } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
            //   })
            //   this.$store.dispatch('UserLogout')
            // }, () => {
            //   this.$store.dispatch('UserLogout')
            //   return false
            // })
          } else {
            this.mytoast(res.data.msg)
            setTimeout(() => {
              this.ifopen = false
              clearTimeout()
            }, 1000)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }

  },
  components: {
    maskLayer
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

/*表格*/
.table-list {
  padding: 10px 20px 10px 20px;
}

.wallet {
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  background-color: #fff;
}

.platform {
  padding-top: 20px;
  border-top: 1px solid #cdcdcd;
}

.btns {
  margin: 8px;
  overflow: hidden;
  /* padding-bottom: 20px; */
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
  height: 50px;
  line-height: 50px;
  float: left;
}

.paddbottom10 {
  padding-bottom: 10px;
}

.btns .ag,
.btns .ds {

  cursor: pointer;
  height: 60px;
  line-height: 30px;
}

.btns .recharge {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-left: 30px;
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

.red {
  color: #b62929;
}

.table-list .title {
  text-align: left;
  padding-left: 20px;
  /* font-size: 14px; */
  height: 30px;
  line-height: 30px;
}

.table-list ul {
  overflow: hidden;
  padding-left: 10px;
}

.table-list ul li {
  float: left;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ce4c4c;
  width: 60px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.table-list ul input {
  width: 136px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  outline: 0;
  border: none;
  border: 1px solid #ce4c4c;
}

.table-list ul li.active {
  background-color: #b62929;
  color: #fff;
}

input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}

.bordernone {
  border: none!important;
}

.btns button {
  outline: none;
  border: none;
  background-color: #b62929;
  height: 40px;
  line-height: 30px;
  padding: 0px 30px;
  margin: 8px 15px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

button.reset {
  background-color: #26a2ff;
}

</style>
