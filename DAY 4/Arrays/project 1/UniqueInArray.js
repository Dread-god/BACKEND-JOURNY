arr = [1, 23, 454, 23, 23, 454, 3, 2, 1];
unique = [];
function isUnique(arr, unique) {
     let j;
     let i
     for (i = 0; i < arr.length; i++) {
          for (j = 0; j < arr.length; j++) {
               if (i === j) {
                    continue;
               }
               if (arr[i] === arr[j]) {
                    break;
               }
          }
          if (j === arr.length) {
               unique.push(arr[i]);
          }
     }

}

isUnique(arr, unique)
console.log(unique);