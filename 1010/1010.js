//cat input.txt | node 1010.js
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
  let str = lines[0].split(" ");
  let a = Number(str[0]);
  let b = Number(str[1]);
  (a === b) ? console.log('Yes') : console.log('No')
}
