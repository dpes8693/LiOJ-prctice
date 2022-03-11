//cat input.txt | node 1029.js
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
// let log = console.log;
function solve(lines) {
  console.log(eval(lines[0]))
}
