// Salário com bônus

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = String(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let sal = (b + (0.15 * c)).toFixed(2);

console.log(`TOTAL = R$ ${sal}`);