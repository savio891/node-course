class Release {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value = value
    }
}

class financialCycle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.releases = []
    }
    addReleases(...releases) {
        releases.forEach(l => this.releases.push(l))
        return this.releases
    } 
    sumary() {
        let consolidatedValue = 0
        this.releases.forEach(l => {
            consolidatedValue += l.value
        })
        return consolidatedValue
    }
}

const Salary = new Release('Salary', 45000)
const eletricityBill = new Release('Light', -220)
const waterBill = new Release('Water', 160)

const  bills = new financialCycle(6, 2018)
bills.addReleases(Salary,eletricityBill, waterBill)
console.log(bills.sumary(), bills.addReleases())