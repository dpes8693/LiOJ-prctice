# 剛好能湊出的數值

https://oj.lidemy.com/problem/1050

練習一些情況:

1. 物件把值轉陣列 再用 indexOf 找位置
2. 物件是否有這個 key
3. 一維陣列轉物件 `['a','b','c'] >> {0:'a',1:'b',2:'c'}`
4. 把物件的 key 和 value 反轉

```js

1. Object.values(obj).indexOf(位置);
2. obj.hasOwnProperty(key);
3. Object.assign({}, arr);
4.
function invertKeyValues(obj){
    Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
}
let obj2 = invertKeyValues(obj);

```
