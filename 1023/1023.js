//cat input.txt | node 1023.js
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
  let arr = [];
  let spaceArr = [];

  for (let i = num - 1; i >= 0; i--) {
    spaceArr.push(" ".repeat(i));
  }
  for (let i = 1; i <= num; i++) {
    arr.push("*".repeat(i));
    arr[i - 1] = spaceArr[i - 1] + arr[i - 1];
    arr[i - 1] = arr[i - 1] + "*".repeat(i - 1);
    console.log(arr[i - 1]);
  }
  for (let i = 0; i < num - 1; i++) {
    let str = " ".repeat(num - 1);
    console.log(str + "|");
  }
}
