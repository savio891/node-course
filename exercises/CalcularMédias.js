/*
First step: recebe 3 notas de um aluno e uma letra por parâmetro
Second step: Se A> calcular média aritmética, se P> média ponderada (5,3,2), senão H média harmônica
Third step: retornar por parâmetro.
*/

function calculateMedia(nota1, nota2, nota3, type)  {
    let mediaAritmetica = (nota1 + nota2 + nota3) / 3
    let mediaPonderada = (nota1 + nota2 + nota3) / 10
    let mediaHarmonica = (nota1 + nota2+ nota3 ) / (Math.pow(nota1, -1) + Math.pow(nota2, -1) + Math.pow(nota3, -1))
    
    if(type == 'a') {return mediaAritmetica}
    if(type == 'p') {return mediaPonderada}
    if(type == 'h') {return mediaHarmonica}
}
console.log(calculateMedia(10, 20, 30, 'h'))
 
