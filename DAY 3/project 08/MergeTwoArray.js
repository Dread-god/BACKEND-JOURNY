arr = new Array(1, 2, 3, 4, 5);
arr2 = new Array(6, 7, 8, 9);

function marging(arr, arr2) {
     arr = arr.concat(arr2);
     console.log(arr);
}

marging(arr, arr2);