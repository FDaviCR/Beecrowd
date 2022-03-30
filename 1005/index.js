//1005 - Média 1

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift())*3.5;
let b = Number(lines.shift())*7.5;

let media = (((a+b)/11)).toFixed(5)

console.log(`MEDIA = ${media}`);