//Ejercicios funciones 
//Ejercicio 1

function idCard() {
    let nombre = 'Mariana';  
    let ubicacion = 'Guadalajara';
    let pasatiempo = 'Ver series';
    return 'Hola mi nombre es ${nombre}, vivo en ${ubicacion} y disfruto ${pasatiempo}';
}

console.log(idCard());

// Otra manera de hacerlo
nombre = prompt (" ¿Cómo te llamas?");
ubicacion = prompt ("¿Donde vives?");
pasatiempo = prompt ("¿Cual es tu pasatiempo?");

function idCard (x, y, z) {
    nombre=x;
    ubicacion=y;
    pasatiempo=z;
    console.log ("Tu nombre es: ${nombre} vives en: ${ubicacion} y tu pasatiempo es: ${pasatiempo}");
}

idCard (nombre, ubicacion, pasatiempo);


// Ejercicio 2

function calcMascotAge(dogName = 'tu perro', humanYears = NaN) {
    let dogEq = 7;
    let dogYears = humanYears * dogEq;
    return 'La edad de ${dogName} es ${dogYears} años perrunos';
}

console.log(calcMascotAge('Kaliope', 2));
console.log(calcMascotAge()); 

// Otra manera de hacerlo
var edadActual = prompt ("ingrese edad de su mascota;");
var edadEquivalente = 7;
var menaje = "La edad equivalente de tu perro es";

function calculoDeEdad(x,y) {
    var edad = edadActual* edadEquivalente;

    console.log ("${menaje} ${edad}");
}

calculoDeEdad();
