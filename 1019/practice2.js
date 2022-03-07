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
const log = console.log;

function solve(lines) {
  let num = lines[0].split(" ");
  let X = Number(num[1]);
  let Y = Number(num[0]);
  let maze = [];
  for (let i = 0; i < X; i++) {
    maze.push(lines[i + 1]);
  }
  // for (let i = 0; i < X; i++) {
  //   for (let j = 0; j < Y; j++) {
  //     起點 (0,0) 邊線(X,Y)
  //     log(maze[i][j])
  //   }
  // }
  // try {

  // } catch (error) {
  //   console.error(error);
  // }

  findPath(maze, 0, 0, X, Y);
}
function strset(s, i, c) {
  return s.substr(0, i) + c + s.substr(i + 1);
}
function findPath(maze, x, y, sidelineX, sidelineY) {
  console.log(sidelineX, sidelineY, "===");
  console.log(maze[0]);
  console.log(maze[1]);
  console.log(maze[2]);
  console.log(maze[3]);
  console.log(maze[4]);
  // if (maze[sidelineX - 1][sidelineY - 1] === "o") {
  //   console.log("幹你老師");
  //   return;
  // }

  if (x >= sidelineX || y >= sidelineY) return false;
  if (maze[x][y] == "#") return false;
  if (maze[x][y] == "+") return false;
  if (maze[x][y] == ".") maze[x] = strset(maze[x], y, "o");
  // if (maze[x][y] == "o" && (x == sidelineX || y == sidelineY)) return true;

  if (y < sidelineY - 1) {
    if (maze[x][y + 1] == ".") {
      if (findPath(maze, x, y + 1, sidelineX, sidelineY)) {
        //向右
        console.log("往右");
        return true;
      }
    }
  }
  if (x < sidelineX - 1) {
    if (maze[x + 1][y] == ".") {
      if (findPath(maze, x + 1, y, sidelineX, sidelineY)) {
        console.log("往下");
        return true;}
    }
  }
  if (y > 0) {
    if (maze[x][y - 1] == ".") {
      if (findPath(maze, x, y - 1, sidelineX, sidelineY)) return true;
    }
  }
  if (x > 0) {
    if (maze[x - 1][y] == ".") {
      if (findPath(maze, x - 1, y, sidelineX, sidelineY)) return true;
    }
  }

  maze[x][y] = "+";
  return false;
}
