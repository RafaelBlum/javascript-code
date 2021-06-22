//CONTEXTOS LÉXICOS

const carro = "Uno";

function novo(){
    const carro = "Fiat";
    return carro;
}

const Cliente = {
    nome: 'Rafael',
    email: 'rafaelblum_digital@hotmail.com',
    endereco: {
        rua: 'Joao Pinto',
        numeracao: {
            num: 185
        }
    }
}

console.log(carro)
console.log(novo())
console.log(Cliente.endereco.numeracao.num)