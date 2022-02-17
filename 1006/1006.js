//cat input.txt | node 1006.js
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
  let seat = Number(lines[0]);
  let cancels = Number(lines[1]);
  let high = seat / 2;
  let arr = setArray(high);

  for (let i = 2; i < cancels + 2; i++) {
    let cn = Number(lines[i]);
    if (cn % 2 === 0) {
      arr[1][cn / 2 - 1] = "x";
    } else {
      arr[0][(cn - 1) / 2] = "x";
    }
  }
  console.log(counter(arr, high));
}

function setArray(high) {
  let i = 0;
  let a = [];
  let b = [];
  while (i < high) {
    a.push(1 + 2 * i);
    b.push(2 + 2 * i);
    i++;
  }
  return [a, b];
}

function counter(arr, high) {
  let count = 0;
  for (let i = 0; i < high - 1; i++) {
    let a = typeof arr[0][i];
    let b = typeof arr[0][i + 1];
    if (a === "number" && b === "number") count++;
  }
  for (let i = 0; i < high - 1; i++) {
    let a = typeof arr[1][i];
    let b = typeof arr[1][i + 1];
    if (a === "number" && b === "number") count++;
  }
  for (let i = 0; i < high; i++) {
    let a = typeof arr[0][i];
    let b = typeof arr[1][i];
    if (a === "number" && b === "number") count++;
  }
  return count;
}
