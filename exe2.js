/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

const prompt = require('prompt-sync')();
let qtdEleitores = prompt("Digite a quantidade de eleitores: ");
let qtdVotosBrancos = prompt("Digite a quantidade de votos brancos: ");
let qtdVotosNulos = prompt("Digite a quantidade de votos nulos: ");
let qtdVotosValidos = prompt("Digite a quantidade de votos válidos: ");

let percentualBrancos = (qtdVotosBrancos/qtdEleitores) * 100;
let percentualNulos = (qtdVotosNulos/qtdEleitores) * 100;
let percentualValidos = (qtdVotosValidos/qtdEleitores) * 100;

console.log(`Votos brancos: ${percentualBrancos}%`);
console.log(`Votos nulos: ${percentualNulos}%`);
console.log(`Votos válidos: ${percentualValidos}%`);

