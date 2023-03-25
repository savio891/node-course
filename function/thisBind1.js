const person = {
    saudation: "Good Morning!",
    speak() {
        console.log(this.saudation)
    }
}
person.speak()
const speak = person.speak
speak()
const talkPerson = person.speak.bind(person)

talkPerson()