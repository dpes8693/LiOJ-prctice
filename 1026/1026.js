//cat input.txt | node 1026.js
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
  let arr = lines[1].split(" ");
  isX(num, arr);
}
function isX(num, arr) {
  for (let i = 0; i < num - 2; i++) {
    let ne = Number(arr[i]) / Number(arr[i + 1]);
    let old = Number(arr[i + 1]) / Number(arr[i + 2]);
    if (ne !== old) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
