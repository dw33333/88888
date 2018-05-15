/**
 * Created by DAHAI on 2018/3/27.
 */
let Or ={
    orderProcessHx(vue){
        let len = document.querySelectorAll(".item-list>li.active").length;
        vue.sixOrderObj.gold = vue.orderMoney;
        let arrName = [];
        let arrName2 = [];
        let allLi = document.querySelectorAll('.item-list>li');
        for(let i= 0,len=allLi.length;i<len;i++){
            if(allLi[i].className.includes('active')) arrName.push(allLi[i].children[0].children[0].innerHTML);
            else arrName2.push(allLi[i].children[0].children[0].innerHTML);
        }
        if(vue.isZhong == 1){
            vue.sixOrderObj.num = arrName;
            vue.sixOrderObj.select_count = len;
        }else{
            vue.sixOrderObj.num = arrName2;
            vue.sixOrderObj.select_count =  arrName2.length;
        }
        vue.sixOrderObj.concede_r = "NX_IN"
    },
}
export  default Or;