<template>
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
</template>
<script>
export default {
  
  data() {
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
          prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true
        //   }

      }
    }
  }
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

</style>
