//cat input.txt | node 1034.js
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

let table = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
//console.log(i)
function solve(lines) {
  let num = Number(lines[0]);
  let str = lines[1];

  console.log(caesar(str, num));
}

function caesar(str, num) {
  let arr = str.split("");
  let caesar = [];
  let ans = "";

  Object.entries(table).forEach(([key, value]) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        caesar[i] = value + num;
        while (caesar[i] > 26) {
          caesar[i] -= 26;
        }
      }
    }
  });

  for (let i = 0; i < caesar.length; i++) {
    Object.entries(table).forEach(([key, value]) => {
      if (caesar[i] === value) {
        ans += key;
      }
    });
  }
  return ans;
}
