const strings = ["Vedant", "", "Raj", "", "Priya", "Amit", "", "Anjali"];

const updated = strings.filter((names) => {
     if (names != "") {
          return true;
     }
})

console.log(updated);