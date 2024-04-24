/**Fazer um algoritmo para receber número decimais até que o usuário digite 0 e fazer a média aritmética desses números */

const prompt = require('prompt-sync')();
let cont = 0;
let soma = 0;
let num = 1;

while(num != 0){
    num = parseFloat(prompt("Digite um número decimal ou 0 para parar: "));
    if(num != 0){
        soma = soma + num;
        cont++;
    }
}
let media = soma/cont;
console.log("A média é:",media);
