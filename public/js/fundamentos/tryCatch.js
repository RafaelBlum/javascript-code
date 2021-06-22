function geraErro(error){
    //throw new Error('ATENÇÃO!!!')
    //throw 10
    //throw true
    //throw 'Transação errada!'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        geraErro(e)
    }finally{
        console.log('Finalizou transação!!')
    }
}

const obj = {name: 'Rafael'}
imprimir(obj)