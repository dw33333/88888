<template>
  <div class="p404">
      <div class="tit">404</div>
      <div class="des">暂未能找到您要查找的页面 <br> 可能是输入网址错误或页面不存在 <br>{{count}}秒后自动跳转到首页</div>
  </div>
</template>

<script>
  export default {
    name: "p404",
    data(){
      return {
        count:5
      }
    },
    mounted(){
      let trv=setInterval(()=>{
        this.count--;
        if(this.count==0){
          clearInterval(trv);
          this.$router.push("/");
        }
      },1000);
    }
  }
</script>

<style scoped lang="less">
  .p404{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding-top:300px;
    color:#7d7b7b;
    .tit{
      font-size:160px;
    }
    .des{
      font-size:22px;
      line-height: 1.3;
    }
  }
</style>
