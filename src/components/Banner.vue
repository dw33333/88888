<template>
  <div>
  <div class="back_head"></div>
  <div class="mq">
      <div class="mq-mask" id="notices">
        <div style="width: 100%; height: 100%; position: relative; overflow: hidden;" @click="show_list">
          <div style="width: 100%;position: absolute; left: -5px; top: 0px; white-space: nowrap;">
            <!-- <span style="padding-right:20px;">
              <label>1、&nbsp;</label>
              温馨提示：银行卡更新通告：银行卡更新通告：因公司需要，银行卡入款.微信入款.支付宝入款已使用新的入款账号，已更改为新入款账号了，请您获取我司最新入款账号，存入过期账号概不负责！
            </span> -->
             <marquee scrollAmount="3" scrolldelay="30" direction="left">
              温馨提示：{{this.sitesInfos.Msg}}
                </marquee>
          </div>
        </div>
      </div>
    </div>
    <!-- 平台公告 -->
      <div class="ui-popup-backdrop" v-show="showMessgeBox" @click="closeMessge"></div>
      <div class="alertdialog" v-show="showMessgeBox">
        <div class="ui-dialog">
          <table class="ui-dialog-grid">
            <tbody>
            <tr>
              <td class="ui-dialog-header">
                <button i="close" class="ui-dialog-close" title="取消" @click="closeMessge">×</button>
                <div class="ui-dialog-title">平台公告</div>
              </td>
            </tr>
            <tr>
              <td class="ui-dialog-body">
                <div class="ui-dialog-content">
                  <div id="DIALOG-VM" data-bind="template:__DIALOG_TPL" style="display: block;">
                    <div class="notice_main">
                      <div class="notice_title">
                      </div>
                      <div class="notice_text">
                        <div class="notice_item"></div>
                        <h1 style="color: #be7660;text-align:left;font-size:19px;">温馨提示：<span style="font-size:16px;padding:0;">{{sitesInfos.Msg}}</span>
                        </h1>
                        <div class="fright"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
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
      showMessgeBox: false,
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
    methods:{
      show_list () {
        this.showMessgeBox = true;
        this.showMessgeBoxM = true;
      },
      closeMessge() {
        this.showMessgeBox = false;
        this.showMessgeBoxM = false;
        this.showforgotPassword = false;
      },
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
.ui-dialog-close:hover, .ui-dialog-close:focus {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
    opacity: 0.5;
    filter: alpha(opacity=50);
  }

  .notice_main {
    float: left;
    width: 762px;
    height: 542px;
    overflow: auto;
    background: #fff;
  }

  .notice_title {
    padding: 5px 0;
    text-align: center;
    border-bottom: 1px solid #e5e4e4;
  }

  .notice_text {
    padding: 0 20px;
    font-size: 16px;
    color: #5c5c5c;
    text-align: center;
  }

  .notice_text div {
    line-height: 30px;
    margin-top: 22px;
    word-spacing: normal;
    width: 100%;
    text-align: left;
    word-break: break-all;
    /* float: left; */
  }

  .notice_title h1 {
    font-size: 22px;
    color: #f4354a;
    font-weight: bold;
  }

  .ui-dialog-content {
    color: #fff;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: left;
  }

  .notice_main {
    float: left;
    width: 762px;
    height: 542px;
    overflow: auto;
    background: #fff;
  }

  .ui-dialog-body {
    padding: 0 !important;
  }

  .ui-dialog-header {
    border-bottom: none;
    color: #fff;
    background: #3a211a;
    zoom: 1;
    white-space: nowrap;
    padding: 0;
    border: 0 none;
    text-align: left;
  }

  .ui-dialog-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    letter-spacing: 8px;
    margin: 0;
    line-height: 1.428571429;
    min-height: 16.428571429px;
    padding: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    cursor: default;
  }

  .ui-dialog-close {
    position: absolute;
    opacity: 1;
    font-weight: normal;
    height: 64px;
    top: 0;
    font-size: 30px;
    color: #fff;
    background: url("../../static/img/popup-close.png") no-repeat center;
    right: 10px;
    border: none;
  }

  .ui-dialog {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3);
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    border-radius: 8px;
    display: inline-block;
    border: 1px solid #175e84;
    border: 5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 8px rgba(136, 136, 136, 0.5);
    overflow: hidden;
  }

  .ui-dialog-grid {
    width: auto;
    margin: 0;
    border: 0 none;
    border-collapse: collapse;
    border-spacing: 0;
    background: transparent;
  }

  .ui-popup-backdrop {
    opacity: 0.7;
    background: rgb(0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
    z-index: 1024;
  }

  .alertdialog {
    position: fixed;
    outline: 0px;
    left: 0;
    top: 20%;
    z-index: 1024;
    right: 0;
    bottom: 0;
    margin: auto;
  }
/*跑马灯*/
.back_head{
    background-image: url('../../static/img/banner.jpg');
    width: 100%;
    height: 534px;
    border-bottom: 1px solid #be9e56;
    background-position: center center;
}
.mq {
  cursor: pointer;
  position: relative;
  z-index: 20;
  margin: -54px auto 0 auto;
  padding: 10px 0;
  width: 1050px;
  height: 33px;
  top:-480px;
  background: url('../../static/img/zxxx.png') no-repeat 0 0;
}

.mq .mq-mask {
  padding-left: 46px;
  height: 30px;
  line-height: 30px;
  width: 900px;
  margin-left: 62px;
  color: #fff;
}

.mq-mask marquee {
  color: #fff;
  font-size: 14px;
}

</style>
