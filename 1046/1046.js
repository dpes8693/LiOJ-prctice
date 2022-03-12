//cat input.txt | node 1046.js
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
  lines.forEach((el, i, a) => {
    a[i] += "xy";
    a.push("abcde");
  });
  printOX(lines);
}

function printOX(lines) {
  let O = 0;
  let X = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        lines[i][j] == lines[i + 1][j] &&
        lines[i + 1][j] == lines[i + 2][j]
      ) {
        if (isO(lines[i][j])) O++;
        else X++;
      }

      if (
        lines[i][j] == lines[i][j + 1] &&
        lines[i][j + 1] == lines[i][j + 2]
      ) {
        if (isO(lines[i][j])) O++;
        else X++;
      }
    }
  }
  // 00 => 22
  if (
    lines[0][0] == lines[1][1] &&
    lines[1][1] == lines[2][2]
  ) {
    if (isO(lines[0][0])) O++;
    else X++;
  }
    // 02 => 20
    if (
      lines[0][2] == lines[1][1] &&
      lines[1][1] == lines[2][0]
    ) {
      if (isO(lines[0][0])) O++;
      else X++;
    }
  console.log(whoWin(O, X));
}

function isO(char) {
  if (char === "O") return true;
  else {
    return false;
  }
}

function whoWin(O, X) {
  if (O > X) {
    return "O";
  } else if (O < X) {
    return "X";
  } else {
    return "DRAW";
  }
}
