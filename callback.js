

function saludo(nombre, miCallback) {
  setTimeout(function() {
    console.log(`Hola ${nombre}...`);
    miCallback();
  }, 1500);
}

function despedida(nombre, miOtraCallback) {
  setTimeout(function() {
    console.log(`Adios ${nombre}`)
    miOtraCallback();
  }, 1500);
}

console.log("Empezando proceso...");

saludo('Diego', function() {
  setTimeout(function() {
    despedida('Diego!', function() {
      
    });    
  }, 1500);
  console.log(`Terminado el proceso...`);
});
