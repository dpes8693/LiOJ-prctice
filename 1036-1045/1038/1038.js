//cat input.txt | node 1038.js
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
  let target = Number(lines[0]);
  let num = Number(lines[1]);
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Number(lines[i + 2]));
  }
  console.log(arr.indexOf(target));
}
