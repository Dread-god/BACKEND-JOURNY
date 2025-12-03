const people = [
     { name: "Vedant", age: 18 },
     { name: "Sneha", age: 16 },
     { name: "Raj", age: 22 },
     { name: "Priya", age: 14 },
     { name: "Amit", age: 30 },
     { name: "Anjali", age: 17 },
     { name: "Karan", age: 20 }
];

const adults = people.filter((adult) => adult.age >= 18);

console.log(adults);