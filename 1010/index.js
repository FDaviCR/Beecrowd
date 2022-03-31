//1010 - Cálculo Simples

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let a = String(lines.shift());
let b = String(lines.shift());

let lineA = a.split(" ");
let lineB = b.split(" ");

let valor = ((lineA[2]*lineA[1])+(lineB[2]*lineB[1])).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valor}`);