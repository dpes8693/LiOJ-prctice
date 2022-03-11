//cat input.txt | node 1028.js
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
  let arr = lines[0].split(" ");
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log();
    counter += getLifNum(arr[i]);
  }
  if (counter >= 10) {
    let a = String(counter)[0];
    let b = String(counter)[1];
    console.log(Number(a) + Number(b));
  } else {
    console.log(counter);
  }
}
function getLifNum(str) {
  let arr = str.split("");
  let counter = 0;
  let ans = 0;
  arr.forEach((el) => {
    counter += Number(el);
  });
  if (counter >= 10) {
    let a = String(counter)[0];
    let b = String(counter)[1];
    return Number(a) + Number(b);
  } else {
    return counter;
  }
  // while (counter >= 10) {
  //   ans = x(counter);
  // }
  // console.log(ans);
}
function x(counter) {
  if (counter >= 10) {
    let a = String(counter)[0];
    let b = String(counter)[1];
    return Number(a) + Number(b);
  } else {
    return counter;
  }
}
