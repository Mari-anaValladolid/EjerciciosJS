/*

*Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa
Principios SOLID

Los principios SOLID son consejos y buenas practicas de desarrollo que nos permiten crear mejores proyectos con codigo muy eficiente. 

Algunos objetivos de los principios SOLID:

    - Crear software eficaz, que cumpla su cometido y que sea robusto y estable.
    - Escribir codigo limpio y flexible ante los cambios, que se pueda moficiar facilmente segun la necesidad, que sea reutilizable y mantenible.
    - Permitir la escalabibilidad, que acepte ser amplicado con nuevas funcionalidades de manera agil.


https://profile.es/blog/principios-solid-desarrollo-software-calidad/

    
Principios SOLID

    - Principio de Responsabilidad Unica
    - Principio de Abierto - Cerrado
    - Principio de Liskov Substitution
    - Principio de la segregacion de interfaces
    - Principio de Dependencia Inversa

Elementos de la Programacion Orientada a Objetos

    - Clases: Plantilla que nos sirve para crear objetos. 
    - Objetos: Elementos creados a partir de la plantilla.
    - Propiedades o atributos: Informacion que tiene un elemento.
    - Metodos o funciones: Lo que hacen y como lo hacen. (accines que puede realizar)
    - Constructores: Son quienes construyen al objeto tomando en cuanta a la plantilla
    - Instanciar: Crear o materializar el objeto.
    

Ejemplo de los gatitos:

    - Mama y papa gatitos: Clase
    - Gatitos bebes: Objeto
    - Color de los gatitos: Atributos o caracteristicas
    - Maullar y ronronear: Metodos o funciones
    - Tener un gatito para darle todo nuestro amor: Instanciacion o materializacion


Ejemplo de las casas:
    
    - Plano de la casa: Clase o plantilla
    - Casitas: Objetos
    - Cantidad de niveles que hay en una casa: atributos
    - Abrir estacionamiento: Metodo o funcion
    - Personal de construccion: Constructores
    - Tener la casa lista para vivir: Instanciacion o materializacion


*/

//Ejemplo de los gatitos

const owen = {
    nombre: "owen",
    color: "Naranja",
    peso: "8kg",
    edad:"3 años",
    colorDeOjos:"verdes",
    raza: "fold escoses",
    sexo: "macho",
    vacunas: "true",
    numerodeBigotes: "20",
    tipodepelo: "corto",
    manchas: "true",
    imagen: "Owen.jpg"
};

console.log(owen); //toda la informacion del gatito
console.log(owen.nombre); //Imprime nombre del gatito
console.log(owen.raza); //La raza del nene
console.log(owen.vacunas); //La vacunas del nene 


//Plantilla para crear muchos gattitos

//1.- Defino mi plantilla con las propiedades como variables , para después de agregar valores
class gatito{
    nombre = "";
    color = "";
    edad = 0;
    raza = "";

 

//3.-Crear un constructor
constructor(nombre, color, edad,raza){ //Necesitamos pasar los parametros
    this.nombre = nombre;
    this.color = color;
    this.edad = edad;
    this.raza =raza;
   } // Fin del constructor


//this (este o esto) nos va a indicar el lugar donde estamos (ciudad ene le campo). Necesitamos saber que esta palabra es reservada y nos ayuda a saber el aqui y el ahora. Hace refecencia a la clase en la que estamos, y los objetos que estamos creando.

//2.- Defino mis metodos COMO FUNCIONES, por que con estas funciones podemos realizar acciones

maullar(maullar){ //Metodo para maullar, NO usamos la palabra reservada FUNCTION, al trabajar en POO solo usamos el nombre del metodo
    maullar = console.log("Miauuuuuu");
}
dormir(dormir){ //Metodo para dormir
    dormir = console.log("Zzzzzzzzz");
}
ronronear(ronronear){ //Metodo para ronronear
    ronronear = console.log("Rrrrrrrrr");
}

imprimirInfo(div,bg){ //OPCIONAL, este metodo me permite imprimir la informacion de nuestros gatitos directamente en el front. Usamos una card de Bootstrap que vamos a insertar con el innerHTML directamente en un div vaciio de nuestro documento .html. Veremos que cierta informacion de esta tarjeta, esta reemplazada con la info que ya declaramos anteriormente dentro de la clase "gatitos"
    div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    <div class="card-body">
      <h5 class="card-title">${this.edad}</h5>
      <p class="card-text">${this.raza}.</p>
    </div>
  </div>`; 
}

    
} // Fin de la clase
    //4.- Crear gatitios

    let kitty = new gatito("Kitty", "blanco", 2, "japonesa");
    let garfield = new gatito("garfield", "naranja", 15, "Persa");
    let jully = new gatito("Jully", "Blanco con gris", 2, "Mestiza");
    let hannibal = new gatito("Hannbal", "Blanco", 2, "Mestizo");
    let camila = new gatito ("Camila", "negro", 3, "criollo");


    //Para que me de la informacion de los gatitios
    console.log(kitty); //Imprimo TODA la info de Kitty
    console.log(garfield); //Imprimo TODA la infor de Gardfield
    console.log(jully); //Imprimo la informacion de Jully
    console.log(hannibal); // Imprimio la informacion del Hannibal
    console.log(camila);

    //Para que me imprima la accion que hacen los gatitios
    kitty.maullar(); //Hago que Kitty maulle
    garfield.dormir(); //Hago que Gardfield duerma
    garfield.ronronear(); //Hago que Gardfield ronronee
    jully.maullar(); //Hago maullar a Jully
    hannibal.dormir(); //Hago dormir a Hannibobito
    camila.ronronear(); 



    

kitty.imprimirInfo(contenido, "bg-light"); //Imprimo informacion de Kitty en una card de Bootstrap color blanca
garfield.imprimirInfo(contenido, "bg-danger");
jully.imprimirInfo(contenido, "bg-dark");
hannibal.imprimirInfo(contenido, "bg-success");
camila.imprimirInfo(contenido, "bg-primary");

//OPCIONAL
//Puedo usar el metodo "imprimirInfo" para poder mostrar la informacion de mis gatitos directamente en el front (documento .html). Para esta funcion, es necesario pasarle dos parametros, el primero es la variable "contenido" que declaramos mas arriba, para poder "aterrizar" ahi la informacion. La segunda variable, es el color de Bootstrap que usamos para los botones, aunque siempre podemos cambiar por otro color.

    // imprimirInfo(div,bg){
    //     div.innerHTML += `<div class="card ${bg} mb-3" style="max-width: 18rem;"> 
    //     <div class="card-header">${this.nombre} <span class="badge badge-secondary">${this.color}</span></div>
    //     <div class="card-body">
    //       <h5 class="card-title">${this.edad}</h5>
    //       <p class="card-text">${this.raza}.</p>
          
    //     </div>
    //   </div>`; 
    // }
    
    