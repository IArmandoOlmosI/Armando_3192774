let num1 = parseInt(prompt("dame un numero: "));
let num2 = parseInt(prompt("dame otro numero: "));

function sumar(num1, num2) {
    return num1 + num2;
}

let resultado = sumar(num1,num2);
console.log("la suma de los numeros es: " + resultado);