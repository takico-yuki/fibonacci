'use strict';
/**
 * 
 * @param {Number} 数字
 * @returns {Number} フィボナッチ数列
 */
function fib(n){
    if(n === 0){
        //数列の０番目の設定
        return 0;
    }else if(n === 1){
        //数列の１番目の設定
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

const length = 40;
for(let i=0 ; i<=length; i++){
    console.log(fib(i));
}
