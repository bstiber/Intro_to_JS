//Array Examples
let planets = ['earth', 'mars', 'venus', 'saturn', 'venus', 'neptune'];
let otherPlanets = ['foo', 'bar'];

//index
// console.log(planets[0]);

//length
// console.log(planets.length);

// let planetsLength = planets.length;
// console.log(planetsLength);

// let valueAtIndex1 = planets[0];
// console.log(valueAtIndex1);

// convertArrayIntoString
// let planetsToString = planets.toString();
// console.log(planetsToString);

// usage of join string
// let planetsJoinString = planets.join(' : ');
// console.log(planetsJoinString);

//remove last value using pop
// console.log(planets);
// let poppedValue = planets.pop();
// console.log(poppedValue);
// console.log(planets);

//remove first value using pop
// console.log(planets);
// let poppedValue = planets.push('pluto');
// console.log(poppedValue);
// console.log(planets);

//splice
// let newPlanets = planets.splice(2, 0, 'big moon');
// //remove last value using pop
// console.log(newPlanets);
// console.log(planets);

let combinedPlanetsArray = planets.concat(otherPlanets)
console.log(combinedPlanetsArray);

//find out if its an array
console.log(Array.isArray(planets));

