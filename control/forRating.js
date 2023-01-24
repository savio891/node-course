const notes = [1.1, 6.2, 3.7]

for(let call in notes) {
    console.log(`${call} = ${notes[call]}`)
    if(notes[call] > 6.0) {
        console.log('Approved!')
    }else {
        console.log('Reproved')
    }

}