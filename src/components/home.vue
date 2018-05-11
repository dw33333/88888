<template>
  <div>
    <headervue></headervue>
    <banner></banner>
    <moregame></moregame>
    <footervue></footervue>
  </div>
</template>
<script>
import headervue from '@/components/Header'
import banner from '@/components/Banner'
import moregame from '@/components/MoreGame'
import footervue from '@/components/Footer'
import {mapState,mapMutations} from "vuex"
import alert from "@/components/base/alert"
export default {
  name: 'home',
  components: {
    headervue,
    banner,
    moregame,
    footervue
  },
  created(){
    //this.loadSiteInfo();
  },
  computed:{
    ...mapState(["agent_id"]),
  },
  methods:{
    ...mapMutations(["ROOTBOX","SITE_INFO"]),
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
    }
  }
}

</script>
<style scoped>

</style>
