/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra */

const prompt = require('prompt-sync')();
let qtdMacas = parseInt(prompt("Digite a quantidade de maçãs: "));

if(qtdMacas < 12 && qtdMacas > 0){
    let resultado = qtdMacas * 0.30;
    console.log("Valor total: R$",resultado);
}else if(qtdMacas >= 12 && qtdMacas > 0){
    let resultado = qtdMacas * 0.25;
    console.log("Valor total: R$",resultado);
}else{
    console.log("Insira um valor válido");
}