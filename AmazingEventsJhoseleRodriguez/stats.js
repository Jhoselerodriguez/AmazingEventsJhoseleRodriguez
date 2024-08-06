let maxAsis = document.querySelector(".maxAsis")
let minAsis = document.querySelector(".minAsis")
let maxCap = document.querySelector(".maxCap")
fetch("https://aulamindhub.github.io/amazing-api/events.json")
.then(response => response.json())
.then(data => {
    let porcentajes = []
    let cap = []
    for (let index = 0; index < data.events.length; index++) {
        if(data.events[index].date < data.currentDate){
       let capacidad = data.events[index].capacity
       
       let asistencia = data.events[index].assistance
       let porcentaje1 = (asistencia * 100) / capacidad
       porcentajes.push(porcentaje1)
       
       cap.push(capacidad)
    }
}    

let indexMaxValue = porcentajes.reduce((maxIndex, currentValue, currentIndex, arr) => 
    currentValue > arr[maxIndex] ? currentIndex : maxIndex, 0);
    maxAsis.textContent = data.events[indexMaxValue].name
    console.log(`el evento con mayor asistencia es: ${data.events[indexMaxValue].name}`);

let indexMaxValue2 = porcentajes.reduce((minIndex, currentValue, currentIndex, arr) => 
    currentValue < arr[minIndex] ? currentIndex : minIndex, 0);
    minAsis.textContent = data.events[indexMaxValue2].name
    console.log(`el evento con menor asistencia es: ${data.events[indexMaxValue2].name}`);

let indexMaxValue3 = cap.reduce((maxIndex, currentValue, currentIndex, arr) => 
    currentValue > arr[maxIndex] ? currentIndex : maxIndex, 0);
    maxCap.textContent = data.events[indexMaxValue3].name
    console.log(`el evento con mayor asistencia es: ${data.events[indexMaxValue].name}`);
    

    
})