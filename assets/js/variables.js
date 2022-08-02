// Mejores prácticas

// camelCase
//Utilizar mayusculas en la mitad de nuestras variables
//variablesTriangulo, miNombre, miEdad, miDireccion 

//Palabras reservadas
//No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...

//var while;
//var null ;
//var if;
//var true;
//var false;
//var var;
//var const;
//var let;

//Seguir un estandar personal

//Normalizar datos que se vana a ingresar
var tel = '+52 332 383 7579';

//Pueden contener nuemeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Dirección;


//Declaracion de variables
//Type Numero
var edad = 27;
var peso = 60;
var astigmatismo = 2;

//Type Boolean
var ciega = true;
var hambre = true;
var bateria = false; 

//Type String
var nombre = "Mariana Valladolid" ;
var ciudad = "Guadalajara";
var nacionalidad = "Mexicana";


//Type null
var ganasDeBibir = null ;
var nineros = null; 

//Variables declaradas con un mismo valor
var x, y, z = 4

//Variables undefined
var xx, yy, zz;

//Defined: el amor que le damos a nuetro crush
//Undefined: El amor que nos tiene nuestro crush
//Null: El amor que nos decia tener nuestro ex

// Var tres= 4, 
//Var dos = tres
//Var uno = tres
var uno = dos = tres = 4;

//Tarea escribir en una sola liena variables undefined en nuestro carrito de compras

var huevos_arroz_para_sushi_puredetomate_pinol_servilletas_pasta_de_dientes 

//TypeOf();
//Nos indica el tipo de dato al que pertenece nuestra variable

var a = 2;
typeof (a);
//number

var b = "2";
typeof (b);
// string

var c = 3;
typeof (c);
// boolean

var d = null;
typeof (d);
//object <object de JavaScript

// isNaN() es una función que nos permite verificar si un dato
// es o no es un número

//NaN es tal cual tipo de dato JavaScript
isNaN(NaN);
//true
var e = NaN;
isNaN(e);
//true
typeof (e);
//number


//Nueva forma de declarar variables
var a = 1;

//Nos permite modificar su valor actual sin restricciones 
let a = 1;


//Constatnte
//Es una variable con un dato que no va a cambiar
const a = 3;
//Variables constantes deben mantenerse con un solo valor ejem pi 
//No es posible cambiarles el valor posterior a su declaracion 



//10 variables booleanos ejemplos
var enRelacion = true;
var hambre =true;
var sueño = true;
var pereza = false;
var vidaFit = false;
var tomarCafe = true;
var escucharMusica = true;
var tienerFrio= false;
var tenerCalor = true;
var tenerPets = true;
var tenerImaginacion = false;

//10 variables string ejemplos
var nombre = "Mariana";
var colorFavorito = "Lila"
var comidaFavorita = "Caldito de pollo"
var ciudadNatal = "Guadalajara"
var bebidaFavorita = "jugo de mango"
var cumpleaños = "28 de abril de 1995"
var miDireccion = "Fodo de Bikini #33, col Centro"
var hobbieFavorito = "ver netflix y cocinar"
var peliculaFavorita = "El padre de la novia"
var serieFavorita = "Greys Anatomy"


//10 variables numericas ejemplos
var edad = 23;
var estatura = 158;
var peso = 62;
var mascotas = 4;
var numCel = 3323837579;
var toefl = 13;
var elChavo = 8;
var pi = 3.1416;
var numEspejo = 2112; 
var calificaciónFinal = 100;




//Arrays 
// Conjunto de datos ordenados por posiciones, asociados a una sola variable.
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];


const carros = ["BMW", "Volvo", "Mercedes", "Ford"];


const combinacion = [1, "Hola", null, "5"];
