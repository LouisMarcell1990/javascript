function repeatHello (callback) {
 setInterval(() => console.log(callback), 1000)
}

repeatHello('Hello')

//l'arrow function si usa per ridurre il codice