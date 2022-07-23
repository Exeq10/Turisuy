document.addEventListener("DOMContentLoaded", () => {
  loadDest();
});

/* carga todos los destinos   */
function loadDest() {
  fetch("/build/js/destinos.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
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
        <button class="btn price" id= "${element.id}"> U$S ${element.precio}</button>
      </div>
    </div>
    <!-- fin card travel  -->`;
      });
    });
}
