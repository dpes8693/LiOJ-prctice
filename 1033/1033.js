//cat input.txt | node 1033.js
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
  let num = Number(lines[0]);
  let dots = [];

  for (let i = 1; i <= num; i++) {
    let arr = lines[i].split(" ");
    dots.push({ x: Number(arr[0]), y: Number(arr[1]) });
  }
  let min = Infinity;
  let ans = null;
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j <= dots.length - 1; j++) {
      let dis = countDistance(dots[i].x, dots[i].y, dots[j].x, dots[j].y);

      if (min > dis) {
        ans = setAnsPosition(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
        min = dis;
      }
    }
  }
  let str = ans.split(',')
  console.log(str[0]+' '+str[1]);
  console.log(str[2]+' '+str[3]);
}

function countDistance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function setAnsPosition(x1, y1, x2, y2) {
  let ans = "";
  if (x1 < x2) {
    ans = `${x1},${y1},${x2},${y2}`;
  } else if (x1 > x2) {
    ans = `${x2},${y2},${x1},${y1}`;
  } else {
    y1 > y2
      ? (ans = `${x2},${y2},${x1},${y1}`)
      : (ans = `${x1},${y1},${x2},${y2}`);
  }
  return ans;
}
