//cat input.txt | node 1020.js
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
  for (let i = 1; i < num + 1; i++) {
    let n = Number(lines[i]);
    printPrime(n);
  }
}

function printPrime(n) {
  if (n === 1) {
    console.log("Composite");
    return;
  }
  let flag = 0;
  for (let i = 1; i < n / 2 + 1; i++) {
    // console.log("n=" + n, i);
    if (n % i === 0) {
      flag++;
    }
  }
  if (flag > 1) {
    console.log("Composite");
  } else {
    console.log("Prime");
  }
}
