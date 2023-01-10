function test1(num) {
    if(num > 7) 
        console.log(num)
    console.log('Final')
}
test1(6)
test1(8)

function test2(num) {
    if(num > 7); {// Be careful with ';', don't use with the control structures
        console.log(num)
    }
}

test2(6)
test1(8)