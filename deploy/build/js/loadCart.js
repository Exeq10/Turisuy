document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  deleteItem();
});

const bodyTable = document.getElementById("bodyTable");

function loadCart() {
  let result = "";

  if ((result = localStorage.getItem("CART"))) {
    cart = JSON.parse(result);

    cart.forEach((element) => {
      const { id, image, nombre, valor } = element;

      bodyTable.innerHTML += `<tr>
  
  <td class="img-table"><img src=${image} alt=""></td>
  <td class="name-table">${nombre}</td>
  <td class="price-table">U$S ${valor} </td>
  <td><button  id = ${id} class=" btn-close"></button></td>
</tr>`;
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "El carrito está vacio ",
      width: "600",

      position: "top",
      confirmButtonColor: "blue",
      confirmButtonText: "Ok",
    });

    setTimeout(() => {
      location.href = "/";
    }, 1000);
  }
}

/* falta funcion de eliminar y vaciar carrito  */

function deleteCart() {
  localStorage.clear();
  bodyTable.innerHTML = "";

  Swal.fire({
    icon: "succes",
    title: "El carrito está vacio ",
    width: "600",

    position: "top",
    confirmButtonColor: "blue",
    confirmButtonText: "Ok",
  });

  setTimeout(() => {
    location.href = "/";
  }, 2000);
}
