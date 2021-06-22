//FUNÇÕES COM/SEM RETORNO 
function imprimiSoma(a, b){
    console.log(a + b)
}

function soma(a, b = 2){
    return a + b;
}

imprimiSoma(10, 30);
console.log(soma(33, 2));

// Armazenar uma função em uma variavel

const valor = function (a, b){
    console.log(a + b);
}

const soma2 = (a, b) => {
    return a + b;
}

const subtracao = (a, b) => a - b;

valor(3, 5);
console.log(soma(6, 4));
console.log(subtracao(2, 3));

//Variaveis VAR e LET
let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero);
}

console.log('Fora = ',  numero)