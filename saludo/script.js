//Colocar esta linea al inicio nos ayuda a saber
//que nuestro script esta conectado correctamente
console.log("Se nota que todavia me extrañas");


setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  let frase = document.getElementsByTagName("h2")[1].innerHTML;

  if (document.getElementsByTagName("h2")[1].innerHTML == "Ganando como siempre!") {
    //frase = "Impongo moda para las niñas!";
    document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    document.getElementsByTagName("h2")[1].innerHTML = "Ganando como siempre!";
  }
  console.log("frase :" + frase);
}


/*
setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
    let frase = document.getElementsByTagName("h2")[1].innerHTML;

    if (frase.innerHTML == "Ganando como siempre!") {
        frase.innerHTML = "Impongo moda para las niñas!";

    } else {
    frase.innerHTML = "Ganando como siempre!";
    }
  console.log("frase :" + frase);
}
*/