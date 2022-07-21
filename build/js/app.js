document.addEventListener("DOMContentLoaded", () => {
  scroll();
  Select();
  changeImg();
  selectTheme();
});

function selectTheme() {
  let dark = localStorage.getItem("clase");
  const body = document.querySelector("body");
  const buttonTheme = document.getElementById("theme");

  if (dark == "black") {
    body.classList.add("black");
    buttonTheme.src = "build/img/sun-solid.svg";
  }

  buttonTheme.addEventListener("click", () => {
    console.log(buttonTheme);

    if (body.classList.contains("black")) {
      if (dark != "") {
        body.classList.remove("black");
        localStorage.setItem("clase", "");
        buttonTheme.src = "build/img/moon-solid.svg";
      }
    } else {
      console.log(buttonTheme);
      body.classList.add("black");
      localStorage.setItem("clase", "black");
      buttonTheme.src = "build/img/sun-solid.svg";
    }
  });
}

let point = document.querySelector(".icon-top");

let limit = document.querySelector("#logo");

function scroll() {
  window.addEventListener("scroll", () => {
    if (limit.getBoundingClientRect().top < -785) {
      point.classList.add("visible");
      point.classList.remove("hide");
    } else {
      point.classList.remove("visible");
      point.classList.add("hide");
    }
  });
}

/* search */

let destino = document.getElementById("search");

const buscar = () => {
  if (destino.value != "") {
    let nombre = `${destino.value}`;

    localStorage.setItem("place", nombre);

    location.href = `/destinos.html `;
  } else {
    Swal.fire({
      icon: "error",
      title: "Debes ingresar un Destino ",
      width: "600",

      text: "Se recomienda buscar por Departamento",
      position: "top",
      confirmButtonColor: "blue",
      confirmButtonText: "Ok",
    });
  }
};

function Select() {
  window.addEventListener("click", (e) => {
    const click = e.target;

    if (click.classList.contains("price")) {
      localStorage.setItem("idDestino", click.id);
      location.href = "itemDestino.html";
    } else if (click.classList.contains("viewentry")) {
      localStorage.setItem("idEntry", click.id);
      location.href("itemDestino.html");
    } else {
      ("error");
    }
  });
}

/* cambia imagen en el item  */

function changeImg() {
  window.addEventListener("click", (e) => {
    let click = e.target;

    if (click.classList.contains("thumb")) {
      let imgChange = document.getElementById("p-image");

      console.log(click.src);
      imgChange.src = click.src;
    }
  });
}
