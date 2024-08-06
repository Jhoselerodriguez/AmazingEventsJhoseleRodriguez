

import {inicializarFiltros,aplicarFiltros} from "./functions.js"

export let postersHome = document.getElementById("tarjeta1")

export let arrFilt = []
export let arrObjetos = []
export let buscar = document.getElementById("search")

fetch("https://aulamindhub.github.io/amazing-api/events.json")
        .then(response => response.json())
        .then(data => { 
        
          inicializarFiltros(data);
          aplicarFiltros(data); 
        })

 