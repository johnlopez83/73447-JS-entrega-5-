//Datos de entrada
const primerNumero = +prompt("Valor [a]: ");
const segundoNumero = +prompt("Valor [b]: ");

//Calculo

const datosCapturados = {
    valorA: segundoNumero,
    valorB: primerNumero,
}
 //Salida
  document.write(`El usuario ingresó [a]: ${primerNumero}, y [b]: ${segundoNumero}; Nuevos valores [a]:  ${datosCapturados.valorA}, [b]: ${datosCapturados.valorB}`);


