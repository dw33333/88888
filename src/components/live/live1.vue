<template>
<div>
  <headervue></headervue>
  <div class="liveBack">
    <div class="video_wrap" style="padding-top:80px;">
      <div class="video_wrap_box1 clearfix">
        <div class="video_item view view-tenth" v-for="it in sitesInfos.LiveList" :class="it.toLowerCase()" :key="it" >
          <a   @click="toGame(it)"><img :src="`/static/public/live1/images/${it.toLowerCase()}.jpg`"></a>
          <a class="mask"  @click="toGame(it)"></a>
        </div>
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
      url:''
    }
  },
  computed: {
    ...mapState(['money','username','codeToken','sitesInfos'])
  },
  methods: {
    ...mapMutations(["ROOTBOX"]),
    async toGame(type){
      this.ROOTBOX({
        open: true,
        compt: alert,
        props: {
          nobuttons: true,
          tit: "",
          msg: "加载中..."
        }
      });
      // let newWindow = window.open();
      let res = await this.$http.post("/api/live/index/index/",{type:type});
      if(!res) return;
      if(res.data.code!==0){
        window.wAlert(res.data.msg);
        return;
      }
      this.ROOTBOX({
        open:false
      });
      this.url = res.data.data;
      // window.open(this.url);
      // newWindow.location.href = url;
      this.openGameUrl();
    },
    openGameUrl() {
      window.open(this.url,'_blank')
    }
  }
}
</script>

<style scoped>
  @import '../../../static/public/live1/css/video_css';
  .liveBack{
    background: url('../../../static/img/nybg1.jpg') repeat;
  }
  a {display:inline-block}
</style>
