<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;账户管理&gt;彩种信息</span>
    </div>
    <div class="con_box" id="koRootElement">
    <div class="form-box">
        <span>
            彩种：
            <select name="gameID" data-bind="event:{change:gameEvent}" style="width:auto;">
                    <option value="1" selected="selected">香港六合彩 [信]</option>
                    <option value="4">广东11选5 [信]</option>
                    <option value="5">广东快十 [信]</option>
                    <option value="6">广西快十 [信]</option>
                    <option value="7">重庆时时彩 [信]</option>
                    <option value="10">新疆时时彩 [信]</option>
                    <option value="13">幸运农场 [信]</option>
                    <option value="15">北京PK拾 [信]</option>
                    <option value="53">韩式1.5分彩 [信]</option>
                    <option value="55">北京时时彩 [信]</option>
                    <option value="63">江苏11选5 [信]</option>
                    <option value="69">澳洲3分彩 [信]</option>
                    <option value="73">上海11选5 [信]</option>
                    <option value="75">腾讯分分彩 [信]</option>
                    <option value="77">QQ分分彩 [信]</option>
                    <option value="79">河北快3 [信]</option>
                    <option value="101">幸运28 [信]</option>
            </select>
        </span>
    </div>
    <div class="content">
        <div class="table-list">
            <table>
                <thead>
                    <tr>
                        <th>玩法</th>
                        <th>单注最低</th>
                        <th>单注最高</th>
                        <th>单项最高</th>
                    </tr>
                </thead>
                
                <tbody data-bind="foreach: gameLimitList">
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码半波</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码色波</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码大小</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码合数大小</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码合数单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码大小尾</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码家禽野兽</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">总和大小</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">总和单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码合尾大小</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">一肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特一</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码1-6大小</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码1-6单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码1-6合数单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码1-6色波</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">三中二</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">三全中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">二全中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">二中特</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特串</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖一肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">尾数</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">五不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连肖二肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾二尾</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">龙虎斗</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">上下</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">奇偶</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">七色波</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码大单双</td>
                        <td>
                                <span data-bind="text: flowest">5</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">2000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">10000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">特码小单双</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">六不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">七不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">八不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">九不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">十不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">十一不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">十二不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特二</td>
                        <td>
                                <span data-bind="text: flowest">5</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">2000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">10000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特三</td>
                        <td>
                                <span data-bind="text: flowest">5</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">2000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">10000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特四</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特五</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">正码特六</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖二肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖三肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖四肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖五肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖六肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖七肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖八肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖九肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖十肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">合肖十一肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连肖三肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连肖四肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连肖五肖</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾三尾</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾四尾</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾二尾不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾三尾不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                
                    <tr data-bind="css: {selected: isChecked()}">
                        <td data-bind="text: gameplayname">连尾四尾不中</td>
                        <td>
                                <span data-bind="text: flowest">1</span>
                        </td>
                        <td>
                                <span data-bind="text: fhighest">50000</span>
                        </td>
                        <td>
                                <span data-bind="text: fitemhighest">100000</span>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }

  },
  methods: {
    
  }
}

</script>
<style scoped>
.main-head {
  /*background: #fff;*/
  border-bottom: 1px solid #d0d0d0;
  text-align: left;
  line-height: 49px;
  margin-left: 20px;
}

.main-head span {
  font-size: 16px;
  display: inline-block;
  height: 49px;
  border-bottom: 2px solid #b62929;
}

/*彩种信息css*/
.con_box {
    background: #ededed;
        float: left;
    width: 100%;
    font-size: 14px;
}
.form-box {
    padding: 10px 20px;
    text-align: left;
}
.form-box span {
       padding: 0 10px;
    line-height: 25px;
    display: inline-block;
}

.form-box span select {
    width: 122px;
    height: 25px;
}

.content {
    background: #fff;
        padding: 0 0 20px 0;
}

.content .table-list {
    padding: 0;
}

table {
    border-left: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
    border-right: 1px solid #cdcdcd;
        width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

.table-list tr th {
    font-size: 16px;
}
.content th {
    border-bottom: 1px solid #cdcdcd;
}

th {
    background: #c7c7c7;
        padding: 5px;
    line-height: 30px;
    font-weight: 500;
    font-size: 15px;
}

.content td {
    border-left: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
}
td {
    border-bottom: 1px solid #cdcdcd;
    background: #fff;
        padding: 8px;
    text-align: center;
}
</style>
