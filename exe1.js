/*Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o 
valor correspondente em graus Fahrenheit*/

const prompt = require('prompt-sync')();
let celsius = prompt("Digite uma temperatura em graus Celsius: ");

let fahrenheit = (celsius*1.8) + 32;

console.log("A temperatura em Fahrenheit é: ", fahrenheit);


