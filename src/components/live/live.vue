<template>
<div>
  <headervue></headervue>
  <div class="ele-live-wrap" style="width:900px">
    <div class="ele-live-align">
      <!--AG-->
      <router-link to="" id="js-live-ag" class="ele-live-ag js-is-rotate change-bg-pos" style="width: 280px; left: 0px; top: 0px; opacity: 1; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
        <span class="agType">极速厅</span>
      </router-link>
      <!--AGIN-->
      <router-link to="" class="ele-live-sa js-is-rotate change-bg-pos" style="width: 280px; left: 280px; top: 0px; opacity: 1; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
        <span class="agTypeJ">国际厅</span>
      </router-link>
      <!--DS-->
      <router-link to="" class="ele-live-ab js-is-rotate change-bg-pos" style="width: 280px; left: 404px; top: 0px; opacity: 1; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
      </router-link>
      <!--AG_OG-->
      <router-link to="" class="ele-live-og js-is-rotate change-bg-pos" style="width: 280px; left: 528px; top: 0px; opacity: 1; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
      </router-link>
      <!--AG_BBIN-->
      <router-link to="" class="ele-live-bb change-bg-pos" style="width: 280px; top: 0px; opacity: 1; left: 652px; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
      </router-link>
      <!--AG_MG-->
      <router-link to="" class="ele-live-gd js-is-rotate change-bg-pos" style="width: 280px; left: 776px; top: 0px; opacity: 1; background-color: rgb(0, 0, 0);">
        <span class="ele-live-cbg"></span>
        <span class="ele-live-obg"></span>
      </router-link>
    </div>
  </div>
  <footervue></footervue>
  </div>
</template>

<script>
import headervue from '@/components/Header'
import footervue from '@/components/Footer'
import $ from 'jquery'
export default {
  name:'live',
  components: {
    headervue,
    footervue
  },
  mounted() {
    this.$nextTick(() => {
      (function () {
        var liveTop = {
          $elements: $('.ele-live-align a'),
          cur_width: parseInt("280", 10),
          other_width: 0,
          isOpeningDone: false,
          isLogin: "N",
          init: function () {
            $("body").append($("#ele-livelogin-overlay").detach());
            liveTop.setPicWidth();
            liveTop.openingAnimation();
            liveTop.picEffect();
          },
          /**
           *
           * 視訊廳開場
           **/
          openingAnimation: function () {
            var aDelayAdd = 200,
              aDelay = 0,
              eleCount = liveTop.$elements.length;

            liveTop.$elements.each(function () {
              $(this)
                .css({
                  top: '-650px',
                  opacity: 0
                })
                .delay(aDelay)
                .animate({
                  top: 0,
                  opacity: 1
                }, function () {
                  $(this).find('i').delay(220 * eleCount).fadeOut(250);
                });
              aDelay += aDelayAdd;
            });

            // 開場動畫結束後
            liveTop.$elements.promise().done(function () {
              liveTop.isOpeningDone = true;
              liveTop.$elements.css('background-color', '#000');
            });
          },
          /**
           *
           * 依照開放的遊戲數目各別設定寬度與定位
           **/
          setPicWidth: function () {
            var gamesOrder, max;

            liveTop.other_width = (900 - liveTop.cur_width) / (liveTop.$elements.length - 1);

            // 只開放BB視訊
            if (liveTop.$elements.length === 1) {
              liveTop.$elements.addClass('is-only-bb');
            }

            // 開放三款以上遊戲時，改變圖片定位
            if (liveTop.$elements.length > 2) {
              console.log(3)
              liveTop.$elements.addClass('change-bg-pos');
            }

            for (gamesOrder = 0, max = liveTop.$elements.length; gamesOrder < max; gamesOrder++) {
              if (gamesOrder === 0) {
                liveTop.$elements.eq(gamesOrder).width(liveTop.cur_width);
                continue;
              }
              liveTop.$elements.eq(gamesOrder)
                .width(liveTop.cur_width)
                .css('left', liveTop.cur_width + liveTop.other_width * (gamesOrder - 1));
            }
          },
          /**
           *
           * 圖片滑入效果
           * 預設current bbin
           **/
          picEffect: function () {
            var curIndex = 0,
              prevIndex = '';

            if (liveTop.$elements.length > 1) {
              $('#js-live-ag').addClass('ele-current');
            }

            liveTop.$elements.on('hover', function (event) {
              var leftGameOrder;

              if (liveTop.isOpeningDone === false) {
                return false;
              }

              if (event.type === "mouseenter") {
                $('#js-live-ag').removeClass('ele-current');
                $(this).addClass('ele-current');

                if ($(this).index() === curIndex) {
                  return false;
                }

                prevIndex = curIndex;
                curIndex = $(this).index();

                // 目前 current 的遊戲圖
                if (curIndex !== 0) {
                  liveTop.$elements.eq(curIndex).stop().animate({
                    left: liveTop.other_width * curIndex
                  });
                }

                // current 遊戲圖的左側
                if ((curIndex - prevIndex) > 0) {
                  for (leftGameOrder = 0; leftGameOrder < curIndex; leftGameOrder++) {
                    liveTop.$elements.eq(leftGameOrder).stop().animate({
                      left: liveTop.other_width * leftGameOrder
                    });
                  }
                }

                // 上一張 current 的遊戲圖
                if ((curIndex - prevIndex) < 0) {
                  liveTop.$elements.eq(prevIndex).stop().animate({
                    left: liveTop.cur_width + liveTop.other_width * (prevIndex - 1)
                  });
                }

                return false;
              }

              liveTop.$elements.removeClass('ele-current');
            });

            $('.ele-live-align').mouseleave(function () {
              // Reset
              var gamesOrder, max;

              if (liveTop.isOpeningDone === false) {
                return false;
              }

              curIndex = 0;
              prevIndex = '';

              if (liveTop.$elements.length > 1) {
                $('#js-live-ag').addClass('ele-current');
              }

              for (gamesOrder = 1, max = liveTop.$elements.length; gamesOrder < max; gamesOrder++) {
                liveTop.$elements.eq(gamesOrder).stop().animate({
                  left: liveTop.cur_width + liveTop.other_width * (gamesOrder - 1)
                });
              }
            });
          },
        };

        liveTop.init();
      }());
    })
  }
}
</script>

<style scoped>
.ele-live-wrap {
  padding: 3px 0 20px;
  font-size: 0;
  overflow: hidden;
  width: 900px;
  margin: 0 auto;
}

.ele-live-align {
  position: relative;
  height: 650px;
}

.ele-live-align a {
  position: absolute;
  box-sizing: border-box;
  height: 650px;
}

.ele-live-align a.ele-live-bb {
  left: 0;
}

.ele-live-obg {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: opacity 0.25s linear 0s;
  -moz-transition: opacity 0.25s linear 0s;
  -webkit-transition: opacity 0.25s linear 0s;
  -o-transition: opacity 0.25s linear 0s;
}

.ele-current .ele-live-obg {
  opacity: 1;
  filter: alpha(opacity=100);
}

.ele-live-cbg {
  display: block;
  width: 100%;
  height: 100%;
}

.is-only-bb.ele-live-bb .ele-live-obg {
  background-image: url('/static/public/live/images/bbin900_h.jpg');
}

.is-only-bb.ele-live-bb .ele-live-cbg {
  background-image: url('/static/public/live/images/bbin900_n.jpg');
}

.ele-live-bb .ele-live-obg {
  background-image: url('/static/public/live/images/bbin450_n.jpg');
}

.ele-live-bb .ele-live-cbg {
  background-image: url('/static/public/live/images/bbin450_h.jpg');
}

.ele-live-ag .ele-live-obg {
  background-image: url('/static/public/live/images/ag450_n.jpg?v=1');
}
.ele-live-ag .ele-live-cbg {
  background-image: url('/static/public/live/images/ag450_h.jpg?v=1');
}

.ele-live-ab .ele-live-obg {
  background-image: url('/static/public/live/images/allbet450_n.jpg');
}

.ele-live-ab .ele-live-cbg {
  background-image: url('/static/public/live/images/allbet450_h.jpg');
}

.ele-live-og .ele-live-obg {
  background-image: url('/static/public/live/images/og450_n.jpg');
}

.ele-live-og .ele-live-cbg {
  background-image: url('/static/public/live/images/og450_h.jpg');
}

.ele-live-gd .ele-live-obg {
  background-image: url('/static/public/live/images/gd450_n.jpg');
}

.ele-live-gd .ele-live-cbg {
  background-image: url('/static/public/live/images/gd450_h.jpg');
}

.ele-live-sa .ele-live-obg {
  background-image: url('/static/public/live/images/sa450_n.jpg');
}

.ele-live-sa .ele-live-cbg {
  background-image: url('/static/public/live/images/sa450_h.jpg');
}

.ele-live-obg,
.ele-live-cbg {
  background-position: 0 0;
  background-repeat: no-repeat;
}

.change-bg-pos .ele-live-cbg {
  background-position: -125px 0;
}
.change-bg-pos{
  background-position: -125px 0;
}
/* ag-live login */

#ele-livelogin-overlay {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/static/public/live/images/modal_bg.png') repeat;
}

#ele-livelogin-content {
  background-color: #FFF;
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  width: 620px;
  height: 324px;
  margin: -160px 0 0 -310px;
  padding: 10px;
}

.ele-livelogin-ag {
  background: url('/static/public/live/images/login-ag.png') #FFF 50% 50% no-repeat;
}

.ele-livelogin-ab {
  background: url('/static/public/live/images/login-ab.jpg') #FFF 50% 50% no-repeat;
}

.ele-livelogin-og {
  background: url('/static/public/live/images/login-og.jpg') #FFF 50% 50% no-repeat;
}

.ele-livelogin-gd {
  background: url('/static/public/live/images/login-gd.jpg') #FFF 50% 50% no-repeat;
}

.ele-livelogin-sa {
  background: url('/static/public/live/images/login-sa.jpg') #FFF 50% 50% no-repeat;
}

#ele-livelogin-close {
  background: url('/static/public/live/images/modal_close.png') #666 50% 50% no-repeat;
  position: absolute;
  top: 0;
  right: -60px;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

#ele-livelogin-close:hover {
  background-color: #606060;
}

.ele-current .agType {
  position: absolute;
  display: block;
  left: 10%;
  top: 13.5%;
  font-size: 18px;
  color: white;
}

.ele-current .agTypeJ {
  position: absolute;
  display: block;
  left: 10%;
  top: 12%;
  font-size: 18px;
  color: white;
}
</style>
