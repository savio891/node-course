const value = 'global'

function myfunction() {
    console.log(value)
}
function exec() {
    const value = 'local'
    myfunction()
}
exec()