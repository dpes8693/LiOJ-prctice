//cat input.txt | node 1009.js
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
  let strArr = lines[0].split("");
  let leng = strArr.length;
  let ans = "";
  for (let i = leng - 1; i >= 0; i--) {
    ans += strArr[i];
  }
  console.log(ans);
}
