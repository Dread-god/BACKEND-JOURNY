const names = [
     "Vedant",
     "Sneha",
     "Raj",
     "Priya",
     "Amit",
     "Anjali",
     "Karan"
];

const updatedNames = names.map((name, index) => {
     if (index % 2 == 0) {
          return "Mr ".concat(name)
     } else {
          return "Ms ".concat(name)
     }
})

console.log(updatedNames);