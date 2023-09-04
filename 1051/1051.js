//cat input.txt | node 1051.js
const { count } = require("console");
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
  let num = lines[0];
  let arr = lines[1].split(" ").map(Number);
  let counter = 0;
  // console.log(arr)
  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      if (arr[j] < arr[i]) counter++;
    }
  }
  console.log(counter);
}
