//https://jsitor.com/snyzq2yPl
// //cat input.txt | node 1007.js
// var readline = require("readline");

// var lines = [];
// var rl = readline.createInterface({
//   input: process.stdin,
// });

// rl.on("line", function (line) {
//   lines.push(line);
// });

// rl.on("close", function () {
//   solve(lines);
// });

// function solve(lines) {
//   let row = Number(lines[0]);
//   let arr = [];
//   for (let i = 1; i < row + 1; i++) {
//     arr.push(lines[i].split(" "));
//   }
//   let output = [];

//   // 將input轉換為[[Name, votes], [Name, votes]...]格式
//   let inputArr = input
//     .split("\n")
//     .slice(1)
//     .map((e) => {
//       return e.split(" ");
//     });
//   //將inputArr按票數(即inputArr[i][1])重新排序，票數最多排在最前
//   inputArr = inputArr.sort((a, b) => Number(b[1]) - Number(a[1]));
//   //比較重新排序後的inputArr。把票數與第1位一樣多的名字push到output。
//   inputArr.forEach((e, i, a) => {
//     if (Number(e[1]) == Number(a[0][1])) {
//       output.push(e[0]);
//     }
//   });
//   for (let i = 0; i < output.length; i++) {
//     console.log(output[i]);
//   }
// }

// let input = `3
// Nick 90
// Peter 90
// Bob 80`;
var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function solve(lines) {
  let row = Number(lines[0]);
  let arr = [];
  for (let i = 1; i < row + 1; i++) {
    arr.push(lines[i].split(" "));
  }
  let output = [];

  let inputArr = arr.concat(); //copy array ， call by reference
  inputArr.sort((a, b) => Number(b[1]) - Number(a[1]));
  // console.log(arr, inputArr);
  inputArr.forEach((e, i, a) => {
    if (Number(e[1]) == Number(a[0][1])) {
      output.push(e[0]);
    }
  });
  for (let i = 0; i < output.length; i++) {
    console.log(output[i]);
  }
}
