let total = 0;

do {
    let numero = prompt("Introduce un numero para sumar");

    if (number(numero) == numero) {
        numero = number(numero);
        total = total + numero;
    }
    else if (numero !== undefined) {
        alert(numero + "no es un valor numerico valido");
    }
}
while (numero !== undefined);
document.write(" La suma de los numeros ingresados es: " + total);
