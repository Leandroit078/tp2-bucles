let nota = parseInt(prompt('Ingrese su edad'));

console.log(nota);

if (nota === 0 || nota === 1 || nota === 2) {
    document.write('<br>Muy deficiente');
}
else if (nota === 3 || nota === 4) {
    document.write("<br>Insuficiente");
}
else if (nota === 5 || nota === 6) {
    document.write("<br>Suficinte");
}
else if (nota === 7) {
    document.write("<br>Bien");
}
else if (nota === 8 || nota === 9) {
    document.write("<br>Notable");
}
else if (nota === 10) {
    document.write("<br>Sobresaliente");
}
else  {
    document.write("<br>Introduce un número válido");
}
