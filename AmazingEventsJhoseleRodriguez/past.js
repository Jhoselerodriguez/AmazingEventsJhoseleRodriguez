const data = {
    currentDate: "2023-01-01",
    events: [
      {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0,
      },
      {
        _id: "639c723b992482e5f2834beb",
        name: "Korean style",
        image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        date: "2023-08-12",
        description:
          "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        price: 10,
        __v: 0,
        estimate: 42756,
      },
      {
        _id: "639c723c992482e5f2834bed",
        name: "Jurassic Park",
        image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        date: "2022-11-02",
        description:
          "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        price: 15,
        __v: 0,
        assistance: 65892,
      },
      {
        _id: "639c723c992482e5f2834bef",
        name: "Parisian Museum",
        image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        date: "2023-11-02",
        description:
          "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 8200,
        estimate: 8200,
        price: 3500,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf1",
        name: "Comicon",
        image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        date: "2022-02-12",
        description:
          "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
        place: "Room C",
        capacity: 120000,
        assistance: 110000,
        price: 54,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf3",
        name: "Halloween Night",
        image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        date: "2023-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf5",
        name: "Metallica in concert",
        image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        date: "2023-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf7",
        name: "Electronic Fest",
        image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        date: "2022-01-22",
        description:
          "The best national and international DJs gathered in one place.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        assistance: 110300,
        price: 250,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bf9",
        name: "10K for life",
        image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Soccer field",
        capacity: 30000,
        assistance: 25698,
        price: 3,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bfb",
        name: "15K NY",
        image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
        date: "2023-03-01",
        description:
          "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 3000000,
        price: 3,
        __v: 0,
        estimate: 2569800,
      },
      {
        _id: "639c723d992482e5f2834bfd",
        name: "School's book fair",
        image: "https://i.postimg.cc/Sst763n6/book1.jpg",
        date: "2023-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        estimate: 123286,
        price: 1,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bff",
        name: "Just for your kitchen",
        image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
        date: "2022-11-09",
        description:
          "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
        place: "Room D6",
        capacity: 130000,
        assistance: 90000,
        price: 100,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c01",
        name: "Batman",
        image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        date: "2022-3-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Room D1",
        capacity: 11000,
        assistance: 9300,
        price: 225,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c03",
        name: "Avengers",
        image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
        date: "2023-10-15",
        description:
          "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
        __v: 0,
      },
    ],
  };

let myArray = []
for(let i = 0; i < data.events.length; i++){
    if(data.events[i].date < data.currentDate){
      myArray.push(data.events[i])
    }
  }  


  for (let i = 0; i < myArray.length; i++) {
    let postersPa = document.getElementById("tarjeta3")

    let postersPast = document.createElement("div")
        postersPast.setAttribute("class", "card")
   

    postersPast.innerHTML = `<img src= ${myArray[i].image} class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${myArray[i].name}</h5>
              <p class="card-text">${myArray[i].description}</p>
               <div class="mt-auto d-flex justify-content-between">
                 <p class="card-text"> Price: ${myArray[i].price} $ </p>
                 <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
               </div>
            </div>`
 
            postersPa.appendChild(postersPast)       

  }

  crearCheckList()

  function crearCheckList(){
   let categorias = document.getElementById("Category")
   CheckList = []
   for(let i = 0; i < myArray.length; i++){
 
    CheckList.push(myArray[i].category) 

   }


   for(let i = 0; i< CheckList.length;i++){
     let check = document.createElement("div")
     check.innerHTML = `<input class="form-check-input" type="checkbox" value="" id="inlineCheckbox${i}" onclick="filtrarChecks(${i})">
             <label class="form-check-label" for="inlineCheckbox${i}">
               ${CheckList[i]}
             </label>`
       categorias.appendChild(check)
   }
 
  }


  let arrFilt = []
  let arrObjetos = []
  function filtrarChecks(num){
    let caja = document.getElementById("tarjeta3")
    caja.innerHTML = ""
  
     let check = document.getElementById(`inlineCheckbox${num}`)
  
     if(check.checked){
  
  
      for(let i = 0; i <  myArray.length; i++){
  
        if(CheckList[num] ==  myArray[i].category){
          arrObjetos.push( myArray[i])
  
          console.log(arrObjetos)
  
        }
       }
  
    }else{
      for(let i = 0;i<arrObjetos.length;i++){
        if(arrObjetos[i].category.includes(CheckList[num])){
          arrObjetos.splice(i,2)
          
        }
      }
      console.log(arrObjetos)
    }
  
  
    if(check.checked){
  
  
      for(let i = 0; i < myArray.length; i++){
  
        if(CheckList[num] == myArray[i].category){
          arrFilt.push(CheckList[num])
  
          console.log(arrFilt)
  
          
          for(let j = 0; j < arrFilt.length;j++){
            for(let i = 0; i < myArray.length;i++){
              if(myArray[i].category == arrFilt[j]){
                
                let carta = document.createElement("div")
                carta.setAttribute("class", "card anim")
            
                carta.innerHTML = `<img src=${myArray[i].image} class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${myArray[i].name}</h5>
                            <p class="card-text">${myArray[i].description}</p>
                            <div class="precio d-flex justify-content-around flex-wrap">
                              <h4 class="valor">${myArray[i].price + "$"}</h4>
                           <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
                            </div>
                          </div>`
            
                caja.appendChild(carta)
  
              }
            }
          }
          
  
          break
        }
       }
  
    }else{
      
      let numero = arrFilt.indexOf(CheckList[num])
      arrFilt.splice(numero,1)
      console.log(arrFilt)
      for(let j = 0; j < arrFilt.length;j++){
        for(let i = 0; i < myArray.length;i++){
          if(myArray[i].category == arrFilt[j]){
            
            let carta = document.createElement("div")
            carta.setAttribute("class", "card anim")
        
            carta.innerHTML = `<img src=${myArray[i].image} class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${myArray[i].name}</h5>
                        <p class="card-text">${myArray[i].description}</p>
                        <div class="precio d-flex justify-content-around flex-wrap">
                          <h4 class="valor">${myArray[i].price + "$"}</h4>
                        <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
                        </div>
                      </div>`
        
            caja.appendChild(carta)
  
          }
        }
      }
      if(arrFilt.length == 0){
        
   for(let i = 0; i < myArray.length; i++){
    let caja = document.getElementById("tarjeta3")
  
    let carta = document.createElement("div")
    carta.setAttribute("class", "card anim")
  
    carta.innerHTML = `<img src=${myArray[i].image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${myArray[i].name}</h5>
                <p class="card-text descripciones">${myArray[i].description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${myArray[i].price + "$"}</h4>
                <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>`
  
    caja.appendChild(carta)
  
  
  }
      }
    }
     
   }
  

   let buscar = document.querySelector(".search")

   function filtrarTexto(){
     let caja = document.getElementById("tarjeta3")
     caja.innerHTML = ""
   if(arrFilt.length == 0){
       for(let i = 0; i < myArray.length;i++){
         if(myArray[i].name.toLowerCase().includes(buscar.value.toLowerCase()) || myArray[i].description.toLowerCase().includes(buscar.value.toLowerCase())){
         
           let carta = document.createElement("div")
           carta.setAttribute("class", "card anim")
         
           carta.innerHTML = `<img src=${myArray[i].image} class="card-img-top" alt="...">
                     <div class="card-body">
                       <h5 class="card-title titulos">${myArray[i].name}</h5>
                       <p class="card-text descripciones">${myArray[i].description}</p>
                       <div class="precio d-flex justify-content-around flex-wrap">
                         <h4 class="valor">${myArray[i].price + "$"}</h4>
                       <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
                       </div>
                     </div>`
         
           caja.appendChild(carta)
         }
         }
         if(caja.innerHTML == ""){
          let nada = document.createElement("h4")
          nada.textContent = "Lo sentimos, no hay cartas para mostrar :["
          caja.appendChild(nada)
        }
   }else{
     for(let i = 0; i < arrObjetos.length;i++){
       if(arrObjetos[i].name.toLowerCase().includes(buscar.value.toLowerCase()) || arrObjetos[i].description.toLowerCase().includes(buscar.value.toLowerCase())){
       
         let carta = document.createElement("div")
         carta.setAttribute("class", "card anim")
       
         carta.innerHTML = `<img src=${arrObjetos[i].image} class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title titulos">${arrObjetos[i].name}</h5>
                     <p class="card-text descripciones">${arrObjetos[i].description}</p>
                     <div class="precio d-flex justify-content-around flex-wrap">
                       <h4 class="valor">${arrObjetos[i].price + "$"}</h4>
                     <a href="./details.html?name=${myArray[i].name}&description=${myArray[i].description}&date=${myArray[i].date}&category=${myArray[i].category}&place=${myArray[i].place}&capacity=${myArray[i].capacity}&assistance=${myArray[i].assistance}&price=${myArray[i].price}&image=${myArray[i].image}&currentDate=${data.currentDate}&estimate=${myArray[i].estimate}" class="btn btn-primary">Details</a>
                     </div>
                   </div>`
       
         caja.appendChild(carta)
       }
       }
       if(caja.innerHTML == ""){
        let nada = document.createElement("h4")
        nada.textContent = "Lo sentimos, no hay cartas para mostrar :["
        caja.appendChild(nada)
      }
   
   }
   
   
   }
   
   buscar.addEventListener("keyup", filtrarTexto)
