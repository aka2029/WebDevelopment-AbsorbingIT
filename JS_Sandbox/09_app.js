// DATES & TIMES -> use this "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"

let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("Septermber 10 1981");
birthday = new Date("9/10/1981");

val = today.getMonth(); // this is 0 based so, it shows 1 less ie 0 for jan
val = today.getDate();
val = today.getDay(); //sun = 0, mon = 1, till... sat = 6
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //this is the time stamp, ie the amount of seconds passed since "jan-1st-1970"

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);

// console.log(typeof val); --> currently it shows object but to convert it to string do this -> val = today.toString(); -> now it will show string
