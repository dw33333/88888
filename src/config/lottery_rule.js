/**
 * Created by DAHAI on 2018/5/20.
 */
import P from './lottery_public.js';
let R = {
    //求和
    getSum(arr){
        arr =arr.split(",") ;
        let sum = 0;
        for(let i= 0,len=arr.length;i<len;i++){
            sum += parseInt(arr[i]);
        }
        return sum;
    },
    //总和大小
    SumDx(arr,num){
        let sum = this.getSum(arr);
        if(sum >= num) return '大';
        else if(sum==84&&num==85) return '和';
        else if(sum==55&&num==56) return '和';
        else if(sum==30&&num==31) return '和';
        else return '小';
    },
    //三公
    ResultSg(arr){
        let z =  (arr[0]-0)+(arr[1]-0)+(arr[2]-0)+ "";
        let x =  (arr[2]-0)+(arr[3]-0)+(arr[4]-0)+"";
        z  = z.substr(z.length-1,1)-0;
        x  = x.substr(x.length-1,1)-0;
        if(z==0) z  = 10;
        if(x==0) x  = 10;
        if(z>x){
            return '庄';
        }else if(z==x){
            return '和';
        }else{
            return '闲';
        }
    },
    //梭哈
    getSh(a,num){
        let arr = [];
        let value = '';
        let result = a;
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
        // console.log(arr);
        if(num==1){
            for (let k = 0; k < arr.length; k++) {
                if(arr.length==5&&arr[1].date-arr[0].date==1&&arr[2].date-arr[1].date==1&&arr[3].date-arr[2].date==1&&arr[4].date-arr[3].date==1) return value = '顺子';
                else if(arr.length==5&&arr[1].date-arr[0].date==2&&arr[2].date-arr[1].date==2&&arr[3].date-arr[2].date==2&&arr[4].date-arr[3].date==2)  return value = '五离';
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
    },
    //百家乐
    ResultBjl(arr){
         //庄牌
        let z =  (arr[0]-0)+(arr[1]-0)+ "";
        //闲牌
        let x =  (arr[3]-0)+(arr[4]-0)+"";

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
export  default  R;