// const cart = [5, 15, 25];
// let total = 0;

// const withtaxed = cart.map((price) => {
//      total += price;
//      return 1.2 * price;
// }
// );

// console.log(total);
// console.log(withtaxed);

// [2, 34, 45, 6, , 75, 53, 45, 24].map((element, index) => {
//      console.log(`the element is ${element} and index is ${index}`)
// });

// let arr2 = ["1", "2", "3"].map(Number); // [1, 2, 3]
// console.log(arr2);
// // But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
// let arr1 = ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
// console.log(arr1);
// // For comparison, if we use parseInt() on the array above:
// ["1.1", "2.2e2", "3e300"].map((str) => console.log(parseInt(str, 10))); // [1, 2, 3]

// const kvArray = [
//      { key: 1, value: 10 },
//      { key: 2, value: 20 },
//      { key: 3, value: 30 },
// ];

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]