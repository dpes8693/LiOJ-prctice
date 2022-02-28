//cat input.txt | node 1019.js
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
  let num = lines[0].split(" ");
  let h = Number(num[1]);
  let w = Number(num[0]);
  let mazeArray = [];
  let mazeMark = [];
  for (let i = 0; i < h; i++) {
    mazeArray.push(lines[i + 1]);
  }
  markTwo(mazeArray, w, h);
  // console.log(mazeArray[0][0]);
}

function markTwo(arr, h, w) {
  let test = 0;
  for (let i = 0; i < w; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < h; j++) {
      console.log(arr[i][j], "i=" + i, "j=" + j);
      // console.log(arr[i][j]);
    }
  }
}
