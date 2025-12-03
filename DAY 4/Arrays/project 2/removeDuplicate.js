let arr = [1, 23, 454, 23, 23, 454, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
               arr.splice(j, 1);
               j--;
          }
     }
}

console.log(arr);
