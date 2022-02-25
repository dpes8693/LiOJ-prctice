//cat input.txt | node 1017.js
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
  let max = Number(lines[0]);
  let objects = Number(lines[1]);
  let arr = [];
  let ans = 0;
  let counter = 0;

  for (let i = 2; i < objects + 2; i++) {
    arr.push(Number(lines[i]));
  }

  arr.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < arr.length; i++) {
    if (counter === max) break;
    ans += arr[i];
    counter++;
  }
  console.log(ans);
}
