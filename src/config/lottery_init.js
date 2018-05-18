"use strict";
import P from './lottery_public.js';
let Iint={
    //求和
    getSum(arr){
        arr =arr.split(",");
        let sum = 0;
        for(let i= 0,len=arr.length;i<len;i++){
            sum += parseInt(arr[i]);
        }
        return sum;
    },

//计算牛牛
    fiterniuniu(numArr) {
        let is_niu = 'false'
        let niu_ji = ''
        let niu_text = ''
        if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[2])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[3]) + parseInt(numArr[4])) % 10;
        }
        else if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[3])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[2]) + parseInt(numArr[4])) % 10;
        }
        else if (((parseInt(numArr[0]) + parseInt(numArr[1]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[2]) + parseInt(numArr[3])) % 10;
        }
        else if (((parseInt(numArr[0]) + parseInt(numArr[2]) + parseInt(numArr[3])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[1]) + parseInt(numArr[4])) % 10;
        }
        else if (((parseInt(numArr[0]) + parseInt(numArr[2]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[1]) + parseInt(numArr[3])) % 10;
        }
        else if (((parseInt(numArr[0]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[1]) + parseInt(numArr[2])) % 10;
        }
        else if (((parseInt(numArr[1]) + parseInt(numArr[2]) + parseInt(numArr[3])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[0]) + parseInt(numArr[4])) % 10;
        }
        else if (((parseInt(numArr[1]) + parseInt(numArr[2]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[0]) + parseInt(numArr[3])) % 10;
        }
        else if (((parseInt(numArr[1]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[0]) + parseInt(numArr[2])) % 10;
        }
        else if (((parseInt(numArr[2]) + parseInt(numArr[3]) + parseInt(numArr[4])) % 10) == 0) {
            is_niu = 'true'
            niu_ji = (parseInt(numArr[0]) + parseInt(numArr[1])) % 10;
        }
        if (is_niu === 'true') {
            if (niu_ji === 0) {
                niu_text = '牛牛';
            } else {
                niu_text = `牛${niu_ji}`
            }
        }
        else {
            niu_text = '无牛'
        }
        return niu_text
    },
    getjx: {
        '200': {
            '万位': {
                '万定位': ['大', '小', '单', '双'],
            },
            '仟位': {
                '仟定位': ['大', '小', '单', '双']
            },
            '佰位': {
                '佰定位': ['大', '小', '单', '双']
            },
            '拾位': {
                '拾定位': ['大', '小', '单', '双',]
            },
            '个位': {
                '个定位': ['大', '小', '单', '双']
            },

        },
        "204": {
           '单号1-10':{
               '冠军': ['大', '小', '单', '双'],
               '亚军': ['大', '小', '单', '双'],
               '季军': ['大', '小', '单', '双'],
               '第四名': ['大', '小', '单', '双'],
               '第五名': ['大', '小', '单', '双'],
               '第六名': ['大', '小', '单', '双'],
               '第七名': ['大', '小', '单', '双'],
               '第八名': ['大', '小', '单', '双'],
               '第九名': ['大', '小', '单', '双'],
               '第十名': ['大', '小', '单', '双']
           }
        },
        "201":{
            '整合':{
                '第一球': ['大', '小', '单', '双'],
                '第二球': ['大', '小', '单', '双'],
                '第三球': ['大', '小', '单', '双'],
                '第四球': ['大', '小', '单', '双'],
                '第五球': ['大', '小', '单', '双'],
                '第六球': ['大', '小', '单', '双'],
                '第七球': ['大', '小', '单', '双'],
                '第八球': ['大', '小', '单', '双']
            },
            '第一球':{
                '第一球': ['大', '小', '单', '双']
            },
            '第二球':{
                '第二球': ['大', '小', '单', '双']
            },
            '第三球':{
                '第三球': ['大', '小', '单', '双']
            },
            '第四球':{
                '第四球': ['大', '小', '单', '双']
            },
            '第五球':{
                '第五球': ['大', '小', '单', '双']
            },
            '第六球':{
                '第六球': ['大', '小', '单', '双']
            },
            '第七球':{
                '第七球': ['大', '小', '单', '双']
            },
            '第八球':{
                '第八球': ['大', '小', '单', '双']
            }
        },
        "205":{
            '整合': {
                '第一球': ['大', '小', '单', '双'],
                '第二球': ['大', '小', '单', '双'],
                '第三球': ['大', '小', '单', '双'],
            },
            '第一球':{
                '第一球': ['大', '小', '单', '双']
            },
            '第二球':{
                '第二球': ['大', '小', '单', '双']
            },
            '第三球':{
                '第三球': ['大', '小', '单', '双']
            }
        },
        "206":{
            '整合': {
                '第一球': ['大', '小', '单', '双'],
                '第二球': ['大', '小', '单', '双'],
                '第三球': ['大', '小', '单', '双'],
            },
            '第一球':{
                '第一球': ['大', '小', '单', '双']
            },
            '第二球':{
                '第二球': ['大', '小', '单', '双']
            },
            '第三球':{
                '第三球': ['大', '小', '单', '双']
            }
        },
        "202":{
            '整合': {
                '第一球': ['大', '小', '单', '双'],
                '第二球': ['大', '小', '单', '双'],
                '第三球': ['大', '小', '单', '双'],
                '第四球': ['大', '小', '单', '双'],
                '第五球': ['大', '小', '单', '双'],
            },
            '万位': {
                '万定位': ['大', '小', '单', '双'],
            },
            '仟位': {
                '仟定位': ['大', '小', '单', '双']
            },
            '佰位': {
                '佰定位': ['大', '小', '单', '双']
            },
            '拾位': {
                '拾定位': ['大', '小', '单', '双',]
            },
            '个位': {
                '个定位': ['大', '小', '单', '双']
            },
        },
        "203":{
            '正码': {
                '总和': ['大', '小', '单', '双'],
            },
         },
        "six":{
            '特别号A': ['大', '小', '单', '双','红波', '蓝波', '绿波','兔','虎', '牛', '鼠', '猪','狗', '鸡', '猴', '羊','马', '蛇', '龙', '家禽','野兽'
                ],
        },
        "207":{
          '大小骰宝':[]
        },
        "209":{

        },
        "210":{
            '万位': {
                '万定位': ['大', '小', '单', '双'],
            },
            '仟位': {
                '仟定位': ['大', '小', '单', '双']
            },
            '佰位': {
                '佰定位': ['大', '小', '单', '双']
            },
            '拾位': {
                '拾定位': ['大', '小', '单', '双',]
            },
            '个位': {
                '个定位': ['大', '小', '单', '双']
            },
        }
    },
    getTitle(obj,id){
        for(let k in obj){
            let v = obj[k].type;
            for(let i=0,len=v.length;i<len;i++){
                if(v[i].name == id){
                    return obj[k].id;
                }
            }
        }
    },
    getId(obj,id){
        for(let k in obj){
            let v = obj[k].type;
            for(let i=0,len=v.length;i<len;i++){
                if(v[i].name == id){
                    return v[i].lot_id;
                }
            }
        }
    },
    getSh(Array,num){
           let arr = [];
           let value = '';
           let result = Array;
                result.sort();
           for (let i = 0; i < result.length;) {
            let count = 0;
           for (let j = i; j < result.length; j++) {
                if (result[i] === result[j]) {
                    count++;
                }
            }
            arr.push({
                date: result[i],
                count: count
            });
            i+=count;
           }
        if(num==1){
            for (let k = 0; k < arr.length; k++) {
                if(arr.length==5&&arr[1].date-arr[0].date==1&&arr[2].date-arr[1].date==1&&arr[3].date-arr[2].date==1&&arr[4].date-arr[3].date==1) return value = '顺子';
                else if(arr.length==5)  value = '杂六';
                else if(arr.length==4) value = '对子';
                else if(arr.length==3&&arr[k].count==3) return value = '三张';
                else if(arr.length==3) value = '两对';
                else if(arr.length==2 &&arr[k].count==4) return value = '四张';
                else if(arr.length==2) value = '葫芦';
                else if(arr.length==1) value = '豹子';
            }
            return value;
        }else{
             let arrSum = [];
             // let getArr = [];
            for(let j=0;j<arr.length;j++){
                arrSum.push(arr[j].date)
            }
            for (let k = 0; k < arr.length; k++) {
                if(arr.length==3){
                    value  = '长牌--'+ this.doCp(P.getRank(arrSum,2))
                }else if(arr.length==2){
                    value =  arr[0].count==2?arr[0].date+arr[0].date:arr[1].date+arr[1].date;
                    value = '短牌--'+ value;
                }else{
                    value =  '豹子'
                }
            }
            // console.log(value);
            return value;

        }
          // console.log(value);


    },
    doCp(arr){
        // console.log(222);
        let arr2=[];
        // arr.join(',')
        for(let i=0,len=arr.length;i<len;i++){
            arr2.push(arr[i].replace(',',''));
        };
        return arr2;
    },
}
export default Iint;


