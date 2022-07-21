let dark = localStorage.getItem("clase");

if (dark != "") {
  const body = document.querySelector("body");
  body.classList.add("black");
}
