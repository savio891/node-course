triangulos = (a, b, c)  => {
    
        if(a === b && b == c) {
            console.log('Triângulo Equilátero')
        } 
        else if(a == b || a == c || c == b) {
            console.log('Triângulo Isósceles')
        } 
        else if (a !== b && a !== c && c !== b){
            console.log('Triângulo Escaleno')
        }else {
            console.log('Nenhuma medida encontrada!')
        }
    }
    
triangulos(4,4,4)
