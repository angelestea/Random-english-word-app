// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let API = 'https://rickandmortyapi.com/api/character/';

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();//------------------------------------elemento creado por microsft
  // abrir una conexion con el metodo, la ruta y true que es la activación del asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = function (event) {
    // el state 4 es el último de la petición
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));//------------transforme xhttp.responseText, el cual es texto, a JSON
      } else {
        // si no es 200
        const error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}


//------------------------------------------------------Porpuse----->
//Hacer una peetición a la api
//Obtener cuantos elementos tiene de personakes
//Acceder al primer personaje
//Obtener la ubicación en la que se encuentra, para después saber en que dimensión se encuentra


// primero buscamos la lista de personajes
//como segundo argumento de la función fetchData, se usa el callback, con un error1 y data1. ¿porqué data1 porque voy a usar la función varias bases de forma anidada para hacer las 3 peticiones necesarias
fetchData(API, function (error1, data1) {
  // si error existe, matamos retornando un error
  if(error1) return console.error(error1);
  // luego buscamos en la api el id de Rick
  fetchData(API + data1.results[0].id, function (error2, data2) {
    // si error, matamos retornando un error
    if(error2) return console.error(error2);
    // por último la consulta a la api que contiene su dimension
    
    //la url acumulada en data2.origin.url se va a retornar concatenada en data3
    fetchData(data2.origin.url, (error3, data3) => {
      // si error, matamos retornando un error
      if(error3) return console.error(error3);
      
      // mostramos los resultados
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
      
      // rutas de las peticiones en orden
      console.log(API);
      console.log(API + data1.results[0].id); 
      console.log(data2.origin.url); 
    
    });
  });
});