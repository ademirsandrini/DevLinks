const html = document.documentElement;
const avatar = document.querySelector("#profile img");

function updateProfileImage() {
  if (!avatar) return;

  const isLight = html.classList.contains("light");

  avatar.setAttribute("src", isLight ? "assets/avatar-light.jpg" : "assets/avatar.jpg");
  avatar.classList.toggle("is-light", isLight);
}

function toggleMode() {
  html.classList.toggle("light");
  updateProfileImage();
}

updateProfileImage();
