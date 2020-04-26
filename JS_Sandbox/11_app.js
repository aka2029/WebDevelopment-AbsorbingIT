// SWITCHES -> use it when you have a lot of cases instead of doing else if else if else if

const color = "red";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Color is not red or blue");
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tue";
    break;
  case 3:
    day = "Wed";
    break;
  case 4:
    day = "Thr";
    break;
  case 5:
    day = "Fri";
    break;
  case 6:
    day = "Sat";
}

console.log(`Today is ${day}`);
