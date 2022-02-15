//cat input.txt | node 1003.js
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
  let n1 = Number(lines[0])
  let n2 = Number(lines[ n1+1 ])
  let word = ''
  let ans = ''
    
  for(let i=1; i <= n1; i++){
    word += lines[i]
  }
  for(let i=n1+2; i <= lines.length-1 ; i++){
	let j = lines[i]
    ans += word[j-1]
  }
  console.log(ans)
  
}