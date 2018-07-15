<template>
    <div>
    <headervue></headervue>
    <ssheader></ssheader>
    <div class="site_main_game2">
        <div class="casino_box">
            <div class="games_search_menu">
                <div class="menulist ">
                    <ul class="sf-menu">
                        <li class="current">
                            <a href="javascript:;" class="sf-with-ul">游戏分类<span style="font-weight:700;">:</span></a>
                        </li>
                        <li class="current" v-for="item in gameList " :key="item.id" @click="changeList(item.id)">
                            <a href="javascript:;" class="sf-with-ul">{{item.category_name}}</a>
                        </li>
                        <li class="sfHover">
                            <span class="sty-mar" style="float:left;">
                                &nbsp;&nbsp;搜索游戏:
                            </span>
                            <input type="text" id="search_GName" class="sty-mar" v-model="content">
                            <input type="button" id="search_Btn" value="搜索" @click="serchContent">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="G_centent">
                <div v-for="item in gameLists"   :key="item.id" class="cursor" @click="goGamePgae(item.id)" >
                    <span>{{item.game_name}}</span>
                    <a>
                        <div class="hoverDIV" :style="{'background': 'url(../../static/MGFlashGameButtons/' + item.pc_img + ')'}"></div>
                    </a>
                </div>
            </div> 
            <div class="pageings" style="clear:both;">
                <a href="javascript:;" @click="firstPage">首页</a>
                <a href="javascript:;" @click="prevPage">上一页</a>
                <a href="javascript:;">page:{{currentPage}}</a>
                <a href="javascript:;" @click="nextPage">下一页</a>
                <a href="javascript:;" @click="endPage">尾页</a>
                <a href="javascript:;">共{{total}}页</a>
            </div> 
        </div>
    </div>
    <footervue></footervue>
    </div>
</template>

<script>
import headervue from '@/components/Header'
import footervue from '@/components/Footer'
import ssheader from '@/components/ssheader'
import {mapState, mapMutations} from 'vuex'
import alert from "@/components/base/alert"
export default {
    name:'Games',
    components: {
        headervue,
        footervue,
        ssheader
    },
    data () {
        return {
            gameList:[],
            gameLists:[],
            choseOne:true,
            listId:'',
            currentPage:'',
            total:'',
            content:''
        }
    },
    mounted () {
        
    },
    created () {
        this.gamelistmore();
        this.gameCategory();
    },
    computed: {
      ...mapState(['easysecret'])
    },
    methods: {
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
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
        //跳转页面
        goGamePgae (id) {
            if(!this.easysecret){
                this.alert('提示','请先登录！');
                return;
            }
            this.$http.post('/api/electronic/electronic/getGameUrl',{game_id:id}).then((res) => {
                let url = res.data.data.url;
                window.open(url,'_blank', 'scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes');
            });
        },
        ...mapMutations(["EASYSECRET", "ROOTBOX"]),
        //搜索
        serchContent () {
            this.gamelistmore();
        },
        firstPage () {
            this.currentPage = 1;
            this.gamelistmore();
        },
        prevPage () {
            if(this.currentPage == 1){
                return;
            }
            this.currentPage = parseInt(this.currentPage)-1;
            this.gamelistmore();
        },
        nextPage () {
            if(this.currentPage == this.total){
                return;
            }else if(this.total == 0){
                return;
            }
            this.currentPage = parseInt(this.currentPage)+1;
            this.gamelistmore();
        },
        endPage () {
            if(this.total == 0){
                return;
            }
            this.currentPage = this.total;
            this.gamelistmore();  
        },
        changeList (id){
            this.content = '';
            this.listId = id;
            this.currentPage = 1;
            this.gamelistmore();
        },
        gamelistmore () {
            this.$http.post('/api/electronic/electronic/gameList',{source_type:'pc',page:this.currentPage,id:this.listId,content:this.content}).then((res) => {
            this.total = res.data.total;
            this.currentPage = res.data.current;
            this.gameLists = res.data.data;
            this.gameId = res.data.id;
            });
        },
        gameCategory () {
            this.$http.post('/api/electronic/electronic/gameCategory').then((res) => {
            this.gameList = res.data.data;
        });
        }
    }
}
</script>

<style>
.cursor{
    cursor: pointer;
}
.pageings a {
    color: white;
    line-height: 30px;
    display: block;
    width: 60px;
    height: 30px;
    float: left;
    background: url('../../static/img/page_btn.png') center center no-repeat;
    margin: 0 5px;
    text-decoration: none;
}
.pageings {
    text-align: center;
    font-size: 12px;
    width: 420px;
    position: relative;
    margin: 0 auto;
}
.hoverDIV:hover{
    background-position: -145px 0 !important;
}
.G_centent div a div{
    width: 145px;
    height: 136px;
    background-position: 0px 0px;
    margin: 0px auto;
}
.G_centent div span {
    display: block;
    height: 45px;
    line-height: 55px;
    text-align: center;
    font-size: 12px;
    color: #ffe49b;
}
.G_centent div a {
    display: block;
    margin: 7px;
    height: 136px;
    padding-left: 9px;
}
.G_centent div {
    width: 182px;
    float: left;
    margin: 0 5px 17px;
    background: url('../../static/img/bg.png') center center no-repeat;
    overflow: hidden;
    height: 210px;
    _display: inline;
}
.G_centent {
    height: 100%;
    width: 960px;
    margin: 0 auto;
    /* min-height: 240px; */
}
.sfHover{
    outline: 0;
    color: #ffe49b;
}
#search_Btn {
    border: none;
    background: url('../../static/img/btn-search-Btn.gif') center center no-repeat;
    width: 70px;
    height: 30px;
    margin-left: 4px;
    outline: none;
}
#search_GName {
    height: 25px;
    line-height: 25px;
    text-indent: 10px;
    border: 1px solid #646464;
    background-color: #1A0C04;
    color: #ffe49b;
    float: left;
    outline: none;
}
.menulist ul li .sty-mar {
    margin-left: 5px;
    line-height: 30px;
    padding-left: 4px;
    font-size: 14px;
}
.sf-with-ul {
    padding-right: 2.25em;
    min-width: 1px;
}
.games_search_menu .menulist a {
    padding: 1px 4px;
    color: #ffe49b;
    text-decoration: none;
    font-size: 14px;
}
.menulist a:hover{
    color: #FE9935;
}
.sf-menu li {
    float: left;
    position: relative;
}
.sf-menu{
    float: left;
    margin-top: 1em;
    margin-left: 10px;
    line-height: 28px;
}
.games_search_menu {
    background: url('../../static/img/search_bar_bg.png') center top repeat-x;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    height: 60px;
    padding: 3px;
    position: relative;
    width: 950px;
    z-index: 20;
    margin: 0px auto;
    margin-bottom: 10px;
}
.site_main_game2{
    background: url('../../static/img/nybg1.jpg');
    background-repeat: repeat-x;
    padding-top: 40px;
    background-size: 100%;
}
.casino_box{
    width: 1000px;
    margin: 0 auto;
    color: #fff;
    min-height: 1092px;
}
</style>

