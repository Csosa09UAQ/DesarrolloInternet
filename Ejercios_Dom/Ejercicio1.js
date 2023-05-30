function cambiarColor() {
    var textos = document.getElementsByClassName("text");
    var colores = ["red", "green", "blue"];
    
    for (var i = 0; i < textos.length; i++) {
      var color = colores[i % colores.length];
      textos[i].style.color = color;
      textos[i].innerText = color;
    }
  }
  