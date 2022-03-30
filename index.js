//1008 - Salário

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let sal = (b * c).toFixed(2);

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${sal}`);
