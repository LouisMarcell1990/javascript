const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2["firstName"] = "Simon";

// il valore firstname tra person1 e person2 sono gli stessi perché stiamo il valore della variabile e non il riferimento

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);

console.log(person2);
