const numbers = [12, 7, 5, 20, 33, 18, 2, 9, 44, 27]

const Even = numbers.filter((num) => num % 2 === 0);
const Odd = numbers.filter((num) => num % 2 != 0);

console.log(Even);
console.log(Odd);