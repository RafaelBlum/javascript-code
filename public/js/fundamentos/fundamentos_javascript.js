
//--===============  VARIAVEIS | OBJETO | BOOLEAN ===============--**
let nome = "Rafael";
const email = "rafael@hotmail.com";
var senha = 123;
let datanascimento = 1979;
var status = true;

const pessoa = {
    "nome": nome,
    "email": email,
    "senha": senha,
    "data": datanascimento,
    "status": status,
    "code": nome.charCodeAt(1),
    "tipo": typeof {}

}

//--===============  CONSOLE.LOG ===============--**
console.log("\n" + ":: ======== USUÁRIO ======== ::");
pessoa['status'] = !!pessoa['status']  // 1 ! false 2 ! true
console.log(pessoa);
console.log(!pessoa['status'] || 'USUÁRIO BLOQUEADO')



//--===============  NUMERAÇÃO ===============--**
console.log("\n" + ":: ======== CONTA BANCO ======== ::");
const conta = 147823.563;
let subcode = "Cor3ida";
let digito = subcode.indexOf(3)

console.log(conta.toFixed(1))
console.log(digito)


//--===============  STRING e FUNÇÕES ===============--**
console.log("\n" + ":: ======== SOBRE ======== ::");

let description = "Desenvolvedor web Php";

let area = description.substring(0, 18);
let linguage = description.substring(18, 21);

let programmer = area.concat(" " + linguage).concat("_[" + linguage.replace(/\w/g, 'X') + "]")
console.log(programmer);

let frontend = 'bootstrap, Html, css'.split(',')
console.log(frontend[0].toUpperCase())
const getEstrutural = letraMaiuscula => letraMaiuscula.toUpperCase()
console.log(`Linguagem de estrutura: ${getEstrutural(frontend[1])}`)


console.log("\n" + ":: ======== TEMPLATE ======== ::");
let template = `Template
Olá
${area}
${linguage}
${programmer}
`
console.log(template)


console.log("\n" + ":: ======== ARRAYS = [] ======== ::");
let skills = [];

skills.push('PHP')
skills.push('JAVA')
skills.push('REACT')
skills.push('LIVEWIRE')
skills.push('LARAVEL')
skills.push('CSS3')

skills.pop()

delete skills[4]
skills[4] = "FRAMEWORK CAKE"

skills.forEach(sk => {
    console.log(sk);
});

console.log("HABILIDADES: " + "(" + skills.length + ") ");

console.log("\n" + ":: ======== EXEMPLOS ======== ::");
console.log("\n" + ":: ** passagem de valor e referencia ======== ::");
const a = {"name": "title"}
const b = a;
b.name = "Carro";
console.log(b.name + " " + a.name);
console.log("\n" + ":: ** undefined e null ======== ::");
let x
console.log(x)
console.log(x=null)



