//cat input.txt | node 1040.js
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
  let target = lines[0];
  let num = Number(lines[1]);
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(lines[i + 2]);
  }
  console.log(arr.join(target));
}
