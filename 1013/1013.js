//cat input.txt | node 1013.js
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
  console.log(F(num));
}

function F(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  return F(n - 1) + F(n - 2);
}
// 0,1,2,3,5,8...
