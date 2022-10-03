function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Hola, ${nombre}... Cómo estás?`);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Bla bla bla y más blabla..`);
      resolve(nombre);
      //reject('La funcion hablar() retorno un problema.');
    }, 1000);
  });  
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Adios ${nombre}, que te vaya bien`);
      resolve();
    }, 1000);
  });  
}

//----------------------------------------------------------------

console.log('Iniciando el proceso...');

hola('Diego')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre)=> {
    console.log(`Terminado el proceso...`);
  })
  .catch(error => {
    console.log('Ha habido un error:');
    console.error(error);
  })