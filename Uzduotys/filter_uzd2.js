const students = [
    { name: 'Alice', scores: { math: 85, english: 78, science: 92 } },
    { name: 'Bob', scores: { math: 65, english: 90, science: 80 } },
    { name: 'Charlie', scores: { math: 92, english: 60, science: 85 } },
    { name: 'David', scores: { math: 88, english: 76, science: 70 } },
    { name: 'Eve', scores: { math: 90, english: 95, science: 85 } }
];



// Without using filter, filter out any students that have less than 85 from math
const studentsFilteredHof = students.filter(student => {
    return student.scores.math < 85
})

/* ===============================C=O=D=E================================= */

const studentsFiltered = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].scores.math < 85){
        studentsFiltered.push(students[i])
    }
}
console.log(studentsFiltered);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert")
assert.strictEqual(JSON.stringify(studentsFiltered), JSON.stringify(studentsFilteredHof))
console.log("Well done!");





