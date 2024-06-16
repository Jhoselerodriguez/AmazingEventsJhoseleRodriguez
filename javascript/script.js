// let miNombre = "Jhosele "
// let miApellido = "Rodriguez"
// let miEdad = 40
// let miMascota = "fifi"
// let edadMascota = 6

// console.log(miNombre)
// console.log(miApellido)
// console.log(miEdad)
// console.log(miMascota)
// console.log(edadMascota)

// let nombreCompleto = miNombre + miApellido

// let  textoPresentacion = "Hola mi nombre es " + nombreCompleto + " y tengo " + miEdad + " años, tengo una mascota que se llama " + miMascota + " y tiene " + edadMascota + " años de edad"

// console.log(textoPresentacion)

// let sumaEdades = miEdad + edadMascota
// let restaEdades = miEdad - edadMascota
// let productoEdades = miEdad * edadMascota
// let divisionEdades = miEdad / edadMascota

// pasos con Prompt()

// let miNombre = prompt("Cual es tu nombre?")
// let miApellido = prompt("Cual es tu apellido?")
// let miEdad = prompt("Cual es tu edad?")
// let miMascota = prompt("Cual es el nombre de tu mascota?")
// let edadMascota = prompt("Cual es la edad de tu mascota?")

// console.log(miNombre)
// console.log(miApellido)
// console.log(miEdad)
// console.log(miMascota)
// console.log(edadMascota)

// let nombreCompleto = miNombre + " " + miApellido

// let  textoPresentacion = "Hola mi nombre es " + nombreCompleto + " y tengo " + miEdad + " años, tengo una mascota que se llama " + miMascota + " y tiene " + edadMascota + " años de edad"

// console.log(textoPresentacion)

// let sumaEdades = miEdad + edadMascota
// let restaEdades = miEdad - edadMascota
// let productoEdades = miEdad * edadMascota
// let divisionEdades = miEdad / edadMascota

// console.log(sumaEdades)
// console.log(restaEdades)
// console.log(productoEdades)
// console.log(divisionEdades)


let alumno = {
    altura: 1.65,
    nombre: "Carlos",
    edad: 28,
    nacionalidad: "Mexicano",
    calificaciones: "Excelente"
}
console.table([alumno.nombre, alumno.edad, alumno.altura, alumno.nacionalidad, alumno.calificaciones])

let mascota = {
    velocidad: "20k/h",
    nombre: "fifi",
    edad: 6,
    hijos: 0,
    comidaFavorita: "Croquetas"
}

console.table([mascota.nombre, mascota.velocidad,mascota.edad,mascota.hijos,mascota.comidaFavorita])


let frutas=["banana", "sandia", "cereza", "uva", "pera"]

console.log(frutas)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros=[1423, 2234, 123, 4234, 345345]

console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia=["papa", "mama", "abuelo", "hijo", "hermanos"]

console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio = "yo merende una " + frutas[1] + " y yo vi " + numeros[2] + " de ellas en la granja con mis " + familia[4]
console.log(textoAleatorio)


let miEdad = prompt("Ingresa tu edad")
let compañeroEdad = prompt("Ingresa la edad de tu compañero")

let edadesIguales = "Mi edad es igual a la de mi compañero: " + (miEdad==compañeroEdad)
let soyMayor = "Mi edad es mayor a la de mi compañero: " + (miEdad>compañeroEdad)
let soyMenor = "Mi edad es menor a la de mi compañero: " + (miEdad<compañeroEdad)
console.log(edadesIguales)
console.log(soyMayor)
console.log(soyMenor)

let soyMayorDeEdad = miEdad>18

console.log("soy mayor de edad "+soyMayorDeEdad)


let edadPersona = prompt("Ingresa tu edad")
let alturaPersona = prompt("Ingresa tu altura")

let puedeSubir= (edadPersona>6) && (alturaPersona>120)
console.log("Puede subir a la atracción: "+puedeSubir)

let pases = prompt("Ingresa tu pase (VIP, NORMAL, LIMITADO)")
let dinero = prompt("Ingresa tu saldo disponible")

let puedePasar= (pases=="vip") || (dinero>1000)
console.log("La persona puede pasar: "+puedePasar)