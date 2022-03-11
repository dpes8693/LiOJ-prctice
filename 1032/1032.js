//cat input.txt | node 1032.js
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
  for (let i = 1; i <= num * 4; i += 4) {
    let ans = countDistance(
      lines[i],
      lines[i + 1],
      lines[i + 2],
      lines[i + 3]
    ).toFixed(2);

    console.log(ans);
  }
}

function countDistance(a1, a2, b1, b2) {
  let x1 = Number(a1);
  let y1 = Number(a2);
  let x2 = Number(b1);
  let y2 = Number(b2);
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
