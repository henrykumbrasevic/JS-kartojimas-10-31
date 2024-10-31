const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", isActive: true },
    { id: 2, name: "Bob", age: 32, location: "Los Angeles", isActive: false },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", isActive: true },
    { id: 4, name: "Daisy", age: 22, location: "Miami", isActive: false },
    { id: 5, name: "Eve", age: 35, location: "San Francisco", isActive: true },
    { id: 6, name: "Frank", age: 29, location: "Austin", isActive: true },
    { id: 7, name: "Grace", age: 26, location: "Seattle", isActive: false }
];

// Without using reduce, get the average user age
const averageUserAgeReduce = users.reduce((acc, user) => acc + user.age, 0) / users.length


/* ===============================C=O=D=E================================= */

let ageAggregate = 0;
for (let i = 0; i < users.length; i++){
    ageAggregate += users[i].age
}
const averageUserAge = ageAggregate / users.length
    console.log(averageUserAge);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert");
const { log } = require("node:console");
assert.strictEqual(averageUserAge, averageUserAgeReduce)
console.log("Well done!")

