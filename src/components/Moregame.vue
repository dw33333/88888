<template>
  <div class="more_game">
    <!-- <img src="../../static/img/index1.jpg" alt=""> -->
    <div class="more_center">
      <div class="center_one">
        <div @click="router1" style="padding-top:45px;"></div>
        <div @click="router2" style="padding-top: 20px;"></div>
      </div>
      <div class="center_two">
        <div> <a :href="this.sitesInfos.SiteService" style="width:100%;height:100%;display:block;" target="_blank"></a> </div>
        <div><router-link to="/register" style="width:100%;height:100%;display:block;"></router-link></div>
        <div><router-link to="/Activity" style="width:100%;height:100%;display:block;"></router-link></div>
      </div>
      <div class="center_th">
        <div><router-link to="/live" style="width:100%;height:100%;display:block;"></router-link></div>
        <div><router-link to="/" style="width:100%;height:100%;display:block;"></router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import alert from "@/components/base/alert"
export default {
  name: 'Moregame',
  data () {
    return {
      
      
  }
  },
  computed: {
    ...mapState(['sitesInfos', 'easysecret'])
  },
  created () {
    
  },
  methods: {
    router1 () {
      if(!this.easysecret){
        this.alert('提示','请先登录！')
      }else{
        this.$router.push('/lottery/Cqssc')
      }
    },
    router2 () {
        this.$router.push('/Games')
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
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
      ...mapMutations([ "EASYSECRET", "ROOTBOX",]),
  }
}

</script>
<style scoped>
.more_game{
    background-image: url('../../static/img/indexBg.jpg');
    position: relative;
}
.more_center{
  width: 1004px;
  height: 400px;
  margin: 0 auto;
  background-image: url('../../static/img/index1.jpg')
}
.center_one{
  height: 100%;
  width: 336px;
  float: left;
}
.center_one div{
  height: 160px;
  cursor: pointer;
}
.center_two{
  height: 100%;
  width: 336px;
  float: left;
}
.center_two div{
  height: 33.3%;
  cursor: pointer;
}
.center_th div{
  height: 50%;
  cursor: pointer;
}
.center_th{
  height: 100%;
  width: 330px;
  float: left;
}
</style>
