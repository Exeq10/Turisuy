document.addEventListener("DOMContentLoaded", () => {
  load();
});

const container = document.getElementById("entryContainer");

function load() {
  fetch("/build/js/entrys.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        container.innerHTML += `<!-- entry -->
        <div class=" --flexC wow animate__animated  animate__bounceInLeft ">
          <img  src="${element.picture}" alt="" />
    
          <div class="text-entry ">
            <h4 class="subtitle --blue">${element.name}</h4>
    
            <p class="info-entry">
              ${element.shortdescription}
            </p>
            <button class= "viewentry btn" id="${element.id}">Ver más</button>
    
            <p class="author ">Autor: <span class ="--blue">${element.autor}</span></p>
          </div>
        </div>
        <!-- fin entry -->`;
      });
    });
}
