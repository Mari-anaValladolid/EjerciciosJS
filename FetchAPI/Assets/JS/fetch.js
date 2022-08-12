/*

Dentro de los navegadores tenemos 2 tipos de APIs:

- APIs nativas: Como el DOM que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript.

- APIs externas: Como las APIs de Twitter que nos permite obtener los ultimos tweets del usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta.


Ejemplos de APIs WEB

    - DOM
    - XMLHttpRequest: Peticiones al servidor
    - fetch: API nos permite hacer peticiones al servidor
    - sessionStorage
    - localStorage


    FETCH API

Asincronismo (Cuando pido una torta al señor de las tortas Con anticipación)


JavaScript usa un modelo asincrono y no bloqueante, con un loop de evenos implementado en un solo hilo.
    -Single Thread 
    -Operaciones de entrada y salida
    -Bloqueo
    -No bloqueo
Ejemplo de aeropuerto

Pista de aterrizaje = hilo o thread
Input = cuando un avion va aterrizar
Output = cuando el avion tiene que despegar
Manejador de eventos = la torre de control

Gracias al asincronismo, vamos a tener una pista de aterrizaje liberada, porque no vamos a poder aterrizar dos aviones al mismo tiempo, con lo que mantenemos un flujo constante de trabajo.


Sincronismo (Cuendo pido una torta al señor de las Tortas para Ahorita ya)

// */

// //Ejemplo de JavaScript Sincrono
// console.log ("Inicio Sincrono"); //1
// function dosSincrono (){
//     //funcion cuatrosincrono
//     console.log("Dos");
// }
// function unoSincrono(){ 
//     console.log("Uno");//2
//     dosSincrono(); //3
//     console.log("Tres"); //4
// }
// */unoSincrono();
// */console.log("Fin de Sincrono"); //5


// //Ejemplo de JS asincrono
// console.log ("Inicio de Asincrono");//1
// function dos(){ //Se pone en espera 2 segundos
//     setTimeout(function(){
//         console.log("Dos");//5
//     }, 2000);
// }
// function uno(){
//     setTimeout(function(){
//         console.log("Uno");
//     }, 0); //4
//     dos();
//     console.log("Tres"); //2
// }
// uno();
// console.log("Fin de Asincrono");//3

// //Cual es la salida de este codigo?: 3, 1 y 2

//*
// Ejemplos de tareas asincronas

// - Fetch a una URL para obtener un archivo JSON
// - Tareas programadas con setTimeout
// - Spotify, al momento de reproducir un .mp3



// Mecanismos asincronos en JAVASCRIPT

// Para controlar la asincronia en JS, podemos usar alguno de estos mecanismos:

//     - Callbacks
//     - Promises
//     - Async/Await
// Promesas (promises)

// Ejemplos de tareas asincronas

// - Fetch a una URL para 
// Promesas (promises)

// - Cuando mi mama me prometio comprarme un helado de chocolate
// - Que Felipe pase los codigos al final de la sesion
// - Promesas de nuestro(a) ex
// - Ver el tema de las funciones flecha
// - La casa de Guillermo
// - Las promesas de Bri

// Como su nombre lo indica, es algo que de principio no sabemos si se cumplira, por que pueden pasar muchas cosas. La gran ventaja de usar promesas, es poder usar una sola funcion que haga todo el trabajo, que el codigo sea mas estilizado y poder manejar de mejor forma los dos escenarios posibles: si la promesa se cumple, o no.

// Una promesa es el resultado de la operacion asincrona, este resultado es en forma de objeto el cual puede estar disponible AHORA o en el FUTURO. Aunque esta operacion puede finalizar exitosamente o fallar, la promesa nos permite saber cuando una operacion finaliza, independientemente del resultado.

// Las promesas tienen 3 estados posibles:
//     - Pending: Estado inicial, cuando se crea la promesa. 
//     - Fullfilled: Cuando la operacion asincrona se completa con exito (resolve)
//     - Rejected: Cuando la operacion asincrona falla (reject)
// Promesas (promises)
// *Ejemplo archivos de Felipe

// - Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
// - Fullfilled: Cuando Felipe los envia
// - Rejected: Cuando no los envia o cuando avisa que no los puede enviar.

// Nuestras promesas tiene algunos metodos:

//     - then(function resolve): Ejecuta la funcion resolve cuando la promesa se cumple
//     - catch(function resolve): Ejecuta la funcion reject cuando la promesa no se cumple.
    
//     - then(function resolve, function reject): Ejecutar las dos funciones resolve y reject
//     - finally(function end): Ejecutar la funcion end si se cumple o no la promesa.
// *Ejemplo archivos de Felipe

// - Pending: Cuando Felipe promete enviar los archivos (o cuando nos deja en visto)
// - Fullfilled: Cuando Felipe los envia
// - Rejected: Cuando no los envia o cuando avisa que no los puede enviar.




 //Ejemplo de promesa para saber el nombre 
// let nombre = "Mariana";

// const promesaNombre = new Promise((resolve, reject) => {
//     if ( nombre !== "Mariana") reject("Error!!, El nombre no es Mariana");
//     resolve(nombre);
// });
// console.log("promesaNombre");
///Promesa de AMOR donde nos dejan en visto un ratito, y luego nos aceptan la invitacion
// var promesaDeAmor = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve ("Si quiero salir contigo, te amo");
//     }, 5000);
// });
// promesaDeAmor.then(function(valor){
//     console.log(valor);
// });
// console.log(promesaDeAmor);

 //Ejemplo de promesa para ir por unas tortas
// let decision = "No";

// const promesaTortas = new Promise((resolve, reject) => {
//     if (decision !== "Si") reject("No, no me gustas, no quiero ir contigo por tortas");
//     resolve(decision);
// }
// );
// console.log(promesaTortas);

// /*Fetch API

// Es el nombre de una nueva API (nativa) para JS con la cual podemos realizar peticions HTTP asincronas utilizando promesas, y de forma que el codigo sea un poco mas sencillo y legible. La forma de utilizar una peticion fetch es sencilla, solo debemos llamar a fetch y pasarle por parametro una URL de la peticion a realizar



 //const solicitud = fetch('la url que vamos a consultar')
 //Guardo en una constante llamada solicitud, la consulta que hago a una pagina externa

// fetch('https://pokeapi.co/api/v2/pokemon/ditto') //realizamos, La peticion a la URL de la API Pokemon
//     .then(datos => {// Cuando te conectes el servidos, ejecutamos la siguiente funcion
//     return datos.json(); //Traeme todo los pokemon, y como se los traes a texto, yo los convierto a formato JSON
// })
// .then(info =>{ // cuando la promesa se resuelve, entonces ejecutamos esta funcion. Usamos el metodo then para obtener la respuesta a la promesa y guardarla en una variable llamada info. Gracias a esta variable, puedo almacenar la info de mi Pokemon y sacar de ahi los datos que necesite.

// console.log ("El nombre de nuestro Pokemon es;", info.name, "y su nombre es:" , info.id);
// });

// /*  Cuando hablamos de la API fetch, tambien debemos de hablar de los endpoints, que son las direcciones de las peticiones que se realizan. 


   /*Por ejemplo, en la URL https://pokeapi.co/api/v2/pokemon/pikachu, nosotros nos conectamos a la pokeapi, buscamos dentro de la categoria pokemon, y traemos la informacion de pikachu. En este caso, pikachu es nuestro endpoint
    
     function fetchPokemon(id){ //creamos una funcion que recibe un parametro llamado id
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) //la peticion a la url, donde usamos el parametro id para obtener la informacin del pokemon.
        .then(respuesta => respuesta.json()) //almacenamos la respuesta en un formato .json
       .then(dato => console.log(dato)) //imprimimos la respuesta en consola
  }
   fetchPokemon(420);


/* //Solicitud GET 
fetch("https://fakestoreapi.com/products/10") //realizamos la peticion a una URL
.then((datos) => {
  //*cuando la promesa es resuelta, entonces ejecutamos esta funcion
  return datos.json(); //convertimos la respuesta a un formato JSON
})
.then((info) => {
  //*cuando la promesa es resuelta, entonces ejecutamos esta funcion. Estamos usando el metodo .then para obtener la respuesta de la promesa y guardarla en la variable info. Gracias a esto podre obtener la informacion que queremos.
  console.log(
    "El nombre de nuestro producto es:",
    info.title,
    " y su precio es: ",
    info.price
  ); //imprimimos el nombre del producto. esto es posible por que la respuesta ya esta en formato JSON, y podemos acceder a los datos directamente, especificando el nombre del campo que queremos.
 }); 

 
    //Solicitud POST para enviar informacion
    fetch('https://fakestoreapi.com/products',{
            method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
            body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
            
            //cuerpo de la solicitud    
                {
                    title: 'Chettos Naranjas',
                    price: 3.0,
                    description: 'Deliciosos Chettos Naranjas',
                    image: 'https://i.pravatar.cc',
                    category: 'jewelery'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


        //Solicitud POST para enviar informacion
    fetch('https://fakestoreapi.com/products',{
        method:"POST", //por default es GET, para cambiarlo debemos especificar el metodo
        body:JSON.stringify(//como la informacion que voy a manejar es un objeto, necesito convertirlo a un texto (string)
        
        //cuerpo de la solicitud    
            {
                title: 'Cacahuates',
                price: 3.0,
                description: 'Deliciosos Cacahuates Saladitos',
                image: 'https://i.pravatar.cc',
                category: 'jewelery'
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))


/* APIS DE ALMACENAMIENTO WEB


la API de almacenamiento web define dos mecanismos de almacenamiento que son muy importantes

- almacenamiento local
- almacenamiento de sesiones

Tanto el almacenamiento local como el de sesiones proporcionan una area privada para sus datos, esto quiere decir que otros sitios web no pueden acceder a esta informacion


Algunas caracteristicas que comparten el local y el session storage son:

    - La capacidad (5Mb a diferencia de los 4Kb de las cookies)
    - La informacion es almacenada en pares clave/valor, por lo que se puede usar como si fueran variables.
    - El almacenamiento web solo es accesible en el navegador, no se envia al servidor como lo hacen las cookies.
    

AALMACENAMIENTO LOCAL (LocalStorage)

La informacion almacenada con localStorage se guarda indefinidamente hasta que sea eliminada mediante codigo o bien borrada desde el navegador.

El almacenamiento local es similiar a las cookies, pero se borra con menos frecuencia y puede almacenar mas datos. Por lo tanto, se puede utilizar en situaciones similares, tales como: almacenar articulos que un usuario de comercio electronico agrego a un carrito, almacenar historial de uso, etc.

La informacion que almacenamos en localStorege se elimina hasta que se haga explicitamente, ya sea por nostros o por el usuario. Nunca se limpia automaticamente y se comparte en todas las sesiones que acceder al sitio.


ALMACENAMIENTO DE SESION (SessionStorage)


La informacion que guardamos en sessionStorage solo se guarda durante la sesion del navegador (es decir, se elimina cuando se cierra el navegador). Si tenemos varias ventanas o pestañas abiertas, la informacion se guarda en cada una de ellas, asi que si cerramos una ventana, la informacion se borra de la misma.

Como accedemos al almacenamiento?

window.localStorage
window.session.SessionStorage

*/
//Guardar datos (localStorage.setItem(key,value)

//La sintaxis para guardar datos en un localStorage es: localStorage.setItem(key, value);, donde key es la clave (o el identificador) y value es el valor que queremos guardar.
// {  
// localStorage.setItem("Nombre", "Mariana");
// localStorage.setItem("Apellido", "Valladolid");
// localStorage.setItem("EdadActual", 27);
// localStorage.setItem("Estudia para ser Programadora?", true);
// }
// {  
// localStorage.setItem("Nombre", "Juan");
// localStorage.setItem("Apellido", "Morales");
// localStorage.setItem("EdadActual", 27);
// localStorage.setItem("Estudia para ser Programador?", true);
// }
 /*
//* Recuperar datos (Local.Storage.getItem(key, value)).

//* La sintaxis para obtener un dato de LocalStorage es:
//* Local.Storage.setItem(key); donde key es la clave (o el identificador) que queremos recuperar.

*/ 
// let recuperarNombre = localStorage.getItem("Nombre");
// console.log(recuperarNombre);

// let recuperarEdad = localStorage.getItem ("EdadActual");
// console.log(recuperarEdad);

// let recuperarProgramadora = localStorage.getItem("Programadora");
// console.log(recuperarProgramadora); 

//  infoGuardada.elDatoARecuperar

 //Remover datos de LocalStorage (localStorage.removeItem(key))

// localStorage.removeItem("EdadActual"); //Borrar edad de ambos, por que no cambie el ID 
// localStorage.removeItem("Programadora?");

 //Conocer el lagor de nuestro almacenamiento (LocalStorage.Length )

// let longitudLocalStorage = localStorage.length;
// console.log(longitudLocalStorage); 

 //Limpiar datos  de nuestro almacenamiento (localStorage.clear())
// localStorage.clear();

 //Agregar elementos con sessionStorage
// sessionStorage.setItem("Perrito","Rocky");
// sessionStorage.setItem("Gatito","Owen");
// sessionStorage.setItem("Conejito","Griselo");
// sessionStorage.setItem("Caracol","Gary");

function guardarDatos(){
localStorage.nombre = document.getElementById("nombre").value; //Guardar  el valor de nombre en LocalStorage, nos permite refactorizar y crear una llave de nombre  "nombre".

localStorage.password = document.getElementById("password").value; // Guardar el valor de password en localStorage.

document.getElementById("datos").innerHTML =("Datos guardados correctamente"); //Sobreescribimos el contenido del parrafo de este nuevo mensaje.

//Reviar el funcionamiento correcto de mi codigo
console.log(typeof localStorage.nombre);
console.log(typeof localStorage.password);

}

function recuperarDatos(){

//Si en la llave nombre de mi LocalStorage en la llave password los datos son diferetentes de undefinid( significa que si tengo datos), voy a mostrar este mensaje
    if(localStorage.nombre != undefined && localStorage.password != undefined){// Si mi localStorage mi nombre y el password son diferentes de undefined, imprimeme esta info.
        document.getElementById ("datos").innerHTML = "Nombre: " + localStorage.nombre + "Password: " + localStorage.password;
        //en caso de que no se cumpla la condicion, nuestro mensaje de alerta
      }else{
        document.getElementById ("datos").innerHTML = "No has introducido tu nombre y tu password!!";
      }

}
/* Aplicacion para proyecto integrador
Para aplicar promociones, registro de clientes frecuentes
*/ 
