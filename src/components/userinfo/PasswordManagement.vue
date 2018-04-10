<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户管理&gt;密码修改</span>
    </div>
    <div class="btns">
      <div :class='{recharge:true,active:isShow}' @click="selectType(1);">修改登录密码</div>
      <div :class="{withdraw:true,active:!isShow}" @click="selectType(2);">设置取款密码</div>
    </div>
    <div class="content-box">
      <!-- 修改密码 -->
      <div class="modify" v-if='isShow'>
        <p>输入旧登录密码：
          <input type="text">
        </p>
        <p>输入新登录密码：
          <input type="text" placeholder="6-13个字符(数字和字母)">
        </p>
        <p>输入新登录密码：
          <input type="text">
        </p>
      </div>
      <!-- 设置取款密码 -->
      <div class="setPwd" v-else>
        <p>
          提示：取款密码由4-6位数字或字母或数字和字母组成，在线取款时需要输入取款密码才能进行取款
        </p>
        <p>输入新提款密码:
          <input type="text" placeholder="">
        </p>
        <p>输入新提款密码:
          <input type="text">
        </p>
      </div>
      <div class="btn-group" v-if="isShow">
        <button>修改</button>
        <button>重置</button>
      </div>
      <div class="btn-group" v-else>
        <button>设置</button>
        <button>重置</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
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



.btns {
  margin: 20px;
  overflow: hidden;
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
  height: 40px;
  line-height: 40px;
  float: left;
}

.btns .recharge {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-left: 40px;
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





/*修改登录密码*/

.content-box {
  text-align: left;
  font-size: 14px;
  color: #000;
  padding-left: 60px;
}

.content-box input {
  height: 24px;
  border: 1px #ccc solid;
  width: 200px;
  border-radius: 4px;
  padding-left: 4px;
}

input:focus {
  outline: none;
  outline: 0;
}

.content-box input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}

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
