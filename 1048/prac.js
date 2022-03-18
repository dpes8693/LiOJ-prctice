//
//cat input.txt | node 1048.js
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
  console.log(findMaxValue(lines, Number(lines[0])));
}
function findMaxValue(arr, len) {
  let master = -Infinity;
  let max = Number(arr[1]);
  for (let i = 2; i <= len; i++) {
    let num = Number(arr[i]);
    max + num < num ? (max = num) : (max += num);
    if (master < max) master = max;
  }
  return master;
}
//錯誤點: 不該用2
