const vetorNumeros = [12, 6, 8, 14, 7, 9, 18] 

let resultado = 0

for(i = 0; i < vetorNumeros.length; i++) {
    resultado += vetorNumeros[i]
}

let calculoMediaAritmeticaVetor = resultado / vetorNumeros.length

console.log(`O resultado da média aritmética do vetor é ${calculoMediaAritmeticaVetor.toFixed(2)}.`)