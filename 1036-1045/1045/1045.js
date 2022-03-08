//cat input.txt | node 1045.js
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
  let start = lines[1];
  let end = lines[2];
  console.log(str.slice(start, end));
}
