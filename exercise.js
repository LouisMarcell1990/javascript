const number = 15;

let ourPromise = new Promise ((resolve, reject) => {
    if (number > 10) {
        resolve('is greater')
    } else {
        reject('is minor')
    }
})

ourPromise
    .then((val) => console.log(val))
    .catch((e) => console.error(e))
