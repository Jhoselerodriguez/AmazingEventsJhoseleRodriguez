//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

//let primero = 20;
//let segundo = 25;

//if (primero>segundo) {
 //console.log (primero + " es mayor que " + segundo)  
//}
//else{
 //   console.log( primero + " no es mayor que " + segundo)
//}


//2. Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.


//let primero = 20;
//let segundo = 25;

//if (primero===segundo) {
// console.log (primero + " es igual a  " + segundo)  
//}
//else{
//    console.log( primero + " es diferente que " + segundo)
//}

//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

//let primero = 20;
//let segundo = 25;

//if (primero===segundo) {
// console.log (primero + " es igual a " + segundo)  
//}
//else if(primero>segundo){ 
//    console.log( primero + " es mayor que " + segundo)
//}
//else{
//    console.log( primero + " es menor que " + segundo)
//}

//4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico.

//let primero = 20;
//let segundo = 15;
//let tercero = 30;

//if (primero<segundo && primero<tercero) {
//    console.log(primero + " es el mas chico")
//}
//else if(segundo<primero && segundo<tercero){
//    console.log(segundo + " es el mas chico")
//}
//else{
//    console.log(tercero + " es el mas chico")
//}

//5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

//let persona1 = { name:"Jhosele", age: 13, height: 1.65};
//let persona2 = { name:"Jose D", age: 14, height: 1.64};

//if (persona1.age < persona2.age){
//    console.log(persona2.name + " es la mayor de edad")
//}
//else{
//    console.log(persona1.name + " es la mayor de edad")
//}
//if (persona1.height < persona2.height){
//    console.log(persona2.name + " es mas alto")
//}
//else{
//    console.log(persona1.name + " es mas alto")
//}

//6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

//let nombre = prompt("Ingresar nombre");
//let edad = parseInt(prompt("Ingrese la edad"));
//let altura = prompt("Ingrese la altura en centimetros");
//let vision = prompt("Ingrese rango de vision del 1 al 10");

//if(edad < 18 || altura < 150 || vision < 8){
//    console.log(nombre + " no esta capacitado")
//}
//else{
//    console.log(nombre + " esta capacitado")
//}

//7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.

// let name = prompt("Escribe tu nombre")

// if (name == "Jhosele"){
//     console.log(name + " Tienes el ingreso libre Bienvenido");
// }
// else {

//     let pase = confirm("Si tiene pase VIP presione aceptar")

//     if (pase == true) {
//         console.log(name + " Bienvenidos!");
//     }
//     else{
//         let entrada = confirm("Posee entradas")  
    
//       if (entrada == true){
//           let entrada1 = confirm("Desea utilizarla");
//           if (entrada1 == true){
//               console.log(name + " Bienvenidos!!")
//           }
//           else{
//               console.log(name + " No puede entrar")
//           }  
//         }
//       else{
//           let comprar = confirm("Desea comprar entradas")

//           if (comprar == true){
//             let dinero = prompt("Cuanto dinero disponible tiene? debe ser mayor a $1000")
//             if (dinero > 1000){
//                 console.log("Venta de entrada y Bienvenidos")
//             }
//             else{
//                 console.log("Rechazo de venta")
//             }
            
//           }
//           else {
//             console.log(name + " No puede entrar")
//           }
//         }  
//     }
// }



// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente.

// let numeroIncognita = 5

// let numeroIngresado = prompt("Ingresar un numero del 1 al 10")

// if  (numeroIngresado == numeroIncognita) {
//        console.log("“Ganaste, haz adivinado el número.”")   
//     }

// else if (numeroIngresado<numeroIncognita){ 
//        console.log("el numero ingresado es menor, vuelve a intentarlo")
//     }

// else {
//        console.log("el numero ingresado es mayor, vuelve a intentarlo")
//        }

// numeroIngresado = prompt("Ingresar un numero del 1 al 10")

// if  (numeroIngresado == numeroIncognita) {
//       console.log("“Ganaste, haz adivinado el número.”")   
//       }
       
// else if (numeroIngresado<numeroIncognita){ 
//        console.log("el numero ingresado es menor, vuelve a intentarlo")
//        }
       
// else {
//     console.log("el numero ingresado es mayor, vuelve a intentarlo")
//      }

//      numeroIngresado = prompt("Ingresar un numero del 1 al 10")

// if  (numeroIngresado == numeroIncognita) {
//       console.log("“Ganaste, haz adivinado el número.”")   
//       }
       
// else if (numeroIngresado<numeroIncognita){ 
//        console.log("el numero ingresado es menor, vuelve a intentarlo")
//        }
       
// else {
//     console.log("el numero ingresado es mayor, vuelve a intentarlo")
//      }

// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.     


