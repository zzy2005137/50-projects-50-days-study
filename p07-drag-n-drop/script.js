// https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll("empty");

fill.addEventListener("dragstart", dragstart);
// fill.addEventListener("drag", drag);
fill.addEventListener("dragend", dragend);

empties.forEach((empty) => {
  empty.addEventListener("dragenter", dragenter);
  empty.addEventListener("dragover", dragover);
  empty.addEventListener("dragleave", dragleave);
  empty.addEventListener("drop", drop);
});

//=======Events on draggable elements======
function dragstart() {
  setTimeout(() => (this.className = "invisible"), 0);
}
/*
function drag() {
  console.log("dragging");
}
*/
function dragend() {
  this.className = "fill";
}

//=========Events on drop targets=======
function dragenter(e) {
  e.preventDefault();
  console.log("enter");
}

function dragover(e) {
  e.preventDefault();
  console.log("over");
}

function dragleave() {
  console.log("leave");
}

function drop() {
  console.log("drop");
}
