/*Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro inteiro: "));
let num2 = parseInt(prompt("Digite o segundo inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro inteiro: "));
let num4 = parseInt(prompt("Digite o quarto inteiro: "));

let resultadoNum1 = num1 + 25;
let resultadoNum2 = num2*3;
let resultadoNum3 = (12/100) * num3;
let resultadoNum4 = num1 + num2 + num3;

console.log(resultadoNum1);
console.log(resultadoNum2);
console.log(resultadoNum3);
console.log(resultadoNum4);




