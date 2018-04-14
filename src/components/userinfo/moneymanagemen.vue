<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;额度管理&gt;转入</span>
    </div>

    <!-- 日期列表 -->
    <div class="table-list">
        <div class="wallet">我的钱包：<span class="red">¥999999.00</span></div>
    </div>
     <div class="btns paddbottom10">
      <div :class='{recharge:true,active:isShow}' @click="selectType(1);">转入</div>
      <div :class="{withdraw:true,active:!isShow}" @click="selectType(2);">转出</div>
    </div>


    <div class="btns platform">
      <div :class='{recharge:true,ag:true,active:inOrOut}' @click="selectType(3);">
        AG平台  <br>
        ¥55225.00

      </div>
      <div :class="{withdraw:true,ds:true,active:!inOrOut}" @click="selectType(4);">
        DS平台 <br>
        ¥55225.00
        </div>
    </div>

<div class="table-list">
  <div class="title">
    选择转账金额:
  </div>
  <ul>
    <li :class="{active:a1}" @click="selectType(100)">100</li>
    <li :class="{active:a2}" @click="selectType(500)">500</li>
    <li :class="{active:a3}" @click="selectType(1000)">1000</li>
    <li :class="{active:a4}" @click="selectType(5000)">5000</li>
    <li :class="{active:a5}" @click="selectType(10000)">10000</li>
    <li class="bordernone" @click="selectType(100000)"><input v-model="nums" type="number" placeholder="输入金额,最低10元"></li>
  </ul>

  <div class="btns">
    <button class="reset" @click="selectType(0)">重置</button>
    <button class="submit">提交</button>
  </div>
</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        isShow:true,
        inOrOut:true,
        nums:'',
        a1:false,
        a2:false,
        a3:false,
        a4:false,
        a5:false
    }
  },
  methods:{
    selectType(index){
      if(index==1){
      this.isShow=true;
        
      }
       if(index==2){
      this.isShow=false;
        
      }
       if(index==3){
      this.inOrOut=true;
        
      }
       if(index==4){
      this.inOrOut=false;
        
      }
      if(index==100){
        this.a1=!this.a1;
        if(this.a1){
          this.a2=false;
          this.a3=false;
          this.a4=false;
          this.a5=false;
        }

      }
      if(index==500){
        this.a2=!this.a2;
        if(this.a2){
          this.a1=false;
          this.a3=false;
          this.a4=false;
          this.a5=false;
        }
      }
      if(index==1000){
        this.a3=!this.a3;
        if(this.a3){
          this.a1=false;
          this.a2=false;
          this.a4=false;
          this.a5=false;
        }
      }
      if(index==5000){
        this.a4=!this.a4;
        if(this.a4){
          this.a1=false;
          this.a3=false;
          this.a2=false;
          this.a5=false;
        }
      }
      if(index==10000){
        this.a5=!this.a5;

        if(this.a5){
          this.a2=false;
          this.a3=false;
          this.a4=false;
          this.a1=false;
        }
      }
      if(index==100000){
        this.a2=false;
          this.a3=false;
          this.a4=false;
          this.a1=false;
          this.a5=false;
      }
      if(index==0){
        this.nums='';
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
.wallet{
    height: 50px;
    line-height: 50px;
    text-align: left;
    padding-left: 20px;
    background-color: #fff;
}
.platform{
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
  height: 30px;
  line-height: 30px;
  float: left;
}
.paddbottom10{
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

.red{
    color: #b62929;
}


.table-list .title{
  text-align: left;
  padding-left: 20px;
  /* font-size: 14px; */
  height: 30px;
  line-height: 30px;
}
.table-list ul{
  overflow: hidden;
  padding-left: 10px;
}

.table-list ul li{
  float: left;
  height: 30px;
  line-height: 30px;
 border:1px solid #ce4c4c;
 width:60px;
 margin: 10px;
 cursor: pointer;
 border-radius: 5px;
 text-align: center;
}

.table-list ul input{
  width: 136px;
   height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  outline: 0;
  border:none;
  border:1px solid #ce4c4c;
}

.table-list ul li.active{
  background-color: #b62929;
  color: #fff;
}
input:focus{
  
  
    border-color: rgba(198, 33, 51, 0.8);
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);  
}
.bordernone{
  border:none!important;
}
.btns button{
  outline:none;
  border:none;
  background-color: #b62929;
  height: 30px;
  line-height: 30px;
  padding: 0px 30px;
  margin: 8px 15px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
button.reset{
  background-color: #26a2ff;
}

</style>
