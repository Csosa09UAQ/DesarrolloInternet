function cambiarColorCuadrosPares() {
    var cuadros = document.getElementsByClassName("cuadro");
    
    for (var i = 0; i < cuadros.length; i++) {
      if (i % 2 != 0) {
        cuadros[i].style.backgroundColor = generarColorAleatorio();
      }
    }
  }

  function generarColorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";
  
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  

