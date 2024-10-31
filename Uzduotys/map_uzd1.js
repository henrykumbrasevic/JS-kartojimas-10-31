const names = ['Alice', 'Bob', 'Charlie', 'Daisy', 'Eve', 'Frank', 'Grace']

// Without using map, create an array with names all in upper case:
const namesUpperCaseMapped = names.map(name => name.toUpperCase())

/* ===============================C=O=D=E================================= */

const namesUpperCase = [];
for (let i = 0; i < names.length; i++){
    const makeCapitals = names[i].toUpperCase()
    namesUpperCase.push(makeCapitals)
}
console.log(namesUpperCase);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert")
assert.strictEqual(JSON.stringify(namesUpperCase), JSON.stringify(namesUpperCaseMapped));
console.log("Well done!")