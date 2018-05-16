<template>
<div>
  <headervue></headervue>
  <div class="video_wrap" style="padding-top:30px;">
    <div class="video_wrap_box1 clearfix">
      <div class="video_item view view-tenth ag">
        <a href="javascript:void(0);" @click=" aggame();"><img src="/static/public/live1/images/ag_slot.jpg"></a>
        <a class="mask" href="javascript:void(0);" @click=" aggame();"></a>
      </div>
      <div class="video_item view view-tenth ds">
        <a href="javascript:void(0);" onclick="dsgame();"><img src="/static/public/live1/images/ds.jpg"></a>
        <a class="mask" href="javascript:void(0);" onclick="dsgame();"></a>
      </div>
      <div class="video_item view view-tenth bbin">
        <a href="javascript:void(0);" onclick=" bblive();"><img src="/static/public/live1/images/bbin.jpg"></a>
        <a class="mask" href="javascript:void(0);" onclick=" bblive();"></a>
      </div>

      <div class="video_item view view-tenth gd">
        <a href="javascript:void(0);" onclick="javascript:alert('抱歉！该厅正在升级维护中！');"><img src="/static/public/live1/images/gd.jpg"></a>
        <a class="mask" href="javascript:void(0);" onclick="javascript:alert('抱歉！该厅正在升级维护中！');"></a>
      </div>
      <div class="video_item view view-tenth ct">
        <a href="javascript:alert('抱歉！该厅正在升级维护中！');"><img src="/static/public/live1/images/ct.jpg"></a>
        <a class="mask" href="javascript:alert('抱歉！该厅正在升级维护中！');"></a>
      </div>
      <div class="video_item view view-tenth kk">
        <a href="javascript:alert('抱歉！该厅正在升级维护中！');"><img src="/static/public/live1/images/kk.jpg"></a>
        <a class="mask" href="javascript:alert('抱歉！该厅正在升级维护中！');"></a>
      </div>
      <div class="video_item view view-tenth mg">
        <a href="javascript:void(0);" onclick="mggame();"><img src="/static/public/live1/images/mg.jpg"></a>
        <a class="mask" href="javascript:void(0);" onclick="mggame();"></a>
      </div>
      <div class="video_item view view-tenth ag_slot">
        <a href="javascript:aggame();"><img src="/static/public/live1/images/ag.jpg"></a>
        <a class="mask" href="javascript:aggame();"></a>
      </div>
    </div>
  </div>
  <footervue></footervue>
</div>
</template>
<script>
import headervue from '@/components/Header'
import footervue from '@/components/Footer'
import alert from "@/components/base/alert"
import { mapState,mapMutations } from 'vuex'
export default {
  name:'live1',
  components: {
    headervue,
    footervue
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['money','username','codeToken'])
  },
  methods: {
    aggame () {
      if(!this.username){
        this.alert('提示','请先登录！');
      }else{
      }
    },
  //提示函数
    alert(tit,msg,fn,msgStyle){
      let _this=this;
      this.ROOTBOX({
        open:true,
        compt:alert,
        props:{
          tit:tit,
          msg:msg,
          msgstyle:msgStyle
        },
        handles:{
          confirm(){
            _this.ROOTBOX({
              open:false
            })
          },
          close(){
            if(fn)fn();
            _this.ROOTBOX({
              open:false
            });
          }
        }
      });
    },
  }
}
</script>

<style scoped>
  @import '../../../static/public/live1/css/video_css';
  a {display:inline-block}
</style>
