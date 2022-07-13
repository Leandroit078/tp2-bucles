let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;    //Devuelve la longitud del string.
cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
let Vocales;
let contador = 0;
let i;
for (i = 0; i < numchar; i++) {
    Vocales = cadena.charAt(i);    //recupera el caracter i del string.
    if ((Vocales == "A") || (Vocales == "E") || (Vocales == "I") || (Vocales == "O") || (Vocales == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");