document.addEventListener("DOMContentLoaded", () => {
  search();
});

const body = document.getElementById("body");
const container = document.getElementById("container");
const titulo = document.getElementById("destino");

/* consulta la base de datos ficticia y devuelve los valores segun departamento  */
function search() {
  let destino = localStorage.getItem("place");

  console.log(destino);

  fetch("/build/js/destinos.json")
    .then((res) => res.json())
    .then((data) => {
      let result = data.filter((data) => data.depto == destino.toLowerCase());

      console.log(result);

      valid(result);
    });
}

/* valida resultados de busqueda  */

function valid(result) {
  if (result.length == 0) {
    Swal.fire({
      icon: "error",
      title: "No hay destinos ",

      text: "Al momento no hay destinos ingresados",
      position: "top",
      confirmButtonColor: "blue",
      showConfirmButton: false,
    });

    /* aguarda 1.5s y redirige al home si no hay resultado  */
    setTimeout(() => {
      location.href = "/";
    }, 1500);
  } else {
    viewHtml(result);
  }
}

function viewHtml(result) {
  let spinner = `<div class="sk-circle">
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>`;
  container.innerHTML = spinner;
  setTimeout(() => {
    container.innerHTML = "";
    titulo.textContent = localStorage.getItem("place");

    result.forEach((element) => {
      container.innerHTML += ` <!-- card Travel -->
      <div class="travel-card two">
      <div class="travel-img">
      <img src="${element.picture}" alt="img" />
    </div>
        <div class="t-body">
          <div class="most-visited ${element.class}">${element.categoria}</div>
    
          <div class="ti-card"><h3>${element.place}</h3></div>
    
          <div class="description">
            <div>
              <img src="build/img/bus-solid.svg" alt="" />
              <p>Transporte</p>
            </div>
            <div>
              <img src="build/img/hotel-solid.svg" alt="" />
              <p>Hospedaje</p>
            </div>
            <div>
              <img src="build/img/mug-saucer-solid.svg" alt="" />
              <p>Desayuno Incluido</p>
            </div>
          </div>
          <button class="btn price" id= ${element.id}> U$S ${element.precio}</button>
        </div>
      </div>
      <!-- fin card travel  -->`;
    });
    localStorage.removeItem("place");
  }, 1500);
}
