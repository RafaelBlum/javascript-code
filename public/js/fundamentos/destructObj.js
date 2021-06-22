// recurso add ES2015
const pessoa = {
    nome: 'Rafa',
    email: 'ttt@tt.com',
    endereco: {
        rua: 'BAC',
        cpf: 1000
    }
}

const { nome, email, endereco: {cpf} } = pessoa

console.log(nome, email, cpf)