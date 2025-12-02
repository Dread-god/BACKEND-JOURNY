arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
revArr = [];
function reverse(arr, revArr) {
     arr.forEach((element, index) => {
          revArr.push(arr[(arr.length) - (index + 1)]);
     });
}
reverse(arr, revArr);
console.log(revArr);