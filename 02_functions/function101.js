// Functions

// https://members.productgym.io/courses/take/javascript101/lessons/43615854-what-is-function

// let numOne = 2;
// let numTwo = 13;

// numTotals = numOne + numTwo;
// console.log(numTotals);

// Real function

// function addNumbers(numOne, numTwo) {
//   let totalNumbers = numOne + numTwo
//   console.log(totalNumbers)
// }

// addNumbers(2, 10);

// function printName(firstName) {
//   console.log(`User name is ${firstName}`)
// }

// // printName('John');
// printName('Brad');

// To convert Fahrenheit to Celcius, you can use the follwing formula
// Celcius = )(Fahrenheit - 32) * 5/9

function convertFahrenheitToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9;
  console.log(`the temperature is ${fahrenheit} fahrenheit, equal to ${celcius}`)
}
convertFahrenheitToCelcius(90);