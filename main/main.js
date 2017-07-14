'use strict';
//#1.输入100以内的一个数，判断输入的数字满足什么情况，并输出对应的返回值
//预计15min,实际min
function fizzBuzzWith(numInfo) {
    let stringNum = numInfo.toString();
    let flag = stringNum.indexOf('3');
        if(flag != -1 || numInfo % 3 === 0 && numInfo % 5 != 0 && numInfo % 7 != 0){
            return 'Fizz';
        }
        else if(numInfo % 3 != 0 && numInfo % 5 === 0 && numInfo % 7 != 0){
            return 'Buzz';
        }
        else if(numInfo % 3 != 0 && numInfo % 5 != 0 && numInfo % 7 === 0){
            return 'Whizz';
        }
        else if(numInfo % 3 === 0 && numInfo % 5 === 0 && numInfo % 7 != 0){
            return 'FizzBuzz';
        }
        else if(numInfo % 3 === 0 && numInfo % 5 != 0 && numInfo % 7 === 0){
            return 'FizzWhizz';
        }
        else if(numInfo % 3 != 0 && numInfo % 5 === 0 && numInfo % 7 === 0){
            return 'BuzzWhizz';
        }
        else if(numInfo % 3 === 0 && numInfo % 5 === 0 && numInfo % 7 === 0){
            return 'FizzBuzzWhizz';
        }
        else {
            return numInfo;
        }
        // if(i != '3'){
        //     if(numInfo % 3 === 0 && numInfo % 5 != 0 && numInfo % 7 != 0){
        //         return 'Fizz';
        //     }
        //     else if(numInfo % 3 != 0 && numInfo % 5 != 0 && numInfo % 7 != 0 ){
        //         return numInfo;
        // }
}
