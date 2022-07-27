document.addEventListener("DOMContentLoaded", () => {
  search();
});

const item = document.getElementById("item");

function search() {
  let destino = localStorage.getItem("idDestino");

  fetch("/build/js/destinos.json")
    .then((res) => res.json())
    .then((data) => {
      let result = data.filter((data) => data.id == destino);

      console.log(result);

      const {
        picture,
        place,
        description,
        categoria,
        precio,
        imgThumb,
        imgThumb2,
      } = result[0];

      const { services } = result[0];

      console.log(typeof services);
      console.log(services);

      let servicios = services[0];

      item.innerHTML = `
      <div class="item-card">

          <div class="img_item">
              <img id="p-image" src="${picture}" alt="">
          </div>




          <div class="galery-thumb">


              <img  class = "thumb"id="img-1" src="${picture}" alt="">
              <img class = "thumb" id="img-2" src="${imgThumb}" alt="">
              <img class = "thumb"id="img-3"src="${imgThumb2}" alt="">
          </div>


      </div>





      <div class="info-item">

          <div class="action-item">
              <h3 class="subtitle --blue">${place}</h3>

             
              <div class="text">  <p>${description}.</p></div>

              <h4 class="subtitle --blue">Servicios</h4>


              <div class="servicesIcon">
              
               
               
              ${viewService(servicios)}
                   
               

              </div>
              <div class="amount">
                  <label for="quantity">Personas
                  <input type="number" name="quantity" id="quantity" min="1" placeholder="0" selected 
                      onchange="getvalue()"></label>
                      <button class="btn" id="total" value="${precio}">U$S ${precio}</button>
              </div>

              </div>
              
            

     
      </div>
      



`;
    });
}

function getvalue() {
  let quantity = document.getElementById("quantity");
  let total = document.getElementById("total");
  let numOne = parseInt(quantity.value);
  let numtwo = total.value;

  console.log(numtwo);

  let result = numOne * numtwo;

  console.log(result);

  total.innerHTML = `U$S ${result}`;
}

/* funcion que itera en Services y muestra los servicios de cada destino / se ejecuta luego de que el html esta presente para insertar los iconos  */
function viewService(service) {
  setTimeout(() => {
    const servicesIcon = document.querySelector(".servicesIcon");
    servicesIcon.innerHTML = "";

    /* recorre el objeto para traer llave y valor del mismo  */

    for (const key in service) {
      if (Object.hasOwnProperty.call(service, key)) {
        const imgService = service[key]; /* valor */
        const nameService = key; /* llave */
        servicesIcon.innerHTML += `<div class="s-detail">
             <img src="${imgService}" alt="">
             <p>${nameService}</p>
         </div>`;
      }
    }
  }, 100);
}
