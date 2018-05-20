export const gdklsf = (nums) => {//todo 复制所有的快乐十分

  if (nums.length != 8) return;
  let num1 = parseInt(nums[0]);
  let num2 = parseInt(nums[1]);
  let num3 = parseInt(nums[2]);
  let num4 = parseInt(nums[3]);
  let num5 = parseInt(nums[4]);
  let num6 = parseInt(nums[5]);
  let num7 = parseInt(nums[6]);
  let num8 = parseInt(nums[7]);
  let zhong = [1, 2, 3, 4, 5, 6, 7];
  let fa = [8, 9, 10, 11, 12, 13, 14];
  let bai = [15, 16, 17, 18, 19, 20];
  let dong = [1, 5, 9, 13, 17];
  let nan = [2, 6, 10, 14, 18];
  let xi = [3, 7, 11, 15, 19];
  let bei = [4, 8, 12, 16, 20];
  //两面
  let res = {
    num1_zhongfabai: "",
    num1_position: "",
    num2_zhongfabai: "",
    num2_position: "",
    num3_zhongfabai: "",
    num3_position: "",
    num4_zhongfabai: "",
    num4_position: "",
    num5_zhongfabai: "",
    num5_position: "",
    num6_zhongfabai: "",
    num6_position: "",
    num7_zhongfabai: "",
    num7_position: "",
    num8_zhongfabai: "",
    num8_position: "",
    num1: num1,
    num2: num2,
    num3: num3,
    num4: num4,
    num5: num5,
    num6: num6,
    num7: num7,
    num8: num8
  };
  //中发白 方位
  nums.forEach((v, i) => {
    v = parseInt(v);
    res["num" + (i + 1) + "_zhongfabai"] = zhong.indexOf(v) != -1 ? "中" : fa.indexOf(v) != -1 ? "发" : bai.indexOf(v) != -1 ? "白" : "";
    res["num" + (i + 1) + "_position"] = dong.indexOf(v) != -1 ? "东" : nan.indexOf(v) != -1 ? "南" : xi.indexOf(v) != -1 ? "西" : bei.indexOf(v) != -1 ? "北" : "";
  });
  return res;
}


let getSh=(array)=>{
  let arr = [];
  let value = '';
  let result = array;
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
    else if(arr.length==5)  value = '杂六';
    else if(arr.length==4) value = '对子';
    else if(arr.length==3&&arr[k].count==3) return value = '三张';
    else if(arr.length==3) value = '两对';
    else if(arr.length==2 &&arr[k].count==4) return value = '四张';
    else if(arr.length==2) value = '葫芦';
    else if(arr.length==1) value = '豹子';
  }
  return value;
}
