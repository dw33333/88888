<template>
  <div>
      <headervue></headervue>
      <div class="activity_bg">
          <div class="activity-container">
              <div class="activity-site">
                  <div class="activitybar">
                      <ul class="activity-nav">
                          <li>一般优惠规则与条款</li>
                      </ul>
                  </div>
              <div class="activity-content">
                  <div class="activity-list" @click="show_list">
                      <div class="activity-box">
                      </div>
                      <div class="activity-footer">
                          <div style="width:150px;float:left;margin-top:7px;">
                          <span>一般优惠规则与条款</span>
                          </div>
                          <a class="activity-show-btn"></a>
                      </div>
                        <div style="padding-top:20px;" v-show="showRulePic">
                            <img src="../../static/img/25c.jpg" alt="">
                        </div>
                  </div>
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
export default {
  name:'Activity',
  components: {
      headervue,
      footervue
  },
  data () {
      return {
          showRulePic:false
      }
  },
  created () {
    this.getInfo();  
  },
  methods: {
      show_list () {
          this.showRulePic = !this.showRulePic;
      },
      getInfo () {
          this.$http.get('api/site/info').then((res) => {
              console.log(res)
          })
      }
   }
}
</script>
<style>
.activity_bg{
    background: url(/static/img/bg1.a4a4897.jpg) 0 0 repeat-y;
}
.activity-footer a{
    background: url('../../static/img/activity-btn.png') no-repeat right top;
    display: inline-block;
    width: 163px;
    height: 36px;
    margin-left: 380px;
}
.activity-footer{
    color: #ffffff;
}
.activity-box{
    background: url('../../static/img/25.jpg') no-repeat;
    height: 380px;
}
.activity-content {
    margin-left: 200px;
}
.activity-list {
    border: 1px solid #071217;
    background: #071217;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px 40px;
    min-height: 455px;
}
.activity-container {
    padding-top: 10px;
    width: 1010px;
    margin: 0 auto;
}
.activity-site {
    position: relative;
    overflow: hidden;
}
.activitybar {
    width: 182px;
    float: left;
    padding: 19px 0;
    overflow: hidden;
    position: relative;
    height: 45px;
    background: #b62929;
}
.activity-nav li {
    background: #000;
    border-bottom: 1px solid #282626;
    border-top: 1px solid #b62929;
    line-height: 45px;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
}
</style>
