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
        id,
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
      <div class="item-card ">

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
              <h3 class="subtitle --blue" id = 'nameD'>${place}</h3>

             
              <div class="text">  <p>${description}.</p></div>

              <h4 class="subtitle --blue">Servicios</h4>


              <div class="servicesIcon">
              
               
               
              ${viewService(servicios)}
                   
               

              </div>
              <div class="amount">
                  <label for="quantity">Personas
                  <input type="number" name="quantity" id="quantity" min="1" placeholder="0" selected 
                  onblur="getvalue()" onchange="getvalue()"></label>
                      <button class="btn" id="total" value="${precio}">U$S ${precio}</button>
                      <button class="btn d-none" id="add" onclick= "AddCart()" >Agregar al Carrito</button>
                      
              </div>

              </div>
              
            

     
      </div>
      

      


`;
    });
}

function getvalue() {
  let total = document.getElementById("total");
  let image = document.getElementById("p-image");
  let nameD = document.getElementById("nameD");

  let quantity = document.getElementById("quantity");
  let buttonAdd = document.getElementById("add");
  let numOne = parseInt(quantity.value);
  let numtwo = total.value;

  console.log(numtwo);

  let result = numOne * numtwo;

  /* le asigno el valor de la operacion anterior al valor de total para seguir operando  */
  numtwo = result;

  console.log(result);

  total.innerHTML = `U$S ${result}`;

  buttonAdd.classList.remove("d-none");

  const Destino = {
    id: localStorage.getItem("idDestino"),
    nombre: nameD.textContent,
    image: image.src,
    valor: result,
  };
  /* retorno el objeto destino para tomarlo en otra funcion */
  return Destino;
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

function AddCart() {
  /* tomo el objeto retornado en la funcion getvalue  */
  let resultado = getvalue();

  const { nombre, image, valor } = resultado;

  Swal.fire({
    title: `Desea agregar ${nombre} con un valor de U$S ${valor}`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Agregar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      /* trae desde el local la informacion de CART */
      let subCart = localStorage.getItem("CART");

      /* la convierto en Objeto  */
      cart = JSON.parse(subCart);

      /* verifico si existe informacion de lo contrario crea un array vacio */
      if (cart == null) {
        var cart = [];
        localStorage.setItem("CART", JSON.stringify(cart));
        cart = [resultado];
        localStorage.setItem("CART", JSON.stringify(cart));
      } else {
        /* al existir el array le digo que cart es igual a cart + el resultado  */
        cart = [...cart, resultado];

        console.log(cart);

        /* seteo nuevamente el local para guardar  la info  */
        localStorage.setItem("CART", JSON.stringify(cart));
      }

      Swal.fire("Añadido!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Se canceló su orden", "", "warning");
    }
  });
}

/* falta crear boton para ir al cart  */
