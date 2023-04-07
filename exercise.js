function repeat() {
    console.log('Hello')
}

function repeatHello (callback) {
 setInterval(() => callback(), 1000)
}

repeatHello(repeat)

//l'arrow function si usa per ridurre il codice