<template>
  <footer>
    <div align="center"> <img src="../../static/img/foot1.png"> </div>
    <div align="center" class="footer_a"> 
      <router-link  to="/Generalq" target="_blank">关于我们</router-link> | 
      <a :href="this.sitesInfos.SiteService" target="_blank">联络我们</a> | 
      <router-link  to="/Generalq" target="_blank">合作伙伴</router-link> | 
      <router-link to="/Deposit" target="_blank">存款帮助</router-link> | 
      <router-link  to="/Teller" target="_blank">取款帮助</router-link> | 
      <router-link to="/Generalq" target="_blank"> 常见问题</router-link><br>
		Copyright © 环球娱乐 Reserved </div>
    <div align="center">
      <div class="footer_bg_center">
        <div class="footer_box_po">
          <router-link to="/Deposit" target="_blank"></router-link>
          <router-link to="/Generalq" target="_blank"></router-link>
          <router-link to=""></router-link>
          <router-link to="/Teller" target="_blank"></router-link>
          <router-link to=""></router-link>
          <router-link to="/daili" target="_blank"></router-link>
        </div>
      </div>
    </div>
    <br>
  </footer>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(['sitesInfos'])
  },
}
</script>

<style scoped>
.footer_box_po a{
  display: block;
  width: 80px;
  height: 24px;
  float: left;
}
.footer_box_po{
  position:absolute;
  width: 250px;
  height: 50px;
  right: 60px;
  bottom: 20px;
}
.footer_bg_center{
  width:972px;
  height:412px;
  margin:0 auto;
  background:url('../../static/img/foot2.jpg');
  position: relative;
}
footer {
  background-color: #1a0f0c;
  border-top: 2px solid #be9e56;
  color: #ffefb0;
  line-height: 25px;
}
.footer_a {
  font-size: 12px;
}
.footer_a a{
  font-size: 12px;
  text-decoration: none;
  color: #ffefb0;
}
.footer_a a:hover {
    color: #be7660;
}
</style>
