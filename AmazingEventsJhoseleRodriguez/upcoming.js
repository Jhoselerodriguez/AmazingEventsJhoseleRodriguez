
import { inicializarFiltrosUp,aplicarFiltrosUp } from "./functions.js";

export let postersupcoming = document.getElementById("tarjeta2");
export let arrFiltUp = [];
export let arrObjetosUp = [];
export let buscarUp = document.getElementById("search2")

fetch("https://aulamindhub.github.io/amazing-api/events.json")
.then(response => response.json())
.then(data => { 


  let arrayUpcoming = {}
      arrayUpcoming.events = []
      for (let index = 0; index < data.events.length; index++) {
        
        if(data.events[index].date > data.currentDate){
          arrayUpcoming.events.push(data.events[index])
      
    }
  }

  console.log(arrayUpcoming)
  
  inicializarFiltrosUp(arrayUpcoming);
  aplicarFiltrosUp(arrayUpcoming);

  })




















