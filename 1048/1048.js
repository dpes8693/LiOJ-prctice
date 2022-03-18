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
  let n = Number(lines[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(lines[i]));
  }
  // console.log(arr)
  console.log(findMaxValue(arr, arr.length));
}
function findMaxValue(arr, len) {
  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < len; i++) {
    currentSum + arr[i] > arr[i]
      ? (currentSum += arr[i])
      : (currentSum = arr[i]);
    if (currentSum > max) max = currentSum;
  }
  return max;
}
