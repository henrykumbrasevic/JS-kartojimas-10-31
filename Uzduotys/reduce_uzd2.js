const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", isActive: true },
    { id: 2, name: "Bob", age: 32, location: "Los Angeles", isActive: false },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", isActive: true },
    { id: 4, name: "Daisy", age: 22, location: "Miami", isActive: false },
    { id: 5, name: "Eve", age: 35, location: "San Francisco", isActive: true },
    { id: 6, name: "Frank", age: 29, location: "Austin", isActive: true },
    { id: 7, name: "Grace", age: 26, location: "Seattle", isActive: false }
];


// Without using reduce, get the number of active users
const activeUsersCountReduce = users.reduce((acc, user) => user.isActive ? acc + 1 : acc, 0)

/* ===============================C=O=D=E================================= */

let activeUsersCount = 0
for (let i = 0; i < users.length; i++){
    if (users[i].isActive === true){
        activeUsersCount++
    }
}
console.log(activeUsersCount);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert")
assert.strictEqual(activeUsersCount, activeUsersCountReduce)
console.log("Well done!")

