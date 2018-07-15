<template>
    <div class="mess" style=" width: 500px; display: block; color: brown; text-align: left; line-height: 24px;" v-show="showPop">
    	<p class="Poptop">
        	<span class="Poptitle" style="font-size: 17px;">【欢迎您！】</span><span class="closePopbtn" @click="closePopbtn">关闭</span>
    	</p>
    	<p class="Popcontent" style="font-size:13px;">
        重要通知:公司入款帐号《《匡德鑫》》工商银行卡号：0712032001119253010已停用，请入款前联系在线客服索取最新的银行帐号，避免存入过期账号，以确保您的款项正常添加，如转入已停用帐号财务不受理的哦，谢谢！
    	</p>
	</div>
</template>

<script>
export default {
    data () {
        return {
        showPop:true
        }
    },
    methods: {
        closePopbtn () {
            this.showPop = false;
        }
    }
}
</script>

<style scoped>
.mess {
    position: fixed;
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 20;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    height: 120px;
}
.Poptop {
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    font-family: microsoft yahei;
}
.Poptitle {
    color: #333;
    font-size: 14px;
    line-height: 40px;
    float: left;
}
.closePopbtn {
    background: #E7D767;
    width: 80px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    margin-top: 8px;
    float: right;
    border-radius: 5px;
    cursor: pointer;
    color: #333;
    text-align: center;
}
</style>
