function speakAfterOf(seconds, phrase) {
    return new Promise((solve, reject) => {
        setTimeout(() => {
            solve(phrase) //Accept only one parameter
        }, seconds * 1000)
    })
}

speakAfterOf(3, 'Nice!')
    .then(phrase => phrase.concat('?!?'))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e))