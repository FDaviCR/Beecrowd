//1007 - Diferença

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let d = Number(lines.shift());

let dif = (a * b - c * d);

console.log(`DIFERENCA = ${dif}`);
