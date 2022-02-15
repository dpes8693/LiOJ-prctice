//cat input.txt | node 1005.js
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
  let i = 0;

  while (lines[i] !== "0") {
    let input = Number(lines[i]);
    let a = getDivisorSum(input);
    let b = getDivisorSum(a);
    // console.log(a, b);
    if (input === b) {
      console.log(a);
    } else {
      console.log("QQ");
    }
    i++;
  }
}

function getDivisorSum(num) {
  // let word = "";
  let sum = 0;
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      // word = word + String(i) + ",";
      sum += i;
    }
  }
  return sum;
  // console.log(word + String(num));
}
