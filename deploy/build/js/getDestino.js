document.addEventListener("DOMContentLoaded", () => {
  getDestino();
});

function getDestino() {
  let destino = parseInt(localStorage.getItem("idDestino"));

  console.log(destino);

  fetch("/build/js/destinos.json")
    .then((res) => res.json())
    .then((data) => {
      let result = data.filter((data) => data.id == destino);

      console.log(result);
    });
}
