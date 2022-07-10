
    let resultado = "";

    do{
        let cadena = prompt("Introduce una cadena");
    if(resultado ===""){
        resultado = resultado + cadena;
}
    else{
        resultado = cadenm + "-" + cadena;
}
}while(confirm("Desea seguir?"));
    document.write(resultado);
