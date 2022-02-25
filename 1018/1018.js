//cat input.txt | node 1018.js
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
  
  let conj = 0;
  let counter = 0;
  let len = Number(lines[0]);
  let strArr = lines[1].split(" ");

  if(len === 1){
    console.log(1)
    return
  }
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      counter++;
      if (counter > conj) conj = counter;
    } else {
      counter = 0;
    }
  }
  console.log(conj+1);
}
