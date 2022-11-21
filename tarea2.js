/*

Construir un programa que permita ingresar un número,si el número
es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

*/

let numero = 0;
let bono = 0;

numero = prompt("Ingresar un número: ");

if(numero > 500){
    bono = numero * 0.18
}
alert(`18%: ${bono} `);

