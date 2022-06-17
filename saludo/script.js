//Colocar esta linea al inicio nos ayuda a saber
//que nuestro script esta conectado correctamente
console.log("Se nota que todavia me extrañas");

/*
setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
    //console.log(`Me parece una falta de respeto`)
    let frase = document.getElementsByTagName("h2")[1].innerHTML;
    //console.log(`Frase: ${frase}`);

    if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre!") {
        document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
    }
    else {
        document.getElementsByTagName("h2")[1].innerHTML = "Ganado como siempre!"
    }
    console.log(`Frase ${frase}`)
}
*/

setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  let frase = document.getElementsByTagName("h2")[1].innerHTML;

  if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}
