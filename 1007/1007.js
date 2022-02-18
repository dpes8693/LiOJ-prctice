//cat input.txt | node 1007.js
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
  let row = Number(lines[0]);
  let box = [["default", -1]];
  for (let i = 1; i < row + 1; i++) {
    let arr = lines[i].split(" ");
    arr[1] = Number(arr[1]);
    let copy = arr.concat();
    if (arr[1] > box[0][1]) {
      box = [];
      box.push(copy);
    } else if (arr[1] === box[0][1]) {
      box.push(copy);
    }
  }
  for (let i = 0; i < box.length; i++) {
    console.log(box[i][0]);
  }
}
