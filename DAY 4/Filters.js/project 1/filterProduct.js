const prices = [120, 499, 2500, 75, 999, 15000, 320, 1899];

const HighPrices = prices.filter((value) => value > 1000);

console.log(HighPrices);