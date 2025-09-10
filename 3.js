let person = {"Aryan" : 25, "Kunal" : 26, "anurag" : 26}

person["Kuna"] = 50
delete person["Kunal"];

let newPerson = { ...person, "kunals":3558 };

console.log(newPerson);


//Create two different objects and check if they are equal.
let obj1 = { name: "John", age: 30 };
let obj2 = { name: "John", age: 30 };

console.log(obj1 === obj2); // false - different object references
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true - same content
// Example of JSON.stringify and JSON.parse
let originalObject = { name: "Alice", age: 28, hobbies: ["reading", "coding"] };

// stringify converts object to JSON string
let jsonString = JSON.stringify(originalObject);
console.log("JSON String:", jsonString);

// parse converts JSON string back to object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// Example with array
let arrayExample = [1, 2, { nested: "value" }];
let arrayString = JSON.stringify(arrayExample);
let parsedArray = JSON.parse(arrayString);
console.log("Array String:", arrayString);
console.log("Parsed Array:", parsedArray);
// Example: Using Symbol as an object key
const sym = Symbol('uniqueKey');
const objWithSymbol = {
    [sym]: 'This is a symbol value',
    regularKey: 'This is a regular value'
};

console.log('Symbol key value:', objWithSymbol[sym]);
console.log('Regular key value:', objWithSymbol.regularKey);

//what is the difference?

// Looping over object values
console.log("\nLooping over object values:");
let sampleObj = { name: "Alice", age: 28, city: "NYC" };

// Method 1: Object.values()
console.log("Using Object.values():");
Object.values(sampleObj).forEach(value => {
    console.log(value);
});

// Method 2: for...in loop
console.log("Using for...in loop:");
for (let key in sampleObj) {
    console.log(sampleObj[key]);
}

// Method 3: Object.entries()
console.log("Using Object.entries():");
Object.entries(sampleObj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Looping over array values
console.log("\nLooping over array values:");
let sampleArray = ["apple", "banana", "cherry"];

// Method 1: forEach()
console.log("Using forEach():");
sampleArray.forEach(value => {
    console.log(value);
});

// Method 2: for loop
console.log("Using for loop:");
for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

// Method 3: for...of loop
console.log("Using for...of loop:");
for (let value of sampleArray) {
    console.log(value);
}
