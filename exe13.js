/**Escreva um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de até N */

const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
let num4 = parseInt(prompt("Digite o quarto número inteiro: "));
let num5 = parseInt(prompt("Digite o quinto número inteiro: "));

let tabuadaNum1;
console.log("Tabuada do",num1);
for(let i = 1; i<=num1; i++){
    tabuadaNum1 = i * num1;
    console.log(`${i} X ${num1} = ${tabuadaNum1}`);
}

let tabuadaNum2;
console.log("Tabuada do",num2);
for(let i = 1; i<=num2; i++){
    tabuadaNum2 = i * num2;
    console.log(`${i} X ${num2} = ${tabuadaNum2}`);
}

let tabuadaNum3;
console.log("Tabuada do",num3);
for(let i = 1; i<=num3; i++){
    tabuadaNum3 = i * num3;
    console.log(`${i} X ${num3} = ${tabuadaNum3}`);
}

let tabuadaNum4;
console.log("Tabuada do",num4);
for(let i = 1; i<=num4; i++){
    tabuadaNum4 = i * num4;
    console.log(`${i} X ${num4} = ${tabuadaNum4}`);
}

let tabuadaNum5;
console.log("Tabuada do",num5);
for(let i = 1; i<=num5; i++){
    tabuadaNum5 = i * num5;
    console.log(`${i} X ${num5} = ${tabuadaNum5}`);
}