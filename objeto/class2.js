class grandFather {
    constructor(lastname) {
        this.lastname = lastname
    }
}

class Father extends grandFather {
    constructor(lastname, profession = 'Professor') {
        super(lastname)
        this.profession = profession
    }
}

class Son extends Father {
    constructor() {
        super('Silva') //"Super" calls lastname of father
    }
}

const son = new Son
console.log(son)