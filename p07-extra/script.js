const cards = document.querySelectorAll(".card");
const parts = document.querySelectorAll(".part");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

parts.forEach((part) => {
  part.addEventListener("dragenter", dragEnter);
  part.addEventListener("dragover", dragOver);
  part.addEventListener("dragleave", dragLeave);
  part.addEventListener("drop", drop);
});

//draggable element event
function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
  setTimeout(() => {
    this.classList.add("invisible");
  }, 0);
  console.log("start");
}
function dragEnd() {
  this.classList.remove("invisible");
  console.log("end");
}

//drag target event
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragOver(e) {
  e.preventDefault();
}
function dragLeave() {
  this.classList.remove("hovered");
}
function drop(event) {
  this.classList.remove("hovered");

  const id = event.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  this.append(draggable);
  console.log("drop");
}
