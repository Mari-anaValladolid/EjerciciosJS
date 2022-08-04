// let nineros = false;
// let hambre = true; 

// alert(nineros == hambre);  // false 

// alert(nineros || hambre); // true

// AND
// Todas las condiciones deben ser true
// true && true  => true
// true  && false => false
// false && false => false


// OR
// Solo una condicion debe ser true
// true || true = true
// true || false = true
// false || false = false

// NOT
// Es la negación a la condición
// true => false, false => true

var hora = 8;

if (hora == 8) {
	alert("Buen dia");
}

var hora = 3;

if (hora != 8) {
	alert("Buen dia");
}

let hora = 3;

if (hora != 8) {
	console.log("Buen dia");
}

/////////

var hungry = true;

if (hungry == true){
	alert("Tengo mal del porky");
  } else {
  
  alert ("Two mimr");
  }

  //false
  var hungry = false;

if (hungry == true){
	alert("Tengo mal del porky");
  } else {
  
  alert ("Two mimr");
  }
 ///////////
 var hour = 20;

if (hour < 18) {
 alert("Good day");
} else {
  alert("Tardes, ya");
}
///////////
var hour = 5;
//Cuando la condicion e OR
if (hour <= 18) {
 alert("Todavia hay sol");
} else {
  alert("Tardes, ya");
}
//Cuando la condicion no se cumple
var hour = 19;

if (hour <= 18) {
 alert("Todavia hay sol");
} else {
  alert("Tardes, ya");
}




////////////
var edad = 21;

if (edad >= 18) {
	alert("Crear cuenta");
} else {
	alert("bai bai");
}
//////////////////////////
//Condicion un un annd
var hora = 12;

if (hora <= 7 && hora > 0) {
	alert("Buenas madrugadas");
} else {
	alert("Que tenga un buen dia");
}

///////////////////////////////////
//Reburujosoooo!!!!!
var hora = 12;

if (hora > 0) {

	if (hora <= 7) {
    	alert("Buenas madrugadas");
    } else {
    	alert("Que tenga un buen dia");
    }
    
} else {

	alert("Su hora no existe");
    
}
var hora = 12;

/////////////
//Verificar 24 >= hora > 0
if (hora > 0 && hora <= 24) {
	//Codigo

	if (hora < 7) {
    alert ("Buenas madrugadas");
    } else {
    alert ("Que tenga un buen dia");
    }
    
} else {

	alert("Su hora no existe");
    
}
//////////////////////////////
//  <= Funciona como OR, las condiciones  
var nineros = prompt ("Ingresa tu nineros");

if(nineros <= 10) {
	alert ("Concha de vainilla y 4 picafresas");
    } else if (nineros <= 50) {
    alert ("Tacos al vaporwave y una agua de Horchata.");
    } else if (nineros <= 129) {
    alert ("Pizza de liru sisa sn piña combo fiesta");
    } else if (nineros <= 500) {
    alert ("Bonels + aros de cebolla + papas gajo + tarro");
    } else {
    alert ("Compra 3 casas, renta 2 y vive en una");
  }
    
  ///////////////////////////////
  //Ejercicio 01
  var  num = prompt ("Dijite un numero");
    if ( num % 2 == 0  ) { 
        alert ("Su numero es par"); 
    } else {
        alert("Su numero es impar");
    }
    
  //Ejercicio 02 Mariana Valladolid 

  var edad = prompt ("Año de nacimiento");
  if (edad % "Año de nacimiento" <= 2004 ) {
    alert ("Ya alcanzas la repisa de arriba");
  } else {
    alert ("Te falta danonino");
  }

  /// Mariana Ramirez
  let nacimiento = prompt("Ingresa tu año de nacimiento");

if (nacimiento <= 2004) {
    alert("Eres mayor de edad");
} else {
    alert("Estás muy peque");
}

//// Ricardo
var edad = prompt("Ingresa tu edad");

if (edad <=18) {
    alert("Solo mayores de edad");
} else if (edad => 18) {
    alert("Limite de edad 100 años");
} else {
    alert("Ingresa una edad valida");
}

//////// Maryana Hndz
var age = prompt("Año de nacimiento");
let act = 2022;

if (act - age >= 18) {
    alert ("Bienvenido");
} else {
    alert ("Bye bye");
}

//////////////////////
//Switch

// Obtener la fecha actual
var fecha = new Date ();

alert(fecha);



 /////
 // var dia = new Date().getDay();

var dia = -1;
function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
    default:
    	return "Su fecha no es válida";
	}
}

alert(evalDate(dia));
/////////////////////
//Si queremos hacer comparaciones 
/* Se supone que debe ir una expresión "esperada", en este caso, nosotros esperamos que cuando se evalue cada una de las expresiones, alguna de ellas tome un "verdadero", hasta que aparezca nos saldrá el mensaje correspondiente
*/ 
var nineros = prompt("Ingrese su deposito");

function miCarrito(dinero) {
    switch(true) {
        case (dinero <= 10):
            return "Churrumais";
            break;
        case (dinero <= 50):
            return "McTrio";
            break;
        case (dinero <= 100):
            return "Chilaquiles verdes c/ poio y 1/2L de naranja";
            break;
        case (dinero <= 500):
            return "1/2kg de chicharrones y 1 boleto al cine";
            break;
        default:
            return "No hay nineros";
    }
}

alert(miCarrito(nineros));


/* Como evalúa, cuando encuentra un "false", se pasa a la siguiente y así hasta que encuentre un "true". Por eso la importancia de tener un correcto uso de <= por que si no lo tenemos bien, tronará el programa al no saber que esperar
*/ 