//A factory return a new object

module.exports = () => {
    return {
        value: 1,
        init() {
            this.value++
        }
    }
}