//cat input.txt | node 1049.js
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
  let x = lines[1].split(" ").map(Number);
  let y = lines[2].split(" ").map(Number);
  let minLen = Infinity;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let distance = Math.abs(x[i] - y[j]);
      if (distance < minLen) {
        minLen = distance;
      }
      //優化速度
      let nextDistance = Math.abs(x[i] - y[j + 1]);
      if (nextDistance > distance) break;
      //
    }
  }
  console.log(minLen);
}
