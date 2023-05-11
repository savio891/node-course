const callbackSucesso = resultado => console.log(`Operação concluída, a soma gerou ${resultado} como resultado par.`)

const callbackError = resultado => console.log(`Operação falhou, a soma gerou ${resultado} como resultado ímpar.`)

function somar(valor1, valor2) {
    let resultado = valor1 + valor2
    return new Promise((resolve, reject) => {
        if(resultado % 2 == 0) {
            resolve(resultado)
       }else{
            reject(resultado)
       }
    })
    
}

somar(3,8)
    .then(callbackSucesso)
    .catch(callbackError)
