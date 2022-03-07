//cat input.txt | node 1043.js
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
  let str = lines[0];
  let target = lines[1];
  console.log(str.endsWith(target));
}
