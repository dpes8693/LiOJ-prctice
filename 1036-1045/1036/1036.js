//cat input.txt | node 1036.js
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
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(lines[i + 1]);
  }
  arr.reverse();
  arr.forEach((el) => {
    console.log(el);
  });
}
