'use strict';

function fizzBuzzWith(num) {
//#1.输入100以内的一个数，判断输入的数字是否满足特殊情况（包含3且能被3整除），用numInfo.flag区分不同情况
//预计10min,实际7min
    function special(num) {
      let numInfo = [];
      let flag = 0;
      let stringNum = num.toString();
        for(let i in stringNum){
          if(i === '3' && num % 3 === 0 && num % 5 != 0 && num % 7 != 0 ){
            flag = -1;
            break;
          }
        }
        numInfo.push({num:num, flag:flag});
        return numInfo;
    }
    return(special(num));
}
