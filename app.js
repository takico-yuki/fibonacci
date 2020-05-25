'use strict';
const memo = new Map();         //Mapの作成
//フィボナッチ数列の初期値の設定
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);
/**
 * トリボナッチ数列の値を返す関数
 * 1.memoにトリボナッチ数列の値が存在する場合はその値を返す
 * 2.memoに値が存在しない場合は値をセットする 
 *      Map(n,トリボナッチ数)
 * @param {Number} 数字
 * @returns {Number} トリボナッチ数列
 * @author takico
 */
function fib(n){
    if(n < 0){
        return ;
    }
    if(memo.has(n)){
        //memoのkeyにnが存在していた場合
        return memo.get(n);
    }
    //一度計算したデータをmemoに追加する
    const value = fib(n-1) + fib(n-2) + fib(n-3);
    memo.set(n,value);
    //トリボナッチを返す
    return value
}

const length = 40;
for(let i=0 ; i<=length; i++){
    console.log(fib(i));
}
