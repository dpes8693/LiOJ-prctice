//cat input.txt | node 1025.js
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
  let arr = lines[0].split(" ");
  let start = Number(arr[0]);
  let end = Number(arr[1]);
  for (let i = start; i <= end; i++) {
    let arr = String(i).split("");
    if (isNarcissisticNumber(arr, arr.length, i)) {
      console.log(i);
    }
  }
}

function isNarcissisticNumber(arr, len, num) {
  let counter = 0;
  for (let i = 0; i < len; i++) {
    counter += arr[i] ** len;
    // console.log(arr[i] ** len);
  }
  if (num === counter) {
    return true;
  } else {
    return false;
  }
}
