//cat input.txt | node 1030.js
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
// let log = console.log;

function solve(lines) {
  let str = lines[0];
  let len = str.length;
  console.log(isPalindrome(len, str));
}
function isPalindrome(len, str) {
  let mid = ~~(len / 2);
  let j = mid - 1;
  for (let i = mid; i < len; i++) {
    if (len % 2 === 0) {
      if (str[j] !== str[i]) return "False";
    } else {
      if (str[j] !== str[i + 1]) return "False";
    }
    j--;
  }
  return "True";
}
