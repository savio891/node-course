<template>
   <div class="calculator">
        <DisplayCalc :value="displayValue" />
        <ButtonCalc label="AC" triple @onClick="clearMaemory"/>
        <ButtonCalc label="/" operation @onClick="setOperation"/>
        <ButtonCalc label="7" @onClick="addDigit"/>
        <ButtonCalc label="8" @onClick="addDigit" />
        <ButtonCalc label="9" @onClick="addDigit" />
        <ButtonCalc label="*" operation @onClick="setOperation" />
        <ButtonCalc label="4" @onClick="addDigit" />
        <ButtonCalc label="5" @onClick="addDigit" />
        <ButtonCalc label="6" @onClick="addDigit" />
        <ButtonCalc label="-" operation @onClick="setOperation"/>
        <ButtonCalc label="1" @onClick="addDigit" />
        <ButtonCalc label="2" @onClick="addDigit" />
        <ButtonCalc label="3" @onClick="addDigit" />
        <ButtonCalc label="+" operation @onClick="setOperation" />
        <ButtonCalc label="0" double @onClick="addDigit"/>
        <ButtonCalc label="." @onClick="addDigit" />
        <ButtonCalc label="=" operation @onClick="setOperation" />
   </div> 
</template>

<script>
import DisplayCalc from '@/components/DisplayCalc.vue';
import ButtonCalc from '@/components/ButtonCalc.vue';

export default {
    data: function() {
        return  {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: {DisplayCalc, ButtonCalc},
    methods: {
        clearMaemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )

                    if(isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMaemory();
                        return;
                    }
                } catch(e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if(n === "." && this.displayValue.includes(".")) {
                return 
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false
            this.values[this.current] = displayValue
        }
    }
}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>