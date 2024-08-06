
import {arrFilt} from "./home.js"
import {arrObjetos} from "./home.js"
import {buscar} from "./home.js"
import { postersHome } from "./home.js";

export function filtrarChecks(data){
  let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;  
    }
   }

export function crearChecks(data){
  let checksHome = [...new Set(data.events.map(evento => evento.category))];
    let cajaCategoria = document.getElementById("Category")
    checksHome.forEach(categoria => {
      let label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = categoria;

      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.value = categoria;
      input.addEventListener("change", () => aplicarFiltros(data));

      label.appendChild(input);
      cajaCategoria.appendChild(label);

  });
}
   
export function filtrarTexto(data) {

  console.log("hola");
  
  let texto = document.getElementById("search").value.toLowerCase();
  return data.events.filter(evento => 
      evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
  ); 
}

export function aplicarFiltros(data) {
    
  let filtradosPorTexto = filtrarTexto(data);
  let filtradosPorChecks = filtrarChecks(data);
  
  // Combina los resultados de ambos filtros
  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  
  
  pintar({ events: filtradosCombinados });
  if(postersHome.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :("
    postersHome.appendChild(h4)
    
  }

}

export function pintar(data){

  let postersHome = document.getElementById("tarjeta1")
   postersHome.innerHTML="";
   data.events.forEach(evento => {
    let carta = document.createElement("div")
    carta.setAttribute("class", "card anim") 
    carta.innerHTML = `<img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price + "$"}</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>`

    postersHome.appendChild(carta)


 });
}

export function inicializarFiltros(data) {
  crearChecks(data);
  document.getElementById("search").addEventListener("keyup", () => aplicarFiltros(data));
}


// Upcoming Events

import {arrFiltUp} from "./upcoming.js";
import {arrObjetosUp} from "./upcoming.js";
import {buscarUp} from "./upcoming.js";
import {postersupcoming} from "./upcoming.js"


export function crearChecksUp(data){
  let categorias = [...new Set(data.events.map(evento => evento.category))];
  let categoriaup = document.getElementById("Category2")
  
  categorias.forEach(categoria => {
    let label = document.createElement("label");
    label.className = "form-check-label";
    label.textContent = categoria;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input";
    input.value = categoria;
    input.addEventListener("change", () => aplicarFiltrosUp(data));

    label.appendChild(input);
    categoriaup.appendChild(label);})

  }

  export function filtrarTextoUp(data) {
    
    console.log("hola");
  
    let texto = document.getElementById("search2").value.toLowerCase();
    return data.events.filter(evento => 
        evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
    );
  }
  
export function filtrarChecksUp(data){
    let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;
   
 }
 }

export function aplicarFiltrosUp(data) {
    
  let filtradosPorTexto = filtrarTextoUp(data);
  let filtradosPorChecks = filtrarChecksUp(data);
  
  // Combina los resultados de ambos filtros
  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  pintarUp({ events: filtradosCombinados });
  if(postersupcoming.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :["
    postersupcoming.appendChild(h4)
    
  }
}

export function pintarUp(data){
  let postersupcoming = document.getElementById("tarjeta2")
      postersupcoming.innerHTML = ""
      data.events.forEach(evento => {
        let carta1 = document.createElement("div");
    carta1.setAttribute("class", "card anim")
  
    carta1.innerHTML = `<img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price}$</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>`
  
              postersupcoming.appendChild(carta1)
  
            });
          }

export function inicializarFiltrosUp(data) {
            crearChecksUp(data);
            document.getElementById("search2").addEventListener("keyup", () => aplicarFiltrosUp(data));
          }



// Past Events
import {arrFiltPast} from "./past.js";
import {arrObjetosPast} from "./past.js";
import {buscarPast} from "./past.js";
import {postersPa} from "./past.js";

export function crearChecksPast(data) {

  let categorias = [...new Set(data.events.map(evento => evento.category))];
  let contenedorChecks = document.getElementById("Category3");
  categorias.forEach(categoria => {
      let label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = categoria;

      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.value = categoria;
      input.addEventListener("change", () => aplicarFiltrosPast(data));

      label.appendChild(input);
      contenedorChecks.appendChild(label);

  });
}

export function filtrarChecksPast(data) {

  let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;
  }
}

 export function filtrarTextoPast(data){
  
  let texto = document.getElementById("search3").value.toLowerCase();
  return data.events.filter(evento => 
      evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
  );
}

export function aplicarFiltrosPast(data) {
  let filtradosPorTexto = filtrarTextoPast(data);
  let filtradosPorChecks = filtrarChecksPast(data);
  

  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  pintarPast({ events: filtradosCombinados });
  if(postersPa.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :("
    postersPa.appendChild(h4)
    
  }
}

export function pintarPast(data){
  
  let postersPa = document.getElementById("tarjeta3")
      postersPa.innerHTML = "";
      data.events.forEach(evento => { 
    let carta1 = document.createElement("div")
    carta1.setAttribute("class", "card anim")
  
    carta1.innerHTML = `<img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price}$</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>`
  
        postersPa.appendChild(carta1)
  
  });
  }

export function inicializarFiltrosPast(data) {
    crearChecksPast(data);
    document.getElementById("search3").addEventListener("keyup", () => aplicarFiltrosPast(data));
  }
  
