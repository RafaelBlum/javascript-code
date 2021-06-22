function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2;

    const compraTv50 = trabalho1 && trabalho2;

     //const compraTv32 = !!(trabalho1 != trabalho2) // bitwise xor

     const compraTv32 = trabalho1 != trabalho2;

     const manterSaudavel = !compraSorvete;

     return {compraSorvete, compraTv32, compraTv50, manterSaudavel}

}

console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
console.log(compras(true, true))