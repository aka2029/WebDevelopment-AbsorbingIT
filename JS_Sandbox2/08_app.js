// MOUSE EVENTS

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
clearBtn.addEventListener("click", runEvent);
// Doubleclick
clearBtn.addEventListener("dblclick", runEvent); //working only when close inspect element
// Mousedown -> ie click and hold
clearBtn.addEventListener("mousedown", runEvent);
// Mouseup -> letting go after holding
clearBtn.addEventListener("mouseup", runEvent);
// Mouseenter -> just placing the mouse these
card.addEventListener("mouseenter", runEvent);
// Mouseleave -> when taking the mouse outside this scope
card.addEventListener("mouseleave", runEvent);
// Mouseover -> entering other element inside the main scope
card.addEventListener("mouseover", runEvent);
// Mouseout -> exiting the other element inside the main scope
card.addEventListener("mouseover", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
