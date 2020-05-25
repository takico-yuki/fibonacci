'use strict';
const memo = new Map();         //Mapの作成
//フィボナッチ数列の初期値の設定
memo.set(0,0);
memo.set(1,1);
/**
 * 
 * @param {Number} 数字
 * @returns {Number} フィボナッチ数列
 * @author takico
 */
function fib(n){
    if(memo.has(n)){
        //memoのkeyにnが存在していた場合
        return memo.get(n);
    }
    //一度計算したデータをmemoに追加する
    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    //フィボナッチを返す
    return value
}

const length = 40;
for(let i=0 ; i<=length; i++){
    console.log(fib(i));
}
