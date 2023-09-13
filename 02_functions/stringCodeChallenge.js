// String Code Challenge:

// Find out if variables ends with the word `programmer`
// Split the variable into two variable at `good` word 
// Review all possible action we can do on a string from this doc
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// first attempt

// Declare a new string variable with name coder and set value to 'I am a good programmer'
// let coder = 'I am a good programmer';
//console.log(coder);

// Find out the type of the variable coder
//console.log(typeof(coder));

// Find out the length of the variable coder
//console.log(coder.length);

// Convert to all uppercase
//console.log(coder.toUpperCase());

// Convert to all lowercase
//console.log(coder.toLocaleLowerCase());

// Find out if it includes the word ‘good’
//console.log(coder.includes('good'));

// Strip out the word  ‘programmer’ from variable


// let text = "How are you doing today?";
// const myArray = text.split(" ");
// let word = myArray[1];
// console.log(word);

let coder = 'I am a good programmer';

let myArray = coder.split(" ");
let word = myArray[4];
console.log(word);



