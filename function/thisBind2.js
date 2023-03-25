function person() {

    const self = this
    this.idade = 0
    setInterval(function() {
        self.idade ++
        console.log(self.idade)
    }, 1000)
}

new person