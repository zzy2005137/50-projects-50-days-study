const form = document.getElementById("form")
const input = document.getElementById("input")
const todoUl = document.getElementById("todoUl")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input.value) {
    let todo = document.createElement("li")
    todo.className = "todoItem"
    todo.innerText = input.value
    todoUl.appendChild(todo)
    input.value = ""
  }

  update()
})

function update() {
  const todoItems = document.querySelectorAll(".todoItem")
  todoItems.forEach((item) => {
    item.addEventListener("click", changeState)
  })

  todoItems.forEach((item) => {
    item.addEventListener("contextmenu", removeTodo)
  })
}

function changeState() {
  this.classList.toggle("completed")
}

function removeTodo(e) {
  e.preventDefault()
  if (this.classList.contains("completed")) {
    this.remove()
  }
}
