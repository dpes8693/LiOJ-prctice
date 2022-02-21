//cat input.txt | node 1011.js
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
  let inputArr = lines[1].split(" ");
  let avg = inputArr.map((x) => Number(x)).reduce((a, b) => a + b) / num;
  avg >= 183 ? console.log("real") : console.log("fake");
}
