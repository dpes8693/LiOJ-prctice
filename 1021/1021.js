//cat input.txt | node 1021.js
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
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
    console.log(str);
  }
}
