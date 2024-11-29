//Datos de entrada
const minutos = prompt("Ingrese valor en minutos: ");
const valorMinutos = 60;
const valorSegundos = 3600;

//Datos a calcular
function minutosHoras(minutos){
    alert(minutos / valorMinutos + " hora(s)");
}

function minutosSegundos(minutos){
   alert((minutos * valorSegundos) / valorMinutos + " segundos");
}

//Llamada funciones
minutosHoras(minutos);
minutosSegundos(minutos);