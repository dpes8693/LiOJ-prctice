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
  console.log(mazeArray);
}

function markTwo(arr, h, w) {
  let twoPointArr = [];
  let threePointArr = [];
  for (let i = 0; i < w; i++) {
    // console.log(arr[i]);

    for (let j = 0; j < h; j++) {
      // console.log(arr[i][j], "i=" + i, "j=" + j);
      let counter = 0;
      let dot = arr[i][j];

      if (j < h - 1) {
        let right = arr[i][j + 1];
        if (dot && right === ".") counter++;
      }

      if (i < w - 1) {
        let down = arr[i + 1][j];
        if (dot && down === ".") counter++;
      }

      if (j > 0) {
        let left = arr[i][j - 1];
        if (dot && left === ".") counter++;
      }

      if (i > 0) {
        let up = arr[i - 1][j];
        if (dot && up === ".") counter++;
      }
      console.log(counter, `${i}*${j}`);

      if (dot !== "#") {
        if (counter >= 2) twoPointArr.push(`(${i},${j})`);
        if (counter >= 3) threePointArr.push(`(${i},${j})`);
      }
    }
  }
  console.log(twoPointArr.length, twoPointArr);
  console.log(threePointArr.length, threePointArr);
}
