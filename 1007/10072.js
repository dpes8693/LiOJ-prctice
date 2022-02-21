//https://jsitor.com/snyzq2yPl
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
  let arr = [];
  for (let i = 1; i < row + 1; i++) {
    arr.push(lines[i].split(" "));
  }
  let output = [];

  let inputArr = arr.concat(); //copy array ， call by reference
  inputArr.sort((a, b) => Number(b[1]) - Number(a[1]));

  inputArr.forEach((e, i, a) => {
    if (Number(e[1]) == Number(a[0][1])) {
      output.push(e[0]);
    }
  });
  for (let i = 0; i < output.length; i++) {
    console.log(output[i]);
  }
}
