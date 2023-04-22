const Aluno =  {nome: 'Kaique', codigo: '#0001', nota1: 6, nota2: 5, nota3: 4}

let peso1 = 4
let peso2 = 3
let peso3 = 3
let mediaPonderada = (Aluno.nota1 * peso1 + Aluno.nota2 * peso2 + Aluno.nota3 * peso3 ) / (peso1 + peso2 + peso3)

const resultado = mediaPonderada >= 5 ? 'aprovado' : 'reprovado'

console.log(`O aluno ${Aluno.nome} tem o código ${Aluno.codigo}. 
Suas notas foram: ${Aluno.nota1}, ${Aluno.nota2}, ${Aluno.nota3}. 
O valor da média ponderada é ${mediaPonderada}, ele foi ${resultado}.`)