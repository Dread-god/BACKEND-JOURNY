const pricesInRupees = [120, 499, 2500, 75, 999, 15000, 320, 1899];

const pricesInDollars = pricesInRupees.map((value) => {
     return Math.round(value / 83);
});

console.log(pricesInDollars);
