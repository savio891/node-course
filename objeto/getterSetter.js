const sequency = {
        _value: 1, //convention (applying underline about value doesn't mean that the variable to be private. )
        get value() {return this._value++},
        set value(value) {
            if(value > this._value) {
                this._value = value
            }
        }
}

console.log(sequency.value, sequency.value)
sequency.value = 1000
console.log(sequency.value, sequency.value)
sequency.value = 900
console.log(sequency.value, sequency.value)