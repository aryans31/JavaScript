const person = {
  name: "Alice",
  age: 25
};

// Mutating properties
person.age = 26;
person.city = "New York";

console.log(person); // { name: 'Alice', age: 26, city: 'New York' }

//Use var in a loop and show how it leaks outside block scope
for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3 - var leaks outside the loop block

//Use let in a loop and show how it does not leak outside block scope
for (let j = 0; j < 3; j++) {
  console.log(j); // 0, 1, 2
}
try {
  console.log(j); // ReferenceError: j is not defined
} catch (e) {
  console.log(e.message);
}