/**
 * Created by rose on 2018/3/19.
 */
import Init from '../config/lottery_init.js';
//渲染数据处理
let L = {
    doSix(currData,resData){
        for(let i = 0,len=currData.length;i<len;i++){
            for(let j= 0,lenj=currData[i]['data'].length;j<lenj;j++){
                currData[i]['data'][j]['odds'] = resData[currData[i]['data'][j]['num_id']];
            }
        }
        return currData;
    },
    doSSc(b,arr,obj,pN){
        for(let k in b){
            if(k.includes("第") || k.includes("龙")){
                let ob={};
                ob['title'] = k;
                ob['data'] = b[k];
                if(k.includes("龙")) arr.unshift(ob);
                else arr.push(ob);
            }else{
                for(let i= 1,len=pN.length;i<len;i++){
                    obj[pN[i]] = [{"title":pN[i],"data":b[pN[i]]}]
                }
            }
        }
        obj[pN[0]] = arr;
        return obj;
    },
    doPK10(b,arr,obj,pN){
        for(let k in b){
            if(!k.includes("冠亚和")){
                let ob={};
                ob['title'] = k;
                ob['data'] = b[k];
                arr.push(ob);
            }else{
                obj[pN[0]] = [{"title":"冠亚和","data":b["冠亚和"]}];
                for(let i= 2,len=pN.length;i<len;i++){
                    obj[pN[i]] = [{"title":pN[i],"data":b[pN[i]]}]
                }
            }
        }
        obj[pN[1]] = arr;
        return obj;
    },
    doK10(b,arr,obj,pN){
        for(let k in b){
            let ob={};
            ob['title'] = k;
            ob['data'] = b[k];
            arr.push(ob);
            for(let i= 1,len=pN.length;i<len;i++){
                obj[pN[i]] = [{"title":pN[i],"data":b[pN[i]]}]
            }
        }
        obj[pN[0]] = arr;
        return obj;
    },
    doKlc(b,arr,obj,pN){
        for(let k in b){
            for(let i= 0,len=pN.length;i<len;i++){
                obj[pN[i]] = [{"title":pN[i],"data":b[pN[i]]}]
            }
        }
        return obj;
    },
    doKlcOdds(odd,vue){
        let pt = vue.currType;
        let ball = Init.nav2[pt];
        let title = Init.title[pt];
        let obj = {};
        let j = 1;
        for(j in ball){
            for(let i= 0,len= ball[j].length;i<len;i++){
                ball[j][i].odds= odd[j][1]
            }
        }
        for(let i= 0,len=title.length;i<len;i++){
            obj[title[i]] = ball[i+1];
        }
        return this.zhData(obj,vue);
    },
    doOdds(odd,vue){
        let pt = vue.currType;
        let ball = Init.nav2[pt];
        let title = Init.title[pt];
        let obj = {};
        let j = 1;
        for(j in ball){
            for(let i= 0,len= ball[j].length;i<len;i++){
                ball[j][i].odds= odd[j][i+1]
            }
        }
        for(let i= 0,len=title.length;i<len;i++){
            obj[title[i]] = ball[i+1];
        }
        return this.zhData(obj,vue);
    },
    zhData(b,vue){
        let pN = Init.playNav[vue.currType];
        let obj = {};
        let arr = [];
        let result = "";
        let c = vue.currType;
        if(c == "ssc" || c == "sfc" || c == "3d" || c == "11x5") result = this.doSSc(b,arr,obj,pN);
        if(c == "pk10") result = this.doPK10(b,arr,obj,pN);
        if(c == "k10") result = this.doK10(b,arr,obj,pN);
        if(c == "klc") result = this.doKlc(b,arr,obj,pN);
        vue.allData = result;
        return result;
    },
    count(time,vue){
        let t = "";
        let h = ""
        if(time > 60){
            let second = parseInt(time) % 60;
            let min = parseInt(time / 60);
            if( min > 60 ){
                min = parseInt(time / 60) % 60;
                h = parseInt( parseInt(time / 60) /60 );
            }
            second= second>=10?second:'0'+second;
            min = min>=10?min:'0'+min;
            if(!h) h = "00";
            else h=h>=10?h:'0'+h;
            t=h+":"+min+":"+second;
        }else{
            t="00:00:"+(time>=10?time:'0'+time);
        }
        let b = setTimeout(()=>{
            vue.isLoading3 = false;
        }, 500);
        return t
    },
    clearV(value){
        return value.value =''
    },
    ifR(arr){
       arr.classList.remove('warning');
    },
    ifA(arr){
        arr.classList.add('warning');
    },
    // 判断是添加active还是移除
    ifValue(rm,arr,c){
        if(rm==2){this.ifR(arr);this.clearV(c)}
        else{this.ifA(arr);c.value = rm.editMount;}
    },
    getDx(domArr,num,rm){
        for(let i =0,len=domArr.length-1;i<=len;i++){
            if(i<domArr.length || rm==2) {
                let child = domArr[i].children[2].children[0];
                this.ifR(domArr[i]);
                this.clearV(child);
                if (num == '小') {
                    if(rm.number == 201 || rm.number == 210){
                        if ((i < 10)) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    } else if(rm.number == 2){
                        if (i <24) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    } else if(rm.number == 203){
                        if (i <40) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    } else{
                        if ((i < 5)) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    }
                } else if (num == '大') {
                    if(rm.number == 201 || rm.number == 210){
                        if (i > 9&&i<20) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    } else if(rm.number == 202){
                        if (i >4&&i<10 ) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    }else if(rm.number == 203){
                        if (i >=40) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    }  else if(rm.number == 2){
                        if (i > 24) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    } else{
                        if (i> 4) {
                            this.ifValue(rm,domArr[i],child)
                        }
                    }
                } else if (num == '单') {
                    if ( (domArr[i].children[0].children[0].innerHTML-0 )% 2 != 0) {
                        this.ifValue(rm,domArr[i],child)
                    }
                }else if (num == '双') {
                    if ( (domArr[i].children[0].children[0].innerHTML-0) % 2 == 0) {
                        this.ifValue(rm,domArr[i],child)
                    }
                }else if (num == '红波'||num == '蓝波'||num == '绿波') {
                    let bgC;
                    if(num=='红波'){bgC = 'rColor';}
                    else if(num=='蓝波'){bgC = 'bColor';}
                    else{bgC = 'gColor';}
                    if ( domArr[i].children[0].children[0].className.indexOf(''+bgC+'')>-1) {
                        this.ifValue(rm,domArr[i],child)
                    }
                }else if (num == '兔'||num == '虎'||num == '牛'||num == '鼠'||num == '猪'||num == '狗'||num == '鸡'||num == '猴'||num == '羊'||num == '马'||num == '蛇'||num == '龙') {
                    let n = domArr[i].children[0].children[0].innerHTML - 0;
                    if(Init.getA(n) == num){
                        this.ifValue(rm,domArr[i],child)
                    }
                }else if (num == '家禽'||num == '野兽') {
                    let n = domArr[i].children[0].children[0].innerHTML - 0;
                    if(num == '家禽'&&(Init.getA(n) == '牛'||Init.getA(n) == '马' ||Init.getA(n) == '羊'||Init.getA(n) == '鸡'||Init.getA(n) == '狗'||Init.getA(n) == '猪')){
                        this.ifValue(rm,domArr[i],child)
                    }else if(num == '野兽'&&(Init.getA(n) == '鼠'||Init.getA(n) == '虎' ||Init.getA(n) == '兔'||Init.getA(n) == '龙'||Init.getA(n) == '蛇'||Init.getA(n) == '猴')) {
                        this.ifValue(rm,domArr[i],child)
                    }
                }
            }
        }

    },
    data_six_do:function(data) {
        let odds = {};
        if (data) {
            odds = data;
        } else return;
        let play_list = {};
        for(let k in odds){
            let v = odds[k];
            if(!play_list[v.playd_guoup_id]) play_list[v.playd_guoup_id] = {};
            if(!play_list[v.playd_guoup_id][v.playd_type]) play_list[v.playd_guoup_id][v.playd_type] = [];
            play_list[v.playd_guoup_id][v.playd_type].push(v);
        }
        return play_list;
    },
    data_demo_do:function(data,vue) {
        let odds = {};
        if (data) {
            odds = data;
        } else return;
        let play_list = {};
        for(let k in odds){
            let v = odds[k];
            if(!play_list[v.playd_guoup_id]) play_list[v.playd_guoup_id] = {};
            if(!play_list[v.playd_guoup_id][v.playd_type_name]) play_list[v.playd_guoup_id][v.playd_type_name] = [];
            play_list[v.playd_guoup_id][v.playd_type_name].push(v);
        }
        return play_list;
    },
    // 正码特/正码1-6数据处理
    data_six_zm_do:function (data,n) {
        let odds = {};
        if (data) {
            odds = data;
        } else return;
        let play_list = {};
        for(let k in odds){
            let v = odds[k];
            if(!play_list[v[n]]) play_list[v[n]] = [];
            play_list[v[n]].push(v);
        }
        return play_list;
    },


};
export default L;