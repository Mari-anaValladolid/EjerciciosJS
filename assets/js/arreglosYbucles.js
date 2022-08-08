/*

Arreglos o Arrays , Matrices

=> Definicion
un arreglo o array, es un conjunto de datos que se pueden almacenar en una sola
variable.

cuando tenemos una variable, la usamos para almacenasr UN solo dato.
En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

Un array ya no es un tipo de dato primitivo, se considera un objeto porque es una estructura de datos



//Ejemplo 1
let nombre = "Mariana"; // Aquí se lamacena un solo dato

nombres = ["Felipe", "Ivonne", "Briana", "Zabdiel"]; 

//Ejemplo de un array con diferentes tipos de datos
array2 = ["Felipe", 30 "Ivonne", 49 "Briana", 28 "Zab"  24]

--Formas de crear un array --

1.- Primera forma

En esta primera forma nosotros creamos un array usando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos).

var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

var colores = new Array (6);
var marcaDeColores = new Array ("Mapita", "Prismasolor", "Blanca Nievaes", "Norma", "Crayola", "Pelikan"); 



2.- Segunda forma

La segunda forma se trata de crear el arreglo solo usando corchetes
[] Esta forma es la mas usada para crear arreglos en JS.

var marcaDeColores2 =  ["Mapita", "Prismasolor", "Blanca Nievaes", "Norma", "Crayola", "Pelikan"   ]; 

  -- Acceder a elementos de un array --
   *Antes de querer nuestros elementos de arreglo, hay que definir algunas cosas:
   - Posicion (Indice del arreglo de un elemento) de los elementos
*/

//Ejemplos de Arreglos

listaDePerritos = ["Chihuahua", "Mestizos", "Border Collie", "Pug"]; 

console.log("lista de Perritos"); 
console.log(listaDePerritos);

//Ejemplo de Arreglo 2

listaDelSuper = ["Leche", "Huevo", "Detergente", "Yogurt", "Aceite"]; 
console.log("listaDelSuper empieza con: "); 
console.log(listaDelSuper);

// 5 Arreglos 
listaPais  = ["Cores del Sur", "Holanda", "España", "Canada", "Alemania"];
console.log("listaPais"); 
console.log(listaPais);

videoJuegos = ["Halo", "Apex", "Fifa"];
console.log("videoJuegos");

listaPeliculas = ["El extraño mundo de Jack", "Como si fuera la primera vez", "Soul", "Encanto"];
console.log("listaPeliculas");

listaSeries = ["Hwarang", "HOLO", "Un amor tan hermoso", "El club de las madres"];
console.log("listaSeries");

listaSumas = ["5+2", "8+4", "10+2", "7+3"];
console.log("listaSumas");

/////////////
//Ejemplo de Arreglo 2

console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

//*Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion. 

/* 

Array Asociativo
Son arreglos donde cada elemento eta asociado, no solo con su indice, sino que tambien esta asignado con un identificador.

Sintaxis de un arreglo asosiativo


*/
let = propiedadesDeMiComputadora = {
   marca: "Azus", // La marca es mi identificados, "Azus" es mi valor
   procesador : "Intel cire i7",
   ram: "16 GB",
   almacenamiento: "1 TB",
   precio: "15000"
}

//Ejemplo de una Ecommerce
let = propiedadesDeMiComputadora = {
  marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
  modelo: "GL552JX",
  procesador: "Intel Core i7",
  ram: "16 GB",
  almacenamiento: "1 TB",
  precio: "15000"
}

console.log(propiedadesDeMiComputadora);
console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
console.log("La marca de la computadora que elegiste: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);


///////////////////////////
//Ejemplo de una Red Social
let publicacionRedSocial = {
  nombre: "Felipe",
  usuario: "@felipecontenis",
  fecha: "Agosto",
  likes: "5000",
  descripcion: "Esta es una bonita foto de lasagna",
  ubicacion: "Estado de Mexico"
}

console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);


/*
Metodos de los Arrays
En los arreglos, tenemos ciertos metodos o instrucciones, que nos van a permitir manipular los elementos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta ordenarlos.

La sintaxis basica del metodo es .nombreMetodo(valorAModificar);


podemos dividir estos metodos en 3:

  -Metodos transformadores 
  -Metodos accesorios
  -Metodos repetitivos (spoiler)

*/ 
console.log("//////////////////////////////////");
var arrayDeEjemplo = ["Manzanas", "Peras","Mangos","Mandarinas", "Uvas", "Sandia", "Fresas"];

console.log("Este es nuestro arreglo original de 7 elementos",
arrayDeEjemplo);

//Metodos transformadores


//Push(): Agrega un elemtos al final del arreglo
arrayDeEjemplo.push("Pitaya");
console.log("Agregamos la pitaya a nuestro arreglo de ejemplo:", arrayDeEjemplo);

//pop(): El metodo pop nos permite eliminar el ultimo metdo del arreglo
arrayDeEjemplo.pop(); // Con pop no hace falta especificar el dato
console.log("Eliminamos el ultimo elemento del arreglo",arrayDeEjemplo);

//unshift(): Agregamos uno o mas elementos al principio del arreglo
arrayDeEjemplo.unshift("Bananas","Tunas","Aguacate","Lichis");
console.log("Agregamos 4 elementos al principio del arreglo",
  arrayDeEjemplo);

  // shift(): Eliminar el primer elemento del arreglo
  arrayDeEjemplo.shift();
console.log("Eliminamos el primer elemento del arreglo",
  arrayDeEjemplo);

  //sort(): Ordenar los elementos del arreglo y devuelve el arreglo ya ordenado de forma ascendente
  arrayDeEjemplo.sort();
console.log("Este es mi arreglo de ejemplo ordenado",
  arrayDeEjemplo);

  //reverse(): Invierte el orden de los elemtos del arreglo y devuelve el arreglo invertido
  arrayDeEjemplo.reverse();
console.log("Este es nuestro arreglo invertido", arrayDeEjemplo);

//slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
var saludo2 = saludo1.slice(3, 7);
console.log("Imprimimos la rebanada del arreglo original", saludo2);

var saludo3 = saludo1.slice(9);
console.log("Imprimimos la rebanada del arreglo original", saludo3);

var saludo4 = saludo1.slice(-9);
console.log("Imprimimos la rebanada del arreglo original", saludo4);

//splice(): Modificar el arreglo en 3 formas distinitas

//Eliminar elementos del arreglo
//Agregar elementos nuevos al arreglo 
// Reemplazar elementos que ya existen en el arreglo

/*Sintaxis basica

splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevoelemento2, etc.)

    - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
    - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
    - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

*/

let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

//Eliminar y agregar datos usando splice
mesesDelAnio.splice(1, 2, "Abril", "Mayo");
console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);


//Agregar elemenos sin borrar nada arreglo
let diasSemana = ["Lunes", "Martes", "Miercoles"];
console.log("Los dias de la semana son: ", diasSemana);

diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

console.log("Los nuevos dias de la semana son: ", diasSemana);

var ensalada = ["jitomate", "zanahoria", "lechuga", "chicharos", "cebolla"];

//length (): Nos permite saber el numero de lementos o longitud del arreglo
console.log("Esta es una feliensalada:", ensalada.join("Feli"));

//join(): Nos permite unir los elementos del arreglo con una cadena de texto
console.log("Esta es una feliensalada: ", ensalada.join( "-"));

//concat(): Nos permite unir dos o mas arrays en uno solo. Devuelve un nuevo arreglo con los elementos de los otros arreglos.

let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

let mezcla = ensalada.concat(dulces);
console.log("Esta es mi mezcla: ", mezcla);


//indexOf: Nos permite saber la posicion de un elemento dentro del arreglo

console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

//lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo
console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

//toString: (arreglo a cadena de texto): Nos permite convertir el array en una cadena de texto
console.log(mezcla.toString());


//valueOf :(buscar que valor tiene tal indice) traernos el valor del arreglo 
console.log("Que es esto? ", dulces.valueOf());
//valueOf(): Nos permite devolver el valor a nuestro arreglo
console.log(mezcla.valueOf());


//includes :()Nos permite saber si un elemento eiste o no dentro de un arreglo

console.log ("Así podemos saber si un elemento esta dentro del arreglo", mezcla.includes ("gansitos")); //true

//includes(): Nos permite saber si un elemento existe o no dentro de un arreglo
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("gansitos")); //true
console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

/*
Metodos repetidores 

*/ 

//filter(): Recorre el arreglo y devuelve uno nuevo con los elementos que cumplan la condicion. (Es un bucle)
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Numero del 1 al 10", numeros);



//var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Numeros del 1 al 10", numeros);

// //Filtraremos los datos del arreglo
// var numeros1al5 = numeros.filter(numero => numero <5);
// console.log("Estos son los numeros que cumplen la condicion al ser menores que 5", numeros1al5);

// var numeros6al9 = numeros.filter(numero => numero>=6 && numero<10);
// console.log("Estos son los numeros que cumplen la condicion al ser mayores que 5 y menores que 10", numeros6al9);

// //map(): Recorrer el arreglo, modificar los elementos presnetes en el y retornar esos valores modificados en uno nuevo con la misma longitud que el arreglo original

// var map = numeros.map(numeros => numeros *3);
// console.log("Estos son los numeros multiplicados por 3", map);

// //Ejercicio Improvisado tablas del 1 al 10

// var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var tabla2 = arregloBase.map(arregloBase => arregloBase *2);
// console.log("Esta es la tabla del 2", tabla2);

// //Esta es una tabla que toma una variable global (funciona, pero no es lo que debemos hacer)
// var tabla3 = arregloBase.map(numeros => numeros *3);
// console.log("Esta es la tabla del 3", tabla3);

// /*

// forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

//     - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
//     - Indice: La posicion que tiene el elemento dentro del arreglo
//     - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

// ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

// */

// //Ejemplo para remover el primer numero impar de un arreglo
// /*

/*

forEach(): Este metodo nos permite llamar a una funcion "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:

    - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
    - Indice: La posicion que tiene el elemento dentro del arreglo
    - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

*/

//Ejemplo para remover el primer numero impar de un arreglo

let listaNumeros = [4,3, 6, 8, 10, 12,3];
let impar = 3;

listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
    if (numero === impar){
        listaNumeros.shift();
    }
});

console.log("Estos son los elementos del array que no son impares", listaNumeros);

/////////////////////////////////////////////////////////

/* Bucles o loops

En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false.

Normalmente tenemos 3 ciclos
  - While (Mientras)
  - Do while (Hacer mientras)
  - For(Para)

  Tenemos otras sentencias mas especificas :
    -For in : sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obenemos LA POSICION 

    -For of: sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR.

*/ 

/*
Setencia WHILE (mientras)
Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

la estructura de WHOLE es:

palabraReservada while (condicion que tiene que ser true) {
    //codigo a ejecutar
}


*/ 

//Programa para sumar numeros ALERTA, ESTE PROGRAMA EXPLOTA LA COMPUTADORA

// let numeroParaSumar = 0;
// while (numeroParaSumar <10){
//     console.log("El numero es menor a 10");
//}

//Contador sencillo
let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial < 7) {
  //mientras el valor inicial sea <5
  valorInicial++; //Ejecutamos este bloque de codigo (1 en 1)
  console.log("Este es el contador sencillo", valorInicial); //Imprimimos los resultados
}
let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

/*

Ingresamos un 7
Inicial vale 1
1 es menor o igual a ? si
entonces dividimos 1 entre 2. El residuo es diferente de 0? si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero incial que es 1
sumamos uno al inicial
inicial ahora vale 2

Ingresado limte 7
    Incial ahora vale 2
    2 es menor o igual a 7? si
    entonces dividimos 2 entre 2. El residuo es diferente de 0? no
    No imprimimos el valor del inicial
    Sumar uno al incial
    inicial vale 3

Ingresado es 7
    Inicial vale 3
    3 es menor o igual que 7? si
    entonces procedemos a dividir. El residuo de 3 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 3.
    Termina el bucle, imprimimos el numero inicial que es 3.
    Inicial ahora vale 4

 Ingresado es 7
    Inicial vale 4
    4 es menor o igual que 7? si
    entonces procedemos a dividir. El residuo de 4 entre 2 es diferente de 0? no
    Entonces no imprimimos el numero inicial que es 4.
    Termina el bucle, no imprimimos el numero inicial que es 4.
    Inicial ahora vale 5

Ingresado es 7
    Inicial vale 5
    5 es menor o igual que 7? si
    entonces procedemos a dividir. El residuo de 5 entre 2 es diferente de 0? no
    Entonces no imprimimos el numero inicial que es 5.
    Termina el bucle, no imprimimos el numero inicial que es 5.
    Inicial ahora vale 6

  Ingresado es 7
    Inicial vale 6
    6 es menor o igual que7 ? si, es igual.
    entonces procedemos a dividir. El residuo de 6 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 6.
    Termina el bucle, imprimimos el numero inicial que es 6.
    Inicial ahora vale 7

  Ingresado es 7
    Inicial vale 7
    7 es menor o igual que7 ? si, es igual.
    entonces procedemos a dividir. El residuo de 7 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 7.
    Termina el bucle, imprimimos el numero inicial que es 7.
    Inicial ahora vale 8

  Ingresado es 7
    Inicial vale 8
    8 es menor o igual que 7? no
    Termina el bucle, no imprimimos el numero inicial que es 8.
    Termina el programa.

*/

/*

Do While (HACER MIENTRAS O HACER HASTA)

El bucle do while nos sirve para ejecutar una sentencia especififcada hasta que la condicion de aprobacion se evalua como falsa. La condicion se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

Estructura basica de un do while 
palabraReservada do{
    //Codigo a ejecutar
}
while(condicion);
*/

let numerito = 0; //Declaramos la variable en 0

do{ // Esto se hara...
  console.log ("El numero es:" + numerito); //Imprimimos 
  numerito ++;  // aumentamos de 1 en 1

}
while (numerito <= 10); // hasta que el numero sea menor o igual a 10  (Como la cancion jugaremos en el bosque)


// While vs Do while

console.log("While");

let numerowhile = 0; //Iniciamos en 0
while (numerowhile <5){ //mientras variable se menor a 5
  numerowhile ++; // La incremento en 1
  console.log(numerowhile);// Lo imprimo

}

console.log("Do while");
let numeroDowhile = 0; //Iniciamos en 0
do{ // Hacemos esto...
  console.log(numeroDowhile); // Imprimimos
  numeroDowhile ++; // aumentamos de 1 en 1
}
while(numeroDowhile <5); // ... mientras numero sea menor a 5

/*
Sentencia FOR (para)
Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le pdemos 
*/ 
// For
/*Este ciclo sirve para iterar sobre una seccion de una variable. Es diferente al while por que le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:


- El valor inicial de la variable que vamos a iterar (i = 0)
- La condicion que tiene que cumplirse para que el bucle se siga ejecutando (i <5)
- La operacion que se realiza una vez que termina el bucle (i++)

Estructura basica del for:

for (valor inicial, condicion, operacion){

}
*/

//Ejemplo: 

console.log("For");
for (let i = 0; i < 10; i++){
console.log(i);
}

//let i=0 es mi valor inicial
// i < 5 establece la condicion para que el bucle se siga ejecutando
// i++ incrementa el valor en 1


let animalitosDelBosque =["ardillas", "conejos", "venados", "osos", "mariposas"];

//in: posiciones EN el arreglo

for (posiciones in animalitosDelBosque){
    console.log(posiciones)
}
//of: valores DEL arreglo
for (valores of animalitosDelBosque){
    console.log(valores)
}

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )

/* TAREA ZABDIEL 
      EXCLUSION LOGICA ^
      (Xor). Establece una exclusión lógica de dos expresiones, es decir, que el resultado se dará evaluando una expresión u otra, y dará True si solamente una de ellas es True, lo que implica la exclusión de la otra.
       Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros. 
*/  