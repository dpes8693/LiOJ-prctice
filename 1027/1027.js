//cat input.txt | node 1027.js
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
  let arr = lines[0].split("-");
  let array = [];
  let weighted = 0;
  arr.forEach((el) => {
    array.push(...el.split(""));
  });
  let cardType = getCardType(Number(array[0]));
  for (let i = 0; i < array.length - 1; i++) {
    let element = Number(array[i]);
    let index = Number(i) + 1;
    let calculator = isCreditCardNum(element, index);
    // console.log(`卡數:${element}`, `第${index}個`, calculator);
    weighted += calculator;
  }
  Number(array[15]) === getCheckNum(weighted)
    ? console.log(cardType)
    : console.log("INVALID");
}
function isCreditCardNum(num, eo) {
  if (eo % 2 === 1) {
    return num * 2 >= 10 ? num * 2 - 9 : num * 2;
  } else {
    return num;
  }
}
function getCardType(char) {
  let name = "";
  switch (char) {
    case 3:
      name = "JCB";
      break;
    case 4:
      name = "VISA";
      break;
    case 5:
      name = "MASTER_CARD";
      break;
  }
  return name;
}
function getCheckNum(num) {
  return 10 - (num % 10);
}
