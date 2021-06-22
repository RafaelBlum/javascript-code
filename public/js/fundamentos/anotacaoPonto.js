console.log(Math.ceil(6.4))
console.log(Math.floor(6.4))

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

function construct(nome, email){
    this.nome = nome;
    this.casa = function(){
        console.log('Minha casa')
    }
    this.email = email
}



const User = new construct('PHP', 'srafa@email.com');

User.casa()
console.log(User)