//Datos de entrada
const primerNumero = +prompt("Digite el primer número: ");
const segundoNumero = +prompt("Digite segundo número: ");
const operador = prompt("Digite operador: ");

//Calculos

function calcularOperacion(operador){

    if(operador === '+')
        alert(primerNumero + segundoNumero);

    if(operador === '-')
        alert(primerNumero - segundoNumero); 

    if(operador === '*')
        alert(primerNumero * segundoNumero);

    if(operador === '/')
        alert(primerNumero / segundoNumero);

}
calcularOperacion(operador);





