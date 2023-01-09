function buy(job1, job2) {
    const BuyIceCream = job1 || job2
    const BuyTv50 = job1 && job2
    //const BuyTv32 = !!(job1 ^ job2 // bitwise xor
    const BuyTv32 = job1 != job2
    const KeepHealthy = !BuyIceCream // unary operator

    return { BuyIceCream, BuyTv50, BuyTv32, KeepHealthy }
}

console.log(buy(true, true))
console.log(buy(true, false))
console.log(buy(false, true))
console.log(buy(false, false))