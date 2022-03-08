//cat input.txt | node 1035.js
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
  let arr = [];
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  //arr.sort(); //排文字
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
