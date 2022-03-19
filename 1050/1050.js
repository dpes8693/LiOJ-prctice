//cat input.txt | node 1050.js
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
  let need = lines[0].split(" ").map(Number)[1];
  let arr = lines[1].split(" ").map(Number);
  let obj = Object.assign({}, arr);
  const invertKeyValues = (obj) =>
    Object.keys(obj).reduce((acc, key) => {
      acc[obj[key]] = key;
      return acc;
    }, {});
  let obj2 = invertKeyValues(obj);
  findMatchNum2(need, arr, obj2);
}

function findMatchNum2(need, arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    let find = String(need - arr[i]);
    if (obj.hasOwnProperty(find)) {
      console.log(`${i} ${obj[find]}`);
      return;
    }
  }
  return;
}

// function findMatchNum(need, arr, obj) {
//   for (let i = 0; i < arr.length; i++) {
//     let find = need - arr[i];
//     let ans = Object.values(obj).indexOf(find);
//     if (ans > -1) {
//       console.log(`${i} ${ans}`);
//       return;
//     }
//   }
//   return;
// }
