const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentState = 1;

next.addEventListener("click", () => {
  currentState++;

  if (currentState > circles.length) {
    currentState = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentState--;
  if (currentState < 1) {
    currentState = 1;
  }

  update();
});

function update() {
  //active current circle
  circles.forEach((circle, idx) => {
    if (idx < currentState) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //update progress
  progress.style.width =
    ((currentState - 1) / (circles.length - 1)) * 100 + "%";

  //check button disable
  if (currentState === 1) {
    prev.disabled = true;
  } else if (currentState === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
