//Set does not accept repetition/not indexed 
const teams = new Set()
teams.add('Manchester City')
teams.add('Real Madrid').add('Lazio').add('Dkiev')
teams.add('Flamengo')
teams.add('Manchester City')

console.log(teams)
console.log(teams.size)
console.log(teams.has('manchester city'))
console.log(teams.has('Manchester City'))
teams.delete('Flamengo')
console.log(teams.has('Flamengo'))

const names = ['Raquel', 'Lucas', 'July', 'Lucas']
const namesSet = new Set(names)
console.log(namesSet)