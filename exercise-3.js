const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

let json = JSON.stringify(person1);
let obj = JSON.parse(json);

const person2 = { ...person1 };
person2.address.city = 'Milan';
 
console.log(obj);
console.log(person2);