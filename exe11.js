/**Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO */

const prompt = require('prompt-sync')();
let numero;

do{
    numero = parseInt(prompt("Digite um número inteiro: "));
    if(numero%2 == 0){
        console.log(`${numero} é par`);
    }else{
        console.log(`${numero} é ímpar`);
    }
}while(numero != null || numero > 0)