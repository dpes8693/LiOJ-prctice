//cat input.txt | node 1014.js
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
  let len = strArr.length;
  let dec = 0;
  
  strArr.reverse();
  for (let i = 1; i <= len; i++) {
    let exp = 9 ** (i - 1);
    let base = Number(strArr[i - 1]);
    dec += exp * base;
  }
  console.log(dec);
}
