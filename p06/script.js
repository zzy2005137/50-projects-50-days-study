const box = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBox)
checkBox()
function checkBox() {
  const TriggerHeight = (window.innerHeight / 5) * 4
  box.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top

    if (boxTop < TriggerHeight) {
      box.classList.add("show")
      //   box.innerHTML = `scrollY :  ${window.scrollY}`
      box.innerHTML = `boxtop position:\n  ${box.getBoundingClientRect().top}`
    } else {
      box.classList.remove("show")
    }
  })
}
