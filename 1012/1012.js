//cat input.txt | node 1012.js
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
  let a = Number(lines[0]);
  let b = Number(lines[1]);
  let value = mostValue(a, b);
  console.log(value);
  console.log(value - (a + b));
}

function mostValue(a, b) {
  let big = 0;
  a >= b ? (big = a) : (big = b);
  return big * 2;
}
