function imparesEntrevalores(inicio, fim) {

    while(inicio < fim) {
        inicio++
        if(inicio % 2 === 1) {
            console.log(inicio)
        }
    }
    if(fim < inicio) {
        console.log('Entrada inválida!!')
    }
    
}

imparesEntrevalores(100, 0)