//cat input.txt | node 1004.js
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
  let str = Number(lines[0]);

  for (let i = 1; i <= str; i++) {
    let arr = lines[i].split(" ");
    let a = BigInt(arr[0]);
    let b = BigInt(arr[1]);
    let c = Number(arr[2]);

    // 舊版
    // if (a > b) {
    //   if (c == 1) {
    //     console.log("A");
    //   } else if (c == -1) {
    //     console.log("B");
    //   }
    // } else if (a < b) {
    //   if (c == 1) {
    //     console.log("B");
    //   } else if (c == -1) {
    //     console.log("A");
    //   }
    // } else {
    //   console.log("DRAW");
    // }

    if (a === b) {
      console.log("DRAW");
    } else if (c === 1) {
      console.log(biggerOne(a, b));
    } else if (c === -1) {
      console.log(smallerOne(a, b));
    }
  }
}

function smallerOne(a, b) {
  if (a > b) {
    return "B";
  } else {
    return "A";
  }
}

function biggerOne(a, b) {
  if (a > b) {
    return "A";
  } else {
    return "B";
  }
}
