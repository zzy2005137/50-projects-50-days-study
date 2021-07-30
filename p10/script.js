const input = document.getElementById("filter")
const result = document.getElementById("result")
const userList = []

getUserData()

async function getUserData() {
  const res = await fetch("https://randomuser.me/api?results=50")

  const { results } = await res.json()

  //clear
  result.innerHTML = ""

  results.forEach((user) => {
    let li = document.createElement("li")
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
`
    result.appendChild(li)

    userList.push(li)
  })
}

input.addEventListener("input", check)

function check() {
  userList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(this.value.toLowerCase())) {
      user.classList.remove("hide")
    } else {
      user.classList.add("hide")
    }
  })
}
