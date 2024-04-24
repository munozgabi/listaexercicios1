/**Fazer um algoritmo para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos */

const prompt = require('prompt-sync')();
let cont = 0;
let somaNum = 0;
let num = 1;
let peso = 0;
let somaPeso = 0;

while(num != 0){
    num = parseFloat(prompt("Digite um número decimal ou 0 para parar: "));
    if(num != 0){
        peso = parseFloat(prompt("Digite o peso do número: "));
        somaNum = somaNum + (num*peso);
        somaPeso = somaPeso + peso;
        cont++;
    }
}

let media = somaNum/somaPeso;
console.log("A média é:",media);