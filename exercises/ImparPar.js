function ParImpar(array) {
    let par = 0
    let impar = 0
    for(let i in array) {
        array[i] % 2 === 0 ? par++ : impar++
    }
    console.log(`São ${par} número(s) par(es) e ${impar} número(s) impar(es)`)
    
}

ParImpar([25, 42, 35, 98, 78, 32])