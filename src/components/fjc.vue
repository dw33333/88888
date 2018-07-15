<template>
    <div style="background:#eaeaea">
        <div class="top"></div>
        <div class="two">
            <div class="tow_1">
                <ul>
                    <li><a href="javascript:;" class="li2" @click="choseItem(1)" :class="{li1: 1 == index}">PC端教程</a></li>
                    <li><a href="javascript:;" class="li2" @click="choseItem(2)" :class="{li1: 2 == index}">Android教程</a></li>
                    <li><a href="javascript:;" class="li2" @click="choseItem(3)" :class="{li1: 3 == index}">IOS端教程</a></li>
                </ul>
            </div>
        </div>
        <div class="parthree"></div>
        <div class="partfour" v-show="showP">
            <h1>如发现登录 <span>环球娱乐</span> 的网址出现非环球娱乐官方页面那么就是您登录的<span>环球娱乐</span>网址被劫持了，非常危险，请您赶紧点此 <a href="http://88888hq.com/cl/tpl/9098888/jcclff/dns/DNSyouhua.exe" style="color:red">下载DNS一键优化</a></h1>
            <br>
            <br>
            <div class="wa1">
                <div class="wa1_1"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; ">方法一：请所有新老会员赶紧<a href="http://88888hq.com/cl/tpl/9098888/jcclff/dns/DNSyouhua.exe"><font color="#FF0000">点此处下载安装</font></a>以防万一；优化后即可正常访问及电脑安全！</span>
                </div>
            </div>
            <br>
            <span style="color:#000; font-size: 18px; font-weight: bold; line-height:50px;display: inline-block; ">方法二：点击（打开网络和共享中心）</span>
            <div style=" height:450px; width:1000px;"><img src="../../static/img/qqqw_03.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11"></div>
                <div class="wa1_2">
                <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">点击（更改适配器设备）</span>
                </div>
            </div>
            <div style=" height:340px; width:1000px;"><img src="../../static/img/qqqw_06.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">双击本地连接后，点击属性</span>
                </div>
            </div>
            <div style=" height:340px; width:1000px;"><img src="../../static/img/qqqw_10.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_1111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">双击INTERNET 协议版本4</span>
                </div>
            </div>
            <div style=" height:340px; width:1000px;"><img src="../../static/img/qqqw_13.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:30px; ">出现页面后选择使用下面的DNS 服务器地址--将首选DNS服务器地址改为8.8.8.8 备用DNS服务器地址改为8.8.4.4</span>
                </div>
            </div>
            <div style=" height:340px; width:1000px;"><img src="../../static/img/qqqw_17.jpg" style="float:left;" alt=""></div>
        </div>
        <div class="part_two" v-show="show_an">
            <span style="color:red; font-size: 26px; font-weight: bold; line-height:50px;">Android设备DNS修改教程</span>
            <div class="wa1">
                <div class="wa1_1"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; ">打开手机的设置 有的时候 <span style="color:red;">Android手机</span>或 <span style="color:red;">平板电脑</span>需要修改DNS服务器能正常上网，以及一些自
                    己开发的应该需要在局域或者外网服务器有相同域名的解析问题，我们为了能正确访问服务器的域
                    名就要修改DNS服务器地址。</span>
                </div>
            </div>
            <div style=" height:530px; width:1000px;"><img src="../../static/img/ewqeee_07.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">点击Wi-Fi选项</span>
                </div>
            </div>
            <div style=" height:630px; width:1000px;"><img src="../../static/img/ewqeee_13.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">在wifi列表中，选择已经连接的wifi名称，长按之后在弹出来的提示选择“修改网络配置”</span>
                </div>
            </div>
            <div style=" height:630px; width:1000px;"><img src="../../static/img/ewqeee_21.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_1111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">选择“显示高级选项”--将IP设定--改成静止</span>
                </div>
            </div>
            <div style=" height:630px; width:1000px;"><img src="../../static/img/ewqeee_28.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">将DNS1改成8.8.8.8。然后将DNS2改成8.8.4.4保存即可</span>
                </div>
            </div>
            <div style=" height:517px; width:1000px;"><img src="../../static/img/ewqeee_35.jpg" style="float:left;" alt=""></div>
        </div>
        <div class="part_th" v-show="show_io">
            <h1> <span>【温馨提示】</span> ：使用手机娱乐，由于部分地区的 <span>DNS出现被劫持</span> ， 请会员 <span>关闭网络重开</span> 试试，或 <span>关机重新启动</span> 试试。 会员使用 <span>WIFI修改DNS</span> ，一般手机3G或4G移动网络，依照下面网址操作 <span>变更DNS</span> 。</h1>
            <br>
            <br>
            <span style="color:#ffa500; font-size:20px;">IOS设备DNS修改教程</span>
            <br>
            <span style="color:#000;font-size:14px;">当您在 iOS 设备的浏览器中输入某个网站地址时，设备将执行 DNS 查找操作来跳转至正确的网站。DNS 服务器
            负责处理该查找服务，它可以将数字 IP 地址转换成我们都熟悉的域名。虽然大多数互联网服务商会提供自己的
            DNS 服务器，但实话说它们的速度并不敢恭维。因此您可以通过手动更改自己设备的 DNS 设置，来加快您访
            问网站的速度。今天我们来谈谈如何直接在 iOS 设备上更改设置 DNS 。</span>
            <p><span>&nbsp;★ 你必须连接到 Wi-Fi 网络，才可以更改设备的 DNS 设置。</span>
            <br><br>
            </p>
            <div class="wa1">
                <div class="wa1_1"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; ">打开「<span style="color:red;">设置</span>」应用程序。</span><br><br>
                    <span style="color:#000; font-size: 18px; font-weight: bold; ">点击「<span style="color:red;">无线局域网</span>」进入 Wi-Fi 列表，并选择连接上可用的 Wi-Fi 网络。</span>
                </div>
            </div>
            <div style=" height:600px; width:1000px;"><img src="../../static/img/ios_03.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">连接上可用的 Wi-Fi 网络后，然后点击 Wi-Fi 网络名称右方的「显示信息」按钮(字母「i」)。</span>
                </div>
            </div>
            <div style=" height:600px; width:1000px;"><img src="../../static/img/ios_07.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:60px; ">在该 Wi-Fi 网络详情部分向下滚动，找到「DNS」选项部分。</span>
                </div>
            </div>
            <div style=" height:640px; width:1000px;"><img src="../../static/img/ios_09.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_1111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:30px; ">接下来在弹出的键盘上输入你需要更改后的 DNS 数值.本例子中我们使用 Google 提供的 8.8.8.8 接下来在弹出的键盘上
                    输入你需要更改后的 DNS 数值.本例子中我们使用Google 提供的 8.8.8.8</span>
                </div>
            </div>
            <div style=" height:580px; width:1000px;"><img src="../../static/img/ios_12.jpg" style="float:left;" alt=""></div>
            <div class="wa1" style="margin-top:20px;">
                <div class="wa1_11111"></div>
                <div class="wa1_2">
                    <span style="color:#000; font-size: 18px; font-weight: bold; line-height:30px; ">点击页面左上角的「Wi-Fi」按钮，即可退出 DNS 设置。就这样，DNS 的设置已成功更改，但可能还没有
                    立即生效。为了使得设备的 DNS 设置更改生效，你可能需要重新启动你的 iOS 设备，否则旧的 DNS 设置可能还存储在缓存中。</span>
                </div>
            </div>
        </div>
        <div class="wwawa">
            <div class="ss"><span style="color:#fff; text-align: center; line-height:48px;">CopyRight © 环球娱乐 Reserved</span></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index:'1',
            showP: true,
            show_an: false,
            show_io: false
        }
    },
    methods:{
        choseItem (i) {
            if(i == 1){
                this.index = 1;
                this.showP = true;
                this.show_an = false;
                this.show_io = false;
            }else if(i == 2){
                this.index = 2;
                this.showP = false;
                this.show_an = true;
                this.show_io = false;
            }else if( i == 3){
                this.index = 3;
                this.showP = false;
                this.show_an = false;
                this.show_io = true;
            }
        }
    }
}
</script>

<style scoped>
.top {
    width: 100%;
    height: 168px;
    background: url('../../static/img/top.jpg-v1.3.jpg') no-repeat top center;
}
.two a{
    text-decoration: none;
}
.tow {
    width: 100%;
    height: 70px;
    background: #eaeaea;
}
.tow_1 {
    width: 1000px;
    height: 59px;
    padding-top: 6px;
    background: #eeebe2;
    margin: 0 auto;
    margin-top: 5px;
}
.li1 {
    width: 182px;
    height: 48px;
    background: #4a2f0d !important;
    color: #FFF;
    display: block;
    float: left;
    line-height: 48px;
    text-align: center;
    margin-left: 7px;
    margin-top: 5px;
}
.li2 {
    width: 182px;
    height: 48px;
    background: #2e1e09;
    color: #FFF;
    display: block;
    float: left;
    line-height: 48px;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
}
.li2:hover {
    width: 182px;
    height: 48px;
    background: #4a2f0d;
    color: #FFFF00;
    display: block;
    float: left;
    line-height: 48px;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
}
.parthree{
    width: 1000px;
    height: 131px;
    background: url('../../static/img/ssd.jpg') no-repeat;
    margin: 0 auto;
}
.partfour{
    width: 1000px;
    margin: 0 auto;
    text-align: left;
}
.part_two{
    width: 1000px;
    margin: 0 auto;
    text-align: left;
}
.part_th{
    width: 1000px;
    margin: 0 auto;
    text-align: left;
}
.partfour span{
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
    color: #FF0000;
}
.partfour h1{
    color: #000;
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
}
.part_th span{
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
    color: #FF0000;
}
.part_th h1{
    color: #000;
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
}
.wa1 {
    width: 1000px;
    height: 122px;
    text-align: left;
}
.wa1_1 {
    width: 84px;
    height: 122px;
    background: url('../../static/img/ewqeee_01.jpg-v1.0.jpg') no-repeat;
    float: left;
}
.wa1_11 {
    width: 84px;
    height: 122px;
    background: url('../../static/img/ewqeee_02.jpg-v1.0.jpg') no-repeat;
    float: left;
}
.wa1_111 {
    width: 84px;
    height: 122px;
    background: url('../../static/img/ewqeee_03.jpg-v1.0.jpg') no-repeat;
    float: left;
}
.wa1_1111 {
    width: 84px;
    height: 122px;
    background: url('../../static/img/ewqeee_04.jpg-v1.0.jpg') no-repeat;
    float: left;
}
.wa1_11111 {
    width: 84px;
    height: 122px;
    background: url('../../static/img/ewqeee_05.jpg-v1.0.jpg') no-repeat;
    float: left;
}
.wa1_2 {
    width: 800px;
    height: 122px;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
}
.wwawa{
    width: 100%;
    height: 48px;
    background: #2e1e09;
    margin-top: 180px;
}
</style>
