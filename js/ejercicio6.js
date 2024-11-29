//Datos de entrada
const valorUsuario = prompt("Ingrese valor producto en dólares: ");

//Constantes
const valorDolar = 1130;
const IVA = 0.21;

//Cálculo 
const valorPesos = valorUsuario * valorDolar;
const total = valorPesos * (1 + IVA);

//Imprimir resultados

alert(`Valor producto ${valorUsuario} USD; Valor en pesos $  ${valorPesos}; Valor total $ ${total}  `);

