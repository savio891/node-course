function verificarStrings(string1, string2) {
    let contido = true
    for(let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++) {
            let charString2 = string2.charAt(i).toLowerCase()
            if(charString1 == charString2) {
                contido = true
                break
            }else{
                contido = false
            }
        }
        if(!contido) {
            return contido
        }
    }
    return contido
}

console.log(verificarStrings('abc', 'abc'))