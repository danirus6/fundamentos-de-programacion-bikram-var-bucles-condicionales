//Variables
let variableSinValor;
let booleano1 = false;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;
console.log(TAU);

//Booleanos
let booleanoAnd = booleano1 === booleano2;

let booleanoNot = booleano1 !== booleano2;

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Operadores
const incrementarDesp = 2;
const letpostincremento = incrementarDesp++;

const incrementarAntes = 2;
const preincremento = ++incrementarAntes;

//Bucles
let contarHasta10_2 = 0;
for (let i = 0; i === 10; i++){
    contarHasta10_2 = i;
}

let postI = 0;
let postJ = 0;

for (let i = 0; i < 11; i++) {
    postI = postJ++;
}

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

//VARIABLES
