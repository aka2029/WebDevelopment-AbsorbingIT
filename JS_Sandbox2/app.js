/* Among all the things included in the window object, document is one of them, now we'll explore it
In html collection is kind of like array but it is not, we canno't use forEach loop on it which is an array method & then we have node list which are also like arrays but you can use forEach loop on it.
*/

let val; //initializing

val = document; //gives the entire html page in console
val = document.all; //gives the array of all the tags used in html document
val = document.all[1];
val = document.all.length; //we can also do properties

console.log(val);
