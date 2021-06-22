//LAÇO DE REPETIÇÃO - FOR

/*for(var i=0; i < 10; i++){
    console.log(i);
}
console.log("Fora :: ", i);

for(let j = 0; j< 10; j++){
    console.log(j)
}
console.log("Fora :: ", j)*/

//SEM SCOPE DE BLOCO
const vet = []
for(var a = 0; a<10; a++){
    vet.push(function(){
        console.log(a)
    })
}
vet[2]()

const ar = []
for(let w=0; w<10; w++){
    ar.push(function(){
        console.log(w)
    })
}

ar[2]()

  


