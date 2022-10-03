async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Hola, ${nombre}... Cómo estás?`);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Bla bla bla y más blabla..`);
      resolve(nombre);
      //reject('La funcion hablar() retorno un problema.');
    }, 1000);
  });  
}

async function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(`Adios ${nombre}, que te vaya bien`);
      resolve();
    }, 1000);
  });  
}

async function main() {
  let nombre = await hola('Miriam');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}

console.log('Empieza el proceso');
main();
console.log('Termina el proceso');
