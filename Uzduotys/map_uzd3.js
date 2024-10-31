const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", isActive: true },
    { id: 2, name: "Bob", age: 32, location: "Los Angeles", isActive: false },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", isActive: true },
    { id: 4, name: "Daisy", age: 22, location: "Miami", isActive: false },
    { id: 5, name: "Eve", age: 35, location: "San Francisco", isActive: true },
    { id: 6, name: "Frank", age: 29, location: "Austin", isActive: true },
    { id: 7, name: "Grace", age: 26, location: "Seattle", isActive: false }
  ];
  
  // Without using map, lowercase all the user names:
  const usersWithLowerCaseNamesMapped = users.map(user => {
    return {
      ...user,
      name: user.name.toLowerCase()
    }
  })
  
  /* ===============================C=O=D=E================================= */

  const usersWithLowerCaseNames = [...users]
  for (let i = 0; i < usersWithLowerCaseNames.length; i++){
    usersWithLowerCaseNames[i].name = usersWithLowerCaseNames[i].name.toLowerCase();
  }
  console.log(usersWithLowerCaseNames);
  
  /* ===============================T=E=S=T================================= */
  
  const assert = require("node:assert")
  assert.strictEqual(JSON.stringify(usersWithLowerCaseNames), JSON.stringify(usersWithLowerCaseNamesMapped))
  console.log("Well done!")
  
  
  
  
  