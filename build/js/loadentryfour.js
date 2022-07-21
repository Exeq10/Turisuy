document.addEventListener("DOMContentLoaded", () => {
  loadentrys();
});

const blog = document.getElementById("blog");

/* carga 4 destinos    */
function loadentrys() {
  fetch("/build/js/entrys.json")
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < 4; index++) {
        const element = data[index];

        blog.innerHTML += ` <!-- entry -->
        <div class="entry  wow animate__animated  animate__bounceInLeft animate__delay-${index}s">
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
        <!-- fin entry --> `;
      }
    });
}
