//cat input.txt | node 1022.js
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
  let num = Number(lines[0]);
  let len = 2 * (num - 1) + 1;
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = "*";

    for (let j = num - 2; j >= i; j--) {
      arr[i] = arr[i] + "*";
      arr[i] = "*" + arr[i];
    }

    for (let j = 0; j < i; j++) {
      arr[i] = " " + arr[i];
    }
  }
  arr.reverse();
  // console.log(arr)
  for (el in arr) console.log(arr[el]);
}
