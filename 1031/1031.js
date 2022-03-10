//cat input.txt | node 1031.js
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
//console.log(i)
function solve(lines) {
  let num = Number(lines[0]);
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    let sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) counter += i;
  }
  console.log(counter);
}
