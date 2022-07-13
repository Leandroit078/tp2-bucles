let cadena = prompt("Introduce un Texto:");
let numchar = cadena.length;
let i;
let car;
let salida = "";
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    //recupera el caracter i del string.
    salida = car + salida;
}
document.write(salida);