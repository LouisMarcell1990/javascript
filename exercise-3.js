function isAdult({age} = person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


console.log(isAdult(person));