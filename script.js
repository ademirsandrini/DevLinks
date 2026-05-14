function updateProfileImage() {
  const html = document.documentElement
  const avatar = document.querySelector("#profile img")

  if (!avatar) return

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "assets/avatar-light.jpg")
    avatar.classList.add("is-light")
    return
  }

  avatar.setAttribute("src", "assets/avatar.jpg")
  avatar.classList.remove("is-light")
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  updateProfileImage()
}

updateProfileImage()
