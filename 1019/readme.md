# 走迷宮

難度中等以上，新手建議先跳過

## JS字元常被忽略的點

1. 在 JS 中 String 是 immutable 不可直接更改字元的，要改的話要用其他方法，不能直接用等號

```js
//範例
let arr = ["abc"];
arr[0][0] = "A"; //預期變成 'Abc'
console.log(arr); //結果是 'abc'
```

2. JS 的 replace()預設只能改第一個
   [參考連結](https://vinixwu.wordpress.com/2017/05/23/how_to_replace_all_occurance_of_string_in_javascript/)

```js
//replace()只能改第一個
let str = "Dog is cute! Dog is happy!";
str = str.replace("Dog", "Cat");
console.log(str); //結果是 Cat is cute! Dog is happy!

//replace()改全部
let str2 = "Dog is cute! Dog is happy!";
str2 = str2.replace("/Dog/g", "Cat"); //利用正則表達式
console.log(str2); //結果是 Dog is cute! Dog is happy!
```

https://vinixwu.wordpress.com/2017/05/23/how_to_replace_all_occurance_of_string_in_javascript/

### 策略:

透過遞迴達成 DFS(Depth-First-Search)
[參考影片](https://youtu.be/CuZPmb_HKsw)

https://oj.lidemy.com/problem/1019
