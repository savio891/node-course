let prova1 = 7.2;
let prova2 = 3.5;
let media = prova1+prova2/2;

console.log("Cálculo Média Provas");

if (media>9) {

    console.log("Arrasou!! Sua nota é "+ media);
}

else if (media>6 & media<9) {
    console.log("O aluno foi bem, sua nota é " + media);
}
else {
    console.log("O resultado pelo aluno não foi o esperado, sua nota é " + media);

}