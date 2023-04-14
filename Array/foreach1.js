const approveds = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approveds.forEach(function(name, index, array) { //Callback function receives three params. Array is third param.
    console.log(`${index + 1}) ${name}`)
    console.log(array)
})

approveds.forEach((name, index) => console.log(`${index + 1}) ${name}`))

const showApproveds = approved => console.log(approved)
approveds.forEach(showApproveds)