/*Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo */

const prompt = require('prompt-sync')();
let codigo = parseInt(prompt("Digite o código de origem do produto: "));

if(codigo == 1){
    console.log("Região Sul");
}else if(codigo == 2){
    console.log("Região Norte");
}else if(codigo == 3){
    console.log("Região Leste");
}else if(codigo == 4){
    console.log("Região Oeste");
}else if(codigo == 5 || codigo == 6 || (codigo > 24 && codigo < 51)){
    console.log("Região Nordeste");
}else if(codigo > 6 && codigo < 10){
    console.log("Região Sudeste");
}else if(codigo > 9 && codigo < 21 ){
    console.log("Região Centro-Oeste");
}else{
    console.log("Valor inválido");
}
