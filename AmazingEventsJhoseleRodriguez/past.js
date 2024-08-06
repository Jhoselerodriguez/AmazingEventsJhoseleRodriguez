
import {inicializarFiltrosPast,aplicarFiltrosPast} from "./functions.js";

export let postersPa = document.getElementById("tarjeta3");
export let arrFiltPast = [];
export let arrObjetosPast = [];
export let buscarPast = document.getElementById("search3");

fetch("https://aulamindhub.github.io/amazing-api/events.json")
.then(response => response.json())
.then(data => { 

  let arrayPast = {}
  arrayPast.events = []
  for (let index = 0; index < data.events.length; index++) {
    
    if(data.events[index].date < data.currentDate){
      arrayPast.events.push(data.events[index])
      
    }
    
  }
  console.log(arrayPast);
      
        inicializarFiltrosPast(arrayPast);
        aplicarFiltrosPast(arrayPast);

  });
