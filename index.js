//Variables
let variableSinValor;
let booleano1 = false;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;
console.log(TAU);

//Booleanos
let booleanoAnd = booleano1 = booleano2;

let booleanoNot = !booleano1;

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Operadores
let incrementarDesp = 2;
let letpostIncremento = incrementarDesp++;

let incrementarAntes = 2;
let preincremento = ++incrementarAntes;

//Bucles
let contarHasta10_2 = 0;
for (; contarHasta10_2 !== 10;){
    contarHasta10_2++;
}


let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI = postI + postJ++;
}


let sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}


//VARIABLES
let variableValorNumerico = 6;
const MiNombre = "Dani";
const MiNumeroFav = variableValorNumerico;

//Booleanos
let booleanoOr = booleano1 && booleano2;

let booleanoMix1 = (booleano1 && (TAU / 2) === PI) || variableValorNumerico >= MiNumeroFav;

let seisNoEsNueve = 6 !== 9;

let booleanoMix2 = (variableValorNumerico > 0) || variableValorNumerico < -(MiNumeroFav * TAU);


//Operadores

const valorSuma = MiNumeroFav + variableValorNumerico;

const valorResta = MiNumeroFav - variableValorNumerico;

const valorMultiplicacion = MiNumeroFav + variableValorNumerico;

const valorDivision = MiNumeroFav / 3;


//BUCLES
let contarHasta10 = 0;

while (contarHasta10 !== 10) {
    contarHasta10++;
}

let preI = 0;
let preJ = 0;

for (let i = 0; i < 11; i++){
    preI += ++preJ;
}

let sumaImpares = 0;

for (let i = 0; i < 10; i++){
    if (i % 2 !== 0) {
        sumaImpares += 1;
    }
}
