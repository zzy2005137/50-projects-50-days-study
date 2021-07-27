// https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

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
function dragenter(event) {
  event.preventDefault();

  this.className += " hovered";
  console.log("enter");
}

function dragover(event) {
  // this.preventDefault();
  event.preventDefault();
  console.log("over");
}

function dragleave() {
  this.className = "empty";
  console.log("leave");
}

function drop(event) {
  //1. remove "hovered"
  this.className = "empty";

  //2.append draggable element
  this.append(fill);

  //3.display the draggable element

  console.log("drop");
}

/*summarry
1.add `draggable = true` property to an element 
2.[dragstart], [drag], [dragend] events fire on when drag the element 
3.[dragenter],[dragover], [dragleave]or[drop] events fire on the drop target
*4.Call the event.preventDefault() on the [dragenter] and [dragover] event handlers 
to make an element a valid drop target.


*/
