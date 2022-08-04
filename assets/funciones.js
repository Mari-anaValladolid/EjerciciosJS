// Mejores practicas
// Simplificar function lo mas que se pueda

// 1. Utilizar keyword function
//2. Nombrar nuestra function
//3. Utilizar () y abrir y cerrar la función {}

function myFunction() {
// Aqui va el cuerpo de la función
    //console.log("Hola Mundo");
}

myFunction();


function myName(){
    let name = "Mariana Valladolid";
    console.log(name);
}

//myName ();

function scopeFunction(){
    let local = "Esto se encuentra dentro de la función"
    //console.log(local);
   }  

   //scopeFunction();
   //console.log(local);

   var nombre = "Mariana Valladolid";
   
   function globalScope(){
    console.log(nombre);
   }

   globalScope();

   //Scope de variables
   //LET
   //Scope global
   //Hoisting ; la variable no existe para nuestro interprete de Java Script
   //console. log(a);
   //var a = "Hoisting let";


   //VAR
   //Scope global, local
   //Hoisting: No se puede utilizar o invocar antes de declararla. Aparece como undefined.
   //console. log(x);
  // var x = "hola";



   //CONST
   //Scope global, local
   //Hoisting; No se puede utilizar. No existe para nuestro interprete de JS.
   //console. log();
   var c = "Hoisting conts";



   //Input
   const miNombre = "Mariana";

   function fiuFiu( ) {
    //console.log()
   }
 //Parametro declarado en Variable
   fiuFiu(miNombre);
   //Parametro aleatorio
   fiuFiu("Mariana Valladolid");
   fiuFiu (2);

 //Function con mas de 1 parametro
   function dosParam(x, y) {
    //console.log (x+y);
   }
   //Invocacion de 2 prametros aleatorios
   dosParam("Hola", "Mundo");

   function tresParam(x, y, z) {
    console.log(x + y + z);
   }


   tresParam ("Hola", "Soy", "Mariana")

   /////////////////////////////////////////////////

   //OUTPUT
   function out () {
        let x = "Hola";
        return x;
   }
//Podemos recibir el dato de forma directa
   console.log(out());

   //Podemos guardar el output en una variable
   // Yla podemos utilizar despues
   const recive = out();

   //consolelog.(recive);

   function areaRectangulo(b,a) {
    var resultado =b * a;
    return resultado; 
   }


   console.log(areaRectangulo(6,3));

   function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));


function areaTriangulo(b, a) {
    var resultado = b * a / 2;
    return resultado;
}

console.log( areaTriangulo(8, 4));

prompt("Hola soy ")

//////////////////////

//Objeto
const Conejo = {
  "nombre": "Griselo",
  "edad" : 27,
  "color": "Gris",
  "peso": 500

}

const myFunc = () => {
  console.log(Conejo.peso);
   }




