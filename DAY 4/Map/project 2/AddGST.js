const withoutGST = [120, 499, 2500, 75, 999, 15000, 320, 1899];

const withGST = withoutGST.map((value) => { return Math.round(value + (value * 0.18)) });

console.log(withGST);