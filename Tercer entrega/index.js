let boton2 = document.getElementById("btnZanahoria")
boton2.onclick = () => {console.log("Click")};

const verduras = document.querySelector('#verduras');

fetch("./database/verduras.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${producto.img}">
            <div>
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
            </div>

        `;

        verduras.append(li);
        });
    });

const hortalizas = document.querySelector("#hortalizas");

fetch("./database/hortalizas.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${producto.img}">
        <div>
            <h4>${producto.nombre}</h4>
            <p>${producto.precio}</p>
            <p>Código: ${producto.id}</p>
        </div>
        <button type="button" id="btn${producto.nombre}"" class="btn btn-dark">Agregar</button>
    `;
  
        hortalizas.append(li);
      });
    });
  
const otros = document.querySelector("#otros");

fetch("./database/otros.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${producto.img}">
        <div>
            <h4>${producto.nombre}</h4>
            <p>${producto.precio}</p>
            <p>Código: ${producto.id}</p>
        </div>
        <button type="button" id="btn${producto.nombre}" class="btn btn-dark">Agregar</button>
    `;
  
        otros.append(li);
      });
    });

let boton1 = document.getElementById("btnLechuga")
boton1.onclick = () => {console.log("Click")};
