// if-else
const age = 24;
if (age >= 18) {
     console.log("He is eligible for driving");
}
else {
     console.log("He is not eligible for driving");
}

//if-else-if

if (age <= 24) {
     console.log("congratulation you are eligible for marriage")
}
else if (age <= 18) {
     console.log("congratulation you are allowed to apply for driving license")
}
else if (age <= 6) {
     console.log("Go to school");
}
else {
     console.log("you are not born yet");
}

const num = 5;

switch (num) {
     case 1:
          console.log("This is first case")
          break;
     case 2:
          console.log("This is 2nd case")
          break;
     case 3:
          console.log("This is 3rd case")
          break;
     case 4:
          console.log("This is 4th case")
          break;

     default:
          console.log("Not match");

          break;
}