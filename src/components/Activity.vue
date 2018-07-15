<template>
  <div class="activity_bg">
      <headervue></headervue>
      <ssheader></ssheader>
      <div class="MemberExclusive_area">
          <br>
          <div class="MemberExclusive">
              <div id="memExclusive_1" @click="show_list">
                  <a href="javascript:;"></a>
              </div>
              <div class="eventtext" v-show="hideGG">
                  <img src="../../static/img/161214114805.jpg" alt="">
              </div>
          </div>
          <div class="MemberExclusive">
              <div id="memExclusive_2"  @click="show_list2">
                  <a href="javascript:;"></a>
              </div>
              <div class="eventtext" v-show="hideGG2">
                  <img src="../../static/img/161202174939.jpg" alt="">
              </div>
          </div>
      </div>
      <footervue></footervue>
  </div>
</template>
<script>
import headervue from '@/components/Header'
import ssheader from '@/components/ssheader'
import footervue from '@/components/Footer'
export default {
  name:'Activity',
  components: {
      headervue,
      footervue,
      ssheader
  },
  data () {
      return {
          hideGG:false,
          hideGG2:false
      }
  },
  created () {
       
  },
  methods: {
      show_list () {
          this.hideGG = !this.hideGG;
          this.hideGG2 =false;
      },
      show_list2 () {
          this.hideGG = false;
          this.hideGG2 = !this.hideGG2;
      }
   }
}
</script>
<style>
.eventtext {
    margin: 0px auto;
    line-height: 23px;
    text-align: left;
}
.activity_bg{
    background-image: url('../../static/img/nybg1.jpg');
    background-repeat: repeat-x;
    background-color: #2c1d16;
    background-position: 0px 0px;
}
.MemberExclusive_area{
    width: 980px;
    margin: 0 auto;
    height: auto;
}
.MemberExclusive {
    margin-bottom: 10px;
}
#memExclusive_1 {
    width: 980px;
    height: 150px;
    margin: 0 auto;
    margin-top: 5px;
    overflow: hidden;
}
#memExclusive_1 a {
    display: block;
    width: 980px;
    height: 150px;
    margin: 0 auto;
    overflow: hidden;
    background: url('../../static/img/161214114812.png') no-repeat left top;
}
#memExclusive_2 {
    width: 980px;
    height: 150px;
    margin: 0 auto;
    margin-top: 5px;
    overflow: hidden;
    padding-bottom: 30px;
}
#memExclusive_2 a {
    display: block;
    width: 980px;
    height: 150px;
    margin: 0 auto;
    overflow: hidden;
    background: url('../../static/img/161214114930.png') no-repeat left top;
}

</style>
