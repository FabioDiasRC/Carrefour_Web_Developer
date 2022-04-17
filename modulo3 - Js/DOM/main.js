const darkMode = "dark-mode";
const btn = document.querySelector("#mode-selector");
const page = document.querySelector("#page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

btn.addEventListener("click", () => {
  btn.classList.toggle(darkMode);
  body.classList.toggle(darkMode);
  footer.classList.toggle(darkMode);

  if (btn.classList.contains(darkMode)) {
    btn.innerHTML = "Light Mode";
    page.innerHTML = "Dark Mode ON";
  } else {
    btn.innerHTML = "Dark Mode";
    page.innerHTML = "Light Mode On";
  }
});
