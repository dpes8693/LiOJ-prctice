//cat input.txt | node 1047.js
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
  let nm = lines[0].split(" ");
  let n = Number(nm[0]);
  let m = Number(nm[1]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(lines[i]);
  }
  for (let i = 1 + n; i <= n + m; i++) {
    console.log(arr.indexOf(lines[i]));
  }
}
