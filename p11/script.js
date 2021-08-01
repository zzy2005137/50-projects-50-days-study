const trash = document.getElementById("trash");
const content = document.querySelector(".content");
const input = document.querySelector(".input");
const form = document.getElementById("form");
const wrap = document.querySelector(".wrap");

const message = [
  " It's fine",
  " Just trow it away",
  " Say, hahahahahaha",
  " hug hug",
  " You've done a great job",
];

// input.addEventListener("submit", createCard);
form.addEventListener("submit", createCard);

function createCard(e) {
  e.preventDefault();
  content.className = "content";
  content.innerText = input.value;
  content.classList.add("show");
  console.log(input.value);
  input.value = "";
}

//drag

content.addEventListener("dragstart", () => {
  setTimeout(() => {
    content.classList.add("hide"), 0;
  });
  console.log("start");
});

content.addEventListener("dragend", () => {
  content.classList.remove("hide");
  console.log("end");
});

trash.addEventListener("dragenter", (e) => {
  e.preventDefault();
  trash.classList.add("active");
});
trash.addEventListener("dragover", (e) => {
  e.preventDefault();
});
trash.addEventListener("dragleave", () => {
  trash.classList.remove("active");
});
trash.addEventListener("drop", () => {
  trash.classList.remove("active");

  trash.classList.remove("active");
  // content.classList.add("hide");
  // content.classList.remove("show");
  let randomNum = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

  content.innerText = `:) ${message[randomNum]}`;
  content.classList.add("result");
});
