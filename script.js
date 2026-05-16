const html = document.documentElement;
const avatar = document.querySelector("#profile img");

function setAvatarSource(image, candidates) {
  if (!image) return;

  let candidateIndex = 0;

  const tryNextSource = () => {
    const source = candidates[candidateIndex];

    if (!source) return;

    candidateIndex += 1;
    image.onerror = tryNextSource;
    image.src = source;
  };

  tryNextSource();
}

function updateProfileImage() {
  if (!avatar) return;

  const isLight = html.classList.contains("light");

  setAvatarSource(
    avatar,
    isLight
      ? ["assets/avatar-light.jpg", "assets/avatar-light.png"]
      : ["assets/avatar.jpg", "assets/avatar.png"],
  );
  avatar.classList.toggle("is-light", isLight);
}

function toggleMode() {
  html.classList.toggle("light");
  updateProfileImage();
}

updateProfileImage();
