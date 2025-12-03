const students = [
     { name: "Vedant", marks: 75 },
     { name: "Sneha", marks: 45 },
     { name: "Raj", marks: 82 },
     { name: "Priya", marks: 58 },
     { name: "Amit", marks: 33 },
     { name: "Anjali", marks: 91 },
     { name: "Karan", marks: 67 }
];

const passedStudents = students.filter((score) => score.marks > 36);

console.log(passedStudents);