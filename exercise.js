const isLogged = true;

function logged(random) {
    return new Promise ((resolve, reject) => {
    let rand = Math.random();
    if (rand > 0.5) {
        resolve(random)
    } else {
        reject(new Error ('Is minor'))
    }
})
};

function num(userData) {
    return new Promise((resolve, reject) => {
    if (userData > 0.5) {
        resolve({name: "John", age: 24})
    } else {
        reject(new Error ('Error'))
    }
})
}

logged(isLogged)
    .then(num)
    .then((val) => console.log(val))
    .catch((e) => console.error(e))
    .finally(() => console.log('finally!'))

