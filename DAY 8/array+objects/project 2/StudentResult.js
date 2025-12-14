const students = [
     {
          id: 1,
          name: "Vedant",
          marks: [78, 85, 90, 88],
          class: "FY",
          isActive: true
     },
     {
          id: 2,
          name: "Sneha",
          marks: [92, 95, 89, 94],
          class: "SY",
          isActive: true
     },
     {
          id: 3,
          name: "Amit",
          marks: [35, 40, 38, 42],
          class: "FY",
          isActive: false
     },
     {
          id: 4,
          name: "Priya",
          marks: [65, 70, 72, 68],
          class: "TY",
          isActive: true
     }
];
function calculationMarks(marks) {
     const total = marks.reduce((accu, mark) => { return accu + mark }, 0);
     return total;
}

students.forEach((student) => {
     console.log(`${student.name} -> ${calculationMarks(student.marks)}`);
});

students.forEach((student) => { student.averageMarks = calculationMarks(student.marks) / student.marks.length });

students.forEach((student) => {
     if (student.averageMarks >= 90) {
          student.grade = "A";
     }
     else if (student.averageMarks >= 75) {
          student.grade = "B";
     }
     else if (student.averageMarks >= 60) {
          student.grade = "C";
     }
     else if (student.averageMarks >= 40) {
          student.grade = "D";
     }
     else {
          student.grade = "F";
     }
});

console.log(students);

const passedStudent = students.filter((student) => student.averageMarks >= 40 && student.isActive === true);
console.log(passedStudent);


const topper = students.reduce((best, current) => {
     return current.averageMarks > best.averageMarks ? current : best;
});

console.log(topper.name, topper.averageMarks);