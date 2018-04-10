<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户管理&gt;用户资料</span>
    </div>
    <div class="user-data">
      <ul class="item">
        <li class='title'>用户昵称：</li>
        <li>
          <input type="text" readonly value="abcdef">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>用户手机：</li>
        <li>
          <input type="text">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>真实姓名：</li>
        <li>
          <input type="text" readonly value="abcdef">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>用户邮箱：</li>
        <li>
          <input type="text">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>用户QQ：</li>
        <li>
          <input type="text">
        </li>
      </ul>
      <ul class="item">
        <li class='title'>用户微信：</li>
        <li>
          <input type="text">
        </li>
      </ul>
      <div class="item btns">
        <button>修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowCardList: true
    }

  },
  methods: {
    newCard(index) {
      if (index == 1) {
        this.isShowCardList = false;

      }
      if (index == 2) {
        this.isShowCardList = true;

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



/*用户资料*/

.user-data {
  background-color: #fff;
  font-size: 14px;
  line-height: 50px;
  width: 400px;
  margin: 150px auto;
  padding: 20px 24px;
  color: #000;
  border: 1px solid #999;
}

.user-data p {
  text-align: left;
  margin: 0;
  padding: 0 20px;
  border-bottom: 1px solid #ededed;
}

.user-data .item input {
  height: 24px;
  border: 1px #ccc solid;
  width: 220px;
  border-radius: 4px;
  padding-left: 4px;
}

.user-data .item input[readonly='readonly'] {
  border: 1px #ccc solid;
  background-color: rgb(235, 235, 228);
}

input:focus {
  outline: none;
  outline: 0;
}

.user-data .item input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}

.user-data .item input[readonly='readonly']:focus {
  outline: none;
  box-shadow: none;
  border-color: #ccc;
}

.user-data .item {
  overflow: hidden;
  padding: 0 10px;
  /*border-bottom:1px solid #ededed;*/
}

.user-data .item li {
  float: left;
  width: 100px;
}

.user-data .item button {
  background-color: #b62929;
  padding: 8px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
}

.user-data .item.btns {
  text-align: left;
  padding-left: 180px;
}

.user-data .item button:hover {
  background-color: #e34343;
}

.user-data .item li.title {
  text-align: right;
}

</style>
