let socials = document.getElementById("socials");
let share = document.getElementById("share");

share.addEventListener("click", (event) => {
  event.stopPropagation();
  if (socials.style.display === "none" || socials.style.display === "") {
    socials.style.display = "flex";
    socials.style.opacity = "1";
    share.style.backgroundColor = "hsl(217, 19%, 35%)";
    socials.ariaHidden = false;
  } else {
    socials.style.opacity = "0";
    share.style.backgroundColor = "hsl(210, 46%, 95%)";
    socials.ariaHidden = true;
    setTimeout(() => {
      socials.style.display = "none";
    }, 900);
  }
});

window.addEventListener("click", (event) => {
  if (
    socials.style.display === "flex" &&
    event.target !== socials &&
    event.target !== share
  ) {
    share.style.backgroundColor = "hsl(210, 46%, 95%)";
    socials.style.opacity = "0";
    socials.ariaHidden = true;
    setTimeout(() => {
      socials.style.display = "none";
    }, 900);
  }
});
