//1011 - Esfera

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let r = Number(lines.shift());
let pi = 3.14159;

let valor = ((4/3)*pi*(r**3)).toFixed(3);

console.log(`VOLUME = ${valor}`);