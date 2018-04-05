import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/header'
import Banner from '@/components/Banner'
import MoreGame from '@/components/MoreGame'
import Footer from '@/components/Footer'

import 'swiper/dist/css/swiper.css'
Vue.use(Router)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      components:{
      	default:Header,
      	banner:Banner,
      	moregame:MoreGame,
      	footer:Footer
   
      }
    }
  ]
})
