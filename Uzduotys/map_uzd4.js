const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", isActive: true },
    { id: 2, name: "Bob", age: 32, location: "Los Angeles", isActive: false },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", isActive: true },
    { id: 4, name: "Daisy", age: 22, location: "Miami", isActive: false },
    { id: 5, name: "Eve", age: 35, location: "San Francisco", isActive: true },
    { id: 6, name: "Frank", age: 29, location: "Austin", isActive: true },
    { id: 7, name: "Grace", age: 26, location: "Seattle", isActive: false }
  ];
  
  // Without using map, get an array of user locations:
  const userLocationsMapped = users.map(user => user.location)
  
  
  /* ===============================C=O=D=E================================= */
  
  const userLocations = []
  for (let i = 0; i < users.length; i++){
    const location = users[i].location
    userLocations.push(location)
  }
  console.log(userLocations);
  
  /* ===============================T=E=S=T================================= */
  
  const assert = require("node:assert");
const { log } = require("node:console");
  
  assert.strictEqual(JSON.stringify(userLocations), JSON.stringify(userLocationsMapped));
  
  
  console.log("Well done!")
  
  
  
  
  
  