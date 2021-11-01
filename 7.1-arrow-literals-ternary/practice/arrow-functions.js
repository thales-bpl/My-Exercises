// Let's see different ways we can approach functions. All functions above are the same function, all of them valid:
// Ex1:
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2,2));

// Ex2:
const sum = function(num1, num2) {
  return num1 + num2;
}
console.log(sum(2,2));

// Ex3:
const sum = (num1, num2) => {
  return num1 + num2;
}
console.log(sum(2, 2));

// Ex4:
// In a Arrow Function, use of parentheses is necessary whenever we have more than one parameter.
const sum = (num1, num2) => num1 + num2
console.log(sum(2, 2));

// -------------------- // -------------------- //
// Let's take a look at another example of the many ways we can write the same function: 
//Ex 1:
function wordCounter(phrase) {
  return phrase.split(' ').length;
}
console.log(wordCounter('Fala tribo, beleza?'));

//Ex 2:
const wordCounter = (phrase) => {
  return phrase.split(' ').length
}
console.log(wordCounter('Fala tribo, beleza?'));

// Ex 3:
// In this case we have only parameter ('phrase'), so the use of paranthesis is optional
const wordCounter = phrase => phrase.split(' ').length;
console.log(wordCounter('Fala tribo, beleza?'));

// -------------------- // -------------------- //
// Now let's see an example of a function that create an object:
// Ex 1:
function objectProfile (name, age) {
  return {
    name: name,
    age: age,
  }
}
console.log(objectProfile('Joaquim', 25));

// Ex 2:
// JS reads what's inside curly braces as the function body. Because we're using arrow functions without 'return' (see L50), we will not be able to work with objects this way. We need to use paranthesis outside the curly braces so arrow functions understand we're manipulating an object.
const objectProfile = (name, age) => ({name: name, age: age});
console.log(objectProfile('Joaquim', 25));


// -------------------- // -------------------- //
// Yet another example:
// Ex 1:
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Ex 2: 
const printName = () => "Lucas";
console.log(printName());