/*
Ejercicio Carreras  07-08-22 
object : Comprensión de conceptos de arreglos y bucles y practicas de conocimeintos

En una Carrera se tienen los siguiente corredores con su respectiva posición:

-Primer lugar: Roberto
-Segundo lugar: Andrea
-Tercer lugar: Jorge
-Cuarto lugar: Ramiro
-Quinto lugar: Sofía
Después de 3 vueltas ....
*/ 

console.log("Inicia la Carrera");
let posiciones = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(posiciones);

console.log("Después de 3 vueltas estos son lo resultados!!!");
console.log("Jorge adelanto a Roberto");
posiciones.splice(0,3, "Jorge","Roberto", "Andrea");
console.log(posiciones);


console.log("Ramiro adelanta a Jorge y Roberto se lesiona saliendo de la carrera");
for(var i=0; i<posiciones.length; i++) {
    if(posiciones[i]== "Ramiro" || posiciones[i]== "Roberto"){
        posiciones.splice(i,1);
    }
}
posiciones.unshift("Ramiro");
posiciones.push("Relevo pendiente");
console.log(posiciones);

console.log("Además Andrea baja una posición");
posiciones.splice(2,3);
posiciones.push("Sofía", "Andrea", "Relevo");
console.log(posiciones);

console.log("Ramiro mantiene su lugar y el quinto lugar es reemplazado por José");
posiciones.pop();
posiciones.push("José");
console.log(posiciones);

console.log("Así quedaron los resultados después de 3 vueltas");





// var eliminar = "Ramiro";
// posiciones.forEach(function(corredor) {
//     if (corredor == eliminar) {
//         posiciones.shift();
//     }
// });
// console.log (posiciones);