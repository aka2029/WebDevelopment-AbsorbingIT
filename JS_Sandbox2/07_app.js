/* THE EVENT LISTENER & THE EVENT OBJECT -> til now we have not done any interaction with the UI & this is where event listeners come in
.addEventListener takes 2 inputs -> the actual even event and an anonymous function...it will happen when when we click on the object mentioned by .querySelector
*/

/* lets first try to use it with Clear Task button.. so as to give an example:

document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("Hello World"); //this initially flashes bec href = "" or even if if has a link, but if we put # in it then it prevents the browser to redirect

  e.preventDefault(); //this is something unique, checkout e(event parameter)
});

  OR do as mentioned below:
*/

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  // console.log("Clicked");

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timestamp;

  // Coords event relative to the window
  val = e.clientY; //pt we clicked
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
