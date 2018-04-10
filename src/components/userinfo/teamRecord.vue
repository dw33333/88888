<template>
	<div class='container'>
	<div class="shadow doc_box report_box" style="float: left; padding: 5px; border-top: none; background-color: #f1f1f1;">
    
    <div style="background-color: #fff; border-top: 1px solid #d7d7d7; padding:25px 25px 0 25px;">
        <table class="report_table" cellpadding="0" cellspacing="0" border="0" width="100%" style="table-layout:fixed ">
            <tbody><tr>
                <th style="width:300px;">日期范围：</th>
                <td colspan="4">
                    <div class="clear">
                        <input type="text" name="start" class="input-small box-time" value="2018/04/08 02:00:00" data-bind="event:{focus:startPicker},value:startTime">
                        <span class="help-float">～</span>
                        <input type="text" name="end" class="input-small box-time" value="2018/04/09 02:00:00" data-bind="event:{focus:endPicker},value:endTime">
                  
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setDate.bind($data,-1)">昨天</a>
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setDate.bind($data,0)">今天</a>
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setWeek.bind($data,-1)">上周</a>
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setWeek.bind($data,0)">本周</a>
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setMonth.bind($data,-1)">上月</a>
                        <a href="javascript:void(0)" class="btn btn-green" data-bind="click:setMonth.bind($data,0)">本月</a>
                   </div>
                </td>
            </tr>
            <tr>
                <th style="width:300px;">查询账号：</th>
                <td colspan="4">
                    <input type="text" name="accountName" data-bind="value:accountName">
                    
                </td>
            </tr>
            <tr>
                <th style="width:300px;">彩票类型：</th>
                <td>
                    <input type="checkbox" id="cb_0" value="" data-bind="checked:tabAllCheck"><label for="cb_0" class="help-float">全部选中</label>
                </td>
                    <td>
                        <input type="checkbox" id="cb_1" name="" value="official" data-bind="checked:tabCheck"><label for="cb_1" class="help-float">官方彩</label>
                    </td>
                                    <td>
                        <input type="checkbox" id="cb_2" name="" value="credit" data-bind="checked:tabCheck"><label for="cb_2" class="help-float">信用彩</label>
                    </td>
                                    <td>
                        <input type="checkbox" id="cb_3" name="" value="six" data-bind="checked:tabCheck"><label for="cb_3" class="help-float">⑥合彩</label>
                    </td>
                            </tr>
            <tr>
                <th style="width:300px;">全部彩种：</th>
                <td colspan="4">
                    <input type="checkbox" data-bind="checked:isAllGame" name="allGame">全部
                    <label style="color:red;">（勾选后，查询所有彩种，包括被禁用的玩法）</label>
                </td>
            </tr>
        </tbody></table>
        <div class="nav_list clear" data-bind="visible:showList &amp;&amp; !isAllGame()">
           <div class="control-group">
               <label class="control-label">
                   全部选中：
               </label>
               <div class="controls clear">
                   <span class="control-box">
                       <input type="checkbox" data-bind="event:{change:selectAllGamesEvent},checked:selectAllGames">
                   </span>
               </div>
           </div>
           <div class="control-group">
               <label class="control-label">
                   彩票种类：
               </label>
               <div class="controls clear" id="ckItems" data-bind="foreach:gameList">
                   <span class="control-box" v-for='lottery in lotteryTypeArr'>
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="4" id="ck-4"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-4">{{lottery}}</label>
                   </span>
               
                  <!--  <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="5" id="ck-5"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-5">广东快十 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="6" id="ck-6"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-6">广西快十 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="7" id="ck-7"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-7">重庆时时彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="10" id="ck-10"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-10">新疆时时彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="13" id="ck-13"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-13">幸运农场 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="15" id="ck-15"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-15">北京PK拾 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="53" id="ck-53"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-53">韩式1.5分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="55" id="ck-55"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-55">北京时时彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="60" id="ck-60"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-60">加拿大3.5分 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="63" id="ck-63"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-63">江苏11选5 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="69" id="ck-69"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-69">澳洲3分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="73" id="ck-73"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-73">上海11选5 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="75" id="ck-75"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-75">腾讯分分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="77" id="ck-77"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-77">QQ分分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="79" id="ck-79"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-79">河北快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="83" id="ck-83"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-83">安徽快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="85" id="ck-85"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-85">河南快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="87" id="ck-87"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-87">湖北快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="89" id="ck-89"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-89">上海快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="91" id="ck-91"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-91">广西快3 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="92" id="ck-92"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-92">东京1.5分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="97" id="ck-97"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-97">幸运飞艇 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="101" id="ck-101"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-101">幸运28 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="102" id="ck-102"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-102">东京28 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="104" id="ck-104"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-104">韩式28 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="105" id="ck-105"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-105">加拿大28 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="106" id="ck-106"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-106">澳洲28 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="114" id="ck-114"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-114">极速六合彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="115" id="ck-115"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-115">极速分分彩 [信]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="26" id="ck-26"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-26">重庆时时彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="28" id="ck-28"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-28">北京快乐8 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="29" id="ck-29"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-29">北京PK拾 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="30" id="ck-30"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-30">福彩3D [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="32" id="ck-32"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-32">山东11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="40" id="ck-40"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-40">新疆时时彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="44" id="ck-44"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-44">排列三、五 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="45" id="ck-45"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-45">广东11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="46" id="ck-46"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-46">江西11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="50" id="ck-50"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-50">黑龙江11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="51" id="ck-51"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-51">韩式1.5分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="56" id="ck-56"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-56">北京时时彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="59" id="ck-59"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-59">台湾宾果 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="61" id="ck-61"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-61">加拿大3.5分 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="62" id="ck-62"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-62">江苏11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="64" id="ck-64"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-64">澳洲快乐8 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="68" id="ck-68"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-68">澳洲3分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="72" id="ck-72"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-72">上海11选5 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="76" id="ck-76"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-76">腾讯分分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="78" id="ck-78"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-78">QQ分分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="80" id="ck-80"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-80">河北快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="81" id="ck-81"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-81">上海时时乐 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="82" id="ck-82"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-82">安徽快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="84" id="ck-84"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-84">河南快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="86" id="ck-86"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-86">湖北快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="88" id="ck-88"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-88">上海快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="90" id="ck-90"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-90">广西快3 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="93" id="ck-93"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-93">东京1.5分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="98" id="ck-98"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-98">幸运飞艇 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="116" id="ck-116"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-116">极速分分彩 [官]</label>
                   </span>
               
                   <span class="control-box">
                       <input type="checkbox" name="gameid" data-bind="value:GameID,checked:$parent.checkdedIds,attr:{id:'ck-'+GameID}" value="1" id="ck-1"><label data-bind="text:GameName,attr:{'for':'ck-'+GameID}" for="ck-1">香港六合彩</label>
                   </span> -->
               </div>
           </div>
        </div>

        <div class="control-group report_btn_bar" style="padding:10px 0;margin:0;">
           
            <div class="controls" style="text-align:center;margin-left:0;">
                <a href="###" class="btn btn-yellow" data-bind="click:sub">查询</a>
                
            </div>
        </div>
    </div>

    
</div>
</div>
</template>
<script>
	export default  {
		data () {
			return {
				lotteryTypeArr:['广东11选5 [信]','广东快十 [信]','广西快十 [信]','重庆时时彩 [信]','新疆时时彩 [信]','幸运农场 [信]','北京PK拾 [信]','韩式1.5分彩 [信]','北京时时彩 [信]','加拿大3.5分 [信]','江苏11选5 [信]','澳洲3分彩 [信]','上海11选5 [信]','腾讯分分彩 [信]','QQ分分彩 [信]','河北快3 [信]','安徽快3 [信]','河南快3 [信]','湖北快3 [信]','上海快3 [信]','广西快3 [信]','东京1.5分彩 [信]','幸运飞艇 [信]','幸运28 [信]','东京28 [信]','韩式28 [信]','加拿大28 [信]','澳洲28 [信]','极速六合彩 [信]','极速分分彩 [信]','重庆时时彩 [官]','北京快乐8 [官]','北京PK拾 [官]','福彩3D [官]','山东11选5 [官]','新疆时时彩 [官]','排列三、五 [官]','广东11选5 [官]','江西11选5 [官]','黑龙江11选5 [官]','韩式1.5分彩 [官]','北京时时彩 [官]','台湾宾果 [官]','加拿大3.5分 [官]','江苏11选5 [官]','澳洲快乐8 [官]','澳洲3分彩 [官]','上海11选5 [官]','腾讯分分彩 [官]','QQ分分彩 [官]','河北快3 [官]','上海时时乐 [官]','安徽快3 [官]','河南快3 [官]','湖北快3 [官]','上海快3 [官]','广西快3 [官]','东京1.5分彩 [官]','幸运飞艇 [官]','极速分分彩 [官]','香港六合彩']
			}
		}
	}
</script>
<style>
	table {
    border-left: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
        width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

th {
    background: #c7c7c7;
        padding: 5px;
    line-height: 30px;
    font-weight: 500;
    font-size: 15px;
}
.report_table td {
    text-align: left;
    padding: 10px;
}
td {
    padding: 5px;
    text-align: center;
}
td {
    border-bottom: 1px solid #cdcdcd;
    background: #fff;
}

.btn {
    border: none;
    color: #fff;
    background: #b62929;
        padding: 10px;
    border-radius: 4px;
    line-height: 1;
    display: inline-block;
}
a{
	    color: #555;
    text-decoration: none !important;
    outline: none !important;
}
.report_table input {
    width: auto;
    height: auto;
    vertical-align: middle;
}
.report_table input[type="text"] {
    width: 160px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background: #fff;
    margin: 5px 0;
    padding: 0 5px;
}
table input {
    width: 50px;
    height: 18px;
    vertical-align: middle;
}
input, button, select, textarea {
    outline: none;
    outline: 0;
}
.nav_list {
    border: 1px solid #ccc;
    border-top: 0;
}
.nav_list .control-group {
    margin: 5px 0;
}
.control-label {
    float: left;
    width: 90px;
}
.nav_list .control-label {
    width: 300px;
    float: left;
    padding: 5px;
    text-align: center;
    line-height: 30px;
}

.nav_list .controls {
    margin-left: 310px;
    padding: 5px 10px;
    text-align: left;
}
.nav_list .control-box {
    width: 150px;
    display: inline-block;
    text-align: left;
    font-size: 14px;
}

.nav_list input[type="checkbox"] {
    width: 14px;
    height: 14px;
    margin: 8px 0;
    vertical-align: middle;

}

.nav_list .control-group {
    margin: 5px 0;
}

.nav_list .control-box {
    width: 150px;
    display: inline-block;
}
</style>