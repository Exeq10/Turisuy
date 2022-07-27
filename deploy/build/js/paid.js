document.addEventListener("DOMContentLoaded", () => {
  search();
});

const item = document.getElementById("item");

function search() {
  let destino = localStorage.getItem("idDestino");

  fetch("/build/js/destinos.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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

      console.log(precio);

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

                  <div class="s-detail">
                      <img src="build/img/bed-solid.svg" alt="">
                      <p>Hospedaje</p>
                  </div>
                  <div class="s-detail">
                      <img src="build/img/bed-solid.svg" alt="">
                      <p>Hospedaje</p>
                  </div>
                  <div class="s-detail">
                      <img src="build/img/bed-solid.svg" alt="">
                      <p>Hospedaje</p>
                  </div>
                  <div class="s-detail">
                      <img src="build/img/bed-solid.svg" alt="">
                      <p>Hospedaje</p>
                  </div>


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
