/**Escreva um algoritmo para imprimir os 50 primeiros números primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo */

const prompt = require('prompt-sync')();
let num = 101;
let cont = 0;
while(cont < 50){
    let divisor = 2;
    let primo = true;
    while(divisor<=Math.sqrt(num)){
        if(num%divisor == 0){
            primo = false;
            break;
        }
        divisor++;
    }
    if(primo){
        console.log(num);
        cont++
    }
    num++;
}