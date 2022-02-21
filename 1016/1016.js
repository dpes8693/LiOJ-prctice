//cat input.txt | node 1016.js
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
  if (num === 0) return;
  let A = [];
  let B = [];
  let who = 0;
  for (let i = 1; i <= num; i++) {
    lines[i] === "A" ? A.push(i) : B.push(i);
  }

  who = smallerArr(A, B);
  if (who[1] === -1) {
    console.log("PEACE");
  } else {
    let ans = who[2]
    ans.forEach(element => {
      console.log(element)
    });
  }
}

function smallerArr(A, B) {
  let a = A.length;
  let b = B.length;
  if (a === 0 || b === 0) return -1;
  if (a < b) {
    return ["A", a, A];
  } else if (a === b) {
    return ["", -1, []];
  } else {
    return ["B", b, B];
  }
}
