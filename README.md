# LiOJ-prctice
456
練習程式題目
認識內建Function: 1036~1045(10題)
剛學推薦寫: 1001,1015,1002,1009,1010,1011,1012,1021~1024

## YT LiOJ 說明

https://youtu.be/v7zv1ixaO3M

## 新手些別急著刷 leetcode

https://lidemy.com/p/alg101-leetcode

## 線上課程

https://lidemy.com/

## 刷題

https://oj.lidemy.com/

## 新手要寫心得

https://medium.com/hulis-blog/why-blogging-ab77fd8c6ffa

## 好文推薦

http://blog.xdite.net/posts/2012/10/23/some-advice-for-undergraduate/
http://blog.xdite.net/posts/2012/10/25/another-advice-for-undergraduate/
https://www.ptt.cc/bbs/Programming/M.1411474900.A.746.html

## 語法學習

```js
let inputArr = [
  ["A", "1"],
  ["B", "2"],
];
inputArr.sort((a, b) => Number(b[1]) - Number(a[1]));

inputArr.forEach((e, i, a) => {
  if (Number(e[1]) == Number(a[0][1])) {
    output.push(e[0]);
  }
});

function SumDatareduce(arr){
    return arr.reduce((a,b)=>a+b);  
}
console.log(SumDatareduce([1,2,3]));
```
