/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente */

let valor1, valor2;

do{
    console.log("Os valores devem ser diferentes!")
    const prompt = require('prompt-sync')();
    valor1 = parseInt(prompt("Digite o primeiro valor: "));
    valor2 = parseInt(prompt("Digite o segundo valor: "));
}while(valor1 == valor2);

if(valor1 > valor2){
    console.log(`${valor2},${valor1}`);
}else{
    console.log(`${valor1},${valor2}`);
}


