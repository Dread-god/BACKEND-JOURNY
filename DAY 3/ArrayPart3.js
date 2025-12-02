// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Find++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//return value is first element of array which satisfies the provided testing function


// const arr = [5, 12, 8, 130, 44];
// const founded = arr.find((element) => element > 10);
// console.log(founded);

// const inventory = [
//      { name: 'banana', quan: 2 },
//      { name: 'apple', quan: 4 },
//      { name: 'orange', quan: 10 }
// ]
// const founded = inventory.find(({ name }) => name === 'apple')
// console.log(founded);

// const inventory = [
//      { name: 'banana', quan: 2 },
//      { name: 'apple', quan: 4 },
//      { name: 'orange', quan: 10 }
// ]

// function isOrange(fruit) {
//      return fruit.name === "orange";
// }

// const founded = inventory.find(isOrange);
// console.log(founded);


// function isPrime(n) {
//      if (n <= 2) return false;
//      if (n % 2 === 0) return false;
//      for (let factorial = 3; factorial * factorial <= n; factorial += 2) {
//           if (n % factorial === 0) return false;
//      }
//      return true;
// }

// console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
// console.log([4, 5, 8, 12].find(isPrime)); // 5



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Find Index++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//return value of this is index

// function isPrime(n) {
//      if (n <= 2) {
//           return false;
//      }
//      if (n % 2 === 0) {
//           return false;
//      }
//      for (let factorial = 3; factorial * factorial <= n; factorial += 2) {
//           if (n % factorial === 0) {
//                return false;
//           }
//      }
//      return true;
// }
// console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
// console.log([4, 5, 8, 12].findIndex(isPrime)); // 1
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Includes++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//return value is true or false based on element is present or not in array

// const arr = ["a", "b", "c"];

// console.log(arr.includes("c", 3)); // false
// console.log(arr.includes("c", 100)); // false

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

// const arr = ["a", "b", "c"];

// console.log(arr.includes("a", -100)); // true
// console.log(arr.includes("b", -100)); // true
// console.log(arr.includes("c", -100)); // true
// console.log(arr.includes("a", -2)); // false


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Slice++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//return new array
// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// const tropical = fruits.slice(2);
// console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
// console.log(fruits);   // ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple']


// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// // Using positive start index and negative end index
// const sliceExample = fruits.slice(1, -1);
// console.log(sliceExample); // ['Banana', 'Orange', 'Mango']




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Flat++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// A new array with the sub-array elements concatenated into it.
// const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat());
// // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat());
// // [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr3.flat(2));
// // [1, 2, 3, 4, 5, 6]

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
