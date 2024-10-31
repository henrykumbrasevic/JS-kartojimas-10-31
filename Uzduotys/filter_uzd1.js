const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", isActive: true },
    { id: 2, name: "Bob", age: 32, location: "Los Angeles", isActive: false },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", isActive: true },
    { id: 4, name: "Daisy", age: 22, location: "Miami", isActive: false },
    { id: 5, name: "Eve", age: 35, location: "San Francisco", isActive: true },
    { id: 6, name: "Frank", age: 29, location: "Austin", isActive: true },
    { id: 7, name: "Grace", age: 26, location: "Seattle", isActive: false }
];


// Without using filter, filter all inactive users
const inactiveUsersHof = users.filter(user => {
    return !user.isActive
});

/* ===============================C=O=D=E================================= */

const inactiveUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === false){
        inactiveUsers.push(users[i])
    }
}
console.log(inactiveUsers);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert")
assert.strictEqual(JSON.stringify(inactiveUsers), JSON.stringify(inactiveUsersHof))
console.log("Well done!")

