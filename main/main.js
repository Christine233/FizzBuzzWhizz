'use strict';

function fizzBuzzWith(num) {
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
        numInfo.push({number:num,})
    }
}
