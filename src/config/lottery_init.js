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
        "2":{
            '特码A面':{
                '': ['大', '小', '单', '双','红波', '蓝波', '绿波','兔','虎', '牛', '鼠', '猪','狗', '鸡', '猴', '羊','马', '蛇', '龙', '家禽','野兽'
                ],
            }
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
    getSh(Array){
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
            for (let k = 0; k < arr.length; k++) {
                if(arr.length==5&&arr[1].date-arr[0].date==1&&arr[2].date-arr[1].date==1&&arr[3].date-arr[2].date==1&&arr[4].date-arr[3].date==1) return value = '顺子';
                else if(arr.length==5&&arr[1].date-arr[0].date==2&&arr[2].date-arr[1].date==2&&arr[3].date-arr[2].date==2&&arr[4].date-arr[3].date==2)  return value = '无离';
                else if(arr.length==5)  value = '杂六';
                else if(arr.length==4) value = '对子';
                else if(arr.length==3&&arr[k].count==3) return value = '三张';
                else if(arr.length==3) value = '两对';
                else if(arr.length==2 &&arr[k].count==4) return value = '四张';
                else if(arr.length==2) value = '葫芦';
                else if(arr.length==1) value = '豹子';
            }
            return value;

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
    //色波
    getSb(n){
        let ballColor='';
        switch (n-0){
            case 1:
            case 2:
            case 7:
            case 8:
            case 12:
            case 13:
            case 18:
            case 19:
            case 23:
            case 24:
            case 29:
            case 30:
            case 34:
            case 35:
            case 40:
            case 45:
            case 46:
                ballColor = "rColor";
                break;
            case 5:
            case 6:
            case 11:
            case 16:
            case 17:
            case 21:
            case 22:
            case 27:
            case 28:
            case 32:
            case 33:
            case 38:
            case 39:
            case 43:
            case 44:
            case 49:
                ballColor = "gColor";
                break;
            case 3:
            case 4:
            case 9:
            case 10:
            case 14:
            case 15:
            case 20:
            case 25:
            case 26:
            case 31:
            case 36:
            case 37:
            case 41:
            case 42:
            case 47:
            case 48:
                ballColor = "bColor";
                break;
            default :
                break;
        }
        return ballColor;
    },
    getZmt: {
        9: [
            {
                id:25,
                name:"正码特一"
            },
            {
                id:26,
                name:"正码特二"
            },
            {
                id:27,
                name:"正码特三"
            },
            {
                id:28,
                name:"正码特四"
            },
            {
                id:29,
                name:"正码特五"
            },
            {
                id:30,
                name:"正码特六"
            },
        ],
        10: [
            {id:19,name:'正码一'} ,
            {id:20,name:'正码二'} ,
            {id:21,name:'正码三'} ,
            {id:22,name:'正码四'} ,
            {id:23,name:'正码五'} ,
            {id:24,name:'正码六'} ,
        ]
    },
    // 连肖连尾
    getNav(){
        return [
            {id:35,name:'二连肖'},
            {id:36,name:'三连肖'},
            {id:37,name:'四连肖'},
            {id:38,name:'五连肖'},
            {id:39,name:'二碰尾'},
            {id:40,name:'三碰尾'},
            {id:41,name:'四碰尾'},
            {id:42,name:'五碰尾'}
        ]
    },
    getA(n){
        let a = '';
        switch(n-0){
            case 1:
            case 13:
            case 25:
            case 37:
            case 49:
                a = '狗';
                break;
            case 2:
            case 14:
            case 26:
            case 38:
                a = '鸡';
                break;
            case 3:
            case 15:
            case 27:
            case 39:
                a='猴';
                break;
            case 4:
            case 16:
            case 28:
            case 40:
                a='羊';
                break;
            case 5:
            case 17:
            case 29:
            case 41:
                a='马';
                break;
            case 6:
            case 18:
            case 30:
            case 42:
                a='蛇';
                break;
            case 7:
            case 19:
            case 31:
            case 43:
                a='龙';
                break;
            case 8:
            case 20:
            case 32:
            case 44:
                a='兔';
                break;
            case 9:
            case 21:
            case 33:
            case 45:
                a='虎';
                break;
            case 10:
            case 22:
            case 34:
            case 46:
                a='牛';
                break;
            case 11:
            case 23:
            case 35:
            case 47:
                a='鼠';
                break;
            case 12:
            case 24:
            case 36:
            case 48:
                a='猪';
                break;
            default :
                break;
        }
        return a;
    },
}
export default Iint;


