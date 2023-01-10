function onlyNiceNews(note) {
    if(note>=7) {
        console.log("Aprovado com " + note)
    }
}

onlyNiceNews(8.1)
onlyNiceNews(6.1)

function ISpeakTrue(value) {
    if(value) {
        console.log("It is true... " + value)
    }
}

ISpeakTrue()
ISpeakTrue(null)
ISpeakTrue(undefined)
ISpeakTrue(NaN)
ISpeakTrue('')
ISpeakTrue(0)
ISpeakTrue(-1)
ISpeakTrue(' ')
ISpeakTrue('?')
ISpeakTrue([])
ISpeakTrue({})
ISpeakTrue([1, 2])
