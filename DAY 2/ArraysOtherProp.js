//++++++++++++++++++++++++++++++++++++++++++++++++++++++concat+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// retur value array

// arr1 = [1, 2, 3];
// arr2 = new Array(4, 5, 6);
// arr3 = Array(7, 8, 9);

// const arr = arr1.concat(arr2, arr3);

// arr.forEach((element) => { console.log(element) });

// arr4 = arr.concat([[1, 2]], 10, [[[11], 12]])
// console.log(arr4);
// arr4.forEach((element) => { console.log(element) });


// example
// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers);
// // results in [[1], 2, [3]]

// // modify the first element of num1
// num1[0].push(4);

// console.log(numbers);
// numbers.forEach((ele) => { console.log(ele) })
// // results in [[1, 4], 2, [3]]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++join++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const matrix = [
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9],
// ];

// console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
// console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

// let arr = [7, 8];
// arr.push(1, [3, arr, 4], 2);
// console.log(arr);
// console.log(arr.join(";"));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++push++++++++++++++++++++++++++++++++++++++++++++++++++++++
//its changes actuall array
// return type size

// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");

// console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
// console.log(total); // 4



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++pop++++++++++++++++++++++++++++++++++++++++++++++++++++++
//its changes actuall array
// return type element

// const sports = ['soccer', 'baseball', 'football', 'swimming']
// const remove = sports.pop();

// console.log(sports);
// console.log(remove);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++shift++++++++++++++++++++++++++++++++++++++++++++++++++++++
//its changes actuall array
// return type element

// const sports = ['soccer', 'baseball', 'football', 'swimming']
// const remove = sports.shift();

// console.log(sports);
// console.log(remove);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++unshift++++++++++++++++++++++++++++++++++++++++++++++++++++++
//its changes actuall array
// return type element

// const sports = ['soccer', 'baseball', 'football', 'swimming']
// const added = sports.unshift("bgmi", "pubg");

// console.log(sports);
// console.log(added);