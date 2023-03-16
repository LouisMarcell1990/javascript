class Person {
constructor(firstName, lastName, age) {

  this._firstName = firstName;
  this._lastName = lastName;
  this._age = age;

  // Non so il perche ma mi da errore nel " = " delle variabili del costruttore
}

  get firstName() {
    return this._firstName;
  }

  set firstName(valFirstName) {
    this._firstName = valFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(valLastName) {
    this._lastName = valLastName;
  }

  get age() {
    return this._age;
  }

  set age(valAge) {
    this._age = valAge;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);