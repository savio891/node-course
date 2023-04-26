let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

function trocaValoresVetores(vetorA, vetorB) {
    if(vetorA.length == vetorB.length) {
        let tamanho = vetorA.length
        for(i = 0; i < tamanho; i++) {
            vetorB.push(vetorA[i])
            vetorA.push(vetorB[i])
        }
        for(let i = 0; i < tamanho; i++) { //laço para excluir os elementos que permaneceram no array modificado.
            vetorA.shift() //shift exclui os elementos originais do array.
            vetorB.shift()
        }

        console.log(`VetorB: ${vetorB}`)
        console.log(`VetorA: ${vetorA}`)
    }else{
        console.log('Vetor de tamanhos distintos!')
    }
}

trocaValoresVetores(vetorA, vetorB)