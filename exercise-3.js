
const sum = (a, b) => a + b;
  

const subtract = (a, b) => a - b;


const multiply = (a, b) => a * b;


const divide = (a, b) => a / b;

  let somma1 = sum (2, 4);
  let somma2 = sum (5, 2);
  let multi = multiply(somma1, somma2);
  let sottrazione = subtract (multi, 2);
  let divisione = divide(sottrazione, 5);
  

const log = (value) => console.log(value);
  log (divisione)
  