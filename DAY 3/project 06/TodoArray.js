let arr = ["JS learnig", "College", "Walking", "Reading", "Docs exploration"];


function addTasks(arr, arg) {
     arr.push(arg)
     console.log(arr);
}

function removedTask(arr, arg) {
     arr.forEach((element, index) => {
          if (element === arg) {
               arr[index] = null;
               console.log(arr);
          }
     });
}



addTasks(arr, "GYM")
removedTask(arr, "Walking")


