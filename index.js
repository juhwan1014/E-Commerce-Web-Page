var toggle = document.querySelector(".hamburger-menu")
var menu = document.querySelector(".main-menu")

const toggleMenu = () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")

    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i></li>"
  } else {
    menu.classList.add("active")
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i></li>"
  }

}

toggle.addEventListener("click", toggleMenu)