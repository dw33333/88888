<template>
  <div>
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide class="swiper-item">
      <img src="https://zzzy3qqqt.52notice.net//Content/images/banner/65739/W_20170111192447.jpg" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <img src="https://zzzy3qqqt.52notice.net//Content/images/banner/65739/W_20170321193247.jpg" alt="">
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
  <div class="mq">
      <div class="mq-mask" id="notices">
        <div style="width: 100%; height: 100%; position: relative; overflow: hidden;">
          <div style="width: 100%;position: absolute; left: -5px; top: 0px; white-space: nowrap;">
            <!-- <span style="padding-right:20px;">
              <label>1、&nbsp;</label>
              温馨提示：银行卡更新通告：银行卡更新通告：因公司需要，银行卡入款.微信入款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！
            </span> -->
             <marquee scrollAmount="5" scrolldelay="10" direction="left">
              温馨提示：{{this.sitesInfos.Msg}}
                </marquee>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'banner',
  data () {
    return {
      swiperOption: {
        mousewheel: false,
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        speed: 300,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   }

      }
    }
  },
   computed: {
      ...mapState(['sitesInfos'])
    },
    created () {
    },
}

</script>
<style scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
}

.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.swiper-item {
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

/*轮播图*/

.swiper-container {
  width: 100%;
  height: 504px;
}
.swiper-button-next,
.swiper-button-prev {
  padding: 15px 13px;
  border-radius: 28px;
  background-color: #000;
}

div.swiper-button-next {
  width: 15px;
  height: 25px;
  right: 18%;
  background-size: 40%;
  background-image: url("https://zzzy3qqqt.52notice.net//Content/default/home/images/arrow_right.png");
}

div.swiper-button-prev {
  width: 15px;
  height: 25px;
  left: 18%;
  background-size: 40%;
  background-image: url("https://zzzy3qqqt.52notice.net//Content/default/home/images/arrow_left.png");
}

/*跑马灯*/
.mq {
  cursor: pointer;
  position: relative;
  z-index: 100;
  margin: -54px auto 6px auto;
  padding: 10px 0;
  width: 998px;
  height: 27px;
  top:-6px;
  background: url(../assets/banner_text_box.png) no-repeat 0 0;
}

.mq .mq-mask {
  padding-left: 40px;
  height: 30px;
  line-height: 30px;
  width: 836px;
  margin-left: 62px;
  color: #f0a109;
  background: url(../assets/base-ico2.png) -123px 3px no-repeat;
}

.mq-mask marquee {
  color: #f0a109;
  font-size: 14px;
}

</style>
